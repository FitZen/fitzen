import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import ProfileImg from '../../assets/photo-1633332755192-727a05c4013d.jpg';
import {PiMedalFill} from 'react-icons/pi';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

const MealPlan = () => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(timer);
  }, []);

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
      title: "Dinner",
      description: "Brown rice, peas paneer curry, sprouts vegetable salad",
    }
  ];

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
           
            <Typography variant="h4" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Meal Plan</Typography>
            <Box sx={{ backgroundColor: "#E5E8E8", width:"95%", padding:"0.5%", marginTop:"2%", borderRadius:"10px"}}>
              <Box sx={{ display:"flex",flexWrap: "wrap", backgroundColor:"white", width: "100%", height:"80vh", padding:"2%"}}> 
                  
                  <Box sx={{width:"40%", height:"100%",justifyContent:"center", alignItems:"center"}}>
                      <Box  sx={{flexDirection:"column", justifyContent:"center", alignItems:"center", width:"70%", height:"15%", marginLeft:"15%", cursor:"pointer", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"}}}>
                          <Typography variant="h5" style={{ fontWeight: 600, textAlign:"center", marginTop:"1.8rem" }}>Suggested Plan</Typography>
                      </Box>
                      <Box sx={{flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:"2rem", width:"70%", height:"15%", marginLeft:"15%", cursor:"pointer", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"}}}>
                          <Typography variant="h5" style={{ fontWeight: 600, textAlign:"center", marginTop:"1.8rem" }}>Trainers' Plan</Typography>
                      </Box>
                      <Box sx={{width:"70%", height:"70%", justifyContent:"center", alignItems:"center", padding:"2%"}}>
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
                  </Box>
                  <Box sx={{width:"60%", height:"100%", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', justifyContent:"center", alignItems:"center", padding:"2%"}}>
                      <Typography variant="h5" style={{ fontWeight: 600, textAlign:"center", marginTop:"0.5rem" }}>Suggested Plan</Typography>
                      {Meals.map((meal, index) => (
                        <Box sx={{display:"flex", marginTop:"2%", padding:"1%", width:"100%"}}>
                          
                            <Box key={index} sx={{ display: "flex", marginTop: "2%", padding: "1%", width:"100%" }}>
                              <Box sx={{ width: "25%", border:"1px solid #96CDEF", height: "auto", marginRight: "1%", padding:"2%", cursor:"pointer", borderRadius:"10px", '&:hover': {borderColor: '#346E93',  transition: "ease 0.5s"}}}>
                                <Typography variant="body1" style={{ fontWeight: 600, textAlign: "center", marginTop: "0rem" }}>{meal.title}</Typography>
                              </Box>
                              <Box sx={{ width: "75%", border:"1px solid #96CDEF", height: "auto", padding:"2%",cursor:"pointer", borderRadius:"10px", '&:hover': {borderColor: '#346E93',  transition: "ease 0.5s"} }}>
                                <Typography variant="body2" style={{ fontWeight: 600, textAlign: "center", marginTop: "0rem" }}>{meal.description}</Typography>
                              </Box>
                            </Box>
                        
                        </Box>
                      ))}
                  </Box>
              
              </Box>
            </Box>
        </Box>
     
      </Box>
    </Box>

  );
};

export default MealPlan;
