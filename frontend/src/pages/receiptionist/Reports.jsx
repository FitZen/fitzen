import React from "react";
import Box from "@mui/material/Box";
import ReceiptionistSidebar from "../../components/ReceiptionistSidebar";
import ReceiptionistNavbar from "../../components/ReceiptionistNavbar";
import {useEffect, useState} from 'react';
import { Typography, Select, MenuItem, Button, InputLabel, FormControl } from "@mui/material";



const Report = () => {

    const [fixedNavbar, setFixedNavbar] = useState(false);
  
    useEffect(() => {
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
          <ReceiptionistSidebar sidebarLinkId = "5"/>
        </Box>
        
        <Box component="main" sx={{flex:1 }}>
        <div
            className={`navbar ${fixedNavbar ? "fixed" : ""}`}
            style={{ width: "100%" }}
          >
            <ReceiptionistNavbar />
          </div>
          <Box sx={{ paddingLeft:"5rem", flex:1 }}>
             
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Report</Typography>
          
          
      
          
          </Box>
        </Box>
       
      </Box>
  
    );
  };
  
  export default Report;