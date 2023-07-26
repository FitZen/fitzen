import { Box, Container, Typography, TextField, styled } from "@mui/material";
import React from "react";

import Location from "../../assets/Screenshot 2023-07-23 202423.png"; 


const color1 = "#000000"; // Black
const color2 = "#FFFFFF"; // White
const color3 = "#FF0000"; // Red

const textFieldStyles = {
  width: "100%",
  borderRadius: "12px", // Change the border radius as needed
  border: "1px solid black", // Change the border color as needed
  marginBottom: "1.5rem", // Add some margin at the bottom for spacing
};

const NavLink = styled("a")(({ theme }) => ({
    fontSize: "18px",
    color: color2,
    fontWeight: "700",
    cursor: "pointer",
    backgroundColor: "red",
    padding: "1rem 2rem",
    zIndex: 1,
    
    "&:hover": {
      color: color2,
      border: "2px solid red",
      backgroundColor: color1 // Only the bottom border will be red on hover
      
    },
  }));

function ContactUs() {
  return (
    <Container maxWidth="">
      <Typography variant="h3" sx={{ textAlign: "left", fontWeight: "bold", marginTop: "1rem", marginLeft: "5rem" }}>
        Contact us
      </Typography>
      <Box sx={{ height: "75vh", display: "flex", textAlign: "left", alignItems: "left", marginTop: "-5%", }}>
        <Box sx={{ display: "block", width: "40%", height: "60%", marginTop: "8rem", marginLeft: "4rem", marginBottom: "5rem", padding: "1rem" }}>
          <TextField id="outlined-basic" label="Name" variant="outlined" sx={textFieldStyles} />
          <TextField id="outlined-basic" label="Email" variant="outlined" sx={textFieldStyles} />
          <TextField id="outlined-basic" label="Mobile No" variant="outlined" sx={textFieldStyles} />
          <TextField id="outlined-basic" label="Subject" variant="outlined" sx={textFieldStyles} />
          <TextField id="outlined-multiline-static" label="Message" multiline rows={4}  sx={textFieldStyles} />
          <NavLink
            variant="body2"
            style={{
                padding: "0.8rem 2.2rem",
                borderRadius: "100px",
                alignItems: "center",
                textAlign: "center",
                marginTop: "2rem",
            }}
            >
            Send
            </NavLink>
        </Box>
        <Box sx={{display: "block", width: "40%", height: "60%", marginTop: "8rem", marginLeft: "7rem", marginBottom: "5rem", padding: "1rem"}}>
            <Typography variant="h5" sx={{ fontSize:"20px",fontWeight: "500", marginLeft: "1rem", marginBottom: "2rem", cursor:"pointer" }}>
                Address : 42 Dutugemunu St, Dehiwala-Mount Lavinia
            </Typography>
            <Typography variant="h5" sx={{ fontSize:"20px",fontWeight: "500", marginLeft: "1rem", marginBottom: "2rem", cursor:"pointer" }}>
                Contact : 0112852317 / 0772385520
            </Typography>
            <Typography variant="h5" sx={{ fontSize:"20px",fontWeight: "500", marginLeft: "1rem", marginBottom: "2rem", cursor:"pointer" }}>
                Email : receptionhof@gmail.com
            </Typography>
            <img src={Location} alt="Virtual Gym" style={{ width: "100%", height: "80%", marginTop:"0.5rem",marginLeft: "1rem" }} />
        </Box>
        
      </Box>
    </Container>
  );
}

export default ContactUs;
