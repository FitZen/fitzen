import React from "react";
import Box from "@mui/material/Box";
import { Typography,TextField, Button, FormControl, InputLabel, Select, MenuItem, Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Paper } from "@mui/material";
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";
import {FaPlus} from "react-icons/fa";
import Modal from '@mui/material/Modal';
import {FaRegTimesCircle} from 'react-icons/fa';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const InstructorList = () => {


  const color1 = "#102B4C" //dark blue
  const color2 = "#346E93" //light blue
  const color3 = "#96CDEF" //lighter blue
  const color4 = "#DC1E2A" //red 

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [openTrainer, setOpenTrainer] = React.useState(false);
  const handleTrainerOpen = () => setOpenTrainer(true);
  const handleTrainerClose = () => setOpenTrainer(false);
  const [openPhysiotherapist, setOpenPhysiotherapist] = React.useState(false);
  const handlePhysiotherapistOpen = () => setOpenPhysiotherapist(true);
  const handlePhysiotherapistClose = () => setOpenPhysiotherapist(false);
  const [InstructorData, setInstructorData] = useState([]);

  const [newTrainer, setNewTrainer] = useState({
    first_name: "",
    last_name: "",
    nic: "",
    email: "",
    contact_no: "",
  });
  const [newPhysiotherapist, setNewPhysiotherapist] = useState({
    first_name: "",
    last_name: "",
    nic: "",
    email: "",
    contact_no: "",
  });

  const [submitted, setSubmitted] = useState(false);
 
  const navigate = useNavigate();
  const [item, setItem] = React.useState('');

  const {instructorType} = useParams();
  console.log(instructorType);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Admin"')){
      navigate('/login');
    }

    if(instructorType === "Trainer"){
        viewTrainerList();
    }
    else if(instructorType === "Physiotherapist"){
        viewPhysiotherapistList();
    }
        
    
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setFixedNavbar(true);
      } else {
        setFixedNavbar(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const viewTrainerList = async () => {
    
    try {
     
      const res = await axios.get("http://localhost:8000/api/trainers/viewtrainers");
      console.log(res.data.data);
      setInstructorData(res.data.data);

      // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
    } catch (error) {
      console.error("Retrieving failed:", error);
      // Handle error scenarios here
    }
  };

  const viewPhysiotherapistList = async () => {
    
    try {
      const res = await axios.get("http://localhost:8000/api/physiotherapists/viewphysiotherapists");
      console.log(res.data.data);
      setInstructorData(res.data.data);

      // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
    } catch (error) {
      console.error("Retrieving failed:", error);
      // Handle error scenarios here
    }
  };

   //get form inputs
   const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTrainer((prevTrainer) => ({
      ...prevTrainer,
      [name]: value,
    }));
  };

  const handleShakeInputChange = (event) => {
    const { name, value } = event.target;
    setNewPhysiotherapist((prevPhysiotherapist) => ({
      ...prevPhysiotherapist,
      [name]: value,
    }));
  };

  const handleSubmitTrainer = async () => {

    if (!newTrainer.first_name || !newTrainer.last_name || !newTrainer.nic || !newTrainer.email || !newTrainer.contact_no) {
      // Display error messages or styles for empty fields
      setSubmitted(true);
      return;
    }  

    try {
      const payload = {
        first_name: newTrainer.first_name,
        last_name: newTrainer.last_name,
        nic: newTrainer.nic,
        email: newTrainer.email,
        contact_no: newTrainer.contact_no,
        userID: JSON.parse(localStorage.getItem("userID")),	
      };

      console.log(payload);

      const res = await axios.post(
        "http://localhost:8000/api/trainers/addtrainer",
        payload
      );
  
      if (res.status === 201) {
        handleTrainerClose(); // Close the modal
        viewTrainerList(); // Refresh the announcement list
        setNewTrainer({ first_name:"", last_name:"", nic:"", email:"",contact_no:"" }); // Clear the form
        setSubmitted(false);
      }

      Swal.fire({
        icon: 'success',
        title: 'Receptionist Added Successfully',
        showConfirmButton: false,
        timer: 1500
      })

    } catch (error) {
      console.error("Adding Reception failed:", error);
      // Handle error scenarios here
    }
  };

  const handleSubmitPhysiotherapist = async () => {

    if (!newPhysiotherapist.first_name || !newPhysiotherapist.last_name || !newPhysiotherapist.nic || !newPhysiotherapist.email || !newPhysiotherapist.contact_no) {
      // Display error messages or styles for empty fields
      setSubmitted(true);
      return;
    }  

    try {
      const payload = {
        first_name: newPhysiotherapist.first_name,
        last_name: newPhysiotherapist.last_name,
        nic: newPhysiotherapist.nic,
        email: newPhysiotherapist.email,
        contact_no: newPhysiotherapist.contact_no,
        userID: JSON.parse(localStorage.getItem("userID")),	
      };

      console.log(payload);

      const res = await axios.post(
        "http://localhost:8000/api/physiotherapists/addphysiotherapist",
        payload
      );
  
      if (res.status === 201) {
        handlePhysiotherapistClose(); // Close the modal
        viewPhysiotherapistList(); // Refresh the announcement list
        setNewPhysiotherapist({ first_name:"", last_name:"", nic:"", email:"",contact_no:"" }); // Clear the form
        setSubmitted(false);
      }

      Swal.fire({
        icon: 'success',
        title: 'Virt Added Successfully',
        showConfirmButton: false,
        timer: 1500
      })

    } catch (error) {
      console.error("Adding Reception failed:", error);
      // Handle error scenarios here
    }
  };

  

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "35%",
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    p: 4,
  };


  return (


    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <AdminSidebar sidebarLinkId = "3"/>
      </Box>
      
      <Box component="main" sx={{flex:1 }}>
      <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <AdminNavbar />
        </div>
        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
           
          <Box sx={{display:"flex", marginTop:"5rem", justifyContent:"space-between"}}>
            <Typography variant="h4" style={{ fontWeight: 700, textAlign:"left" }}>{instructorType}s</Typography>
            <Button variant="contained" onClick={instructorType === "Trainer" ? handleTrainerOpen : handlePhysiotherapistOpen} sx={{backgroundColor: color2, marginRight:"7%", marginBottom:"3%",'&:hover': {backgroundColor:color3, transition: "ease 0.5s"}}}><FaPlus />&nbsp; Add New</Button>
          </Box>

          <Box sx={{width:"93%", height:"80vh",marginTop:"2%", overflowY:"auto", flexWrap:"wrep", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}>
              <TableContainer component={Paper} sx={{ marginTop: "2%", width: "100%" }}>
                  <Table sx={{ minWidth: 650, }} aria-label="simple table">
                      <TableHead>
                          <TableRow>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Member ID</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Name</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Email</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Contact No</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Added On</TableCell>
                              {instructorType === "Trainer" ? <TableCell align="left" sx={{fontWeight:"600"}}>Training Mode</TableCell> : null}
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {InstructorData.map((row) => (
                              <TableRow
                                  key={row.name}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                  <TableCell component="th" scope="row" align="left">
                                        <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "black", textAlign:"left", marginTop: '0.3rem'}}>{row.id}</Typography>
                                  </TableCell>
                                  <TableCell align="left">
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "black", textAlign:"left", marginTop: '0.3rem'}}>{row.first_name} {row.last_name}</Typography>
                                  </TableCell>
                                  <TableCell align="left">
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "black", textAlign:"left", marginTop: '0.3rem'}}>{row.email}</Typography>
                                  </TableCell>
                                  <TableCell align="left">
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "black", textAlign:"left", marginTop: '0.3rem'}}>{row.contact_no}</Typography>
                                  </TableCell>
                                  <TableCell align="left">
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "black", textAlign:"left", marginTop: '0.3rem'}}>{new Date(row.added_on).toLocaleDateString()}</Typography>
                                  </TableCell>  
                                  {instructorType === "Trainer" ? <TableCell align="left" sx={{fontWeight:"600"}}>
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "black", textAlign:"left", marginTop: '0.3rem'}}>{row.mode}</Typography>
                                  </TableCell> : null}
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
                </TableContainer>
          </Box>    
        </Box>
      </Box>

      <Modal
                    open={openTrainer}
                    onClose={handleTrainerClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <FaRegTimesCircle onClick={handleTrainerClose} style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA" ,}}  
                            onMouseEnter={(e) => {
                                e.target.style.color = "#D71313";
                                e.target.style.transform = "scale(1)";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "#D8D9DA";
                                e.target.style.transform = "scale(1)";
                            }}
                        />
                        <Box sx={{display:"flex", textAlign:"center", justifyContent:"center"}}>
                            
                        </Box>
                        
                        <Box sx={{textAlign:"center", padding:"1%"}}>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>First Name:</InputLabel>
                            <TextField variant="outlined" name="first_name" value={newTrainer.first_name} onChange={handleInputChange} error={submitted && !newTrainer.first_name} helperText={submitted && !newTrainer.first_name ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Last Name:</InputLabel>
                            <TextField variant="outlined" name="last_name" value={newTrainer.last_name} onChange={handleInputChange} error={submitted && !newTrainer.last_name} helperText={submitted && !newTrainer.last_name ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>NIC:</InputLabel>
                            <TextField variant="outlined" name="nic" value={newTrainer.nic} onChange={handleInputChange} error={submitted && !newTrainer.nic} helperText={submitted && !newTrainer.nic ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Email:</InputLabel>
                            <TextField variant="outlined" name="email" value={newTrainer.email} onChange={handleInputChange} error={submitted && !newTrainer.email} helperText={submitted && !newTrainer.email ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Contact No:</InputLabel>
                            <TextField variant="outlined" name="contact_no" value={newTrainer.contact_no} onChange={handleInputChange} error={submitted && !newTrainer.contact_no} helperText={submitted && !newTrainer.contact_no ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            
                            <Box sx={{display:"flex", marginTop:"3%", justifyContent:"center"}}>
                              <Button onClick={handleSubmitTrainer} variant="contained" style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%", marginRight:"1%"}}>Add Trainer</Button>
                            </Box>
                            
                           
                        </Box>
                        
                    </Box>
                </Modal>
                <Modal
                    open={openPhysiotherapist}
                    onClose={handlePhysiotherapistClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <FaRegTimesCircle onClick={handlePhysiotherapistClose} style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA" ,}}  
                            onMouseEnter={(e) => {
                                e.target.style.color = "#D71313";
                                e.target.style.transform = "scale(1)";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "#D8D9DA";
                                e.target.style.transform = "scale(1)";
                            }}
                        />
                        <Box sx={{display:"flex", textAlign:"center", justifyContent:"center"}}>
                            
                        </Box>
                        
                        <Box sx={{textAlign:"center", padding:"1%"}}>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>First Name:</InputLabel>
                            <TextField variant="outlined" name="first_name" value={newPhysiotherapist.first_name} onChange={handleShakeInputChange} error={submitted && !newPhysiotherapist.first_name} helperText={submitted && !newPhysiotherapist.first_name ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Last Name:</InputLabel>
                            <TextField variant="outlined" name="last_name" value={newPhysiotherapist.last_name} onChange={handleShakeInputChange} error={submitted && !newPhysiotherapist.last_name} helperText={submitted && !newPhysiotherapist.last_name ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>NIC:</InputLabel>
                            <TextField variant="outlined" name="nic" value={newPhysiotherapist.nic} onChange={handleShakeInputChange} error={submitted && !newPhysiotherapist.nic} helperText={submitted && !newPhysiotherapist.nic ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Email:</InputLabel>
                            <TextField variant="outlined" name="email" value={newPhysiotherapist.email} onChange={handleShakeInputChange} error={submitted && !newPhysiotherapist.email} helperText={submitted && !newPhysiotherapist.email ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Contact No:</InputLabel>
                            <TextField variant="outlined" name="contact_no" value={newPhysiotherapist.contact_no} onChange={handleShakeInputChange} error={submitted && !newPhysiotherapist.contact_no} helperText={submitted && !newPhysiotherapist.contact_no ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            
                            <Box sx={{display:"flex", marginTop:"3%", justifyContent:"center"}}>
                              <Button onClick={handleSubmitPhysiotherapist}  variant="contained" style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%", marginRight:"1%"}}>Add Physiotherapist</Button>
                            </Box>
                            
                           
                        </Box>
                        
                    </Box>
                </Modal>
     
    </Box>

  );
};

export default InstructorList;
