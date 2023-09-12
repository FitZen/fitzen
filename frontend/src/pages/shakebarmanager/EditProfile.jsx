import React from "react";
import Box from "@mui/material/Box";
import { InputLabel, Typography, Select, MenuItem, Button } from "@mui/material";
import {FaTelegram, FaFeatherAlt, FaCamera} from 'react-icons/fa';
import ProfileImg from '../../assets/photo-1633332755192-727a05c4013d.jpg';
import {PiMedalFill} from 'react-icons/pi';
import Sidebar from "../../components/ShakebarmanagerSidebar";
import Navbar from "../../components/ShakebarmanagerNavbar";
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
import {Grid} from '@mui/material';
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const color1 = "#102B4C" //dark blue
const color2 = "#346E93" //light blue
const color3 = "#96CDEF" //lighter blue
const color4 = "#DC1E2A" //red 

const Profile = () => {

  const [gender, setGender] = React.useState('');
  const [value, setValue] = React.useState(null);
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Shake Bar Manager"')){
      navigate('/login');
    }

    getUserDetails();
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

  const getUserDetails = async () => {
    try {
      const reqData = {
        userID: JSON.parse(localStorage.getItem('userID')),
        userType: JSON.parse(localStorage.getItem('userType')),
      };
      const res2 = await axios.get('http://localhost:8000/api/users/details',{params:reqData});
      setUserData(res2.data.data);
      
    } catch (error) {
      console.log('error message: ',error.data);
    }
  
  };


  const handleChange = (event) => {
    setGender(event.target.value);
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
        <Box sx={{ paddingLeft:"5rem", flex:1, width:"100%"}}>
           
        <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Edit Profile</Typography>
        <Grid container spacing={2} style={{marginTop:"1rem", width:"100%"}}>
            <Grid item xs={12} md={12} sx={{display:"flex", justifyContent:"center"}}>
                <Grid md={5} sx={{marginRight:"3%", display:"flex"}}>
                    <img src={ProfileImg} alt="Profile" width="350px"  style={{borderRadius:"10px", marginTop:"0.5rem"}}/>
                    <FaCamera size={35} style={{cursor:"pointer"}}/>
                </Grid>    
                <Grid md={5} sx={{marginTop:"0.5rem"}}>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>First Name:</InputLabel>
                    <TextField variant="outlined" value={userData.first_name} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Last Name:</InputLabel>
                    <TextField variant="outlined" value={userData.last_name} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>NIC:</InputLabel>
                    <TextField variant="outlined" value={userData.nic} disabled={true} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Date of Birth:</InputLabel>
                    <TextField variant="outlined" value={new Date(userData.dob).toLocaleDateString()} disabled={true} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>  
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Gender:</InputLabel>
                    <TextField variant="outlined" value={userData.gender} disabled={true} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                </Grid>

                <Grid md={5}  sx={{marginTop:"0.5rem"}}>
                <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Address:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Contact Number:</InputLabel>
                    <TextField variant="outlined" value={userData.contact_no} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Email:</InputLabel>
                    <TextField variant="outlined" value={userData.email} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                </Grid> 
            </Grid>

            
            <Grid item xs={12} md={12} sx={{display:"flex", marginBottom:"5%", marginTop:"2%"}}>
                <Box sx={{display:"block",textAlign:"left", marginRight:"25%"}}>
                    <Link to="/profile" style={{}}>Change Password</Link><br />
                    <Link to="" style={{marginLeft:""}}>Delete Account</Link>
                </Box>
                <Button variant="contained" style={{marginTop:"5%",marginLeft:"50%",backgroundColor: color2, justifyContent:"center"}}> Save changes </Button>
            </Grid>

        </Grid>    
    
        
        </Box>
      </Box>
     
    </Box>

  );
};

export default Profile;
