import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography,TextField, Select, MenuItem, InputLabel, FormControl, Button } from "@mui/material";
import Sidebar from "../../components/TrainerSidebar";
import Navbar from "../../components/TrainerNavbar";
import "../../styles/member/ScheduleStyles.css";
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { useEffect } from "react";
import Modal from '@mui/material/Modal';
import {FaRegTimesCircle} from 'react-icons/fa';
import axios from 'axios';
import { motion } from "framer-motion";

import Meal1 from '../../assets/Meals//meal1.png';
import Meal2 from '../../assets/Meals//meal2.png';
import Meal3 from '../../assets/Meals//meal3.png';
import Meal4 from '../../assets/Meals//meal4.png';
import Meal5 from '../../assets/Meals//meal5.png';
import Meal6 from '../../assets/Meals//meal6.png';
import Meal7 from '../../assets/Meals//meal7.png';
import Meal8 from '../../assets/Meals//meal8.png';

const images = [Meal1, Meal2, Meal3, Meal4, Meal5, Meal6, Meal7, Meal8];

const MealPlan = () => {

  const color2 = "#346E93" //light blue
  const color4 = "#DC1E2A" //red 

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //to display meal plan names
  const [mealPlanName, setMealPlanName] = useState([]);
  //to display meal plan details
  const [selectedMealPlan, setSelectedMealPlan] = useState(null);
  //to selected display meal plan details
  const [selectedMealPlanDetails, setSelectedMealPlanDetails] = useState(null);
  //to add new meal plan
  const [newMealPlan, setNewMealPlan] = useState({
    name: "",
    breakfast: "",
    lunch: "",
    dinner: "",
    pre_workout: "",
    post_workout: "",
    note: ""
  });
  const [currentImage, setCurrentImage] = useState(0);

  const [submitted, setSubmitted] = useState(false);

  //get form inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMealPlan((prevMealPlan) => ({
      ...prevMealPlan,
      [name]: value,
    }));
  };

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

  useEffect(() => {

    viewMealPlans();

    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(timer);
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

  const viewMealPlans = async () => {

    const reqData = {
      userID: JSON.parse(localStorage.getItem('userID')),
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

  const handleMealPlanClick = async (mealPlan) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/mealplans/getmealplan/${mealPlan.id}`);
      setSelectedMealPlanDetails(response.data.data);
    } catch (error) {
      console.error("Error retrieving meal plan details:", error);
      // Handle error scenarios here
    }
  };

  const handleSubmit = async () => {

    if (!newMealPlan.name || !newMealPlan.breakfast || !newMealPlan.lunch || !newMealPlan.dinner || !newMealPlan.pre_workout || !newMealPlan.post_workout || !newMealPlan.note) {
      // Display error messages or styles for empty fields
      setSubmitted(true);
      return;
    }  

    try {
      const payload = {
        name: newMealPlan.name,
        breakfast: newMealPlan.breakfast,
        lunch: newMealPlan.lunch,
        dinner: newMealPlan.dinner,
        pre_workout: newMealPlan.pre_workout,
        post_workout: newMealPlan.post_workout,
        note: newMealPlan.note,
        userID: JSON.parse(localStorage.getItem('userID')),
      };
      console.log("from fe: ", payload)

      const res = await axios.post(
        "http://localhost:8000/api/mealplans//addmealplan",
        payload
      );
  
      if (res.status === 201) {
        handleClose(); // Close the modal
        viewMealPlans(); // Refresh the announcement list
        setNewMealPlan({ name: "", breakfast: "", lunch: "", dinner: "", pre_workout: "", post_workout: "", note: "" }); // Clear the form
        setSubmitted(false);
      }
    } catch (error) {
      console.error("Adding mealPlan failed:", error);
      // Handle error scenarios here
    }
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const selectStyle = {
    marginBottom: "0rem",
    color: "black",
    backgroundColor: "white",
    width: "11rem",
    height: "3rem",
    borderRadius: "20px",
    
  };

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
    },
    {
      title: "Post Workout",
      description: "Green tea"
    },
    {
      title: "Note",
      description: "Low Carb Diet"
    },
  ];

  return (

    <Box sx={{ flex: "1", display:"flex", mb:2}}>
    <Box>
      <Sidebar sidebarLinkId = "5"/>
    </Box>
    
    <Box component="main" sx={{flex:1 }}>
        <div
            className={`navbar ${fixedNavbar ? "fixed" : ""}`}
            style={{ width: "100%" }}
          >
            <Navbar />
        </div>
      <Box sx={{ paddingLeft:"5rem", flex:1 }}>
         
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Meal Plans</Typography>
          <Box sx={{ backgroundColor: "#E5E8E8", width:"95%", height:"110vh", padding:"0.5%", marginTop:"2%", borderRadius:"10px"}}>
            <Box sx={{ display:"flex",flexWrap: "wrap", backgroundColor:"white", width: "100%", height:"108vh", padding:"2%"}}> 
                
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
                <Button variant="contained" onClick={handleOpen} sx={{ backgroundColor: color2, color: "white", padding: "10px 20px", height: "30px", width: "170px", marginLeft:"72%", fontSize: "10px", '&:hover': { backgroundColor: "#808080" } }}>Add New Meal Plan</Button>

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
                      
                        <Box sx={{display:"flex"}}>

                          <Box sx={{ marginTop: "2%", marginLeft: "15%", padding: "1%", width: "60%", height: "10%", justifyContent: "left" }}>
                            <FormControl variant="outlined" sx={{ width: "60%" }}>
                            <InputLabel id="demo-simple-select-outlined-label">Search Member</InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="Select Option"
                            >
                            <MenuItem value="">
                            <em>Search Member</em>
                            </MenuItem>
                              <MenuItem value="Option1">Bob</MenuItem>
                              <MenuItem value="Option2">Arthur</MenuItem>
                              <MenuItem value="Option3">David</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        
                          <Button variant="contained" sx={{ backgroundColor: color2, color: "white",marginTop:"4%", padding: "10px 20px", height: "40px", right: "19%", fontSize: "16px", '&:hover': { backgroundColor: "#808080" } }}>Send</Button>

                        </Box>
                        
                       
                    </Box>
                 )}

                </Box>
                
            
            </Box>
          </Box>
      </Box>
   
    </Box>

    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <FaRegTimesCircle onClick={handleClose} style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA" ,}}  
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
                            
                        </Box>
                        
                        <Box sx={{textAlign:"center", padding:"1%"}}>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Meal Plan Name:</InputLabel>
                            <TextField variant="outlined" name="name" value={newMealPlan.name} onChange={handleInputChange} error={submitted && !newMealPlan.name} helperText={submitted && !newMealPlan.name ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Breakfast:</InputLabel>
                            <TextField variant="outlined" name="breakfast" value={newMealPlan.breakfast} onChange={handleInputChange} error={submitted && !newMealPlan.breakfast} helperText={submitted && !newMealPlan.breakfast ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Lunch:</InputLabel>
                            <TextField variant="outlined" name="lunch" value={newMealPlan.lunch} onChange={handleInputChange} error={submitted && !newMealPlan.lunch} helperText={submitted && !newMealPlan.lunch ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Pre Workout:</InputLabel>
                            <TextField variant="outlined" name="pre_workout" value={newMealPlan.pre_workout} onChange={handleInputChange} error={submitted && !newMealPlan.pre_workout} helperText={submitted && !newMealPlan.pre_workout ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Dinner:</InputLabel>
                            <TextField variant="outlined" name="dinner" value={newMealPlan.dinner} onChange={handleInputChange} error={submitted && !newMealPlan.dinner} helperText={submitted && !newMealPlan.dinner ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Post Workout:</InputLabel>
                            <TextField variant="outlined" name="post_workout" value={newMealPlan.post_workout} onChange={handleInputChange} error={submitted && !newMealPlan.post_workout} helperText={submitted && !newMealPlan.post_workout ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Note:</InputLabel>
                            <TextField variant="outlined" name="note" value={newMealPlan.note} onChange={handleInputChange} error={submitted && !newMealPlan.note} helperText={submitted && !newMealPlan.note ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <Box sx={{display:"flex", marginTop:"3%", justifyContent:"center"}}>
                              <Button variant="contained" onClick={handleSubmit} style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%", marginRight:"1%"}}>Add Meal Plan</Button>
                            </Box>
                            
                           
                        </Box>
                        
                    </Box>
                </Modal>
  </Box>

);
};
    
export default MealPlan;
