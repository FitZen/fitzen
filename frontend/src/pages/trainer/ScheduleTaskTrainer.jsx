import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import Sidebar from "../../components/TrainerSidebar";
import Navbar from "../../components/TrainerNavbar";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {FaRegTimesCircle} from 'react-icons/fa';
import { GiConfirmed } from "react-icons/gi";
import Modal from '@mui/material/Modal';

const color4 = "#DC1E2A" //red

const ScheduleTask = () => {

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [taskDetails, setTaskDetails] = useState([]); //[{date: "2021-10-01", task: "Personal Workout", time: "10:00 a.m - 12:00 p.m", type: "Physical"}
  const [openFirstPopup, setOpenFirstPopup] = React.useState(false);
  const handleOpenFirstPopup = () => setOpenFirstPopup(true);
  const handleCloseFirstPopup = () => setOpenFirstPopup(false);


  const currentDate = new Date();

  const {clickedDay} = useParams();
  const clickedDate = new Date(clickedDay);
  //const dayOfMonth = clickedDate.getDate();

  //get next day as the clicked day because of dates problem in react
  const nextDay = new Date(clickedDate);
  nextDay.setDate(clickedDate.getDate() + 1);
  const dayOfMonth = nextDay.getDate();

  // Format the next day as a string (e.g., "YYYY-MM-DD")
  const formattedNextDay = nextDay.toISOString().split('T')[0];
  const dayName = getDayName(nextDay.getDay());

  function getDayName(dayIndex) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayIndex];
  }

  function convertTo12HourTime(time24Hour) {
    const [hours, minutes] = time24Hour.split(':');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12) || 12;
    return `${formattedHours}:${minutes} ${ampm}`;
  }

  console.log("Date :", clickedDay);
    console.log("Day :", dayName);
    console.log('next day:', formattedNextDay);

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Trainer"')){
        navigate('/login');
    }

    //getUserDetails();
    getTaskDetails();
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

  const getTaskDetails = async () => {

    const reqData = {
      userID : JSON.parse(localStorage.getItem('userID')),
      clickedDate : formattedNextDay
  };

  function convertTo12HourTime(time24Hour) {
    const [hours, minutes] = time24Hour.split(':');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12) || 12;
    return `${formattedHours}:${minutes} ${ampm}`;
  }
      
  
  try {
  
    const res = await axios.get("http://localhost:8000/api/schedule/gettasksdaybased",{params:reqData});
    console.log("Dates : ",res.data.data);
    setTaskDetails(res.data.data);

    // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
  } catch (error) {
    console.error("Retrieving failed:", error);
    // Handle error scenarios here
  }
}

  const color2 = "#346E93" //light blue

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Not completed'); // Default value

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (value) => {
    setSelectedValue(value);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  const handleCompleted = async () => {
    handleCloseFirstPopup();
  }

  const handleCancel = async () => {
    handleCloseFirstPopup();
  }

  const dropdownOptions = ['Not completed','Complete', 'Cancel']; 
  const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "35%",
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    p: 4,
};

  return (


    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <Sidebar sidebarLinkId = "3"/>
      </Box>
      
      <Box component="main" sx={{flex:1 }}>
      <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <Navbar />
        </div>

        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
           
           <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Tasks</Typography>
           <Box sx={{width:"90%"}}>
                <Typography variant="body2" style={{ fontWeight: 600, marginTop: "2rem", textAlign:"right" }}>{dayName} {dayOfMonth}</Typography>
                <hr />
                {taskDetails.map((task) => (	
                    <Box sx={{display:"flex", width:"100%",marginTop:"2%", justifyContent:"space-between", borderRadius:"10px", padding:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
                      <Typography variant="body2" style={{ fontWeight: 500, textAlign:"left" }}>{convertTo12HourTime(task.start_time)}</Typography>
                      <Typography variant="body2" style={{ fontWeight: 500, textAlign:"left" }}>{task.title}</Typography>
                      {/* <Typography variant="body2" style={{ fontWeight: 500, textAlign:"left", marginLeft:"30%" }}>Completed</Typography> */}
                      {/* <Box sx={{width:"10%", borderRadius:"5px", padding:"0.2%", marginLeft:"30%", backgroundColor:color2}}>
                          <Typography variant="body2" style={{ fontWeight: 500, textAlign:"center", color:"white" }}>Completed</Typography>
                      </Box> */}
                      <Box
                          sx={{
                          width: '10%',
                          borderRadius: '5px',
                          padding: '0.3%',
                          backgroundColor: color2,
                          cursor: 'pointer',
                          }}
                          onClick={handleOpenFirstPopup}
                      >
                          <Typography variant="body2" style={{ fontWeight: 500, textAlign: 'center', color: 'white' }}>
                            {task.status}
                          </Typography>
                      </Box>
  
                  </Box>
                ))}
               
                {isDropdownOpen && (
                        <div
                        style={{
                            position: 'relative',
                            marginLeft: "89%",
                            width: '11.5%',
                            marginTop: '-1%',
                            backgroundColor: 'white',
                            color: 'black',
                            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                            borderRadius: '5px',
                            zIndex: 1,
                            
                        }}
                        >
                        {dropdownOptions.map((option) => (
                            <div
                            key={option}
                            onClick={() => handleItemClick(option)}
                            style={{
                                padding: '8px',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#f0f0f0'; // Change background color on hover
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'white'; // Restore the original background color
                              }}
                            >
                            {option}
                            </div>
                        ))}
                        </div>
                    )}
           </Box>
        
        </Box>
        
      </Box>

      
      <Modal
            open={openFirstPopup}
            onClose={handleCloseFirstPopup}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <FaRegTimesCircle onClick={handleCloseFirstPopup} style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA" ,}}
                                  onMouseEnter={(e) => {
                                      e.target.style.color = "#D71313";
                                      e.target.style.transform = "scale(1)";
                                  }}
                                  onMouseLeave={(e) => {
                                      e.target.style.color = "#D8D9DA";
                                      e.target.style.transform = "scale(1)";
                                  }}
                />
                <Box sx={{display:"flex", textAlign:"center", justifyContent:"center"}}>
                    <GiConfirmed  style={{marginTop:"0%", color:"red", fontSize:"2rem"}}/>
                    <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight="700" textAlign="center">
                        &nbsp; Mark your task as...
                    </Typography>
                </Box>
             
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Button variant="contained" onClick={handleCompleted} style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%"}}>Complete</Button>
                    <Button variant="contained" onClick={handleCancel} style={{backgroundColor:color4, color:"white", marginTop:"7%", marginBottom:"1%",marginLeft:"1rem"}}>Cancel</Button>
                </Box>
            </Box>
        </Modal>
     
    </Box>

  );
};

export default ScheduleTask;
