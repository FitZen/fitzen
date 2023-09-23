import React from "react";
import Box from "@mui/material/Box";
import { InputLabel, Typography, Select, MenuItem, Button } from "@mui/material";
import {FaTelegram, FaFeatherAlt,FaUnlockAlt, FaCamera, FaRegAddressBook, FaRegTimesCircle} from 'react-icons/fa';
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
import axios from 'axios';
import Modal from "@mui/material/Modal";
import {AiFillPlusCircle} from "react-icons/ai";

const color1 = "#102B4C" //dark blue
const color2 = "#346E93" //light blue
const color3 = "#96CDEF" //lighter blue
const color4 = "#DC1E2A" //red

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

const Profile = () => {

  const [gender, setGender] = React.useState('');
  const [value, setValue] = React.useState(null);
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [userData, setUserData] = useState({});

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [valueStart, setValueStart] = React.useState(null);
    const [valueEnd, setValueEnd] = React.useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Virtual Member"' && localStorage.getItem('userType') !== '"Physical Member"')){
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
                <Grid md={5} sx={{marginRight:"20%", display:"flex"}}>
                    <img src={ProfileImg} alt="Profile" width="300px"  style={{borderRadius:"10px", marginTop:"0.5rem"}}/>
                    <FaCamera size={35} style={{cursor:"pointer"}}/>
                </Grid>    
                <Grid md={7} sx={{marginTop:"5%"}}>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>First Name:</InputLabel>
                    <TextField variant="outlined" value={userData.first_name} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Last Name:</InputLabel>
                    <TextField variant="outlined" value={userData.last_name} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>NIC:</InputLabel>
                    <TextField variant="outlined" value={userData.nic} disabled={true} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12} sx={{display:"flex", justifyContent:"center", marginTop:"-1%"}}>
                <Grid md={5} sx={{marginRight:"20%"}}>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Gender:</InputLabel>
                    <TextField variant="outlined" value={userData.gender} disabled={true} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Height(cm):</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Membership ID:</InputLabel>
                    <TextField variant="outlined" value={userData.id} disabled={true} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                </Grid>    
                <Grid md={7}>

                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Date of Birth:</InputLabel>
                    <TextField variant="outlined" value={new Date(userData.dob).toLocaleDateString()} disabled={true} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>                    
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Weight(KG):</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Membership Type:</InputLabel>
                    <TextField variant="outlined" disabled={true} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12} sx={{display:"flex", justifyContent:"center"}}>
                <Grid md={5} sx={{marginRight:"20%"}}>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Contact Number:</InputLabel>
                    <TextField variant="outlined" value={userData.contact_no} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Email:</InputLabel>
                    <TextField variant="outlined" value={userData.email} inputProps={{style: {height: 1, width:350,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
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
                <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Bio:</InputLabel>
                    <TextField variant="outlined"  multiline rows="4" style={{height: 125, width:1000, borderRadius:"5px", outline:"none"}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Medical Conditions:</InputLabel>
                    <TextField variant="outlined"  multiline rows="4" style={{height: 125, width:1000, borderRadius:"5px", outline:"none"}}/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12} sx={{display:"flex", marginBottom:"5%", marginTop:"2%"}}>
                <Box sx={{display:"block",textAlign:"left", marginRight:"25%"}}>
                    {/*<Link to="/profile" style={{}}>Change Password</Link><br />*/}
                    <Button variant="contained" onClick={handleOpen} style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"600",}}><FaUnlockAlt style={{marginRight: "0.5rem"}}/>  Change Password</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalStyle}>
                            <FaRegTimesCircle onClick={handleClose}  style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA" ,}}
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
                                <FaUnlockAlt  style={{marginTop:"0%", color:"red", fontSize:"2rem"}}/>
                                <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight="700" textAlign="center">
                                    &nbsp; Change Password
                                </Typography>
                            </Box>
                            <br />
                            <Typography id="modal-modal-title" variant="h8" component="h5" fontWeight="600" textAlign="center">
                                &nbsp; Your password should be different from previous one.
                            </Typography>
                            <Box sx={{textAlign:"center", padding:"1%"}}>

                                <Box sx={{width:"40%", marginLeft:"4%"}}>
                                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Current Password:</InputLabel>
                                    <TextField variant="outlined" inputProps={{style: {height: 10, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                                </Box>

                                <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>New Passowrd:</InputLabel>
                                <TextField variant="outlined" inputProps={{style: {height: 10, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>

                                <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Confirm Passowrd:</InputLabel>
                                <TextField variant="outlined" inputProps={{style: {height: 10, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>

                                <Button variant="contained" onClick={handleClose} style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%"}}>Change</Button>

                            </Box>

                        </Box>
                    </Modal>
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
