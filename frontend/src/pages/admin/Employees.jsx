import React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid, Button } from "@mui/material";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend,  DoughnutController, ArcElement } from 'chart.js';
import { LineChart } from "@mui/x-charts/LineChart";
import { Bar, Doughnut } from 'react-chartjs-2';
import { FaAddressCard, FaUserEdit, FaUserTie} from 'react-icons/fa';
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";
import {useEffect, useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

const color1 = "#102B4C" //dark blue
const color2 = "#346E93" //light blue
const color3 = "#96CDEF" //lighter blue
const color4 = "#DC1E2A" //red 


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, DoughnutController, ArcElement);

const Employees = () => {

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const navigate = useNavigate();
  const[todayReceptionistCount, setTodayReceptionistCount]=useState(0);
  const[todayShakebarCount, setTodayShakebarCount]=useState(0);

  useEffect(() => {
    if((localStorage.getItem('userType') !== '"Admin"')){
      navigate('/login');
    }

    getTodayReceptionistCount();
    getTodayShakebarCount();
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

  const getTodayReceptionistCount = async () => {
    try {
      const res2 = await axios.get('http://localhost:8000/api/receptionists/count/today');
      setTodayReceptionistCount(res2.data.data);
      
    } catch (error) {
      console.log('error message: ',error.data);
    }
  
  };

  const getTodayShakebarCount = async () => {
    try {
      const res2 = await axios.get('http://localhost:8000/api/shakebarmanagers/count/today');
      setTodayShakebarCount(res2.data.data);
      
    } catch (error) {
      console.log('error message: ',error.data);
    }
  
  };

  const data = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Sales',
      data: [50, 90, 150, 200, 260, 300, 400, 500],
      backgroundColor: [`${color1}`, `${color3}`, `${color4}`, `${color2}`, `${color1}`, `${color3}`, `${color4}`],
      borderColor: [`${color1}`, `${color3}`, `${color4}`, `${color2}`, `${color1}`, `${color3}`, `${color4}`],
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
      backgroundColor: [`${color3}`,`${color2}`, `${color4}`, `${color1}`],
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

  const pData = [100000, 120000, 125000, 150000, 200000, 220000, 230000, 150000 ];
   
    const xLabels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        
        
    ];

  return (
    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <AdminSidebar sidebarLinkId = "4"/>
      </Box>
      
      <Box component="main" sx={{flex:1 }}>
      <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <AdminNavbar />
        </div>
        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
          <Box sx={{display:"flex", marginTop:"5rem", justifyContent:"space-between"}}>
            <Typography variant="h4" style={{ fontWeight: 700, textAlign:"left" }}>Employees</Typography>
          </Box>
        
          
            <Box sx={{ display:"flex", marginTop:"2rem" }}>
                <Grid md={4} sx={{display:"flex", padding:"1%", marginRight:"8%", width:"25%", borderRadius:"10px", justifyContent:"center", alignContent:"center", textAlign:"center", cursor:"pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px', transition: "ease 0.5s"}}}>
                    <Box sx={{marginRight:""}}>
                        <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>3</Typography>
                        <Typography variant="h6" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Receptionists</Typography>
                    </Box>
                    <Box sx={{marginTop:"10%", marginLeft:"20%"}}>
                         <FaUserEdit size={50}/>
                    </Box>
                    
                </Grid>    

                <Grid md={4} sx={{display:"flex", padding:"1%", marginRight:"8%", width:"25%", borderRadius:"10px", justifyContent:"center", alignContent:"center", textAlign:"center", cursor:"pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px', transition: "ease 0.5s"}}}>
                    <Box sx={{marginRight:""}}>
                        <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>2</Typography>
                        <Typography variant="h6" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Shakebar Managers</Typography>
                    </Box>
                    <Box sx={{marginTop:"10%", marginLeft:"10%"}}>
                         <FaUserTie size={50}/>
                    </Box>
                    
                </Grid>    
 
            </Box>  
            <Box sx={{ width: "100%", height:"80%", marginTop:"5%"}}> 
                <Box sx={{display:"flex", marginBottom:"3%"}}>
                    <Typography variant="h6" style={{ fontWeight: 700, marginTop: "0%", color: "#000000" }}>Receptionists</Typography>
                    <Box sx={{ marginLeft:"2%", backgroundColor:color2,marginTop:"-0.4%", color:"#ffffff", borderRadius:"50px", padding:"1%", cursor:"pointer"}}>+{todayReceptionistCount}</Box>
                    <Typography variant="body2" style={{ fontWeight: 500, marginTop:"0.7%", color: color2, marginLeft:"1%" }}>47 are logged in </Typography>
                    <Link to="/admin/receptionView/Reception" style={{textDecoration:"none", color:"black", marginLeft:"57%"}}>
                        <Button variant="outlined" style={{ color:color2, fontWeight: 700}}>View All</Button>
                    </Link>
                </Box>
                
            </Box>    
            <Box sx={{ width: "100%", height:"80%", marginTop:"5%"}}> 
                <Box sx={{display:"flex", marginBottom:"3%"}}>
                      <Typography variant="h6" style={{ fontWeight: 700, marginTop: "0%", color: "#000000" }}>Shakebar Managers</Typography>
                      <Box sx={{ marginLeft:"2%", backgroundColor:color1,marginTop:"-0.4%", color:"#ffffff", borderRadius:"50px", padding:"1%", cursor:"pointer"}}>+{todayShakebarCount}</Box>
                      <Typography variant="body2" style={{ fontWeight: 500, marginTop:"0.7%", color: color1, marginLeft:"1%" }}>23 are logged in </Typography>
                      <Link to="/admin/receptionView/Shake Bar Manager" style={{textDecoration:"none", color:"black", marginLeft:"52%"}}>
                        <Button variant="outlined" style={{ color:color2, fontWeight: 700}}>View All</Button>
                    </Link>
                </Box>
                
            </Box>    
          
        </Box>
      </Box>
     
    </Box>
  );
};

export default Employees;
