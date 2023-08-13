import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import {FaPlus} from 'react-icons/fa';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import {FiMoreVertical} from "react-icons/fi";
import Modal from '@mui/material/Modal';
import {TextField, InputLabel} from '@mui/material';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {GoGoal} from 'react-icons/go';
import {FaRegTimesCircle} from 'react-icons/fa';
import {useEffect, useState} from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Goals = () => {

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
  

  const Goals = [
    {
      title: "Breakfast",
      description: "Oats Banana Pancakes with Protein Shake",
      startDate: "2021-10-01",
      endDate: "2021-10-01",

    },
    {
      title: "Breakfast",
      description: "Oats Banana Pancakes with Protein Shake",
      startDate: "2021-10-01",
      endDate: "2021-10-01",
    },
    {
        title: "Breakfast",
        description: "Oats Banana Pancakes with Protein Shake",
        startDate: "2021-10-01",
        endDate: "2021-10-01",
    },
    {
        title: "Breakfast",
        description: "Oats Banana Pancakes with Protein Shake",
        startDate: "2021-10-01",
        endDate: "2021-10-01",
    },
    {
        title: "Breakfast",
        description: "Oats Banana Pancakes with Protein Shake",
        startDate: "2021-10-01",
        endDate: "2021-10-01",
    },
    {
        title: "Breakfast",
        description: "Oats Banana Pancakes with Protein Shake",
        startDate: "2021-10-01",
        endDate: "2021-10-01",
    },
    {
        title: "Breakfast",
        description: "Oats Banana Pancakes with Protein Shake",
        startDate: "2021-10-01",
        endDate: "2021-10-01",
    },
    {
        title: "Breakfast",
        description: "Oats Banana Pancakes with Protein Shake",
        startDate: "2021-10-01",
        endDate: "2021-10-01",
    },
    {
        title: "Breakfast",
        description: "Oats Banana Pancakes with Protein Shake",
        startDate: "2021-10-01",
        endDate: "2021-10-01",
    }
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
           
            <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Goals</Typography>
            <Box sx={{ width:"95%", height:"80vh", padding:"1%", marginTop:"2%", borderRadius:"10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
                <Button variant="contained" onClick={handleOpen} style={{backgroundColor:color1, color:"white", float:"right", marginTop:"1%", marginRight:"1%", marginBottom:"1%"}}><FaPlus style={{marginRight:"5px"}}/>Add Goals</Button>
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
                            <GoGoal  style={{marginTop:"0%", color:"red", fontSize:"2rem"}}/>
                            <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight="700" textAlign="center">
                                &nbsp; Add Your Goal
                            </Typography>
                        </Box>
                        
                        <Box sx={{textAlign:"center", padding:"1%"}}>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Goal Title:</InputLabel>
                            <TextField variant="outlined" inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Goal Description:</InputLabel>
                            <TextField variant="outlined"  multiline rows="4" style={{height: 125, width:425, borderRadius:"5px", outline:"none", border:"1px solid D8D9DA"}}/>
                            
                            <Box sx={{display:"flex", marginTop:"3%"}}>
                                <Box sx={{width:"40%", marginLeft:"4%"}}>
                                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%",color:"black", textAlign:"left" }}>Start Date:</InputLabel>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker 
                                            style={{width:"50%"}}
                                            label=""
                                            value={valueStart}
                                            onChange={(newValue) => setValueStart(newValue)} 
                                            renderInput={(params) => <TextField  {...params}  />}
                                        />
                                    </LocalizationProvider>
                                </Box>
                                <Box sx={{width:"40%", marginLeft:"12%"}}>
                                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%",color:"black", textAlign:"left" }}>End Date:</InputLabel>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker 
                                            label=""
                                            value={valueEnd}
                                            onChange={(newValue) => setValueEnd(newValue)} 
                                            renderInput={(params) => <TextField {...params}  />}
                                        />
                                    </LocalizationProvider>
                                </Box>
                            </Box>
                            <Button variant="contained" onClick={handleClose} style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%"}}>Add Goal</Button>
                           
                        </Box>
                        
                    </Box>
                </Modal>
                <Box sx={{ padding: "1%", overflowY: "auto", width: "100%", flexWrap: "wrap", height: "65vh" }}>
                    <TableContainer component={Paper} sx={{ marginTop: "2%", width: "100%" }}>
                        <Table sx={{ minWidth: 650, boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Title</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Start Date</TableCell>
                                    <TableCell align="center">End Date</TableCell>
                                    <TableCell align="center">Current Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Goals.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="center">{row.description}</TableCell>
                                        <TableCell align="center">{row.startDate}</TableCell>
                                        <TableCell align="center">{row.endDate}</TableCell>
                                        <TableCell align="center">
                                            <Box style={{display:"flex", backgroundColor:`${color2}`, borderRadius:"50px", width: "80%%", height:"70%", marginTop:"0.4rem", textAlign:"center", cursor: "pointer", padding:"1%"}}>
                                                <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "#ffffff", marginLeft: "1rem", marginTop: '0.3rem'}}>Pending </Typography>
                                                <FiMoreVertical style={{ fontSize: '1.2rem',  color: '#ffffff', marginTop: '0.3rem', marginLeft:"30%",}}/>
                                                
                                            </Box>
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
    </Box>

  );
};

export default Goals;
