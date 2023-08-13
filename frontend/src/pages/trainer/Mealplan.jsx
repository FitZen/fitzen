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

const MealPlan = () => {

  const color2 = "#346E93" //light blue

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
         
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Meal Plans</Typography>
          <Box sx={{ backgroundColor: "#E5E8E8", width:"95%", height:"110vh", padding:"0.5%", marginTop:"2%", borderRadius:"10px"}}>
            <Box sx={{ display:"flex",flexWrap: "wrap", backgroundColor:"white", width: "100%", height:"108vh", padding:"2%"}}> 
                
            <Box sx={{width:"40%", height:"100%", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', justifyContent:"center", alignItems:"center", padding:"2%", marginRight: "25px", overflowY: "scroll", }}>
                    <Box  sx={{flexDirection:"column", justifyContent:"center", alignItems:"center", position: "relative", width:"80%", height:"10%", marginLeft:"10%", cursor:"pointer", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"}}}>
                        <Typography variant="h6" style={{ fontWeight: 600, textAlign:"center", marginTop:"0.7rem", marginRight:"5rem" }}>Meal Plan - 01</Typography>
                        <DeleteIcon sx={{ position: "absolute", top: "50%", right: "5px", transform: "translateY(-50%)",  color: "white", backgroundColor: 'black',  borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px" }} />
                        <EditIcon sx={{ position: "absolute", top: "50%", right: "45px", transform: "translateY(-50%)", color: "white", backgroundColor: 'black',  borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px" }} />
                    </Box><br />
                    <Box  sx={{flexDirection:"column", justifyContent:"center", alignItems:"center", position: "relative", width:"80%", height:"10%", marginLeft:"10%", cursor:"pointer", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"}}}>
                        <Typography variant="h6" style={{ fontWeight: 600, textAlign:"center", marginTop:"0.7rem", marginRight:"5rem" }}>Meal Plan - 02</Typography>
                        <DeleteIcon sx={{ position: "absolute", top: "50%", right: "5px", transform: "translateY(-50%)",  color: "white", backgroundColor: 'black',  borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px" }} />
                        <EditIcon sx={{ position: "absolute", top: "50%", right: "45px", transform: "translateY(-50%)", color: "white", backgroundColor: 'black',  borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px" }} />
                    </Box><br />
                    <Box  sx={{flexDirection:"column", justifyContent:"center", alignItems:"center", position: "relative", width:"80%", height:"10%", marginLeft:"10%", cursor:"pointer", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"}}}>
                        <Typography variant="h6" style={{ fontWeight: 600, textAlign:"center", marginTop:"0.7rem", marginRight:"5rem" }}>Meal Plan - 03</Typography>
                        <DeleteIcon sx={{ position: "absolute", top: "50%", right: "5px", transform: "translateY(-50%)",  color: "white", backgroundColor: 'black',  borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px" }} />
                        <EditIcon sx={{ position: "absolute", top: "50%", right: "45px", transform: "translateY(-50%)", color: "white", backgroundColor: 'black',  borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px" }} />
                    </Box><br />
                    <Box  sx={{flexDirection:"column", justifyContent:"center", alignItems:"center", position: "relative", width:"80%", height:"10%", marginLeft:"10%", cursor:"pointer", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"}}}>
                        <Typography variant="h6" style={{ fontWeight: 600, textAlign:"center", marginTop:"0.7rem", marginRight:"5rem" }}>Meal Plan - 04</Typography>
                        <DeleteIcon sx={{ position: "absolute", top: "50%", right: "5px", transform: "translateY(-50%)",  color: "white", backgroundColor: 'black',  borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px" }} />
                        <EditIcon sx={{ position: "absolute", top: "50%", right: "45px", transform: "translateY(-50%)", color: "white", backgroundColor: 'black',  borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px" }} />
                    </Box><br />
                    <Box  sx={{flexDirection:"column", justifyContent:"center", alignItems:"center", position: "relative", width:"80%", height:"10%", marginLeft:"10%", cursor:"pointer", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"}}}>
                        <Typography variant="h6" style={{ fontWeight: 600, textAlign:"center", marginTop:"0.7rem", marginRight:"5rem" }}>Meal Plan - 05</Typography>
                        <DeleteIcon sx={{ position: "absolute", top: "50%", right: "5px", transform: "translateY(-50%)",  color: "white", backgroundColor: 'black',  borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px" }} />
                        <EditIcon sx={{ position: "absolute", top: "50%", right: "45px", transform: "translateY(-50%)", color: "white", backgroundColor: 'black',  borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px" }} />
                    </Box><br />
                    <Box  sx={{flexDirection:"column", justifyContent:"center", alignItems:"center", position: "relative", width:"80%", height:"10%", marginLeft:"10%", cursor:"pointer", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"}}}>
                        <Typography variant="h6" style={{ fontWeight: 600, textAlign:"center", marginTop:"0.7rem", marginRight:"5rem" }}>Meal Plan - 06</Typography>
                        <DeleteIcon sx={{ position: "absolute", top: "50%", right: "5px", transform: "translateY(-50%)",  color: "white", backgroundColor: 'black',  borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px" }} />
                        <EditIcon sx={{ position: "absolute", top: "50%", right: "45px", transform: "translateY(-50%)", color: "white", backgroundColor: 'black',  borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px" }} />
                    </Box><br />
                    <Box  sx={{flexDirection:"column", justifyContent:"center", alignItems:"center", position: "relative", width:"80%", height:"10%", marginLeft:"10%", cursor:"pointer", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"}}}>
                        <Typography variant="h6" style={{ fontWeight: 600, textAlign:"center", marginTop:"0.7rem", marginRight:"5rem" }}>Meal Plan - 07</Typography>
                        <DeleteIcon sx={{ position: "absolute", top: "50%", right: "5px", transform: "translateY(-50%)",  color: "white", backgroundColor: 'black',  borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px" }} />
                        <EditIcon sx={{ position: "absolute", top: "50%", right: "45px", transform: "translateY(-50%)", color: "white", backgroundColor: 'black',  borderRadius: '50%', padding: '4px', cursor: "pointer", fontSize: "25px" }} />
                    </Box><br />
                    
                </Box>
                <Button variant="contained" onClick={handleOpen} sx={{ backgroundColor: "black", color: "white", padding: "10px 20px", height: "30px", width: "170px", position: "absolute", bottom: "75%", right: "7%", fontSize: "10px", '&:hover': { backgroundColor: "#808080" } }}>Add New Meal Plan</Button>
                <Box sx={{marginTop: "40px", width:"57%", height:"95%", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', justifyContent:"center", alignItems:"center", padding:"2%"}}>
                    <Typography variant="h5" style={{ fontWeight: 600, textAlign:"center", marginTop:"0.5rem" }}>Meal Plan - 01</Typography>
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

                            <Box sx={{ display: "flex", marginTop: "2%", marginLeft: "15%", padding: "1%", width: "60%", height: "10%", justifyContent: "left" }}>
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
                            <Button variant="contained" sx={{ backgroundColor: "black", color: "white", padding: "10px 20px", height: "40px", position: "absolute", top: "111%", right: "19%", fontSize: "16px", '&:hover': { backgroundColor: "#808080" } }}>Send</Button>
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
                            <TextField variant="outlined" inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Breakfast:</InputLabel>
                            <TextField variant="outlined" inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Lunch:</InputLabel>
                            <TextField variant="outlined" inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Pre Workout:</InputLabel>
                            <TextField variant="outlined" inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Dinner:</InputLabel>
                            <TextField variant="outlined" inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            
                            <Box sx={{display:"flex", marginTop:"3%", justifyContent:"center"}}>
                              <Button variant="contained" style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%", marginRight:"1%"}}>Add Meal Plan</Button>
                            </Box>
                            
                           
                        </Box>
                        
                    </Box>
                </Modal>
  </Box>

);
};
    
export default MealPlan;
