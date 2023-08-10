import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Notification = () => {

  const notifications = [
    {
      title: "Your Payments",
      description: "You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.",
    },
    {
      title: "Your Payments",
      description: "You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.",
    },
    {
      title: "Your Payments",
      description: "You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.",
    },
    {
      title: "Your Payments",
      description: "You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.",
    },
    {
      title: "Your Payments",
      description: "You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.",
    },
    {
      title: "Your Payments",
      description: "You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.",
    },
  ]



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
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Notification</Typography>
          <Box sx={{  width: "90%", height:"80vh", padding:"1rem", overflowY:"auto", flexWrap:"wrep", borderRadius:"10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}> 
              
            {notifications.map((notification) => (
              <Box sx={{display:"flex", padding:"1rem", borderRadius:"10px",marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border:"2px solid white", '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>

                  <Box sx={{display:"flex", flexDirection:"column",  width:"2%", borderRadius:"5px", backgroundColor:"#346E93"}}></Box>
                  <Box sx={{marginLeft:"5%", marginRight:"5%", width:"85%", borderRadius:"10px", padding:"1rem", border:"1px solid #96CDEF"}}>
                    <Typography variant="h6" style={{ fontWeight: 700, textAlign:"left" }}>{notification.title}</Typography>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>{notification.description}</Typography>
                  </Box>
                  <CheckBoxIcon style={{marginLeft:"5%", marginTop:"5%", cursor:"pointer"}}/>

              </Box>
            ))}
          
              
          </Box>
        </Box>
      </Box>
     
    </Box>
  );
};

export default Notification;
