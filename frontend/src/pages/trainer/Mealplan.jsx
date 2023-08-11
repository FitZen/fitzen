import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography, Select, MenuItem, InputLabel, FormControl, Button } from "@mui/material";
import Sidebar from "../../components/TrainerSidebar";
import Navbar from "../../components/TrainerNavbar";
import "../../styles/member/ScheduleStyles.css";
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Schedule = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const [selectedYear, setSelectedYear] = useState("");

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const selectStyle = {
    marginBottom: "0rem",
    color: "black",
    backgroundColor: "white",
    width: "11rem",
    height: "3rem",
    borderRadius: "20px",
    
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
          <Typography
            variant="h3"
            style={{ fontWeight: 700, marginTop: "1rem", textAlign: "left" }}
          >
            Meal Plans
          </Typography>{" "}
          <br></br>
          <Box
            sx={{
              borderRadius: "10px",
              backgroundColor: "#E5E4E2",
              width: "40%",
              padding: "20px",
              alignItems: "center",
              
            }}
          >
            
            <Box
              sx={{
                backgroundColor: "#ffffff",
                padding: "0.7rem",
                borderRadius: "10px",
                margin: "1rem",
                width: "70%",
                height: "70px",
                display: "flex",
                alignItems: "center", 
                justifyContent: "left", 
                position: "relative", 
                
              }}
            >

           <Box
            sx={{
             position: "absolute",
             top: "-25px",
             right: "0.5rem",
             display: "flex",
             alignItems: "center", 
          }}
        >
        </Box>

            <DeleteIcon
             sx={{
              position: "absolute",
              textAlign: "center",
              right: "1rem",
              color: "black",
              cursor: "pointer",
              fontSize: "28px",
             }}
          />
            <EditIcon
             sx={{
              position: "absolute",
              textAlign: "center",
              right: "4rem",
              color: "black",
              cursor: "pointer",
              fontSize: "28px",
              
              }}
      />
              <Typography
                variant="h6"
                style={{
                  fontSize: "18px",
                  // marginTop: "10px",
                textAlign: "center",
                fontWeight: 600,
                marginLeft: "20px",
                }}
              >
                Meal Plan 1
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#ffffff",
                padding: "0.7rem",
                borderRadius: "10px",
                margin: "1rem",
                width: "70%",
                height: "70px",
                display: "flex",
                alignItems: "center", 
                justifyContent: "left", 
                position: "relative", 
              }}
            >

          <DeleteIcon
             sx={{
              position: "absolute",
              textAlign: "center",
              right: "1rem",
              color: "black",
              cursor: "pointer",
              fontSize: "28px",
             }}
          />
            <EditIcon
             sx={{
              position: "absolute",
              textAlign: "center",
              right: "4rem",
              color: "black",
              cursor: "pointer",
              fontSize: "28px",
              
              }}
      />
              <Typography
                variant="h6"
                style={{
                  fontSize: "18px",
                  // marginTop: "10px",
                  textAlign: "center",
                  fontWeight: 600,
                  marginLeft: "20px",
                }}
              >
                Meal Plan 2
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#ffffff",
                padding: "0.7rem",
                borderRadius: "10px",
                margin: "1rem",
                width: "70%",
                height: "70px",
                display: "flex",
                alignItems: "center", 
                justifyContent: "left", 
                position: "relative",
              }}
            >

          <DeleteIcon
             sx={{
              position: "absolute",
              textAlign: "center",
              right: "1rem",
              color: "black",
              cursor: "pointer",
              fontSize: "28px",
             }}
          />
            <EditIcon
             sx={{
              position: "absolute",
              textAlign: "center",
              right: "4rem",
              color: "black",
              cursor: "pointer",
              fontSize: "28px",
              
              }}
      />
              <Typography
                variant="h6"
                style={{
                  fontSize: "18px",
                  // marginTop: "10px",
                  textAlign: "center",
                  fontWeight: 600,
                  marginLeft: "20px",
                }}
              >
                Meal Plan 3
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#ffffff",
                padding: "0.7rem",
                borderRadius: "10px",
                margin: "1rem",
                width: "70%",
                height: "70px",
                display: "flex",
                alignItems: "center", 
                justifyContent: "left", 
                position: "relative",
              }}
            >

          <DeleteIcon
             sx={{
              position: "absolute",
              textAlign: "center",
              right: "1rem",
              color: "black",
              cursor: "pointer",
              fontSize: "28px",
             }}
          />
            <EditIcon
             sx={{
              position: "absolute",
              textAlign: "center",
              right: "4rem",
              color: "black",
              cursor: "pointer",
              fontSize: "28px",
              
              }}
      />
              <Typography
                variant="h6"
                style={{
                  fontSize: "18px",
                  // marginTop: "10px",
                  textAlign: "center",
                  fontWeight: 600,
                  marginLeft: "20px",
                }}
              >
                Meal Plan 4
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#ffffff",
                padding: "0.7rem",
                borderRadius: "10px",
                margin: "1rem",
                width: "70%",
                height: "70px",
                display: "flex",
                alignItems: "center", 
                justifyContent: "left", 
                position: "relative",
              }}
            >

          <DeleteIcon
             sx={{
              position: "absolute",
              textAlign: "center",
              right: "1rem",
              color: "black",
              cursor: "pointer",
              fontSize: "28px",
             }}
          />
            <EditIcon
             sx={{
              position: "absolute",
              textAlign: "center",
              right: "4rem",
              color: "black",
              cursor: "pointer",
              fontSize: "28px",
              
              }}
      />
              <Typography
                variant="h6"
                style={{
                  fontSize: "18px",
                  // marginTop: "10px",
                  textAlign: "center",
                  fontWeight: 600,
                  marginLeft: "20px",
                }}
              >
                Meal Plan 5
              </Typography>
            </Box>
          </Box>
          {/* second box */}
          <Box
            sx={{
              borderRadius: "10px",
              backgroundColor: "#E5E4E2",
              width: "40%",
              padding: "20px",
              alignItems: "center",
              position: "absolute",
              top: "20%",
              right: "5%",
            }}
          >

