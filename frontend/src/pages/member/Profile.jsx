import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import Profile from '../../assets/photo-1633332755192-727a05c4013d.jpg';
import {PiMedalFill} from 'react-icons/pi';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const Instructors = () => {



  return (


    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <Sidebar />
      </Box>
      
      <Box component="main" sx={{flex:1 }}>
        <Box>
          <Navbar />
        </Box>
        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
           
        <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Profile</Typography>
        <Box sx={{ display:"flex", width: "100%", height:"100%"}}> 
            <Box sx={{ width: "50%", height:"100%", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <img src={Profile} alt="Profile" width="45%"  style={{borderRadius:"10px", marginTop:"0.5rem"}}/>
            </Box>
            <Box sx={{ width: "50%", height:"100%", flexDirection:"column", marginLeft:"0%", justifyContent:"center"}}>
                
                <Typography variant="h5" style={{ fontWeight: 700, textAlign:"left", marginLeft:"-5rem" }}><PiMedalFill style={{marginTop: "1rem"}}/>  Personal Information</Typography>
                <Box sx={{display: "flex", marginLeft:"4rem"}}>
                    <Box>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>Name: Tharindu Gunawardhana</Typography>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>Age: 29</Typography>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>NIC: 986542135V</Typography>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>DOB: 21-10-1998</Typography>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>Gender: Male</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-21%" }}>Weight: 70 KG</Typography>
                        <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-21%" }}>Height: 180cm</Typography>
                        <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-21%" }}>Membership ID: M0231564</Typography>
                        <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-21%" }}>Membership Type: 6 Month Plan</Typography>
                       
                    </Box>
                </Box>	
                
            </Box>
            
        </Box>
        <Box sx={{display:"flex", width: "100%", height:"50%", textAlign:"left", marginTop:"2rem"}}>
            <Box style={{width:"40%",}}>
                <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", marginLeft: "", }}><FaTelegram style={{marginTop: "1rem"}}/>  Contact Information</Typography>
                <Box style={{marginLeft:"1%"}}>
                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Address: 6th Flr Paul CI Cent 24 Malwatte Road, 11</Typography>
                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Email:tharindu@123gmail.com</Typography>
                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Contact Number: (+94) (76) 156 2514</Typography>
                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Emergency Contact: (+94) (76) 156 2514</Typography>
                
                </Box>
            </Box>
            <Box  style={{width:"60%", marginLeft:"6%"}}>
                <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem",  }}><FaFeatherAlt style={{marginTop: "1rem"}}/>  Other</Typography>
                <Box style={{marginLeft:"1%"}}>
                    <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Medical Issues: </Typography>
                    <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"5%"}}>Taking medicine for Cholesterol since 3 years</Typography>
                    <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"5%"}}>Taking medicine for diabetic since 5 years </Typography>
            
                </Box>
            </Box>
           
        </Box>        
    
        
        </Box>
      </Box>
     
    </Box>

  );
};

export default Instructors;
