import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography, InputLabel, TextField } from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import ProfileImg from '../../assets/Trainers/sab-qadeer-nP2UzV4liWQ-unsplash.jpg';
import {PiMedalFill} from 'react-icons/pi';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Rating from '@mui/material/Rating';
import {FaRegTimesCircle} from 'react-icons/fa';
import Modal from '@mui/material/Modal';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AllocatedInstructorProfile = () => {

    const [fixedNavbar, setFixedNavbar] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openSecond, setOpenSecond] = React.useState(false); //for second modal [request for change trainer
    const handleSecondOpen = () => setOpenSecond(true);
    const handleSecondClose = () => setOpenSecond(false);

    const color2 = "#346E93" //light blue
    const color4 = "#DC1E2A" //red 

    const navigate = useNavigate();

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Virtual Member"' && localStorage.getItem('userType') !== '"Physical Member"')){
        navigate('/login');
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

  const modalStyle = {
    position: 'absolute',
    justifyContent: 'center',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "20%",
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    p: 3,
  };

  const modalStyleSecond = {
    position: 'absolute',
    justifyContent: 'center',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "35%",
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    p: 3,
  };
  

  return (


    <Box sx={{ flex: "1", display:"flex", mb:2}}>
        <Box>
            <Sidebar sidebarLinkId = "1"/>
        </Box>
      
        <Box component="main" sx={{flex:1 }}>
        <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <Navbar />
        </div>
            <Box sx={{ paddingLeft:"5rem", flex:1 }}>
            
                <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Profile</Typography>
                <Box>
                    <Box sx={{display:"flex", width:"100%"}}>
                        <Box sx={{width:"30%"}}>
                            <img src={ProfileImg} alt="profile img" style={{width:"80%", borderRadius:"5px", objectFit:"cover"}} />
                        </Box>
                        <Box sx={{display:"flex", width:"50%"}}>
                            <Box sx={{display:"flex", flexDirection:"column", backgroundColor:"#000000", width:"0.2rem", borderRadius:"5px", marginRight:"7%"}}></Box>
                            <Box>
                                <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1%", marginLeft: "1rem", marginBottom:"2rem" }}> Dhanush Perera</Typography>
                                <Box sx={{display:"flex"}}>
                                    <Box sx={{width:"400px", height:"auto", textAlign:"center", justifyContent:"center", borderRadius:"10px", marginLeft:"3%", padding:"7%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', }}>
                                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Country: Sri Lanka</Typography>
                                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Languages: Sinahala/English</Typography>
                                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Training Mod: Onsite/Online</Typography>
                                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Packages: Usual Packages</Typography>
                                    </Box>
                                    <Box>
                                        <Button variant="contained" onClick={handleSecondOpen} style={{backgroundColor: color4, color:"#ffffff", width:"300px", height:"15%", marginTop:"1%", marginLeft:"10%"}}> Request for change trainer</Button>
                                    </Box>
                                    
                                </Box>
                                
                            </Box>
                        </Box>
                        <Button variant="contained" style={{backgroundColor:"#000000", color:"#ffffff", width:"10%", height:"10%", marginTop:"1%", marginLeft:"5%"}}><FaTelegram style={{fontSize: "20px"}}/> &nbsp;  Chat</Button>

                    </Box>
                    <Box sx={{width:"95%"}}> 
                        <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Bio</Typography>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"justify"}}>I am a professional trainer with 5 years of experience in the field. I have trained over 1000 students and have a 4.5 star rating. I am a professional trainer with 5 years of experience in the field. I have trained over 1000 students and have a 4.5 star rating. I am a professional trainer with 5 years of experience in the field. I have trained over 1000 students and have a 4.5 star rating. I am a professional trainer with 5 years of experience in the field. I have trained over 1000 students and have a 4.5 star rating.</Typography>
                    </Box>
                    <Box sx={{display:"flex", width: "100%", height:"50%", textAlign:"left", marginTop:"2rem"}}>
                        <Box style={{width:"40%"}}>
                            <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", marginLeft: "", }}>Qualification</Typography>
                            <Box style={{marginLeft:"1%"}}>
                                <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>3-year degree in psychology accredited by The British Psychological Society (BPS)</Typography>
                                <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Training skills including active listening and a non-judgemental approach</Typography>
                            
                            </Box>
                        </Box>
                        <Box  style={{width:"60%", marginLeft:"6%"}}>
                            <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem",  }}>Review</Typography>
                            <Box style={{marginLeft:"1%"}}>
                                <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left"}}>4.4</Typography>
                                <Rating name="read-only" value={4.4} readOnly /><br />
                                <Button variant="contained" onClick={handleOpen} style={{backgroundColor:"#000000", color:"#ffffff", width:"10%", height:"10%", marginTop:"1%"}}> Rate</Button>
                            </Box>
                        </Box>
                    
                    </Box>
                </Box>
                    
        
            
            </Box>
        </Box>

        <Modal
                    open={openSecond}
                    onClose={handleSecondClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyleSecond}>
                        <FaRegTimesCircle onClick={handleSecondClose} style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA" ,}}  
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
                            <TextField variant="outlined" name="title"  inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Description:</InputLabel>
                            <TextField variant="outlined" name="content"  multiline rows="4" style={{height: 125, width:425, borderRadius:"5px", outline:"none", border:"1px solid D8D9DA"}}/>
                            
                            <Box sx={{display:"flex", marginTop:"3%", justifyContent:"center"}}>
                              <Button onClick={handleSecondClose} variant="contained" style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%", marginRight:"1%"}}>Send</Button>
                            </Box>
                            
                           
                        </Box>
                        
                    </Box>
                </Modal>

        <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <Box sx={{marginBottom:"5%"}}>
                            <FaRegTimesCircle onClick={handleClose} style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA", marginLeft:"-7%" ,}}  
                                onMouseEnter={(e) => {
                                    e.target.style.color = "#D71313";
                                    e.target.style.transform = "scale(1)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = "#D8D9DA";
                                    e.target.style.transform = "scale(1)";
                                }}
                            />
                        </Box>
                       
                        <Box sx={{textAlign:"center", justifyContent:"center"}}>
                           
                            <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight="700" textAlign="center">
                                Rate Your Trainer
                            </Typography>
                           
                        </Box>
                        <Box sx={{marginTop:"3%"}}>
                            <Rating name="size-large" defaultValue={0} size="large" />
                        </Box>

                       <Box>
                            <Button variant="contained" onClick={handleClose} style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%", textAlign:"center"}}>Done</Button>
                       </Box>
                        
                    </Box>
                </Modal>
     
    </Box>

  );
};

export default AllocatedInstructorProfile;
