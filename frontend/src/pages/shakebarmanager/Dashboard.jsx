import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend,  DoughnutController, ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { FaDotCircle, } from 'react-icons/fa';
import ShakebarmanagerSidebar from "../../components/ShakebarmanagerSidebar";
import ShakebarmanagerNavbar from "../../components/ShakebarmanagerNavbar";

const color1 = "#102B4C" //dark blue
const color2 = "#346E93" //light blue


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, DoughnutController, ArcElement);

const Dashboard = () => {

  const data = {
    labels: ['Whey Isolate', 'Calcium', 'Nytrowhey', 'Whey Protine', 'Gold Whey', 'Nytro Tech'],
    datasets: [{
      label: 'Sales',
      data: [10, 7, 6, 5, 4, 2, 2],
      backgroundColor: [`${color2}`],
      borderColor: [`${color2}`],
      borderWidth: 1
    }]
  };


  const income = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed','Thur','Fri', 'Sat'],
    datasets: [{
      label: 'Sales',
      data: [10000, 5000, 7000, 3200, 4500, 20000, 3800],
      backgroundColor: [`${color1}`],
      borderColor: [`${color1}`],
      borderWidth: 1,
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

  return (
    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <ShakebarmanagerSidebar sidebarLinkId = "1"/>
      </Box>
      
      <Box component="main" sx={{flex:1 }}>
        <Box>
          <ShakebarmanagerNavbar />
        </Box>
        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
        <Typography variant="h4" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Dashboard</Typography>
          <Box sx={{ display:"flex", width: "100%", height:"100%",marginTop:"2rem"}}> 

          <Box sx={{ width: "40%", height: "50%", padding: "20px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', borderRadius:"10px", mt:1, ml: "0.5rem" }}>
              <Typography variant="h6" style={{ fontWeight: 700, marginTop: "-1rem", color: "#000000" }}>Last Week Income</Typography>
              <Bar data={income} options={options} />
            </Box>


            <Box sx={{ width: "40%", height: "50%", padding: "20px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', borderRadius:"10px", mt:1, ml: "8rem" }}>
              <Typography variant="h6" style={{ fontWeight: 700, marginTop: "-1rem", color: "#000000" }}>Mostly Bought Items</Typography>
              <Bar data={data} options={options} />
            </Box>

          </Box>
          
          
          <Typography variant="h5" style={{ fontWeight: 700,  color: "#000000", textAlign:"left", marginTop:"4rem"}}>Today Orders</Typography>
          <Box sx={{ width: "94%", backgroundColor: "#E5E8E8", padding: "20px", mt:3 , mb: 2, borderRadius:"10px",  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
            <label style={{ fontSize: "19px",fontWeight: 700,  color: "#000000", textAlign:"left", marginLeft:"4rem", marginTop:"1rem"}}>Item Name</label>
            <label style={{ fontSize: "19px",fontWeight: 700,  color: "#000000", textAlign:"left", marginLeft:"21rem", marginTop:"1rem"}}>Quantity</label>
            <label style={{ fontSize: "19px",fontWeight: 700,  color: "#000000", textAlign:"left", marginLeft:"19rem", marginTop:"1rem"}}>Price(LKR)</label>
            
            <Box sx={{width:"100%", height:"20%", backgroundColor:"#ffffff", borderRadius:"10px", display: "flex", marginTop: "0.5rem",cursor:"pointer" ,"&:hover": {transform: "scale(1.02)", transition: "transform 0.2s ease"}}}>
              <FaDotCircle style={{marginTop: "1.3rem", marginLeft:"1rem", marginRight:"1rem", color:"#000000"}}/>
              <Typography variant="h6" style={{ fontSize: "18px",fontWeight: 500,  color: "#000000", textAlign:"left", marginLeft:"1rem", marginTop:"1rem"}}>Whey Protine</Typography>
              <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"22rem", marginTop:"1rem"}}>2</Typography>
              <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"22.5rem", marginTop:"1rem"}}>8600.00</Typography>
            </Box>
            <Box sx={{width:"100%", height:"20%", backgroundColor:"#ffffff", borderRadius:"10px", display: "flex", marginTop: "1rem",cursor:"pointer" ,"&:hover": {transform: "scale(1.02)", transition: "transform 0.2s ease"}}}>
              <FaDotCircle style={{marginTop: "1.3rem", marginLeft:"1rem", marginRight:"1rem", color:"#000000"}}/>
              <Typography variant="h6" style={{ fontSize: "18px",fontWeight: 500,  color: "#000000", textAlign:"left", marginLeft:"1rem", marginTop:"1rem"}}>Nytro Whey</Typography>
              <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"22.7rem", marginTop:"1rem"}}>3</Typography>
              <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"22.5rem", marginTop:"1rem"}}>9800.00</Typography>
            </Box>
            <Box sx={{width:"100%", height:"20%", backgroundColor:"#ffffff", borderRadius:"10px", display: "flex", marginTop: "1rem",cursor:"pointer" ,"&:hover": {transform: "scale(1.02)", transition: "transform 0.2s ease"}}}>
              <FaDotCircle style={{marginTop: "1.3rem", marginLeft:"1rem", marginRight:"1rem", color:"#000000"}}/>
              <Typography variant="h6" style={{ fontSize: "18px",fontWeight: 500,  color: "#000000", textAlign:"left", marginLeft:"1rem", marginTop:"1rem"}}>Whey Isolate</Typography>
              <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"22rem", marginTop:"1rem"}}>1</Typography>
              <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"22.5rem", marginTop:"1rem"}}>4300.00</Typography>
            </Box>
          
          </Box>
        </Box>
      </Box>
     
    </Box>
  );
};

export default Dashboard;