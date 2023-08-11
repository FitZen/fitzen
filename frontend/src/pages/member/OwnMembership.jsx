import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import {useState, useEffect} from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const OwnMembership = () => {
 
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
  const color4 = "#DC1E2A" //red 

  const Bills = [
    {
      id: 1,
      Date: "2021-08-28",
      time: "10:00",
      amount: "Rs. 5000.00",
      paymentMethod : "Cash payment"
      
    },
    {
      id: 1,
      Date: "2021-08-28",
      time: "10:00",
      amount: "Rs. 5000.00",
      paymentMethod : "Cash payment"
      
    },
  
    
  ]



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
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Membership Details</Typography>
          <Box sx={{  width: "90%", height:"30vh", padding:"1rem", overflowY:"auto", flexWrap:"wrep", borderRadius:"10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}> 
            <Typography variant="h6" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"left" }}>Your Membership Plan </Typography>

            <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Box sx={{width:"20%",borderRadius:"10px",padding:"1%", textAlign:"center",cursor:"pointer", border:"1px solid #346E93", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"} }}>
                    <Typography variant="h6" style={{ fontWeight: 600, marginTop: "20%", textAlign:"center" }}>6 Month Plan </Typography>
                </Box>
                <Box sx={{width:"30%",borderRadius:"10px",padding:"1%", textAlign:"center" ,cursor:"pointer", border:"1px solid #346E93", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"} }}>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "1%", textAlign:"left",marginLeft:"15%" }}>Payment Type: Installments </Typography>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "1%", textAlign:"left",marginLeft:"15%" }}>Payment Status: Not Completed </Typography>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "1%", textAlign:"left",marginLeft:"15%" }}>Started Date: 2023-05-05s </Typography>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "1%", textAlign:"left",marginLeft:"15%" }}>Expire date: 2023-11-05 </Typography>
                </Box>
                <Box sx={{width:"30%",borderRadius:"10px",padding:"1%", textAlign:"center" ,cursor:"pointer", border:"1px solid #346E93", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"} }}>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "2.5%", textAlign:"left",marginLeft:"20%" }}>Total Installments: 03 </Typography>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "2.5%", textAlign:"left",marginLeft:"20%" }}>Completed Installments 02 </Typography>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "2.5%", textAlign:"left",marginLeft:"20%" }}>Pending Installments: 01</Typography>
                </Box>
            </Box>
           
          </Box>

          <Box sx={{  width: "90%", height:"30vh", padding:"1rem", overflowY:"auto", flexWrap:"wrep", borderRadius:"10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}> 
            <Typography variant="h6" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"left" }}>Trainer Package </Typography>

            <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Box sx={{width:"20%",borderRadius:"10px",padding:"1%", textAlign:"center",cursor:"pointer", border:"1px solid #346E93", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"} }}>
                    <Typography variant="h6" style={{ fontWeight: 600, marginTop: "20%", textAlign:"center" }}>20 Session Plan </Typography>
                </Box>
                <Box sx={{width:"30%",borderRadius:"10px",padding:"1%", textAlign:"center" ,cursor:"pointer", border:"1px solid #346E93", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"} }}>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "1%", textAlign:"left",marginLeft:"15%"}}>Payment Type: Installments </Typography>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "1%", textAlign:"left",marginLeft:"15%"}}>Payment Status: Not Completed </Typography>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "1%", textAlign:"left",marginLeft:"15%"}}>Started Date: 2023-05-05s </Typography>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "1%", textAlign:"left",marginLeft:"15%"}}>Expire date: 2023-11-05 </Typography>
                </Box>
                <Box sx={{width:"30%",borderRadius:"10px",padding:"1%", textAlign:"center" ,cursor:"pointer", border:"1px solid #346E93", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"} }}>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "2.5%", textAlign:"left", marginLeft:"20%" }}>Total Installments: 03 </Typography>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "2.5%", textAlign:"left", marginLeft:"20%" }}>Completed Installments 02 </Typography>
                    <Typography variant="body1" style={{ fontWeight: 500, marginTop: "2.5%", textAlign:"left", marginLeft:"20%" }}>Pending Installments: 01</Typography>
                </Box>
            </Box>
           
          </Box>

          <Box sx={{display:"flex", marginTop:"3%", marginLeft:"45%"}}>
                <Button variant="contained" style={{backgroundColor:color2, marginRight:"3%"}}>View Your Trainers' Profile</Button>
                <Button variant="contained" style={{backgroundColor:color2}}>Renew/Change Membership</Button>
          </Box>
          <Typography variant="h6" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"left" }}>Payment History </Typography>
          <Box sx={{ padding: "1%", marginTop:"3%", overflowY: "auto", width: "90%", flexWrap: "wrap", border:"1px solid #346E93", borderRadius:"10px", height: "35vh", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}>
                    <TableContainer component={Paper} sx={{ marginTop: "2%", width: "100%" }}>
                        <Table sx={{ minWidth: 650, boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" sx={{fontWeight:"700"}}>Date</TableCell>
                                    <TableCell align="center" sx={{fontWeight:"700"}}>Time</TableCell>
                                    <TableCell align="center" sx={{fontWeight:"700"}}>Amount</TableCell>
                                    <TableCell align="center" sx={{fontWeight:"700"}}>Method</TableCell>
                                    <TableCell align="center" sx={{fontWeight:"700"}}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Bills.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                            {row.Date}
                                        </TableCell>
                                        <TableCell align="center">{row.time}</TableCell>
                                        <TableCell align="center">{row.amount}</TableCell>
                                        <TableCell align="center">{row.paymentMethod}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="outlined">Bill</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>


        </Box>
      </Box>
     
    </Box>
  );
};

export default OwnMembership;
