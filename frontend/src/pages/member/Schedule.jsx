import React, {useState} from "react";
import Box from "@mui/material/Box";
import { Typography,  Select, MenuItem, Button, InputLabel, FormControl} from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";




const Shakebar = () => {


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
      <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Schedule</Typography>
        

          
      </Box>
    </Box>
   
  </Box>  );
};

export default Shakebar;
