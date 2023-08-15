import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import ProfileImg from '../../assets/Trainers/sab-qadeer-nP2UzV4liWQ-unsplash.jpg';
import {PiMedalFill} from 'react-icons/pi';
import Sidebar from "../../components/ReceiptionistSidebar";
import Navbar from "../../components/ReceiptionistNavbar";
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Rating from '@mui/material/Rating';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const InstructorProfile = () => {

    const [fixedNavbar, setFixedNavbar] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Receptionist"')){
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

  return (


    <Box sx={{ flex: "1", display:"flex", mb:2}}>
        <Box>
            <Sidebar />
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
                            <Box sx={{display:"flex", flexDirection:"column", backgroundColor:"#000000", width:"0.2rem", borderRadius:"5px", marginRight:"15%"}}></Box>
                            <Box>
                                <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1%", marginLeft: "1rem", marginBottom:"2rem" }}> Dhanush Perera</Typography>
                                <Box sx={{width:"400px", height:"auto", textAlign:"center", justifyContent:"center", borderRadius:"10px", marginLeft:"5%", padding:"7%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', }}>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Country: Sri Lanka</Typography>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Languages: Sinahala/English</Typography>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Training Mod: Onsite/Online</Typography>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Packages: Usual Packages</Typography>
                                </Box>
                            </Box>
                        </Box>

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
                            </Box>
                        </Box>
                    
                    </Box>
                </Box>
                    
        
            
            </Box>
        </Box>
     
    </Box>

  );
};

export default InstructorProfile;
