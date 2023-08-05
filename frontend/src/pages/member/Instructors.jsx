import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Rating from '@mui/material/Rating';
import { Typography, Select, MenuItem, Button, InputLabel, FormControl } from "@mui/material";

import item1 from "../../assets/Trainers/sab-qadeer-nP2UzV4liWQ-unsplash.jpg"
import item2 from "../../assets/Trainers/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg"
import item3 from "../../assets/Trainers/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg"
import item4 from "../../assets/Trainers/jake-nackos-IF9TK5Uy-KI-unsplash.jpg"
import item5 from "../../assets/Trainers/james-timothy-Kh3aTWwMH1I-unsplash.jpg"
import item6 from "../../assets/Trainers/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg"
import item7 from "../../assets/Trainers/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
import item8 from "../../assets/Trainers/roland-cousins-3GTHyh2lo9o-unsplash.jpg"
import item9 from "../../assets/Trainers/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg"
import item10 from "../../assets/Trainers/jd-mason-2oUiUu5QAys-unsplash.jpg"
import item11 from "../../assets/Trainers/tamarcus-brown-29pFbI_D1Sc-unsplash.jpg"
import item12 from "../../assets/Trainers/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg"

const instructorsData = [
      {
        name: "Mr. Jhonny",
        workoutsFor: "Male only",
        mode: "Onsite only",
        rating: 4,
        image: item1,
      },
      {
        name: "Mr. Warne",
        workoutsFor: "Both",
        mode: "Onsite only",
        rating: 4,
        image: item2,
      },
      {
        name: "Mrs. Jhonson",
        workoutsFor: "Female only",
        mode: "Onsite only",
        rating: 4,
        image: item3,
      },
      {
        name: "Ms. Natalie",
        workoutsFor: "Female only",
        mode: "Onsite only",
        rating: 4,
        image: item4,
      },
      {
        name: "Mr. Jhonny",
        workoutsFor: "Male only",
        mode: "Onsite only",
        rating: 4,
        image: item5,
      },
      {
        name: "Mr. Jhonny",
        workoutsFor: "Male only",
        mode: "Onsite only",
        rating: 4,
        image: item6,
      },
      {
        name: "Mr. Jhonny",
        workoutsFor: "Male only",
        mode: "Onsite only",
        rating: 4,
        image: item7,
      },
      {
        name: "Mr. Jhonny",
        workoutsFor: "Male only",
        mode: "Onsite only",
        rating: 4,
        image: item8,
      },
      {
        name: "Mr. Jhonny",
        workoutsFor: "Male only",
        mode: "Onsite only",
        rating: 4,
        image: item9,
      },
      {
        name: "Mr. Jhonny",
        workoutsFor: "Male only",
        mode: "Onsite only",
        rating: 4,
        image: item10,
      },
      {
        name: "Mr. Jhonny",
        workoutsFor: "Male only",
        mode: "Onsite only",
        rating: 4,
        image: item11,
      },
      {
        name: "Mr. Jhonny",
        workoutsFor: "Male only",
        mode: "Onsite only",
        rating: 4,
        image: item12,
      },
    ];
    

const Instructors = () => {
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
          <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign: "left" }}>Instructors</Typography>

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
                    height: "70%",
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
                  <img src={instructor.image} alt="item" style={{ width: "80%", height: "60%", objectFit: "cover" }} />
                  <Typography variant="h6" style={{ fontSize: "16px", fontWeight: 700 }}>{instructor.name}</Typography>
                  <Typography variant="h6" style={{ fontSize: "16px", fontWeight: 500 }}>Workouts for: {instructor.workoutsFor}</Typography>
                  <Typography variant="h6" style={{ fontSize: "16px", fontWeight: 500 }}>Mode: {instructor.mode}</Typography>
                  <Rating name="read-only" value={instructor.rating} readOnly /><br />
                  <Button variant="contained" style={{ backgroundColor: "#96CDEF", color: "black", fontWeight: "700" }}>View Profile</Button>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Instructors;
