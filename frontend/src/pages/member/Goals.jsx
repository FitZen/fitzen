import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import ProfileImg from '../../assets/photo-1633332755192-727a05c4013d.jpg';
import {PiMedalFill} from 'react-icons/pi';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {FiMoreVertical} from "react-icons/fi";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Goals = () => {

    const color2 = "#346E93" //light blue
  

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
        <Box>
          <Navbar />
        </Box>
        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
           
            <Typography variant="h4" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Goals</Typography>
            <Box sx={{ width:"95%", height:"80vh", padding:"1%", marginTop:"2%", borderRadius:"10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
                <Button variant="contained" style={{backgroundColor:color2, color:"white", float:"right", marginTop:"1%", marginRight:"1%", marginBottom:"1%"}}><FaUserEdit style={{marginRight:"5px"}}/>Add Goals</Button>
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
