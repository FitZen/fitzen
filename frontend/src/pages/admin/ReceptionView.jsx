import React from "react";
import Box from "@mui/material/Box";
import { Typography,TextField, Button, FormControl, InputLabel, Select, MenuItem, Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Paper } from "@mui/material";
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";
import {FaPlus} from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from '@mui/material/Modal';
import {FaRegTimesCircle} from 'react-icons/fa';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Swal from "sweetalert2";
import { useNavigate, useParams } from 'react-router-dom';

const ReceptionView = () => {

  const color1 = "#102B4C" //dark blue
  const color2 = "#346E93" //light blue
  const color3 = "#96CDEF" //lighter blue
  const color4 = "#DC1E2A" //red 

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [shakeOpen, setShakeOpen] = React.useState(false);
  const handleShakeOpen = () => setShakeOpen(true);
  const handleShakeClose = () => setShakeOpen(false);
  const [employeeData, setEmployeeData] = useState([]);
  const navigate = useNavigate();
  const {employeeType} = useParams();
  
  const [newReception, setNewReception] = useState({
    first_name: "",
    last_name: "",
    nic: "",
    email: "",
    contact_no: "",
  });
  const [newManager, setNewManager] = useState({
    first_name: "",
    last_name: "",
    nic: "",
    email: "",
    contact_no: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [item, setItem] = React.useState('');

  const handleChange = (event) => {
    setItem(event.target.value);
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


  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Admin"')){
      navigate('/login');
    }

    if(employeeType === "Reception"){
      viewReceptionList();
    }
    else{
      viewShakeBarManagersList();
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

  const viewReceptionList = async () => {
    
    try {
     
      const res = await axios.get("http://localhost:8000/api/receptionists/getreceptionists");
      console.log(res.data.data);
      setEmployeeData(res.data.data);

      // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
    } catch (error) {
      console.error("Retrieving failed:", error);
      // Handle error scenarios here
    }
  };

  const viewShakeBarManagersList = async () => {
    
    try {
     
      const res = await axios.get("http://localhost:8000/api/shakebarmanagers/getshakebarmanagers");
      console.log(res.data.data);
      setEmployeeData(res.data.data);

      // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
    } catch (error) {
      console.error("Retrieving failed:", error);
      // Handle error scenarios here
    }
  };

  //get form inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReception((prevReception) => ({
      ...prevReception,
      [name]: value,
    }));
  };

  const handleShakeInputChange = (event) => {
    const { name, value } = event.target;
    setNewManager((prevManager) => ({
      ...prevManager,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {

    if (!newReception.first_name || !newReception.last_name || !newReception.nic || !newReception.email || !newReception.contact_no) {
      // Display error messages or styles for empty fields
      setSubmitted(true);
      return;
    }  

    try {
      const payload = {
        first_name: newReception.first_name,
        last_name: newReception.last_name,
        nic: newReception.nic,
        email: newReception.email,
        contact_no: newReception.contact_no,
        userID: JSON.parse(localStorage.getItem("userID")),	
      };

      console.log(payload);

      const res = await axios.post(
        "http://localhost:8000/api/receptionists/addreceptionist",
        payload
      );
  
      if (res.status === 201) {
        handleClose(); // Close the modal
        viewReceptionList(); // Refresh the announcement list
        setNewReception({ first_name:"", last_name:"", nic:"", email:"",contact_no:"" }); // Clear the form
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

  const handleShakeSubmit = async () => {

    if (!newManager.first_name || !newManager.last_name || !newManager.nic || !newManager.email || !newManager.contact_no) {
      // Display error messages or styles for empty fields
      setSubmitted(true);
      return;
    }  

    try {
      const payload = {
        first_name: newManager.first_name,
        last_name: newManager.last_name,
        nic: newManager.nic,
        email: newManager.email,
        contact_no: newManager.contact_no,
        userID: JSON.parse(localStorage.getItem("userID")),	
      };

      console.log(payload);

      const res = await axios.post(
        "http://localhost:8000/api/shakebarmanagers/addshakebarmanager",
        payload
      );
  
      if (res.status === 201) {
        handleShakeClose(); // Close the modal
        viewShakeBarManagersList(); // Refresh the announcement list
        setNewManager({ first_name:"", last_name:"", nic:"", email:"",contact_no:"" }); // Clear the form
        setSubmitted(false);
      }

      Swal.fire({
        icon: 'success',
        title: 'Shake Bar Manager Added Successfully',
        showConfirmButton: false,
        timer: 1500
      })

    } catch (error) {
      console.error("Adding Shake Bar Manager failed:", error);
      // Handle error scenarios here
    }
  };

  return (


    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <AdminSidebar sidebarLinkId = "4"/>
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
            <Typography variant="h4" style={{ fontWeight: 700, textAlign:"left" }}>{employeeType === "Reception" ? "Receiptionists" : "Shake Bar Managers"}</Typography>
            <Button variant="contained" onClick={employeeType === "Reception" ? handleOpen : handleShakeOpen} sx={{backgroundColor: color2, marginRight:"7%", marginBottom:"3%",'&:hover': {backgroundColor:color3, transition: "ease 0.5s"}}}><FaPlus />&nbsp; Add New</Button>
          </Box>

          <Box sx={{width:"93%", height:"80vh", overflowY:"auto", flexWrap:"wrep", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}>
              <TableContainer component={Paper} sx={{ marginTop: "2%", width: "100%" }}>
                  <Table sx={{ minWidth: 650, }} aria-label="simple table">
                      <TableHead>
                          <TableRow>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Employee ID</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Name</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Email</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Contact No</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Added On</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {employeeData.map((row) => (
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
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
                </TableContainer>
          </Box>
        
        
    
        
        </Box>
      </Box>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <FaRegTimesCircle onClick={handleClose} style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA" ,}}  
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
                            <TextField variant="outlined" name="first_name" value={newReception.first_name} onChange={handleInputChange} error={submitted && !newReception.first_name} helperText={submitted && !newReception.first_name ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Last Name:</InputLabel>
                            <TextField variant="outlined" name="last_name" value={newReception.last_name} onChange={handleInputChange} error={submitted && !newReception.last_name} helperText={submitted && !newReception.last_name ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>NIC:</InputLabel>
                            <TextField variant="outlined" name="nic" value={newReception.nic} onChange={handleInputChange} error={submitted && !newReception.nic} helperText={submitted && !newReception.nic ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Email:</InputLabel>
                            <TextField variant="outlined" name="email" value={newReception.email} onChange={handleInputChange} error={submitted && !newReception.email} helperText={submitted && !newReception.email ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Contact No:</InputLabel>
                            <TextField variant="outlined" name="contact_no" value={newReception.contact_no} onChange={handleInputChange} error={submitted && !newReception.contact_no} helperText={submitted && !newReception.contact_no ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            
                            <Box sx={{display:"flex", marginTop:"3%", justifyContent:"center"}}>
                              <Button onClick={handleSubmit} variant="contained" style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%", marginRight:"1%"}}>Add Receptionist</Button>
                            </Box>
                            
                           
                        </Box>
                        
                    </Box>
                </Modal>
                <Modal
                    open={shakeOpen}
                    onClose={handleShakeClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <FaRegTimesCircle onClick={handleShakeClose} style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA" ,}}  
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
                            <TextField variant="outlined" name="first_name" value={newManager.first_name} onChange={handleShakeInputChange} error={submitted && !newManager.first_name} helperText={submitted && !newManager.first_name ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Last Name:</InputLabel>
                            <TextField variant="outlined" name="last_name" value={newManager.last_name} onChange={handleShakeInputChange} error={submitted && !newManager.last_name} helperText={submitted && !newManager.last_name ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>NIC:</InputLabel>
                            <TextField variant="outlined" name="nic" value={newManager.nic} onChange={handleShakeInputChange} error={submitted && !newManager.nic} helperText={submitted && !newManager.nic ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Email:</InputLabel>
                            <TextField variant="outlined" name="email" value={newManager.email} onChange={handleShakeInputChange} error={submitted && !newManager.email} helperText={submitted && !newManager.email ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Contact No:</InputLabel>
                            <TextField variant="outlined" name="contact_no" value={newManager.contact_no} onChange={handleShakeInputChange} error={submitted && !newManager.contact_no} helperText={submitted && !newManager.contact_no ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            
                            <Box sx={{display:"flex", marginTop:"3%", justifyContent:"center"}}>
                              <Button onClick={handleShakeSubmit}  variant="contained" style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%", marginRight:"1%"}}>Add Shake Bar Manager</Button>
                            </Box>
                            
                           
                        </Box>
                        
                    </Box>
                </Modal>
     
    </Box>

  );
};

export default ReceptionView;
