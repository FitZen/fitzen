import { Box, Container, Typography } from "@mui/material";
import React from "react";
import HighOctaneLogo from "../../assets/download.png";
import logoImg from "../../assets/logo.png";
import {FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';



const color1 = "#000000"; // Black
const color2 = "#FFFFFF"; // White


const footerIcons = {
    color: 'white', // Change the color to your desired color
    fontSize: '1.8rem', // Increase the icon size
    marginRight: '1.5rem', // Add some margin to the left
    cursor: 'pointer',
  }


function Footer() {
  return (
    <Container maxWidth="" sx={{ backgroundColor: color1}}>
      <Box sx={{ height: "28vh", padding:"2rem", display:"block" }}>
        <img src={logoImg} alt="Logo" style={{ width: "10%", height: "30%", marginLeft:"-85%"}} />        
        <Box sx={{ display:"flex"}}>
            
            <Box sx={{ marginTop: "1rem"}}>
                <Typography variant="h5" sx={{ fontSize:"20px",fontWeight: "700", marginLeft: "1rem", color:color2 }}>Powered by</Typography>
                <img src={HighOctaneLogo} alt="Virtual Gym" style={{ width: "70%", height: "60%" }} />
            </Box>
            <Box sx={{marginLeft:"25%"}}>
              <Typography variant="h5" sx={{ fontSize:"18px",fontWeight: "500",marginTop:"-2%", marginLeft: "1rem", color:color2 }}>Copyright (c) 2023. Alright reserved</Typography>
              <Typography variant="h5" sx={{ fontSize:"18px",fontWeight: "500", marginLeft: "1rem", color:color2 }}>Privacy policy | Terms & Conditions</Typography>
            </Box>
            <Box sx={{marginLeft:"25%"}}>
                <FaFacebook style={footerIcons} />
                <FaInstagramSquare style={footerIcons} />    
                <FaTwitter style={footerIcons} />
            </Box>
           
        </Box>
        
      </Box>
    </Container>
  );
}

export default Footer;
