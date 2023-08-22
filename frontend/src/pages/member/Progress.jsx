import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { LineChart } from '@mui/x-charts/LineChart';
import {GiBodyHeight, GiWeight} from 'react-icons/gi';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import BMI from "../../assets/BMI-Calculator.png";
const Progress = () => {

    const [fixedNavbar, setFixedNavbar] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Virtual Member"' && localStorage.getItem('userType') !== '"Physical Member"')){
      navigate('/login');
    }
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

    const pData = [80,80,79,75,70,70 ];
   
    const xLabels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June'
        
    ];

 
  return (

    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <Sidebar sidebarLinkId = "4"/>
      </Box>
      
      <Box component="main" sx={{flex:1 }}>
        <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <Navbar />
        </div>
        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
            
        <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Progress</Typography>
        <Box sx={{display:"flex", width:"100%"}}>
            <Box sx={{width:"50%", marginRight:"5rem"}}>
                <Box>
                    <Typography variant="h6" style={{ fontWeight: 700, marginTop: "2rem", textAlign:"left" }}>Body Weight Graph</Typography>
                    <LineChart
                        width={500}
                        height={300}
                        series={[
                            { data: pData, label: 'Weight (KG)' },
                            
                        ]}
                        xAxis={[{ scaleType: 'point', data: xLabels }]}
                    />
                </Box>
                <Box>
                    <Typography variant="h6" style={{ fontWeight: 700, marginTop: "2rem",  textAlign:"left" }}>Body Fat Graph</Typography>
                    <LineChart
                        width={500}
                        height={300}
                        series={[
                            { data: pData, label: 'Fat' },
                            
                        ]}
                        xAxis={[{ scaleType: 'point', data: xLabels }]}
                    />
                </Box>
            </Box>
            <Box sx={{width:"100%" , justifyContent:"center", alignItems:"center"}}>
                <Box sx={{width:"85%" , border: "1px solid white", padding:"1rem",paddingBottom:"2rem", marginLeft:"2rem",cursor:"pointer", marginTop:"1rem", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px', transition: "ease 0.5s"} }}>
                    <Typography variant="h6" style={{ fontWeight: 700 }}>Current Body Status</Typography>
                    <Box sx={{display:"flex", justifyContent:"center", marginTop:"2rem"}}>
                        <Box sx={{width:"14rem" , height:"8rem", display:"flex", padding:"1rem", marginRight:"1rem", borderRadius:"10px", boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',}}>
                            <GiWeight size={120} style={{marginTop:"-1rem", marginRight:"0.1rem"}}/>
                            <Box>
                                <Typography variant="h6" style={{fontSize:"16px", fontWeight: 700, marginTop:"1rem"  }}>Weight</Typography>
                                <Typography variant="h6" style={{fontSize:"16px", fontWeight: 700, marginTop: "1.5rem" }}>70 KG</Typography>
                            </Box>
                        </Box>
                        <Box sx={{width:"14rem" , height:"8rem", display:"flex", padding:"1rem", marginRight:"rem", borderRadius:"10px", boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',}}>
                            <GiBodyHeight size={120} style={{marginTop:"-1rem", marginRight:"0.rem"}}/>
                            <Box>
                                <Typography variant="h6" style={{fontSize:"16px", fontWeight: 700,marginTop: "1rem"   }}>Height</Typography>
                                <Typography variant="h6" style={{fontSize:"16px", fontWeight: 700, marginTop: "1.5rem" }}>180 cm</Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>
                <Box sx={{width:"85%" , border: "1px solid white", padding:"1rem",paddingBottom:"2rem", marginLeft:"2rem",marginBottom:"1em", marginTop:"7rem", borderRadius:"10px",justifyContent:"center", alignItems:"center", textAlign:"center",cursor:"pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px','&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px', transition: "ease 0.5s"}}}>
                    <Typography variant="h6" style={{ fontWeight: 700 }}>Body Mass Index</Typography>
                    <img src={BMI} alt="BMI" width="70%" height="70%"  style={{borderRadius:"50px", marginTop:"0.5rem", }}/>
                    <Box sx={{display:"flex", justifyContent:"center", textAlign:"center"}}>
                        <Box sx={{boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em', width:"30%", borderRadius:"20px", marginRight:"2rem"}}>
                            <Typography variant="h6" style={{ fontWeight: 700, marginTop: "1rem" }}>Your status</Typography>
                            <SentimentVerySatisfiedOutlinedIcon style={{fontSize:"5rem"}}/>
                        </Box>
                        <Box sx={{boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em', width:"30%", borderRadius:"20px",textAlign:"center"}}>
                            <Typography variant="h6" style={{ fontWeight: 700, marginTop: "1rem" }}>20.5</Typography>
                            <Typography variant="h6" style={{ fontWeight: 700, marginTop: "1.5rem" }}>Normal</Typography>
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

export default Progress;
