import React from "react";
import Box from "@mui/material/Box";
import { InputLabel, Typography, Select, MenuItem, Button } from "@mui/material";
import {FaTelegram, FaFeatherAlt, FaCamera} from 'react-icons/fa';
import ProfileImg from '../../assets/photo-1633332755192-727a05c4013d.jpg';
import {PiMedalFill} from 'react-icons/pi';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
import {Grid} from '@mui/material';
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const color1 = "#102B4C" //dark blue
const color2 = "#346E93" //light blue
const color3 = "#96CDEF" //lighter blue
const color4 = "#DC1E2A" //red 

const Profile = () => {

  const [gender, setGender] = React.useState('');
  const [value, setValue] = React.useState(null);
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
                <Grid md={5} sx={{marginRight:"20%", display:"flex"}}>
                    <img src={ProfileImg} alt="Profile" width="300px"  style={{borderRadius:"10px", marginTop:"0.5rem"}}/>
                    <FaCamera size={35} style={{cursor:"pointer"}}/>
                </Grid>    
                <Grid md={7}>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left" }}>First Name:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left" }}>Last Name:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left" }}>NIC:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12} sx={{display:"flex", justifyContent:"center"}}>
                <Grid md={5} sx={{marginRight:"20%"}}>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Gender:</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        size="small"
                        style={{marginTop:"0.5rem", width:"97%", height:"17%", marginBottom:"0.5rem", borderRadius:"5px", border:"0.01px solid"}}
                        
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Male</MenuItem>
                        <MenuItem value={20}>Female</MenuItem>
                      
                    </Select>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Height(cm):</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Membership ID:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                </Grid>    
                <Grid md={7}>

                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Date of Birth:</InputLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                            label=""
                            value={value}
                            onChange={(newValue) => setValue(newValue)} 
                            renderInput={(params) => <TextField {...params}  inputProps={{style:{marginTop:"0.5rem", width:"100%", height:"", marginBottom:"0.5rem", borderRadius:"10px", border:"1px solid red"}}} />}
                        />
                    </LocalizationProvider>
                    
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Weight(KG):</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Membership Type:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12} sx={{display:"flex", justifyContent:"center"}}>
                <Grid md={5} sx={{marginRight:"20%"}}>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Contact Number:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Email:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                </Grid>    
                <Grid md={7}>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Emergency Contact Number:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Address:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12} sx={{display:"flex", justifyContent:"center"}}>
                <Grid md={12} sx={{marginRight:"14%"}}>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Medical Conditions:</InputLabel>
                    <TextField variant="outlined"  multiline rows="4" style={{height: 125, width:1000, borderRadius:"5px", outline:"none"}}/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12} sx={{display:"flex", marginBottom:"5%", marginTop:"2%"}}>
                <Box sx={{display:"block",textAlign:"left", marginRight:"25%"}}>
                    <Link to="/profile" style={{}}>Change Password</Link><br />
                    <Link to="" style={{marginLeft:""}}>Delete Account</Link>
                </Box>
                <Button variant="contained" style={{marginTop:"5%",backgroundColor: color2, justifyContent:"center"}}> Save changes </Button>
            </Grid>

        </Grid>    
    
        
        </Box>
      </Box>
     
    </Box>

  );
};

export default Profile;
