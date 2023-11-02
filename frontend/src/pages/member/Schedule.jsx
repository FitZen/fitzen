import React, { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import { Typography, InputLabel, TextField, Button} from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../styles/member/ScheduleStyles.css";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from "@mui/x-date-pickers";
import axios from 'axios';
import Swal from 'sweetalert2'

const color2 = "#346E93" //light blue

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(currentDate.getFullYear());
  const [currMonth, setCurrMonth] = useState(currentDate.getMonth());
  const [timeValue, setTimeValue] = React.useState(null);
  const [dateValue, setDateValue] = React.useState(null);

  const [taskDates, setTaskDates] = useState([]);

  const [newTask, setNewTask] = useState({
    title: "",
    content: "",
  });

  //for dates picking
  const [startDateError, setStartDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  
  const [submitted, setSubmitted] = useState(false);

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Virtual Member"' && localStorage.getItem('userType') !== '"Physical Member"')){
      navigate('/login');
    }

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
        userID : JSON.parse(localStorage.getItem('userID'))
    };
        
    
    try {
    
      const res = await axios.get("http://localhost:8000/api/schedule/gettasksdates",{params:reqData});
      console.log("Dates : ",res.data.data);
      setTaskDates(res.data.data);

      // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
    } catch (error) {
      console.error("Retrieving failed:", error);
      // Handle error scenarios here
    }
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleDateClick = (clickedDay) => {
    const clickedDate = new Date(currYear, currMonth, clickedDay);

    // Format the clicked date as a string (e.g., "YYYY-MM-DD")
    const formattedDate = clickedDate.toISOString().split('T')[0];

    navigate(`/member/scheduletask/${formattedDate}`);
  }



  const renderCalendar = () => {
    const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    const days = [];

    for (let i = firstDayofMonth; i > 0; i--) {
      days.push(
        <li key={`prev-${i}`} className="inactive">
          {lastDateofLastMonth - i + 1}
        </li>
      );
    }
    

    for (let i = 1; i <= lastDateofMonth; i++) {
      const isToday =
        i === currentDate.getDate() &&
        currMonth === currentDate.getMonth() &&
        currYear === currentDate.getFullYear();
    
      const formattedDate = `${currYear}-${(currMonth + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
      const isColored = taskDates.includes(formattedDate);
    
      days.push(
        <li
          key={`current-${i}`}
          className={`${
            isToday ? "active" : isColored ? "task-date" : ""
          }`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </li>
      );
    }
    

    for (let i = lastDayofMonth; i < 6; i++) {
      days.push(
        <li key={`next-${i}`} className="inactive">
          {i - lastDayofMonth + 1}
        </li>
      );
    }

    return days;
  };

  const handlePrevNextClick = (iconId) => {
    let newMonth = currMonth;
    let newYear = currYear;

    if (iconId === "prev") {
      newMonth = currMonth - 1;
      if (newMonth < 0) {
        newMonth = 11;
        newYear = currYear - 1;
      }
    } else {
      newMonth = currMonth + 1;
      if (newMonth > 11) {
        newMonth = 0;
        newYear = currYear + 1;
      }
    }
    setCurrMonth(newMonth);
    setCurrYear(newYear);
  };

    //get form inputs
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewTask((prevGoal) => ({
        ...prevGoal,
        [name]: value,
      }));
  
    };

  const handleSubmit = async () => {

    console.log("handleSubmit called");

    if (!newTask.title || !newTask.content || !dateValue || !timeValue ) {
      // Display error messages or styles for empty fields
      setSubmitted(true);
      return;
    }

    if (!dateValue) {
        setStartDateError("Start date is required");
        return;
    }

    try {
      const payload = {
        title: newTask.title,
        description: newTask.content,
        start_date: dateValue.format("YYYY-MM-DD"),
        start_time: timeValue.format("HH:mm:ss"),
        userID: JSON.parse(localStorage.getItem('userID')),
      };
      
      console.log("payload : ", payload);

      const res2 = await axios.post(
        "http://localhost:8000/api/schedule/addmemberschedule",
        payload
      );
  
      if (res2.status === 201) {
        setNewTask({ title: "", content: "" }); // Clear the form
        setSubmitted(false);
        setStartDateError(""); // Clear any previous errors
        setDateValue(null);
        setTimeValue(null);
        setTimeError("");
        getTaskDetails();
      }

      Swal.fire({
        icon: 'success',
        title: 'Task Added Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      console.error("Task Adding failed:", error.response.data.message);

      if(error.response.data.message === "Time is already allocated!"){
        setTimeError("Time is already allocated!");
        Swal.fire({
          icon: 'error',
          title: 'Time is already allocated!',
          showConfirmButton: true,
        })
      } else if(error.response.data.message === "You cannot allocate a past time!"){
        setStartDateError("You cannot allocate a past time!");
        Swal.fire({
          icon: 'error',
          title: 'You cannot allocate a past time!',
          showConfirmButton: true,
        })
      }
      
      
      // Handle error scenarios here
    }
  };


  return (
    <Box sx={{ flex: "1", display: "flex", mb: 2 }}>
      <Box>
        <Sidebar sidebarLinkId = "3"/>
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
      <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <Navbar />
        </div>
        <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
          <Typography
            variant="h4"
            style={{ fontWeight: 700, marginTop: "5rem", textAlign: "left" }}
          >
            Schedule
          </Typography>
          <Box sx={{marginTop:"4%", display:"flex"}}>
            <Box sx={{ width: "50%", justifyContent: "center" }}>
              <div className="wrapper">
                <header>
                
                  <div className="icons">
                  <p className="current-date">
                      {`${months[currMonth]} ${currYear}`}
                    </p>
                    <span
                      id="prev"
                      className="material-symbols-rounded"
                      onClick={() => handlePrevNextClick("prev")}
                    >
                      <FaChevronLeft />
                    </span>
                    
                    <span
                      id="next"
                      className="material-symbols-rounded"
                      onClick={() => handlePrevNextClick("next")}
                    >
                      <FaChevronRight />
                    </span>
                  </div>
                </header>
                <div className="calendar">
                  <ul className="weeks">
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                  </ul>
                  <ul className="days">{renderCalendar()}</ul>
                </div>
              </div>
            </Box>

            <Box sx={{ width: "50%", height:"79vh", justifyContent: "center", alignItems:"center" }}>
              <Box sx={{width:"60%", height:"100%",justifyContent:"center", padding:"3%", paddingLeft:"8%", marginLeft:"20%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',borderRadius:"10px",}}>
                <Typography variant="h5" sx={{textAlign:"center", fontWeight:"700", marginLeft:"-2%"}}> Personal Workout</Typography>
                <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%",color:"black" }}>Task:</InputLabel>
                <TextField variant="outlined" name="title" value={newTask.title} onChange={handleInputChange} error={submitted && !newTask.title} helperText={submitted && !newTask.title ? "Title is required":""} inputProps={{style: {height: 15, width:230, borderRadius:"5px", outline:"none"}}}/>
                <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%",color:"black" }}>Date:</InputLabel>
                <Box sx={{maxWidth:"450px"}}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker 
                          label=""
                          value={dateValue}
                          style={{width:"100px"}}
                          onChange={(newValue) => {
                            setDateValue(newValue);
                            setStartDateError("");
                          }} 
                          disablePast
                          renderInput={(params) => (
                            <TextField 
                                name="start_date"
                                error={submitted && !dateValue} 
                                helperText={(submitted && !dateValue) ? "Date is required" : ""}  
                                {...params}  
                            />
                            )}
                      />
                  </LocalizationProvider>
                </Box>
                
                <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%",color:"black" }}>Time:</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="Select Time"
                    value={timeValue} // Your value state for the selected time
                    onChange={(newValue) => {
                      setTimeValue(newValue);
                      setTimeError("");
                    }} // Your onChange handler
                    renderInput={(params) => (
                      <TextField
                        name="start_time"
                        error={submitted && !timeValue}
                        helperText={(submitted && !timeValue) ? "Time is required" : ""}
                        {...params}
                      />
                    
                    )}
                  />
                </LocalizationProvider>
                <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%",color:"black" }}>Description:</InputLabel>
                <TextField variant="outlined" name="content" value={newTask.content} onChange={handleInputChange} error={submitted && !newTask.content} helperText={submitted && !newTask.content ? "Description is required" : ""} multiline rows="1" inputProps={{style: {height: 100, width:230, borderRadius:"5px", outline:"none"}}}/>

                <Button variant="contained" onClick={handleSubmit}  style={{marginTop:"5%",backgroundColor: color2, justifyContent:"center"}}> Add  </Button>
              </Box>
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Schedule;
