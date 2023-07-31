import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import Profile from '../../assets/photo-1633332755192-727a05c4013d.jpg';
import {PiMedalFill} from 'react-icons/pi';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Notification = () => {



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
          <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Notification</Typography>
          <Box sx={{  width: "90%", height:"80vh", padding:"1rem", overflowY:"auto", flexWrap:"wrep", borderRadius:"10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}> 
              
            <Box sx={{display:"flex", padding:"1rem", borderRadius:"10px",marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>

                <Box sx={{display:"flex", flexDirection:"column",  width:"2%", borderRadius:"5px", backgroundColor:"#EC7063"}}></Box>
                <Box sx={{marginLeft:"5%", marginRight:"5%", width:"85%", borderRadius:"10px", padding:"1rem", backgroundColor:"#D9D9D9"}}>
                  <Typography variant="h6" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Your Payments</Typography>
                  <Typography variant="body1" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.</Typography>
                </Box>
                <CheckBoxIcon style={{marginLeft:"5%", marginTop:"5%"}}/>

            </Box>
            <Box sx={{display:"flex", padding:"1rem", borderRadius:"10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>

                <Box sx={{display:"flex", flexDirection:"column", border:"1px solid", width:"3%", borderRadius:"10px", backgroundColor:"#EC7063"}}></Box>
                <Box sx={{marginLeft:"5%", marginRight:"10%", width:"60rem", borderRadius:"10px", padding:"1rem", backgroundColor:"#D9D9D9"}}>
                  <Typography variant="h6" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Your Payments</Typography>
                  <Typography variant="body1" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.</Typography>
                </Box>
                <CheckBoxIcon style={{marginLeft:"5%", marginTop:"2%"}}/>

            </Box>
            <Box sx={{display:"flex", padding:"1rem", borderRadius:"10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>

                <Box sx={{display:"flex", flexDirection:"column", border:"1px solid", width:"3%", borderRadius:"10px", backgroundColor:"#EC7063"}}></Box>
                <Box sx={{marginLeft:"5%", marginRight:"10%", width:"60rem", borderRadius:"10px", padding:"1rem", backgroundColor:"#D9D9D9"}}>
                  <Typography variant="h6" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Your Payments</Typography>
                  <Typography variant="body1" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.</Typography>
                </Box>
                <CheckBoxIcon style={{marginLeft:"5%", marginTop:"2%"}}/>

            </Box>
            <Box sx={{display:"flex", padding:"1rem", borderRadius:"10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>

                <Box sx={{display:"flex", flexDirection:"column", border:"1px solid", width:"3%", borderRadius:"10px", backgroundColor:"#EC7063"}}></Box>
                <Box sx={{marginLeft:"5%", marginRight:"10%", width:"60rem", borderRadius:"10px", padding:"1rem", backgroundColor:"#D9D9D9"}}>
                  <Typography variant="h6" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Your Payments</Typography>
                  <Typography variant="body1" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.</Typography>
                </Box>
                <CheckBoxIcon style={{marginLeft:"5%", marginTop:"2%"}}/>

            </Box>
              
          </Box>
        </Box>
      </Box>
     
    </Box>
  );
};

export default Notification;