<          Box sx={{ paddingLeft: "5rem", flex: 1 }}>
          <Typography
            variant="h5"
            style={{ fontWeight: 700, marginTop: "1rem", marginLeft: "120px", }}
          >
            Meal Plan - 1
          </Typography>{" "}
          <br></br></Box>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                padding: "1rem",
                borderRadius: "10px",
                margin: "1rem",
                width: "35%",
                height: "60px",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "18px",
                  // marginTop: "10px",
                  textAlign: "center",
                  fontWeight: 600,
                  
                }}
              >
                Breakfast
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                padding: "1rem",
                borderRadius: "10px",
                margin: "1rem",
                width: "35%",
                height: "60px",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "18px",
                  // marginTop: "10px",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Lunch
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                padding: "1rem",
                borderRadius: "10px",
                margin: "1rem",
                width: "35%",
                height: "60px",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "18px",
                  // marginTop: "10px",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Pre - Workout
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                padding: "1rem",
                borderRadius: "10px",
                margin: "1rem",
                width: "35%",
                height: "60px",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "18px",
                  // marginTop: "10px",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Dinner
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                padding: "10px",
                borderRadius: "10px",
                margin: "1rem",
                width: "50%",
                height: "60px",
                position: "absolute",
                top: "17%",
                right: "0",
                // transform: "translate(0, -10%)", // Vertically center the box
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                }}
              >
                Oats Banana Pancakes with Protein Shake
              </Typography>{" "}
            </Box>

            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                padding: "9px",
                borderRadius: "10px",
                margin: "1rem",
                width: "50%",
                height: "60px",
                position: "absolute",
                top: "32%",
                right: "0",
                // transform: "translate(0, -10%)", // Vertically center the box
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                }}
              >
                Multigrain roti  with palak chicken and Avocado bell pepper salad
              </Typography>{" "}
            </Box>

            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                padding: "15px",
                borderRadius: "10px",
                margin: "1rem",
                width: "50%",
                height: "60px",
                position: "absolute",
                top: "46.5%",
                right: "0",
                // transform: "translate(0, -10%)", // Vertically center the box
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                }}
              >
                Snack	 and Bananas
              </Typography>{" "}
            </Box>

            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                padding: "4px",
                borderRadius: "10px",
                margin: "1rem",
                width: "50%",
                height: "60px",
                position: "absolute",
                top: "61%",
                right: "0",
                // transform: "translate(0, -10%)", // Vertically center the box
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                }}
              >
                Brown rice, peas paneer curry, sprouts vegetable salad

              </Typography>{" "}
            </Box><br /><br />
            
            <Box sx={{ width: "25%", height: "100%", marginLeft: "20%" }}>
              <FormControl>
                <InputLabel id="demo-simple-select-label" >Search Member</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedYear}
                  label="Year"
                  onChange={handleYearChange}
                  style={selectStyle}
                >
                  <MenuItem value="Peter">Peter</MenuItem>
                  <MenuItem value="Anne">Anne</MenuItem>
                  <MenuItem value="Bob">Bob</MenuItem>
                  <MenuItem value="Alan">Alan</MenuItem>
                </Select>
              </FormControl>
              </Box>
              <Button
      variant="contained"
      sx={{
        backgroundColor: "black", 
        color: "white",
        borderRadius: "60px",
        padding: "10px 20px",
        height: "40px",
        position: "absolute", // Position the button absolutely
        bottom: "25px", // Distance from the bottom
        right: "180px", // Distance from the right
        fontSize: "16px", 
        '&:hover': {
        backgroundColor: "#808080", // Hover background color
        },
      }}
    >
      Send
    </Button>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Schedule;
