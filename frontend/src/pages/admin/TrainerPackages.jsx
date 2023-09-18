import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../../components/AdminSidebar";
import Navbar from "../../components/AdminNavbar";
import { Typography, Select, MenuItem, Button, InputLabel, FormControl, TextField } from "@mui/material";
import {FaBitbucket} from "react-icons/fa";
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Modal from '@mui/material/Modal';
import {FaRegTimesCircle} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const instructorsData = [
      {
        month: "One Month",
        type: "Bronze Package",
        price: "15000",
        fact1: "Full physical gym experience",
        fact2: "Personalized training",
        fact3: "Diet plan & workout plans",
        fact4: "Access to all gym facilities",

       
      },
      {
        month: "Three Month",
        type: "Silver Package",
        price: "45000",
        fact1: "Full physical gym experience",
        fact2: "Personalized training",
        fact3: "Diet plan & workout plans",
        fact4: "Access to all gym facilities",
     
      },
      {
        month: "Six Month",
        type: "Gold Package",
        price: "65000",
        fact1: "Full physical gym experience",
        fact2: "Personalized training",
        fact3: "Diet plan & workout plans",
        fact4: "Access to all gym facilities",
     
      },
      {
        month: "One Year",
        type: "Platinum Package",
        price: "110000",
        fact1: "Full physical gym experience",
        fact2: "Personalized training",
        fact3: "Diet plan & workout plans",
        fact4: "Access to all gym facilities",
       
      },
    
     
    ];
    

const TrainerPackages = () => {
  const [item, setItem] = React.useState('');
  const [fixedNavbar, setFixedNavbar] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();


  const color2 = "#346E93" //light blue
  useEffect(() => {
    if((localStorage.getItem('userType') !== '"Admin"')){
      navigate('/login');
    }
    
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

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <Box sx={{ flex: "1", display: "flex", mb: 2 }}>
      <Box>
        <Sidebar sidebarLinkId = "3"/>
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
      <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <Navbar />
        </div>

        <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign: "left" }}>Trainer Packages</Typography>

          <Box sx={{ display: "flex", marginTop: "1rem", justifyContent:"space-between", width:"96%" }}>
            <FormControl style={{ width: "15%" }}>
              <InputLabel id="demo-simple-select-label">All</InputLabel>
              <Select
                style={{ height: "85%" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={item}
                label="All"
                onChange={handleChange}
              >
                <MenuItem value={10}>All</MenuItem>
                <MenuItem value={20}>Membership packages</MenuItem>
                <MenuItem value={30}>Trainer packages</MenuItem>
              </Select>
            </FormControl>
           
              <Box sx={{}}>
                <Button variant="contained" onClick={handleOpen} style={{backgroundColor:color2}}> Add New Trainer Package</Button>
              </Box>
     
          </Box>

          <Box sx={{ display: "flex", width: "96%", height: "70%", backgroundColor: "#E5E8E8", padding: "0.3rem", borderRadius: "10px", marginBottom: "2rem", marginTop: "1.5rem" }}>
            <Box sx={{ display: "flex", height: "82vh", flexWrap: "wrap", overflowY: "auto", width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "1rem", margin: "0.1rem" }}>
              {instructorsData.map((instructor, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "22%",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "60%",
                    cursor: "pointer",
                    border: "2px solid white",
                    borderRadius: "10px",
                    padding: "1rem",
                    marginRight: "3%",
                    marginBottom: "1%",
                    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                    '&:hover': { borderColor: '#96CDEF', transition: "ease 0.5s" }
                  }}
                >
                  <Typography variant="h5" style={{ fontSize: "20px", fontWeight: 700 }}>{instructor.month}</Typography>
                  <Typography variant="h6" style={{ fontSize: "12px", fontWeight: 600 }}>({instructor.type})</Typography><br />
                  <Typography variant="h5" style={{ fontSize: "16px", fontWeight: 700 }}>Rs.{instructor.price}</Typography><br />
                  <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact1}</span><br />
                  <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact2}</span><br />
                  <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact3}</span><br />
                  <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact4}</span><br /><br />
                  <Button variant="contained" style={{ backgroundColor: "#96CDEF", color: "black", fontWeight: "700" }}>Edit</Button>
                </Box>
              ))}
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
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Title:</InputLabel>
                            <TextField variant="outlined" inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Sub Title:</InputLabel>
                            <TextField variant="outlined" inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Price:</InputLabel>
                            <TextField variant="outlined" inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Description:</InputLabel>
                            <TextField variant="outlined"  multiline rows="4" style={{height: 125, width:425, borderRadius:"5px", outline:"none", border:"1px solid D8D9DA"}}/>
                            
                            <Box sx={{display:"flex", marginTop:"3%", justifyContent:"center"}}>
                              <Button variant="contained" style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%"}}>Add Package</Button>
                              
                            </Box>
                            
                           
                        </Box>
                        
                    </Box>
            </Modal>

    </Box>
  );
};

export default TrainerPackages;
