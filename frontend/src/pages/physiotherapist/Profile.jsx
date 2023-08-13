import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import ProfileImg from '../../assets/photo-1535713875002-d1d0cf377fde.jpeg';
import {PiMedalFill} from 'react-icons/pi';
import Sidebar from "../../components/PhysiotherapistSidebar";
import Navbar from "../../components/PhysiotherapistNavbar";
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";

const PhysiotherapistProfile = () => {

    return (


        <Box sx={{ flex: "1", display:"flex", mb:2}}>
            <Box>
                <Sidebar />
            </Box>

            <Box component="main" sx={{flex:1 }}>
                <Box>
                    <Navbar />
                </Box>
                <Box sx={{ paddingLeft:"5rem", flex:1 }}>

                    <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Profile</Typography>
                    <Box sx={{ display:"flex", width: "100%", height:"100%"}}>
                        <Box sx={{ width: "50%", height:"100%", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                            <img src={ProfileImg} alt="Profile" width="45%"  style={{borderRadius:"10px", marginTop:"0.5rem"}}/>
                        </Box>
                        <Box sx={{ width: "50%", height:"100%", flexDirection:"column", marginLeft:"0%", justifyContent:"center"}}>

                            <Link to="/physiotherapist/editprofile" style={{textDecoration:"none", color:"black"}}>
                                <Box style={{display:"flex"}}>
                                    <Typography variant="h5" style={{ fontWeight: 700, textAlign:"left", marginLeft:"-5rem" }}><PiMedalFill style={{marginTop: "1rem"}}/>  Personal Information</Typography>
                                    <FaUserEdit size={20} style={{marginTop:"3.5%", marginLeft:"40%", marginRight:"1%"}}/>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 700, textAlign:"right", marginLeft:"0%", marginTop:"3.2%" }}> Edit Profile</Typography>
                                </Box>
                            </Link>
                            <Box sx={{display: "flex", marginLeft:"4rem"}}>
                                <Box >
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>Name: Nick Fernando</Typography>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>Age: 35</Typography>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>NIC: 872356475V</Typography>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>DOB: 21-10-1987</Typography>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>Gender: Male</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-21%" }}>Trainer ID: T5674839</Typography>
                                    <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-21%" }}>Joined Date: 2020-04-30</Typography>
                                    <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-21%" }}>Trainer Type: Full Type</Typography>

                                </Box>
                            </Box>

                        </Box>

                    </Box>
                    <Box sx={{display:"flex", width: "100%", height:"50%", textAlign:"left", marginTop:"2rem"}}>
                        <Box style={{width:"40%",}}>
                            <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", marginLeft: "", }}><FaTelegram style={{marginTop: "1rem"}}/>  Contact Information</Typography>
                            <Box style={{marginLeft:"1%"}}>
                                <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Address: 6th Flr Paul CI Cent 24 Malwatte Road, 11</Typography>
                                <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Email:dhanush@84gmail.com</Typography>
                                <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Contact Number: (+94) (76) 156 2514</Typography>
                                <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Emergency Contact: (+94) (76) 156 2514</Typography>

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
