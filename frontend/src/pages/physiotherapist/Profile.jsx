import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import avatar from '../../assets/avatar.jpg';
import {PiMedalFill} from 'react-icons/pi';
import Sidebar from "../../components/PhysiotherapistSidebar";
import Navbar from "../../components/PhysiotherapistNavbar";
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PhysiotherapistProfile = () => {

    
	const [fixedNavbar, setFixedNavbar] = useState(false);
	const [userData, setUserData] = useState({});
  	const navigate = useNavigate();

  useEffect(() => {

	if((localStorage.getItem('userType') !== '"Physiotherapist"')){
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
    ProfileImage = `../../assets/uploads/profile/${img}`; // Update this line to correctly display the profile image
  }

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

					<Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Profile</Typography>
					<Box sx={{ display:"flex", width: "100%", height:"100%"}}>
						<Box sx={{ width: "50%", height:"100%", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
							<img src={ProfileImage} alt="Profile" width="45%"  style={{borderRadius:"10px", marginTop:"0.5rem"}}/>
						</Box>
						<Box sx={{ width: "50%", height:"100%", flexDirection:"column", marginLeft:"0%", justifyContent:"center"}}>

							<Link to="/trainer/editprofile" style={{textDecoration:"none", color:"black"}}>
								<Box style={{display:"flex"}}>
									<Typography variant="h5" style={{ fontWeight: 700, textAlign:"left", marginLeft:"-5rem" }}><PiMedalFill style={{marginTop: "1rem"}}/>  Personal Information</Typography>
									<FaUserEdit size={20} style={{marginTop:"3.5%", marginLeft:"40%", marginRight:"1%"}}/>
									<Typography variant="h6" style={{ fontSize:"16px",fontWeight: 700, textAlign:"right", marginLeft:"0%", marginTop:"3.2%" }}> Edit Profile</Typography>
								</Box>
							</Link>
							<Box sx={{display: "flex", marginLeft:"4rem"}}>
								<Box >
								<Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>Name: {userData.first_name} {userData.last_name}</Typography>
								<Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>Age: {age}</Typography>
								<Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>NIC: {userData.nic}</Typography>
								<Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>DOB: {new Date(userData.dob).toLocaleDateString()}</Typography>
								<Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>Gender: {userData.gender}</Typography>
								</Box>
								<Box>
									<Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-21%" }}>Trainer ID: {userData.id}</Typography>
									<Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-21%" }}>Joined Date: {new Date(userData.added_on).toLocaleDateString()}</Typography>

								</Box>
							</Box>

						</Box>

					</Box>
					<Box sx={{display:"flex", width: "100%", height:"50%", textAlign:"left", marginTop:"2rem"}}>
						<Box style={{width:"40%",}}>
							<Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", marginLeft: "", }}><FaTelegram style={{marginTop: "1rem"}}/>  Contact Information</Typography>
							<Box style={{marginLeft:"1%"}}>
								<Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Address: {userData.address}</Typography>
								<Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Email: {userData.email}</Typography>
                                {/* <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Contact Number: (+94) {(userData.contact_no).slice(1,3)} {(userData.contact_no).slice(3,6)} {(userData.contact_no).slice(6)}</Typography> */}
								<Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Contact Number: {userData.contact_no}</Typography>

							</Box>
						</Box>
						<Box  style={{width:"60%", marginLeft:"6%"}}>
							<Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem",  }}><FaFeatherAlt style={{marginTop: "1rem"}}/>  Other</Typography>
							<Box style={{marginLeft:"1%"}}>
								<Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Professional  Qualifications:  </Typography>
								<Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"5%"}}>3-year degree in psychology accredited by the British Psychological Society (BPS) </Typography>

							</Box>
						</Box>

					</Box>


				</Box>
			</Box>

		</Box>

    );
};

export default PhysiotherapistProfile;
