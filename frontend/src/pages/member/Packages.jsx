import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Rating from '@mui/material/Rating';
import { Typography, Select, MenuItem, Button, InputLabel, FormControl } from "@mui/material";
import {FaBitbucket} from "react-icons/fa";


const instructorsData = [
      {
        month: "One Month",
        type: "Bronze Package",
        price: "15000",
        workoutsFor: "Male only",
        mode: "Onsite only",
        rating: 4,
       
      },
      {
        month: "Three Month",
        type: "Silver Package",
        price: "45000",
        workoutsFor: "Both",
        mode: "Onsite only",
        rating: 4,
     
      },
      {
        month: "Six Month",
        type: "Gold Package",
        price: "65000",
        workoutsFor: "Female only",
        mode: "Onsite only",
        rating: 4,
     
      },
      {
        month: "One Year",
        type: "Platinum Package",
        price: "110000",
        workoutsFor: "Female only",
        mode: "Onsite only",
        rating: 4,
       
      },
    
     
    ];
    

const Packages = () => {
  const [item, setItem] = React.useState('');

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <Box sx={{ flex: "1", display: "flex", mb: 2 }}>
      <Box>
        <Sidebar />
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        <Box>
          <Navbar />
        </Box>

        <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "1rem", textAlign: "left" }}>Membership & Trainer Packages</Typography>

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
                  <Typography variant="h6" style={{ fontSize: "20px", fontWeight: 700 }}>{instructor.month}</Typography>
                  <Typography variant="h6" style={{ fontSize: "12px", fontWeight: 500 }}>({instructor.type})</Typography><br />
                  <Typography variant="h6" style={{ fontSize: "16px", fontWeight: 700 }}>Rs.{instructor.price}</Typography><br />
                  <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> Workouts for: {instructor.workoutsFor}</span><br />
                  <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> Mode: {instructor.mode}</span><br />
                  <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> Workouts for: {instructor.workoutsFor}</span><br />
                  <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> Mode: {instructor.mode}</span><br /><br />
                  <Button variant="contained" style={{ backgroundColor: "#96CDEF", color: "black", fontWeight: "700" }}>Get Started</Button>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Packages;
