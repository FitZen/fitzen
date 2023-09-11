import React from "react";
import Box from "@mui/material/Box";
import ReceiptionistSidebar from "../../components/ReceiptionistSidebar";
import ReceiptionistNavbar from "../../components/ReceiptionistNavbar";
import {useEffect, useState} from 'react';
import { Typography, Tabs, Tab, Button, InputLabel, FormControl } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Rating from "@mui/material/Rating";
import axios from "axios";
import { Link } from "react-router-dom";
import avatar from '../../assets/avatar.jpg';


const Instructors= () => {

      const [fixedNavbar, setFixedNavbar] = useState(false);
      const navigate = useNavigate();
    
        if((localStorage.getItem('userType') !== '"Receptionist"')){
          navigate('/login');
        }
    
      useEffect(() => {
    
        viewTrainersList();
    
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
    
        const [selectedTab, setSelectedTab] = useState(0);
    
        const [trainers, setTrainers] = useState([]);
        const [physiotherapists, setPhysiotherapists] = useState([]);
    
        const viewTrainersList = async () => {
        
          try {
           
            const res = await axios.get("http://localhost:8000/api/trainers/viewtrainers");
            console.log(res.data.data);
            setTrainers(res.data.data);
      
            // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
          } catch (error) {
            console.error("Retrieving failed:", error);
            // Handle error scenarios here
          }
        };
      
        const viewPhysiotherapistsList = async () => {
          
          try {
           
            const res = await axios.get("http://localhost:8000/api/physiotherapists/viewphysiotherapists");
            console.log(res.data.data);
            setPhysiotherapists(res.data.data);
      
            // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
          } catch (error) {
            console.error("Retrieving failed:", error);
            // Handle error scenarios here
          }
        };
      
        const handleTabChange = (event, newValue) => {
          setSelectedTab(newValue);
        };
      
      
        return (
          <Box sx={{ flex: "1", display: "flex", mb: 2 }}>
            <Box>
              <ReceiptionistSidebar sidebarLinkId = "3" />
            </Box>
      
            <Box component="main" sx={{ flex: 1 }}>
            <div
              className={`navbar ${fixedNavbar ? "fixed" : ""}`}
              style={{ width: "100%" }}
            >
              <ReceiptionistNavbar />
            </div>
              <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
                <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign: "left" ,marginBottom:'1rem'}}>Instructors</Typography>
      
                <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Report Tabs" style={{ backgroundColor: '#ffffff', width:"24%",marginTop:"2%", marginBottom:"2%", borderRadius:"5px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
                  <Tab label="Trainers" onClick={viewTrainersList}/>
                  <Tab label="Physiotherapists" onClick={viewPhysiotherapistsList}/>
                </Tabs>
      
                {selectedTab === 0 && (
                  <Box>
                  <Box sx={{display:"flex", width:"96%", height:"70%", backgroundColor:"#E5E8E8", padding:"0.3rem", borderRadius:"10px", marginBottom:"2rem", marginTop:"1.5rem"}}>
                            <Box sx={{display:"flex",height:"80vh", flexWrap: "wrap",overflowY:"auto", width:"100%", backgroundColor:"white", borderRadius:"10px", padding: "1rem", margin:"0.1rem"}}>
                                {trainers.map((instructor) => (
                                    <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"72%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"0.65rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                      
                                      <img src={instructor.profile_pic === null ? avatar : `../../assets/${instructor.profile_pic}`} alt="item" style={{width:"100%", height:"56.5%", objectFit:"cover", marginBottom:"3%"}}></img>
                                      <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>{instructor.first_name} {instructor.last_name}</Typography>
                                      <Typography variant="h6" style={{ fontSize: "16px", fontWeight: 500 }}>Workouts for: {instructor.workoutsFor}</Typography>
                                      <Typography variant="h6" style={{ fontSize: "16px", fontWeight: 500 }}>Mode: {instructor.mode}</Typography>
                                      <Rating name="read-only" value={3} readOnly /><br />                             
                                      <Link to={`/receiptionist/instructorprofile/Trainer/${instructor.id}`} style={{textDecoration:"none", color:"black"}}>
                                          <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                      </Link>
                                    </Box>
                                ))}
                                
                            </Box>
    
                        </Box>
    
                  </Box>
                )}
      
                {selectedTab === 1 && (
                                <Box sx={{display:"flex", width:"96%", height:"70%", backgroundColor:"#E5E8E8", padding:"0.3rem", borderRadius:"10px", marginBottom:"2rem", marginTop:"1.5rem"}}>
                                  <Box sx={{display:"flex",height:"78vh", flexWrap: "wrap",overflowY:"auto", width:"100%", backgroundColor:"white", borderRadius:"10px", padding: "1rem", margin:"0.1rem"}}>
                                    {physiotherapists.map((instructor) => (
                                        <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"68%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"0.65rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                          
                                          <img src={instructor.profile_pic === null ? avatar : `../../assets/${instructor.profile_pic}`} alt="item" style={{width:"100%", height:"62%", objectFit:"cover", marginBottom:"3%"}}></img>
                                          <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>{instructor.first_name} {instructor.last_name}</Typography>
                                          <Rating name="read-only" value={3} readOnly /><br />                             
                                          <Link to={`/receiptionist/instructorprofile/Physiotherapist/${instructor.id}`} style={{textDecoration:"none", color:"black"}}>
                                              <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                          </Link>
                                        </Box>
                                    ))}
                                    
                                </Box>
        
                            </Box>  
                )}
              </Box>
            </Box>
    
      
    
          </Box>
        );
      };
    
    export default Instructors;
