import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import avatar from '../../assets/avatar.jpg';
import {PiMedalFill} from 'react-icons/pi';
import Sidebar from "../../components/ReceiptionistSidebar";
import Navbar from "../../components/ReceiptionistNavbar";
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MemberProfile = () => {

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const { memberID, memberType } = useParams();
  //console.log(memberID, memberType);

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Receptionist"')){
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
        userID: memberID,
        userType: memberType,
      };
      const res2 = await axios.get('http://localhost:8000/api/users/details',{params:reqData});
      setUserData(res2.data.data);
      
    } catch (error) {
      console.log('error message: ',error.data);
    }
  
  };

  const Bills = [
    {
      id: 1,
      Date: "2021-08-28",
      time: "10:00",
      amount: "Rs. 5000.00",
      paymentMethod : "Cash payment"
      
    },
    {
      id: 1,
      Date: "2021-08-28",
      time: "10:00",
      amount: "Rs. 5000.00",
      paymentMethod : "Cash payment"
      
    },
  
    
  ]

  
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
        <Box sx={{ display:"flex", width: "100%", height:"100%"}}> 
            <Box sx={{ width: "50%", height:"100%", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <img src={ProfileImage} alt="Profile" width="45%"  style={{borderRadius:"10px", marginTop:"0.5rem"}}/>
            </Box>
            <Box sx={{ width: "50%", height:"100%", flexDirection:"column", marginLeft:"0%", justifyContent:"center"}}>
                
                <Link to="/member/editprofile" style={{textDecoration:"none", color:"black"}}>
                  <Box style={{display:"flex"}}>
                    <Typography variant="h5" style={{ fontWeight: 700, textAlign:"left", marginLeft:"-5rem" }}><PiMedalFill style={{marginTop: "1rem"}}/>  Personal Information</Typography>
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
                        <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-21%" }}>Weight: 70 KG</Typography>
                        <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-21%" }}>Height: 180cm</Typography>
                        <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-21%" }}>Membership ID: M0231564</Typography>
                        <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-21%" }}>Membership Type: 6 Month Plan</Typography>
                       
                    </Box>
                </Box>	
                
            </Box>
            
        </Box>
        <Box sx={{display:"flex", width: "100%", height:"50%", textAlign:"left", marginTop:"2rem"}}>
            <Box style={{width:"40%",}}>
                <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", marginLeft: "", }}><FaTelegram style={{marginTop: "1rem"}}/>  Contact Information</Typography>
                <Box style={{marginLeft:"1%"}}>
                    <Typography variant="h6" style={{ display: memberType === "Virtual Member" ? "none" : "", fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Address: {userData.address}</Typography>
                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Email: {userData.email}</Typography>
                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Contact Number: (+94) {userData.contact_no}</Typography>
                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Emergency Contact: (+94) {userData.emergency_contact_no}</Typography>
                
                </Box>
            </Box>
            <Box  style={{width:"60%", marginLeft:"6%"}}>
                <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem",  }}><FaFeatherAlt style={{marginTop: "1rem"}}/>  Other</Typography>
                <Box style={{marginLeft:"1%"}}>
                    <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Medical Issues: </Typography>
                    <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"5%"}}>Taking medicine for Cholesterol since 3 years</Typography>
                    <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"5%"}}>Taking medicine for diabetic since 5 years </Typography>
            
                </Box>
            </Box>
           
        </Box>   

        <Typography variant="h5" style={{ fontWeight: 600, marginTop: "4rem", textAlign:"left" }}>Payment History </Typography>
          <Button variant="contained" color="primary" style={{ display: memberType === "Virtual Member" ? "none" : "" , backgroundColor:"#346E93",marginLeft:'83%' }} size="small" >Add New</Button>
          <Box sx={{ padding: "1%", marginTop:"3%", overflowY: "auto", width: "90%", flexWrap: "wrap", border:"1px solid #346E93", borderRadius:"10px", height: "35vh", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}>
                    <TableContainer component={Paper} sx={{ marginTop: "2%", width: "100%" }}>
                        <Table sx={{ minWidth: 650, boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px' }} aria-label="simple table">
                            <TableHead>
                                <TableRow style={{backgroundColor:"#B2BABB"}}>
                                    <TableCell align="left" sx={{fontWeight:"700"}}>Date</TableCell>
                                    <TableCell align="left" sx={{fontWeight:"700"}}>Time</TableCell>
                                    <TableCell align="left" sx={{fontWeight:"700"}}>Amount</TableCell>
                                    <TableCell align="left" sx={{fontWeight:"700"}}>Method</TableCell>
                                    <TableCell align="left" sx={{fontWeight:"700"}}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Bills.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="cleft">
                                            {row.Date}
                                        </TableCell>
                                        <TableCell align="left">{row.time}</TableCell>
                                        <TableCell align="left">{row.amount}</TableCell>
                                        <TableCell align="left">{row.paymentMethod}</TableCell>
                                        <TableCell align="left">
                                            <Button variant="outlined">Bill</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
     
    
        
        </Box>
      </Box>
     
    </Box>

  );
};

export default MemberProfile;
