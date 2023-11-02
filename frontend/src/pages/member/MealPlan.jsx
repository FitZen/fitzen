import React from "react";
import Box from "@mui/material/Box";
import { Typography, Select, MenuItem , InputLabel, FormControl, Button} from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import ProfileImg from '../../assets/photo-1633332755192-727a05c4013d.jpg';
import {PiMedalFill} from 'react-icons/pi';
import Sidebar from "../../components/Sidebar";
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import Navbar from "../../components/Navbar";
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import axios from 'axios';

import Meal1 from '../../assets/Meals//meal1.png';
import Meal2 from '../../assets/Meals//meal2.png';
import Meal3 from '../../assets/Meals//meal3.png';
import Meal4 from '../../assets/Meals//meal4.png';
import Meal5 from '../../assets/Meals//meal5.png';
import Meal6 from '../../assets/Meals//meal6.png';
import Meal7 from '../../assets/Meals//meal7.png';
import Meal8 from '../../assets/Meals//meal8.png';
//import Meal5 from '../../assets/meal5.png';

const images = [Meal1, Meal2, Meal3, Meal4, Meal5, Meal6, Meal7, Meal8];

const color2 = "#346E93" //light blue
const color4 = "#DC1E2A" //red 

const MealPlan = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mealPlanName, setMealPlanName] = useState([]);
  const [selectedMealPlan, setSelectedMealPlan] = useState(null);
  const [selectedMealPlanDetails, setSelectedMealPlanDetails] = useState(null);

  useEffect(() => {
    if((localStorage.getItem('userType') !== '"Virtual Member"' && localStorage.getItem('userType') !== '"Physical Member"')){
      navigate('/login');
    }

    viewMealPlans();
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(timer);
  }, []);

  const viewMealPlans = async () => {

    const reqData = {
      userID: "TR0001",
      userType: JSON.parse(localStorage.getItem('userType')),
    };

    try{
      const res1 = await axios.get("http://localhost:8000/api/mealplans/getmealplans", {params:reqData});
        
      console.log(res1.data.data);
      setMealPlanName(res1.data.data);
    }catch (error) {
      console.error("Retrieving failed meal Plan Names:", error);
      // Handle error scenarios here
    }

  }

  const Meals = [
    {
      title: "Breakfast",
      description: "Oats Banana Pancakes with Protein Shake",
    },
    {
      title: "Lunch",
      description: "Chicken Breast with Brown Rice and Salad",
    },
    {
      title: "Pre Workout",
      description: "Protein Shake with 1 Banana"
    },
    {
      title: "Post-Workout",
      description: "Protein Shake with 1 Banana",
    },
    {
      title: "Dinner",
      description: "Brown rice, peas paneer curry, sprouts vegetable salad",
    },
    {
      title: "Note",
      description: "Drink 3-4 litres of water daily",
    }
  ];

  return (


    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <Sidebar sidebarLinkId = "1"/>
      </Box>
      
      <Box component="main" sx={{flex:1 }}>
        <Box>
          <Navbar />
        </Box>
        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
           
            <Typography variant="h4" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Meal Plan</Typography>
            <Box sx={{ backgroundColor: "#E5E8E8", width:"95%", padding:"0.5%", marginTop:"2%", borderRadius:"10px"}}>
              <Box sx={{ display:"flex",flexWrap: "wrap", backgroundColor:"white", width: "100%", height:"95vh", padding:"2%"}}> 
                  
              <Box sx={{ width: "40%", height: "100%", borderRadius: "10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', justifyContent: "center", alignItems: "center", padding: "2%", marginRight: "25px", overflowY: "scroll" }}>
              {mealPlanName.map((mealPlan) => (
                <Box  key={mealPlan.id} onClick={() => setSelectedMealPlan(mealPlan)} sx={{display:"flex",padding:"0 2%", justifyContent: "space-between", alignItems: "center", width: "80%", height: "10%", marginLeft: "10%",marginBottom:"5%", cursor: "pointer", borderRadius: "10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', border: '2px solid white', '&:hover': { boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px', transition: "ease 0.5s" } }}>
                  <Typography variant="h6" style={{ fontWeight: 600, textAlign: "left", marginRight: "2rem" }}>{mealPlan.name}</Typography>
                  <Box sx={{display:"flex"}}>
                    <EditIcon sx={{ color: "black", borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px", marginRight:"5%", '&:hover': {backgroundColor:color2, color:"white",transition: "ease 0.5s" } }} />
                    <DeleteIcon sx={{ color: "black", borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px", '&:hover': {backgroundColor:color4, color:"white",transition: "ease 0.5s" }  }} />

                  </Box>
                 
                  
                </Box>
              ))}
            </Box>
                <Box sx={{width:"55%"}}>

                {!selectedMealPlan && (
                  <Box sx={{width:"70%", height:"70%", justifyContent:"center", alignItems:"center", marginLeft:"10%", marginTop:"3%",padding:"2%"}}>
                        <motion.img
                          src={images[currentImage]}
                          alt="Virtual Gym"
                          style={{ width: "100%", height: "auto", marginTop: "4.5rem", marginLeft:"15%", objectFit:"cover" }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 2 }}
                          key={currentImage} // Ensure proper animation when image changes
                        />
                </Box>
                )}
                {selectedMealPlan && (
                  <Box sx={{marginTop: "2%", width:"100%", height:"94.5%", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', justifyContent:"center", alignItems:"center", padding:"2%"}}>
                      <Typography variant="h5" style={{ fontWeight: 600, textAlign:"center", marginTop:"0.5rem" }}>{selectedMealPlan.name}</Typography>
                  
                              <Box sx={{display:"flex", marginTop:"2%", padding:"1%", width:"100%"}}>
                            
                            <Box sx={{ display: "flex", marginTop: "2%", padding: "1%", width:"100%" }}>
                              <Box sx={{ width: "25%", border:"1px solid #96CDEF", height: "auto", marginRight: "1%", padding:"2%", cursor:"pointer", borderRadius:"10px", '&:hover': {borderColor: '#346E93',  transition: "ease 0.5s"}}}>
                                <Typography variant="body1" style={{ fontWeight: 600, textAlign: "center", marginTop: "0rem" }}>Breakfast</Typography>
                              </Box>
                              <Box sx={{ width: "75%", border:"1px solid #96CDEF", height: "auto", padding:"2%",cursor:"pointer", borderRadius:"10px", '&:hover': {borderColor: '#346E93',  transition: "ease 0.5s"} }}>
                                <Typography variant="body2" style={{ fontWeight: 600, textAlign: "center", marginTop: "0rem" }}>{selectedMealPlan.breakfast}</Typography>
                              </Box>
                            </Box>
                        
                        </Box>
                        <Box sx={{display:"flex", marginTop:"2%", padding:"1%", width:"100%"}}>
                            
                            <Box sx={{ display: "flex", marginTop: "2%", padding: "1%", width:"100%" }}>
                              <Box sx={{ width: "25%", border:"1px solid #96CDEF", height: "auto", marginRight: "1%", padding:"2%", cursor:"pointer", borderRadius:"10px", '&:hover': {borderColor: '#346E93',  transition: "ease 0.5s"}}}>
                                <Typography variant="body1" style={{ fontWeight: 600, textAlign: "center", marginTop: "0rem" }}>Lunch</Typography>
                              </Box>
                              <Box sx={{ width: "75%", border:"1px solid #96CDEF", height: "auto", padding:"2%",cursor:"pointer", borderRadius:"10px", '&:hover': {borderColor: '#346E93',  transition: "ease 0.5s"} }}>
                                <Typography variant="body2" style={{ fontWeight: 600, textAlign: "center", marginTop: "0rem" }}>{selectedMealPlan.lunch}</Typography>
                              </Box>
                            </Box>
                        
                        </Box>
                        <Box sx={{display:"flex", marginTop:"2%", padding:"1%", width:"100%"}}>
                            
                            <Box sx={{ display: "flex", marginTop: "2%", padding: "1%", width:"100%" }}>
                              <Box sx={{ width: "25%", border:"1px solid #96CDEF", height: "auto", marginRight: "1%", padding:"2%", cursor:"pointer", borderRadius:"10px", '&:hover': {borderColor: '#346E93',  transition: "ease 0.5s"}}}>
                                <Typography variant="body1" style={{ fontWeight: 600, textAlign: "center", marginTop: "0rem" }}>Pre-Workout</Typography>
                              </Box>
                              <Box sx={{ width: "75%", border:"1px solid #96CDEF", height: "auto", padding:"2%",cursor:"pointer", borderRadius:"10px", '&:hover': {borderColor: '#346E93',  transition: "ease 0.5s"} }}>
                                <Typography variant="body2" style={{ fontWeight: 600, textAlign: "center", marginTop: "0rem" }}>{selectedMealPlan.pre_workout}</Typography>
                              </Box>
                            </Box>
                        
                        </Box>
                        <Box sx={{display:"flex", marginTop:"2%", padding:"1%", width:"100%"}}>
                            
                            <Box sx={{ display: "flex", marginTop: "2%", padding: "1%", width:"100%" }}>
                              <Box sx={{ width: "25%", border:"1px solid #96CDEF", height: "auto", marginRight: "1%", padding:"2%", cursor:"pointer", borderRadius:"10px", '&:hover': {borderColor: '#346E93',  transition: "ease 0.5s"}}}>
                                <Typography variant="body1" style={{ fontWeight: 600, textAlign: "center", marginTop: "0rem" }}>Post-Workout</Typography>
                              </Box>
                              <Box sx={{ width: "75%", border:"1px solid #96CDEF", height: "auto", padding:"2%",cursor:"pointer", borderRadius:"10px", '&:hover': {borderColor: '#346E93',  transition: "ease 0.5s"} }}>
                                <Typography variant="body2" style={{ fontWeight: 600, textAlign: "center", marginTop: "0rem" }}>{selectedMealPlan.post_workout}</Typography>
                              </Box>
                            </Box>
                        
                        </Box>
                        <Box sx={{display:"flex", marginTop:"2%", padding:"1%", width:"100%"}}>
                            
                            <Box sx={{ display: "flex", marginTop: "2%", padding: "1%", width:"100%" }}>
                              <Box sx={{ width: "25%", border:"1px solid #96CDEF", height: "auto", marginRight: "1%", padding:"2%", cursor:"pointer", borderRadius:"10px", '&:hover': {borderColor: '#346E93',  transition: "ease 0.5s"}}}>
                                <Typography variant="body1" style={{ fontWeight: 600, textAlign: "center", marginTop: "0rem" }}>Dinner</Typography>
                              </Box>
                              <Box sx={{ width: "75%", border:"1px solid #96CDEF", height: "auto", padding:"2%",cursor:"pointer", borderRadius:"10px", '&:hover': {borderColor: '#346E93',  transition: "ease 0.5s"} }}>
                                <Typography variant="body2" style={{ fontWeight: 600, textAlign: "center", marginTop: "0rem" }}>{selectedMealPlan.dinner}</Typography>
                              </Box>
                            </Box>
                        
                        </Box>
                        <Box sx={{display:"flex", marginTop:"2%", padding:"1%", width:"100%"}}>
                            
                            <Box sx={{ display: "flex", marginTop: "2%", padding: "1%", width:"100%" }}>
                              <Box sx={{ width: "25%", border:"1px solid #96CDEF", height: "auto", marginRight: "1%", padding:"2%", cursor:"pointer", borderRadius:"10px", '&:hover': {borderColor: '#346E93',  transition: "ease 0.5s"}}}>
                                <Typography variant="body1" style={{ fontWeight: 600, textAlign: "center", marginTop: "0rem" }}>Note</Typography>
                              </Box>
                              <Box sx={{ width: "75%", border:"1px solid #96CDEF", height: "auto", padding:"2%",cursor:"pointer", borderRadius:"10px", '&:hover': {borderColor: '#346E93',  transition: "ease 0.5s"} }}>
                                <Typography variant="body2" style={{ fontWeight: 600, textAlign: "center", marginTop: "0rem" }}>{selectedMealPlan.note}</Typography>
                              </Box>
                            </Box>
                        
                        </Box>
                        
                       
                    </Box>
                 )}

                </Box>
              
              </Box>
            </Box>
        </Box>
     
      </Box>
    </Box>

  );
};

export default MealPlan;
