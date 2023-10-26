import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import avatar from '../../assets/avatar.jpg';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Rating from '@mui/material/Rating';
import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

const InstructorProfile = () => {

    const [fixedNavbar, setFixedNavbar] = useState(false);
    const [userData, setUserData] = useState({});
    const [rate, setRate] = useState(0.0);
    const navigate = useNavigate();
  
    const { instructorID, instructorType } = useParams();
    //console.log(instructorID, instructorType);

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Virtual Member"' && localStorage.getItem('userType') !== '"Physical Member"')){
      navigate('/login');
    }

    getUserDetails()
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
        userID: instructorID,
        userType: instructorType,
      };
      const res2 = await axios.get('http://localhost:8000/api/users/details',{params:reqData});
      const res3 = await axios.get('http://localhost:8000/api/ratings/instructor/${instructorId}',{params:reqData});
      setRate(res3.data.data);
      setUserData(res2.data.data);
      
    } catch (error) {
      console.log('error message: ',error.data);
    }

  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const birthDate = new Date(userData.dob);
  const birthYear = birthDate.getFullYear();

  const age = currentYear - birthYear;

  let ProfileImage;

  if (userData.profile_pic === null) {
    ProfileImage = avatar;
  } else {
    const img = userData.profile_pic;
    ProfileImage = `http://localhost:3000/Profile/${img}`; // Update this line to correctly display the profile image
  }

  return (


    <Box sx={{ flex: "1", display:"flex", mb:2}}>
        <Box>
            <Sidebar sidebarLinkId = "2"/>
        </Box>
      
        <Box component="main" sx={{flex:1 }}>
        <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <Navbar />
        </div>
            <Box sx={{ paddingLeft:"5rem", flex:1 }}>
            
                <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Profile</Typography>
                <Box>
                    <Box sx={{display:"flex", width:"100%"}}>
                        <Box sx={{width:"30%"}}>
                            <img src={ProfileImage} alt="profile img" style={{width:"80%", borderRadius:"5px", objectFit:"cover"}} />
                        </Box>
                        <Box sx={{display:"flex", width:"50%"}}>
                            <Box sx={{display:"flex", flexDirection:"column", backgroundColor:"#000000", width:"0.2rem", borderRadius:"5px", marginRight:"15%"}}></Box>
                            <Box>
                                <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1%", marginLeft: "1rem", marginBottom:"2rem" }}>{userData.first_name} {userData.last_name}</Typography>
                                <Box sx={{width:"400px", height:"auto", textAlign:"center", justifyContent:"center", borderRadius:"10px", marginLeft:"5%", padding:"7%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', }}>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Instructor ID: {userData.id}</Typography>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Gender: {userData.gender}</Typography>
                                    <Typography variant="h6" style={{ display: instructorType === "Physiotherapist" ? "none" : "", fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Training Mode: {userData.mode}</Typography>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Age: {age}</Typography>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Joined in: {new Date(userData.added_on).toLocaleDateString()}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Button variant="contained" style={{display: instructorType === "Physiotherapist" ? "none" : "", backgroundColor:"#000000", color:"#ffffff", width:"15%", height:"10%", marginTop:"1%"}}><FaTelegram style={{fontSize: "20px"}}/> &nbsp; Send Request</Button>

                    </Box>
                    <Box sx={{width:"95%"}}> 
                        <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Bio</Typography>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"justify"}}>I am a professional trainer with 5 years of experience in the field. I have trained over 1000 students and have a 4.5 star rating. I am a professional trainer with 5 years of experience in the field. I have trained over 1000 students and have a 4.5 star rating. I am a professional trainer with 5 years of experience in the field. I have trained over 1000 students and have a 4.5 star rating. I am a professional trainer with 5 years of experience in the field. I have trained over 1000 students and have a 4.5 star rating.</Typography>
                    </Box>
                    <Box sx={{display:"flex", width: "100%", height:"50%", textAlign:"left", marginTop:"2rem"}}>
                        <Box style={{width:"40%"}}>
                            <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", marginLeft: "", }}>Qualification</Typography>
                            <Box style={{marginLeft:"1%"}}>
                                <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>3-year degree in psychology accredited by The British Psychological Society (BPS)</Typography>
                                <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Training skills including active listening and a non-judgemental approach</Typography>
                            
                            </Box>
                        </Box>
                        <Box  style={{width:"60%", marginLeft:"6%"}}>
                            <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem",  }}>Review</Typography>
                            <Box style={{marginLeft:"0%"}}>
                                <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left"}}>{`${(rate.rating / rate.count).toFixed(2)}`}</Typography>
                                <Rating name="read-only" value={rate.rating / rate.count}  precision={0.5}  readOnly />
                                <Typography variant="h6" style={{ fontSize:"12px",fontWeight: 500, color:"grey", textAlign:"left"}}>(Based on {rate.count} reviews)</Typography>
                            </Box>
                        </Box>
                    
                    </Box>
                </Box>
                    
        
            
            </Box>
        </Box>
     
    </Box>

  );
};

export default InstructorProfile;
