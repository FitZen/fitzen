import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend,  DoughnutController, ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import {FaCalendarCheck, FaRegAddressCard, FaDotCircle, FaCheckCircle, FaTimesCircle} from 'react-icons/fa';
import {IoFastFoodOutline}  from 'react-icons/io5';
import {GoGoal} from 'react-icons/go';
import {BiSolidTimer} from 'react-icons/bi';
import { width } from "@mui/system";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, DoughnutController, ArcElement);

const Dashboard = () => {

  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    datasets: [{
      label: 'Sales',
      data: [5, 2, 3, 1, 4, 2, 3],
      backgroundColor: ['#2C3E50','#5DADE2', '#E74C3C', '#2C3E50', '#5DADE2', '#E74C3C', '#2C3E50'],
      borderColor: ['#2C3E50','#5DADE2', '#E74C3C', '#2C3E50', '#5DADE2', '#E74C3C', '#2C3E50'],
      borderWidth: 1
    }]
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        grid: {
          display: false,
        }
      }
    }
  };

  const DoughnutData = {
    labels: ['Completed', 'Upcoming', 'Cancelled', 'Total'],
    datasets: [{
      data: [65, 59, 80, 81],
      backgroundColor: ['#52BE80 ','#5DADE2', '#E74C3C', '#F1C40F'],
      borderColor: '#000',
      borderWidth: 0
    }]
  };

  const DoughnutOptions = {
    plugins: {
      legend: {
        display: false,
        position: 'right'
      }
    }
  };

  return (
    <Box sx={{ flex: "1"}}>
      <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Dashboard</Typography>
      <Box sx={{ display:"flex", width: "100%", height:"100%"}}> 

        <Box>
          <Box sx={{ width: "350px", height: "100%", borderRadius: "10px", mt: 1, justifyContent: "center", alignItems: "center" }}>
            <div style={{ textAlign: "center",justifyContent:"center", height: "55%", width: "100%",padding: "2.5rem",borderRadius:"10px", marginTop:"1rem",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}>
              <Typography variant="h5" style={{ fontWeight: 700,  color: "#000000" }}>Session Stats</Typography>
              <Doughnut data={DoughnutData} options={DoughnutOptions} style={{marginLeft:"2rem"}}/>
            </div>
            <Box sx={{boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',borderRadius:"10px", marginTop:"1rem", width: "100%", height:"35%", padding:"0.5rem"}}>
              <Typography variant="h5" style={{ fontWeight: 700,  color: "#000000"}}>Next Task</Typography>
              <FaCalendarCheck size={50} />
              <Typography variant="h6" style={{ fontWeight: 500,  color: "#000000" }}>Task : Personal Workout</Typography>
              <Typography variant="h6" style={{ fontWeight: 500,  color: "#000000" }}>Time : 10:30 am</Typography>
            </Box>
          </Box>

        </Box>
        <Box sx={{ width: "55%", height: "40%", padding: "20px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', borderRadius:"10px", mt:1, ml: "10rem" }}>
          <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", color: "#000000" }}>Current Week Schedule</Typography>
          <Bar data={data} options={options} />
        </Box>

      </Box>
      
      
      
      <Box sx={{display: "flex", width: "90%", height: "250px", backgroundColor: "#ffffff",  mt:5 , mb: 2, borderRadius:"10px", paddingTop:"1rem"}}>
        <Box sx={{width:"25%", height:"100%", bgcolor: "#ffffff", borderRadius:"10px", mr:20, cursor: "pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {borderColor: 'gold',transition: "ease 0.5s"}}}>
          <FaRegAddressCard size={120} style={{textAlign:"left", marginLeft:"-40%", marginTop:"5%"}} />
          <Typography variant="h5" style={{ fontWeight: 700,  color: "#000000", textAlign:"center", marginLeft:"35%"}}>Membership</Typography>
        </Box>
        <Box sx={{width:"25%", height:"100%", bgcolor: "#ffffff", borderRadius:"10px",  mr:20 , cursor: "pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {borderColor: 'gold', transition: "ease 0.5s"}}}>
          <IoFastFoodOutline size={120} style={{textAlign:"left", marginLeft:"-40%", marginTop:"5%"}}/>
          <Typography variant="h5" style={{ fontWeight: 700,  color: "#000000", textAlign:"center", marginLeft:"35%"}}>Meal Plan</Typography>
        </Box>
        <Box sx={{width:"25%", height:"100%", bgcolor: "#ffffff", borderRadius:"10px" , cursor: "pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {borderColor: 'gold', transition: "ease 0.5s"}}}>
          <GoGoal size={120} style={{textAlign:"left", marginLeft:"-40%", marginTop:"5%"}}/>
          <Typography variant="h5" style={{ fontWeight: 700,  color: "#000000", textAlign:"center", marginLeft:"35%"}}>Membership</Typography>
        </Box>
      </Box>

      <Typography variant="h5" style={{ fontWeight: 700,  color: "#000000", textAlign:"left", marginTop:"2rem"}}>Daily Tasks</Typography>
      <Box sx={{ width: "88%", height: "300px", backgroundColor: "#E5E8E8", padding: "20px", mt:3 , mb: 2, borderRadius:"10px",  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
        <Box sx={{width:"100%", height:"25%", backgroundColor:"#ffffff", borderRadius:"10px", display: "flex", marginTop: "0.5rem",cursor:"pointer" ,"&:hover": {transform: "scale(1.02)", transition: "transform 0.2s ease"}}}>
          <FaDotCircle style={{marginTop: "1.5rem", marginLeft:"0.5rem"}}/>
          <Typography variant="h6" style={{ fontWeight: 500,  color: "#000000", textAlign:"left", marginLeft:"1rem", marginTop:"1rem"}}>Personal Workout</Typography>
          <Typography variant="h6" style={{ fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"23rem", marginTop:"1rem"}}>10:30 am</Typography>
          <Box style={{display:"flex", backgroundColor:"#58D68D", borderRadius:"50px", width: "15%", height:"70%",  marginLeft:"22rem", marginTop:"0.5rem", textAlign:"center", cursor: "pointer"}}>
            <Typography variant="h6" style={{ fontWeight: 500,  color: "#000000", marginLeft: "2rem", marginTop: "0.5rem"}}>Completed </Typography>
            <FaCheckCircle style={{ fontSize: '28px',  color: '#000000',margin: '0 auto', marginTop: '0.7rem', textAlign: "right"}}/>
          </Box>
         
        </Box>
        <Box sx={{width:"100%", height:"25%", backgroundColor:"#ffffff", borderRadius:"10px", display: "flex", marginTop: "1.2rem",cursor:"pointer" ,"&:hover": {transform: "scale(1.02)", transition: "transform 0.2s ease"}}}>
          <FaDotCircle style={{marginTop: "1.5rem", marginLeft:"0.5rem"}}/>
          <Typography variant="h6" style={{ fontWeight: 500,  color: "#000000", textAlign:"left", marginLeft:"1rem", marginTop:"1rem"}}>Personal Workout</Typography>
          <Typography variant="h6" style={{ fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"23rem", marginTop:"1rem"}}>10:30 am</Typography>
          <Box style={{display:"flex", backgroundColor:"#F9E79F", borderRadius:"50px", width: "15%", height:"70%",  marginLeft:"22rem", marginTop:"0.5rem", textAlign:"center", cursor: "pointer"}}>
            <Typography variant="h6" style={{ fontWeight: 500,  color: "#000000", marginLeft: "2rem", marginTop: "0.5rem"}}> Upcoming</Typography>
            <BiSolidTimer style={{ fontSize: '30px',  color: '#000000',margin: '0 auto', marginTop: '0.7rem', textAlign: "right"}}/>
          </Box>
        </Box>
        <Box sx={{width:"100%", height:"25%", backgroundColor:"#ffffff", borderRadius:"10px", display: "flex", marginTop: "1.2rem",cursor:"pointer" ,"&:hover": {transform: "scale(1.02)", transition: "transform 0.2s ease"}}}>
          <FaDotCircle style={{marginTop: "1.5rem", marginLeft:"0.5rem"}}/>
          <Typography variant="h6" style={{ fontWeight: 500,  color: "#000000", textAlign:"left", marginLeft:"1rem", marginTop:"1rem"}}>Personal Workout</Typography>
          <Typography variant="h6" style={{ fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"23rem", marginTop:"1rem"}}>10:30 am</Typography>
          <Box style={{display:"flex", backgroundColor:"#EC7063", borderRadius:"50px", width: "15%", height:"70%",  marginLeft:"22rem", marginTop:"0.5rem", textAlign:"center", cursor: "pointer"}}>
            <Typography variant="h6" style={{ fontWeight: 500,  color: "#000000", marginLeft: "2rem", marginTop: "0.5rem"}}> Cancelled</Typography>
            <FaTimesCircle style={{ fontSize: '30px',  color: '#000000',margin: '0 auto', marginTop: '0.6rem', textAlign: "right"}}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
