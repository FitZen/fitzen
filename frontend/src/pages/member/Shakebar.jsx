import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography, Select, MenuItem, Button, InputLabel, FormControl } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

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
        <Sidebar />
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        {/* Navbar */}
        <Box>
          <Navbar />
        </Box>

        {/* Main content */}
        <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
          {/* Heading */}
          <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign: "left" }}>
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
                  <Button variant="contained" style={{ backgroundColor: "#96CDEF", color: "black", fontWeight: "700", width: "50%" }}>
                    Buy
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Shakebar;


