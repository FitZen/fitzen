import React from "react";
import Box from "@mui/material/Box";
import { Typography,TextField, Button, FormControl, InputLabel, Select, MenuItem, Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Paper } from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import ProfileImg from '../../assets/photo-1633332755192-727a05c4013d.jpg';
import {PiMedalFill} from 'react-icons/pi';
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";
import {FaPlus} from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from '@mui/material/Modal';
import {FaRegTimesCircle} from 'react-icons/fa';
import axios from 'axios';
import {useEffect, useState} from 'react';

const Announcement = () => {

  const color1 = "#102B4C" //dark blue
  const color2 = "#346E93" //light blue
  const color3 = "#96CDEF" //lighter blue
  const color4 = "#DC1E2A" //red 

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [announcementData, setAnnouncementData] = useState([]);
  
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
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

    viewAnnouncement();
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

  const viewAnnouncement = async () => {
    
    try {
     
      const res = await axios.get("http://localhost:8000/api/announcements/getannouncements");
      console.log(res.data.data);
      setAnnouncementData(res.data.data);

      // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
    } catch (error) {
      console.error("Retrieving failed:", error);
      // Handle error scenarios here
    }
  };

  //get form inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAnnouncement((prevAnnouncement) => ({
      ...prevAnnouncement,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {

    if (!newAnnouncement.title || !newAnnouncement.content) {
      // Display error messages or styles for empty fields
      setSubmitted(true);
      return;
    }  

    try {
      const payload = {
        title: newAnnouncement.title,
        content: newAnnouncement.content,
        userID: JSON.parse(localStorage.getItem('userID')),
      };

      const res = await axios.post(
        "http://localhost:8000/api/announcements/addannouncement",
        payload
      );
  
      if (res.status === 201) {
        handleClose(); // Close the modal
        viewAnnouncement(); // Refresh the announcement list
        setNewAnnouncement({ title: "", content: "" }); // Clear the form
        setSubmitted(false);
      }
    } catch (error) {
      console.error("Adding announcement failed:", error);
      // Handle error scenarios here
    }
  };

  return (


    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <AdminSidebar sidebarLinkId = "6"/>
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
            <Typography variant="h4" style={{ fontWeight: 700, textAlign:"left" }}>Announcement</Typography>
            <Button variant="contained" onClick={handleOpen} sx={{backgroundColor: color2, marginRight:"7%",'&:hover': {backgroundColor:color3, transition: "ease 0.5s"}}}><FaPlus />&nbsp; Add New</Button>
          </Box>
          <Box sx={{marginTop:"2%"}}>
            <FormControl style={{ width: "15%" }}>
                <InputLabel id="demo-simple-select-label">All</InputLabel>
                <Select
                  
                  
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={item}
                  label="All"
                  size="small"
                  style={{marginTop:"0.5rem", width:"15rem", height:"12%", marginBottom:"0.5rem", borderRadius:"5px"}}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>All Announcements</MenuItem>
                  <MenuItem value={20}>My Announcements</MenuItem>
                
                </Select>
              </FormControl>
          </Box>

          <Box sx={{width:"93%", height:"80vh", overflowY:"auto", flexWrap:"wrep", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}>
              <TableContainer component={Paper} sx={{ marginTop: "2%", width: "100%" }}>
                  <Table sx={{ minWidth: 650, }} aria-label="simple table">
                      <TableHead>
                          <TableRow>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Date</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Announcement</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}></TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {announcementData.map((row) => (
                              <TableRow
                                  key={row.name}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                  <TableCell component="th" scope="row" align="left">
                                      <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "black", textAlign:"left", marginTop: '0.3rem'}}>{new Date(row.posted_on).toLocaleDateString()}</Typography>
                                      <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "grey", textAlign:"left", marginTop: '0.3rem'}}>{new Date(row.posted_on).toLocaleTimeString()}</Typography>
                                  </TableCell>
                                  <TableCell align="left">
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "black", textAlign:"left", marginTop: '0.3rem'}}>{row.title}</Typography>
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "grey", textAlign:"left", marginTop: '0.3rem'}}>{row.content}</Typography>
                                  </TableCell>
                      
                                  <TableCell align="left">
                                      <Box style={{display:"flex" }}>
                                          <Button variant="outlined"  sx={{marginRight:"10%", color:color2, border:"1px solid #346E93"}}>View</Button>
                                          <Button variant="outlined"sx={{color:color4, border:"1px solid #DC1E2A"}}>Delete</Button>
                                          
                                      </Box>
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
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Title:</InputLabel>
                            <TextField variant="outlined" name="title" value={newAnnouncement.title} onChange={handleInputChange} error={submitted && !newAnnouncement.title} helperText={submitted && !newAnnouncement.title ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Description:</InputLabel>
                            <TextField variant="outlined" name="content" value={newAnnouncement.content} onChange={handleInputChange} error={submitted && !newAnnouncement.content} helperText={submitted && !newAnnouncement.content ? "Content is required" : ""}   multiline rows="4" style={{height: 125, width:425, borderRadius:"5px", outline:"none", border:"1px solid D8D9DA"}}/>
                            
                            <Box sx={{display:"flex", marginTop:"3%", justifyContent:"center"}}>
                              <Button onClick={handleSubmit} variant="contained" style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%", marginRight:"1%"}}>Add Announcement</Button>
                            </Box>
                            
                           
                        </Box>
                        
                    </Box>
                </Modal>
     
    </Box>

  );
};

export default Announcement;
