import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Select, MenuItem, Button, InputLabel, TextField, FormControl } from "@mui/material";
import Sidebar from "../../components/PhysiotherapistSidebar";
import Navbar from "../../components/PhysiotherapistNavbar";
import Modal from '@mui/material/Modal';
import {FaRegTimesCircle} from 'react-icons/fa';

// Import the images
import item1 from "../../assets/images (3).jpg"
import item2 from "../../assets/images (2).jpg"
import item3 from "../../assets/images (4).jpg"
import item4 from "../../assets/kisspng-dietary-supplement-optimum-nutrition-serious-mass-nutrition-and-supplements-puregym-shop-5b63010863aca4.2335550215332149844083.jpg"
import item5 from "../../assets/images (5).jpg"
import item6 from "../../assets/images-9.jpg"
import item7 from "../../assets/5lb_Promasil_Choc__62208.webp"
import item8 from "../../assets/PS_NWUE_2.47lb_NEW-LOOK_Choc_Render_smaller_1c131a00-2144-43e6-b87b-1b5eeb2c29ab_grande.webp"

const Shakebar = () => {
  // State to store the selected item from the Select component
  const [item, setItem] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [valueStart, setValueStart] = React.useState(null);
  const [valueEnd, setValueEnd] = React.useState(null);

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

  const color1 = "#102B4C" //dark blue
  const color2 = "#346E93" //light blue
  const color3 = "#96CDEF" //lighter blue

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

  // Event handler for handling the Select component's value change
  const handleChange = (event) => {
    setItem(event.target.value);
  };

  // Data array containing objects with information for each item
  const data = [
    {
      id: 1,
      imageSrc: item1,
      title: "Vitamin C",
      price: "Rs: 2300",
    },
    {
      id: 2,
      imageSrc: item2,
      title: "Vitamin C",
      price: "Rs: 2300",
    },
    {
      id: 3,
      imageSrc: item3,
      title: "Vitamin C",
      price: "Rs: 2300",
    },
    {
      id: 4,
      imageSrc: item4,
      title: "Vitamin C",
      price: "Rs: 2300",
    },
    {
      id: 5,
      imageSrc: item5,
      title: "Vitamin C",
      price: "Rs: 2300",
    },
    {
      id: 6,
      imageSrc: item6,
      title: "Vitamin C",
      price: "Rs: 2300",
    },
    {
      id: 7,
      imageSrc: item7,
      title: "Vitamin C",
      price: "Rs: 2300",
    },
    {
      id: 8,
      imageSrc: item8,
      title: "Vitamin C",
      price: "Rs: 2300",
    },
  
  ];
  

  return (
    <Box sx={{ flex: "1", display: "flex", mb: 2 }}>
      {/* Sidebar */}
      <Box>
        <Sidebar sidebarLinkId = "4"/>
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        {/* Navbar */}
        <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <Navbar />
        </div>

        {/* Main content */}
        <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
          {/* Heading */}
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign: "left" }}>
            Shakebar
          </Typography>

          {/* Select component */}
          <Box sx={{ display: "flex", marginTop: "1rem" }}>
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
                <MenuItem value={10}>Vitamins</MenuItem>
                <MenuItem value={20}>Proteins</MenuItem>
                <MenuItem value={30}>Shakes</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Item boxes */}
          <Box sx={{ display: "flex", width: "96%", height: "70%", backgroundColor: "#E5E8E8", padding: "0.3rem", borderRadius: "10px", marginBottom: "2rem", marginTop: "1.5rem" }}>
            <Box sx={{ display: "flex", height: "82vh", flexWrap: "wrap", overflowY: "auto", width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "1rem", margin: "0.1rem" }}>
              {/* Map over the data array to generate Box components */}
              {data.map((itemData) => (
                <Box
                  key={itemData.id}
                  sx={{
                    width: "22%",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70%",
                    cursor: "pointer",
                    border: "2px solid white",
                    borderRadius: "10px",
                    padding: "1rem",
                    marginRight: "3%",
                    marginBottom: "1%",
                    boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                    "&:hover": { borderColor: "#96CDEF", transition: "ease 0.5s" },
                  }}
                >
                  <img src={itemData.imageSrc} alt="item" style={{ width: "85%", height: "65%" }} />
                  <Typography variant="h6" style={{ fontWeight: 700 }}>
                    {itemData.title}
                  </Typography>
                  <Typography variant="h6" style={{ fontWeight: 500 }}>
                    {itemData.price}
                  </Typography>
                  <Button variant="contained" onClick={handleOpen} style={{ backgroundColor: "#96CDEF", color: "black", fontWeight: "700", width: "50%" }}>
                    Buy
                  </Button>
                  
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
                  
                  <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight="700" textAlign="center">
                      Dymatize Iso 100
                  </Typography>
              </Box>
              
              <Box sx={{textAlign:"center", padding:"1%", justifyContent:"center"}}>
                  <Box sx={{display:"flex", height:"40vh"}}>
                    <Box>
                      <img src={item1} alt="item" style={{width:"100%", height:"100%", objectFit:"cover"}}/>
                    </Box>
                    <Box sx={{marginTop:"15%"}}>
                      <Typography variant="body1"  textAlign="left"><span style={{fontWeight:"600"}}>Price:</span> Rs 2300</Typography><br />
                      <Typography variant="body1" textAlign="left">
                        <span style={{fontWeight:"600"}}>Description:</span>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </Typography><br />
                      <Typography variant="body1" textAlign="left"><span style={{fontWeight:"600"}}>Ingredients: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                    </Box>
                  </Box>
                  
                 
                  <Button variant="contained" onClick={handleClose} style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%"}}>Pay Online</Button>
                
              </Box>
              
          </Box>
      </Modal>
    </Box>

    
  );
};

export default Shakebar;


