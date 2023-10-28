import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend,  DoughnutController, ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import {FaClock, FaCalendarCheck, FaRegAddressCard, FaDotCircle, FaCheckCircle, FaTimesCircle} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {IoFastFoodOutline}  from 'react-icons/io5';
import {GoGoal} from 'react-icons/go';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const color1 = "#102B4C" //dark blue
const color2 = "#346E93" //light blue
const color3 = "#96CDEF" //lighter blue
const color4 = "#DC1E2A" //red 


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, DoughnutController, ArcElement);

const Dashboard = () => {

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [taskDetails, setTaskDetails] = useState([]);
  const [nextTask, setNextTask] = useState({});

  const navigate = useNavigate();

  function convertTo12HourTime(time24Hour) {
    const [hours, minutes] = time24Hour.split(':');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12) || 12;
    return `${formattedHours}:${minutes} ${ampm}`;
  }
      

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Virtual Member"' && localStorage.getItem('userType') !== '"Physical Member"')){
      navigate('/login');
    }

    getCurrentDayTaskDetails();
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

  const getCurrentDayTaskDetails = async () => {
      
      const reqData = {
        userID : JSON.parse(localStorage.getItem('userID')),
    };


    try {
    
      const res = await axios.get("http://localhost:8000/api/schedule/getcurrentdaytasks",{params:reqData});
      const res2 = await axios.get("http://localhost:8000/api/schedule/getnexttask",{params:reqData});
      setNextTask(res2.data.data);
      console.log("Dates : ",res.data.data);
      setTaskDetails(res.data.data);

      // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
    }
    catch (error) {
      console.error("Retrieving failed:", error);
      // Handle error scenarios here
    }
  }

  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    datasets: [{
      label: 'Sales',
      data: [5, 2, 3, 1, 4, 2, 3],
      backgroundColor: [`${color2}`],
      borderColor: [`${color2}`],
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

  return (
    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <Sidebar sidebarLinkId = "1"/>
      </Box>
      
      <Box component="main" sx={{flex:1 }}>
      <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <Navbar />
        </div>
        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
        <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Dashboard</Typography>
          <Box sx={{ display:"flex", width: "100%", height:"100%"}}> 

            <Box>
              <Box sx={{ width: "350px", height: "100%", borderRadius: "10px", mt: 1, justifyContent: "center", alignItems: "center" }}>
                <div style={{ textAlign: "center",justifyContent:"center", height: "55%", width: "100%",padding: "1.5rem",borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}>
                  <Typography variant="h6" style={{ fontWeight: 700,  color: "#000000", marginTop:"-1rem" }}>Session Stats</Typography>
                  <Doughnut data={DoughnutData} options={DoughnutOptions} style={{marginLeft:"3.2rem", height:"15rem"}}/>
                </div>
                <Box sx={{boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',borderRadius:"10px", marginTop:"1rem", width: "100%", height:"35%", padding:"0.5rem", justifyContent:"center",textAlign:"center"}}>
                  <Typography variant="h6" style={{ fontWeight: 700,  color: "#000000"}}>Next Task</Typography>
                  <FaCalendarCheck size={50} />
                  <Typography variant="h6" style={{ fontWeight: 500,fontSize: "1rem",  color: "#000000" }}>Task : {nextTask.title}</Typography>
                  <Typography variant="h6" style={{ fontWeight: 500, fontSize: "1rem", color: "#000000" }}>Time : {convertTo12HourTime(nextTask.start_time)}</Typography>
                </Box>
              </Box>

            </Box>
            <Box sx={{ width: "62%", height: "50%", padding: "20px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', borderRadius:"10px", mt:1, ml: "2rem" }}>
              <Typography variant="h6" style={{ fontWeight: 700, marginTop: "-1rem", color: "#000000", textAlign:"center" }}>Current Week Schedule</Typography>
              <Bar data={data} options={options} />
            </Box>

          </Box>
          
          
          
          <Box sx={{display: "flex", width: "100%", height: "250px", backgroundColor: "#ffffff",  mt:5 , mb: 2, borderRadius:"10px", paddingTop:"1rem"}}>
            <Link to="/member/packages" style={{textDecoration:"none", color:"#000000", mr:50}}>	
              <Box sx={{width:"100%", height:"90%", bgcolor: "#ffffff", borderRadius:"10px", mr:26, cursor: "pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"}}}>
                <FaRegAddressCard size={120} style={{textAlign:"left", marginLeft:"5%", marginTop:"5%"}} />
                <Typography variant="h5" style={{ fontWeight: 700,  color: "#000000", textAlign:"center", marginLeft:"35%"}}>Membership</Typography>
              </Box>
            </Link>
            <Link to="/member/mealplan" style={{textDecoration:"none", color:"#000000", mr:50}}>
              <Box sx={{width:"100%", height:"90%", bgcolor: "#ffffff", borderRadius:"10px",ml:4, mr:24, cursor: "pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"}}}>
                <IoFastFoodOutline size={120} style={{textAlign:"left", marginLeft:"5", marginTop:"5%"}}/>
                <Typography variant="h5" style={{ fontWeight: 700,  color: "#000000", textAlign:"center", marginLeft:"35%"}}>Meal Plan</Typography>
              </Box>
            </Link>
            <Link to="/member/goals" style={{textDecoration:"none", color:"#000000", mr:50}}>
              <Box sx={{width:"100%", height:"90%", bgcolor: "#ffffff", borderRadius:"10px" , ml:8, mr:20.5, cursor: "pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px', transition: "ease 0.5s"}}}>
                <GoGoal size={120} style={{textAlign:"left", marginLeft:"5%", marginTop:"5%"}}/>
                <Typography variant="h5" style={{ fontWeight: 700,  color: "#000000", textAlign:"center", marginLeft:"35%"}}>Goals</Typography>
              </Box>
            </Link>
            
          </Box>

          <Typography variant="h5" style={{ fontWeight: 700,  color: "#000000", textAlign:"left", marginTop:"2rem"}}>Daily Tasks</Typography>
          <Box sx={{ width: "94%", backgroundColor: "#E5E8E8", padding: "20px", mt:3 , mb: 2, borderRadius:"10px",  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
            {taskDetails.map((task) => (
              <Box sx={{width:"100%", height:"25%", justifyContent:"space-between", backgroundColor:"#ffffff", borderRadius:"10px", display: "flex", marginTop: "0.5rem",cursor:"pointer" ,"&:hover": {transform: "scale(1.02)", transition: "transform 0.2s ease"}}}>
                <FaDotCircle style={{marginTop: "0.8rem", marginLeft:"1rem", color:"#000000"}}/>
                <Typography variant="h6" style={{ fontSize: "16px",fontWeight: 500,  color: "#000000", textAlign:"left", marginTop:"0.5rem"}}>{task.title}</Typography>
                <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"18rem", marginTop:"0.5rem"}}>{convertTo12HourTime(task.start_time)}</Typography>
                {task.start_time > Date.now() ?
                <Box style={{display:"flex", backgroundColor:`${color3}`, borderRadius:"50px", width: "15%", height:"68%",  marginLeft:"30%", marginTop:"0.3rem", marginBottom:"0.3rem", textAlign:"center", cursor: "pointer"}}>
                  <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500,  color: "#000000", marginLeft: "1rem", marginTop: '0.1rem'}}>Time passed </Typography>
                  <FaCheckCircle style={{ fontSize: '1.2rem',  color: '#000000',margin: '0 auto', marginTop: '0.3rem', textAlign: "right"}}/>
                </Box> :
                <Box style={{display:"flex", backgroundColor:`${color2}`, borderRadius:"50px", width: "15%", height:"68%",  marginLeft:"30%", marginTop:"0.3rem", marginBottom:"0.3rem", textAlign:"center", cursor: "pointer"}}>
                  <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500,  color: "#000000", marginLeft: "1rem", marginTop: '0.1rem'}}>Pending </Typography>
                  <FaClock style={{ fontSize: '1.2rem',  color: '#000000',margin: '0 auto', marginTop: '0.3rem', textAlign: "right"}}/>
                </Box>
              }
                
              
              </Box>
            ))}
          
          </Box>
        </Box>
      </Box>
     
    </Box>
  );
};

export default Dashboard;
