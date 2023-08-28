import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import Profile from '../../assets/Shakebarmanager/shakebarmanager.jpg';
import {PiMedalFill} from 'react-icons/pi';
import Sidebar from "../../components/ShakebarmanagerSidebar";
import Navbar from "../../components/ShakebarmanagerNavbar";

const Instructors = () => {



  return (


    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <Sidebar sidebarLinkId = "1"/>
      </Box>
      
      <Box component="main" sx={{flex:1 }}>
        <Box>
          <Navbar />
        </Box>
        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
           
        <Typography variant="h4" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Profile</Typography>
        <Box sx={{ display:"flex", width: "100%", height:"100%"}}> 
            <Box sx={{ width: "50%", height:"100%", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <img src={Profile} alt="Profile" width="45%"  style={{borderRadius:"10px", marginTop:"3rem"}}/>
            </Box>
            <Box sx={{ width: "50%", height:"100%", flexDirection:"column", marginLeft:"0%", justifyContent:"center"}}>
                
                <Typography variant="h5" style={{ fontWeight: 700, textAlign:"left", marginLeft:"-15rem" }}><PiMedalFill style={{marginTop: "5rem"}}/>  Personal Information</Typography>
                <Box sx={{display: "flex"}}>

                    <Box>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-130%" }}>Name: Dulashi Arunoda</Typography>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-130%" }}>Age: 25</Typography>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-130%" }}>NIC: 986542135V</Typography>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-130%" }}>DOB: 21-10-1998</Typography>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-130%" }}>Gender: Female</Typography>
                    </Box>

                    <Box style={{width:"50%",}}>
                <Typography variant="h5" style={{ fontWeight: 700, marginTop: "-3rem",  }}><FaTelegram style={{marginTop: "1rem"}}/>  Contact Information</Typography>
                <Box style={{marginLeft:"1%"}}>
                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Address: 6th Flr Paul CI Cent 24 Malwatte Road, 11</Typography>
                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Email:dula@123gmail.com</Typography>
                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Contact Number: (+94) (76) 156 2514</Typography>
                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Emergency Contact: (+94) (76) 156 2514</Typography>
                
                </Box>
            </Box>
                </Box>	
                
            </Box>
            
        </Box>

        
        </Box>
      </Box>
     
    </Box>

  );
};

export default Instructors;
