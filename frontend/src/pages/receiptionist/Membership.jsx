import React from "react";
import Box from "@mui/material/Box";
import ReceiptionistSidebar from "../../components/ReceiptionistSidebar";
import ReceiptionistNavbar from "../../components/ReceiptionistNavbar";
import { Typography, Select, MenuItem, Button, InputLabel, FormControl } from "@mui/material";
import {FaBitbucket} from "react-icons/fa";
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


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
    

const Membership = () => {
  const [item, setItem] = React.useState('');
  const [fixedNavbar, setFixedNavbar] = useState(false);


  const color2 = "#346E93" //light blue
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

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <Box sx={{ flex: "1", display: "flex", mb: 2 }}>
      <Box>
        <ReceiptionistSidebar sidebarLinkId = "4"/>
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
      <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <ReceiptionistNavbar />
        </div>

        <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign: "left" }}>Membership Plans</Typography>

          <Box sx={{display:"block", marginTop:"3rem"}}>
            <Box>
              <Typography variant="h6" style={{ fontWeight: 700, textAlign: "left" }}>Bronze Packages</Typography>
            </Box>
            
            <Box sx={{ display: "flex", height: "40vh", width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "0.1rem", marginTop: "0.5rem" }}>
                {instructorsData.map((instructor, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "22%",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
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
                    <Typography variant="h5" style={{ fontSize: "16px", fontWeight: 700 }}>Rs.{instructor.price}</Typography><br />
                    <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact1}</span><br />
                    <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact2}</span><br />
                    <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact3}</span><br />
                    <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact4}</span><br /><br />
                    <Button variant="outlined" color="error" style={{fontWeight: "700" }}>Delete</Button>
                  </Box>
                ))}
              </Box>
              
          </Box>
          <Box sx={{display:"block", marginTop:"3rem"}}>
            <Box>
              <Typography variant="h6" style={{ fontWeight: 700, textAlign: "left" }}>Silver Packages</Typography>
            </Box>
            
            <Box sx={{ display: "flex", height: "40vh", width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "0.1rem", marginTop: "0.5rem" }}>
                {instructorsData.map((instructor, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "22%",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
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
                    <Typography variant="h5" style={{ fontSize: "16px", fontWeight: 700 }}>Rs.{instructor.price}</Typography><br />
                    <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact1}</span><br />
                    <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact2}</span><br />
                    <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact3}</span><br />
                    <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact4}</span><br /><br />
                    <Button variant="outlined" color="error" style={{fontWeight: "700" }}>Delete</Button>
                  </Box>
                ))}
              </Box>
              
          </Box>
          <Box sx={{display:"block", marginTop:"3rem"}}>
            <Box>
              <Typography variant="h6" style={{ fontWeight: 700, textAlign: "left" }}>Gold Packages</Typography>
            </Box>
            
            <Box sx={{ display: "flex", height: "40vh", width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "0.1rem", marginTop: "0.5rem" }}>
                {instructorsData.map((instructor, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "22%",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
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
                    <Typography variant="h5" style={{ fontSize: "16px", fontWeight: 700 }}>Rs.{instructor.price}</Typography><br />
                    <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact1}</span><br />
                    <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact2}</span><br />
                    <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact3}</span><br />
                    <span style={{ fontSize: "12px", fontWeight: 500 }}><FaBitbucket /> {instructor.fact4}</span><br /><br />
                    <Button variant="outlined" color="error" style={{fontWeight: "700" }}>Delete</Button>
                  </Box>
                ))}
              </Box>
              
          </Box>
          
        
        </Box>
      </Box>
    </Box>
  );
};

export default Membership;
