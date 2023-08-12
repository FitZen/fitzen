import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import ProfileImg from '../../assets/photo-1633332755192-727a05c4013d.jpg';
import {PiMedalFill} from 'react-icons/pi';
import Sidebar from "../../components/TrainerSidebar";
import Navbar from "../../components/TrainerNavbar";
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Rating from '@mui/material/Rating';
import {useEffect, useState} from 'react';

const StudentProfile = () => {

    const [fixedNavbar, setFixedNavbar] = useState(false);

    useEffect(() => {
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

    return (


        <Box sx={{ flex: "1", display:"flex", mb:2}}>
            <Box>
                <Sidebar />
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
                        <Box sx={{display:"flex", width:"100%", marginTop: "3rem"}}>
                            <Box sx={{width:"30%"}}>
                                <img src={ProfileImg} alt="profile img" style={{width:"80%", borderRadius:"5px", objectFit:"cover"}} />
                            </Box>
                            <Box sx={{display:"flex", width:"50%"}}>
                                <Box sx={{display:"flex", flexDirection:"column", backgroundColor:"#000000", width:"0.2rem", borderRadius:"5px", marginRight:"15%"}}></Box>
                                <Box>
                                    <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1%", marginLeft: "1rem", marginBottom:"2rem" }}> Tharindu Gunawardhane</Typography>
                                    <Box sx={{width:"400px", height:"auto", textAlign:"center", justifyContent:"center", borderRadius:"10px", marginLeft:"5%", padding:"7%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', }}>
                                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Country: Sri Lanka</Typography>
                                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Gender: Male</Typography>
                                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Type: Virtual</Typography>
                                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Contact Number: (+94) (76) 156 2514</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            </Box>
                        <Box sx={{width:"95%",marginTop:"4rem"}}>
                            <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Medical Issues</Typography>
                            <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"5%"}}>Taking medicine for Cholesterol since 3 years</Typography>
                            <Typography variant="h6" style={{fontSize:"16px", fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"5%"}}>Taking medicine for diabetic since 5 years </Typography>
                        </Box>
                    </Box>



                </Box>
            </Box>

        </Box>

    );
};

export default StudentProfile;
