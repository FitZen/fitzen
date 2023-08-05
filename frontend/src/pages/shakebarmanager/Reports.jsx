import React, { useState } from 'react';
import Box from "@mui/material/Box";
import {Typography,Tabs,Tab,Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Paper,Button} from '@mui/material';
import ShakebarmanagerSidebar from "../../components/ShakebarmanagerSidebar";
import ShakebarmanagerNavbar from "../../components/ShakebarmanagerNavbar";

const Reports = () => {

    return (
        <Box sx={{ flex: "1", display:"flex", mb:2}}>
        <Box>
          <ShakebarmanagerSidebar />
        </Box>
        
        <Box component="main" sx={{flex:1 }}>
          <Box>
            <ShakebarmanagerNavbar />
          </Box>
          <Box sx={{ paddingLeft:"5rem", flex:1 }}>
          <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Reports</Typography>
            
    
              
          </Box>
        </Box>
       
      </Box>  );

};

export default Reports;
