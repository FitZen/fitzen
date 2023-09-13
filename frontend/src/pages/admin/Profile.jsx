import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import avatar from '../../assets/avatar.jpg';
import {PiMedalFill} from 'react-icons/pi';
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {

  const [fixedNavbar, setFixedNavbar] = useState(false);
	const [userData, setUserData] = useState({});
  	const navigate = useNavigate();

  useEffect(() => {

	if((localStorage.getItem('userType') !== '"Admin"')){
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
    console.log(ProfileImage);
    console.log(avatar)
  }

  return (


    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <AdminSidebar sidebarLinkId = "1"/>
      </Box>
      
      <Box component="main" sx={{flex:1 }}>
      <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <AdminNavbar />
        </div>
        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
           
        <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Profile</Typography>
        <Box sx={{ display:"flex", width: "100%", height:"100%"}}> 
          <Box sx={{ width: "25%", marginTop:"3rem", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                  <img src={ProfileImage} alt="Profile" width="100%" height="300px" style={{borderRadius:"10px", objectFit:"cover"}}/>
              </Box>
              <Box sx={{display:"flex", width: "75%", height:"100%", marginTop:"3rem", marginLeft:"2%", justifyContent:"center"}}>
                  <Box sx={{width:"40%"}}>
                      <Typography variant="h5" style={{ fontWeight: 700, textAlign:"left" }}><PiMedalFill />  Personal Information</Typography>
                      <Box sx={{marginLeft:"7%"}}>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Name: {userData.first_name} {userData.last_name}</Typography>
                        {/* <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Age: {age}</Typography> */}
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>NIC: {userData.nic}</Typography>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>User ID: {userData.id}</Typography>
                        {/* <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>DOB: {new Date(userData.dob).toLocaleDateString()}</Typography> */}
                        {/* <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Gender: {userData.gender}</Typography> */}
                      </Box>
                  </Box>	
                  <Box sx={{width:"60%"}}>
                    <Typography variant="h5" style={{ fontWeight: 700, textAlign:"left" }}><FaTelegram />  Contact Information</Typography>
                    <Box style={{ marginLeft:"7%"}}>
                        {/* <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Address: 6th Flr Paul CI Cent 24 Malwatte Road, 11</Typography> */}
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Email: {userData.email}</Typography>
                        {/* <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Contact Number: (+94) {(userData.contact_no).slice(1,3)} {(userData.contact_no).slice(3,6)} {(userData.contact_no).slice(6)}</Typography> */}
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Contact Number: {userData.contact_no}</Typography>
                    </Box>
                  </Box>   
              </Box>
          </Box>
        </Box>
      </Box>
     
    </Box>

  );
};

export default Profile;
