import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Notification = () => {
  const [selectedMap, setSelectedMap] = React.useState({});
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [notificationData, setNotificationData] = useState([]);

  const handleToggle = (notificationId) => {
    setSelectedMap(prevSelectedMap => ({
      ...prevSelectedMap,
      [notificationId]: !prevSelectedMap[notificationId]
    }));
  };

  const navigate = useNavigate();

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Virtual Member"' && localStorage.getItem('userType') !== '"Physical Member"')){
      navigate('/login');
    }

    viewNotifications();
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

  const viewNotifications = async () => {
    try {
     
      const res = await axios.get("http://localhost:8000/api/announcements/getannouncements");
      console.log(res.data.data);
      setNotificationData(res.data.data);

      // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
    } catch (error) {
      console.error("Retrieving failed:", error);
      // Handle error scenarios here
    }
  };


  const notifications = [
    {
      id: 1,
      title: "Your Payments",
      description: "You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.",
    },
    {
      id: 2,
      title: "Your Payments",
      description: "You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.",
    },
    {
      id: 3,
      title: "Your Payments",
      description: "You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.",
    },
    {
      id: 4,
      title: "Your Payments",
      description: "You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.",
    },
    {
      id: 5,
      title: "Your Payments",
      description: "You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.",
    },
    {
      id: 6,
      title: "Your Payments",
      description: "You have to pay this amount of money on or before 28th of August. Please consider this and pay the fees.",
    },
  ]



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
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Notification</Typography>
          <Box sx={{  width: "90%", height:"80vh", padding:"1rem", overflowY:"auto", flexWrap:"wrep", borderRadius:"10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}> 
              
            {notificationData.map((notification) => (
              <Box sx={{display:"flex", padding:"1rem", borderRadius:"10px",marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border:"2px solid white", '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>

                  <Box sx={{display:"flex", flexDirection:"column",  width:"2%", borderRadius:"5px", backgroundColor:"#346E93"}}></Box>
                  <Box sx={{marginLeft:"5%", marginRight:"5%", width:"85%", borderRadius:"10px", padding:"1rem", border:"1px solid #96CDEF"}}>
                    <Typography variant="h6" style={{ fontWeight: 700, textAlign:"left" }}>{notification.title}</Typography>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>{notification.content}</Typography>
                    <Typography variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left", color: "grey", fontSize:"11px" }}>Date: {new Date(notification.posted_on).toLocaleDateString()}</Typography>
                  </Box>
                  <ToggleButton
                    value="check"
                    selected={selectedMap[notification.id]}
                    onChange={() => {
                      handleToggle(notification.id);
                    }}
                    sx={{height:"50%", marginTop:"2%", color: selectedMap[notification.id] ? "#ffffff" : "#346E93",backgroundColor: selectedMap[notification.id] ? "#346E93" : "#ffffff"  , border:"1px solid #346E93", borderRadius:"5px", '&:hover': {backgroundColor:"#346E93",color:"#ffffff",  transition: "ease 0.5s"}}}
                  >
                    <CheckIcon />
                  </ToggleButton>

              </Box>
            ))}
          
              
          </Box>
        </Box>
      </Box>
     
    </Box>
  );
};

export default Notification;
