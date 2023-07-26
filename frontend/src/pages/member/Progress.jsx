import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { LineChart } from '@mui/x-charts/LineChart';
import {GiBodyHeight, GiWeight} from 'react-icons/gi';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';


import BMI from "../../assets/BMI-Calculator.png";
const Progress = () => {

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
    <Box sx={{ flex: "1", width:"100%"}}>
        <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Progress</Typography>
        <Box sx={{display:"flex", width:"100%"}}>
            <Box sx={{width:"50%", marginRight:"5rem"}}>
                <Box>
                    <Typography variant="h6" style={{ fontWeight: 700, marginTop: "2rem", textAlign:"left" }}>Body Weight Graph</Typography>
                    <LineChart
                        width={600}
                        height={400}
                        series={[
                            { data: pData, label: 'Weight (KG)' },
                            
                        ]}
                        xAxis={[{ scaleType: 'point', data: xLabels }]}
                    />
                </Box>
                <Box>
                    <Typography variant="h6" style={{ fontWeight: 700, marginTop: "2rem",  textAlign:"left" }}>Body Fat Graph</Typography>
                    <LineChart
                        width={600}
                        height={400}
                        series={[
                            { data: pData, label: 'Fat' },
                            
                        ]}
                        xAxis={[{ scaleType: 'point', data: xLabels }]}
                    />
                </Box>
            </Box>
            <Box sx={{width:"100%" , justifyContent:"center", alignItems:"center"}}>
                <Box sx={{width:"80%" , border: "1px solid white", padding:"1rem",paddingBottom:"2rem", marginLeft:"8rem",cursor:"pointer", marginTop:"1rem", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: 'yellow', backgroundColor:"#E5E8E8", transition: "ease 0.5s"} }}>
                    <Typography variant="h6" style={{ fontWeight: 700 }}>Current Body Status</Typography>
                    <Box sx={{display:"flex", justifyContent:"center", marginTop:"2rem"}}>
                        <Box sx={{width:"40%" , display:"flex", padding:"2rem", marginRight:"2rem", borderRadius:"10px", boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',}}>
                            <GiWeight size={100} style={{}}/>
                            <Box>
                                <Typography variant="h6" style={{ fontWeight: 700,  }}>Weight</Typography>
                                <Typography variant="h6" style={{ fontWeight: 700, marginTop: "2rem" }}>70 KG</Typography>
                            </Box>
                        </Box>
                        <Box sx={{width:"40%" , display:"flex", padding:"2rem", borderRadius:"10px", boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',}}>
                            <GiBodyHeight size={100} style={{}}/>
                            <Box>
                                <Typography variant="h6" style={{ fontWeight: 700,  }}>Height</Typography>
                                <Typography variant="h6" style={{ fontWeight: 700, marginTop: "2rem" }}>180 cm</Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>
                <Box sx={{width:"80%" , border: "1px solid white", padding:"1rem",paddingBottom:"2rem", marginLeft:"8rem", marginTop:"5rem", borderRadius:"10px",cursor:"pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px','&:hover': {borderColor: 'yellow', backgroundColor:"#E5E8E8", transition: "ease 0.5s"}}}>
                    <Typography variant="h6" style={{ fontWeight: 700 }}>Body Mass Index</Typography>
                    <img src={BMI} alt="BMI" width="70%" height="70%"  style={{borderRadius:"50px", marginTop:"0.5rem"}}/>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                        <Box sx={{boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em', width:"30%", borderRadius:"20px", marginRight:"2rem"}}>
                            <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem" }}>Your status</Typography>
                            <SentimentVerySatisfiedOutlinedIcon style={{fontSize:"5rem"}}/>
                        </Box>
                        <Box sx={{boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em', width:"30%", borderRadius:"20px",}}>
                            <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem" }}>20.5</Typography>
                            <Typography variant="h5" style={{ fontWeight: 700, marginTop: "2rem" }}>Normal</Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
      
    </Box>
  );
};

export default Progress;
