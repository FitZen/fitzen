import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";



const color1 = "#000000"; // Black
const color2 = "#FFFFFF"; // White

const NavLink = styled("a")(({ theme }) => ({
    fontSize: "18px",
    color: color2,
    fontWeight: "700",
    cursor: "pointer",
    backgroundColor: "red",
    padding: theme.spacing(1, 2),
    zIndex: 1,
    "&:hover": {
      color: color2,
      border: "2px solid red",
      backgroundColor: color1 // Only the bottom border will be red on hover
      
    },
  }));


function GetStarted() {
  return (
    <Container maxWidth="" sx={{ backgroundColor: "#f8f8f8", marginTop: "-5%", marginBottom:"2rem" }}>
      <Box sx={{ height: "30vh", justifyContent: "center", alignItems: "center", padding:"2rem" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginTop:"3rem" }}>Let's Get You Ready!</Typography>
        <Box sx={{marginTop:"3rem", display:"flex", justifyContent:"center"}}>
            <NavLink
            variant="body2"
            style={{
                padding: "0.6rem",
                borderRadius: "100px",
                alignItems: "center",
                textAlign: "center",
            }}
            >
            SIGN UP
            </NavLink>
            <Typography variant="body2" sx={{fontSize:"17px", marginLeft: "1rem", marginTop: "0.5rem", color:"grey", fontWeight: 600 }}>or</Typography>
            <Typography variant="h5" sx={{ fontSize:"20px",fontWeight: "700", marginLeft: "1rem", marginTop: "0.5rem", cursor:"pointer" }}>Contact us</Typography>
            
        </Box>
      </Box>
    </Container>
  );
}

export default GetStarted;
