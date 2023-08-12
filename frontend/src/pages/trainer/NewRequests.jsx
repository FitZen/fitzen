import React from "react";
import Box from "@mui/material/Box";
import {Button, FormControl, MenuItem, Select, Typography} from "@mui/material";
import {FaPlus} from 'react-icons/fa';
import Sidebar from "../../components/TrainerSidebar";
import Navbar from "../../components/TrainerNavbar";
import {FiMoreVertical} from "react-icons/fi";
import Modal from '@mui/material/Modal';
import {TextField, InputLabel} from '@mui/material';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {GoGoal} from 'react-icons/go';
import {FaRegTimesCircle} from 'react-icons/fa';
import { GiConfirmed } from "react-icons/gi";
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const NewRequests = () => {

    const [item, setItem] = React.useState('');

    const handleChange = (event) => {
        setItem(event.target.value);
    };

    const [openFirstPopup, setOpenFirstPopup] = React.useState(false);
    const [openSecondPopup, setOpenSecondPopup] = React.useState(false);

    const handleOpenFirstPopup = () => setOpenFirstPopup(true);
    const handleCloseFirstPopup = () => setOpenFirstPopup(false);
    const handleOpenSecondPopup = () => setOpenSecondPopup(true);
    const handleCloseSecondPopup = () => setOpenSecondPopup(false);
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

                    <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Student Requests</Typography>
                    <Box sx={{ width:"95%", height:"80vh", padding:"1%", marginTop:"2%", borderRadius:"10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
                        <Box sx={{display:"flex", marginTop:"1rem",marginLeft:"1rem"}}>
                            <FormControl style={{width:"15%"}}>
                                <InputLabel id="demo-simple-select-label">All</InputLabel>
                                <Select
                                    style={{height:"85%"}}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={item}
                                    label="All"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Accepted</MenuItem>
                                    <MenuItem value={20}>Pending</MenuItem>
                                    <MenuItem value={30}>Cancelled</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ padding: "1%", overflowY: "auto", width: "100%", flexWrap: "wrap", height: "65vh" }}>
                            <TableContainer component={Paper} sx={{ marginTop: "2%", width: "100%" }}>
                                <Table sx={{ minWidth: 650, boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow >
                                            <TableCell align="center">Student Name</TableCell>
                                            <TableCell align="center"></TableCell>
                                            <TableCell align="center">Requested Date</TableCell>
                                            <TableCell align="center">Current Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                            <TableRow
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" align="center">
                                                    Tharindu Gunawardhane
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Link to="/trainer/studentprofile" style={{ color:"#346E93"}}>
                                                    <Box style={{backgroundColor:"#ffffff", borderRadius:"10px", height:"70%", marginTop:"0.4rem", textAlign:"center", cursor: "pointer", padding:"1%"}}>
                                                        <Typography variant="h7" style={{fontSize:"15px", fontWeight: 500,  color: "#000000",marginTop: '0.3rem'}}>View Profile </Typography>
                                                    </Box>
                                                    </Link>
                                                </TableCell>
                                                <TableCell align="center">2023.08.13</TableCell>
                                                <TableCell align="center">
                                                        <Button variant="contained" onClick={handleOpenFirstPopup} style={{backgroundColor:color2, color:"white", marginTop:"1%", marginRight:"1%", marginBottom:"1%",width:"100%"}}>Pending</Button>
                                                        <Modal
                                                            open={openFirstPopup}
                                                            onClose={handleCloseFirstPopup}
                                                            aria-labelledby="modal-modal-title"
                                                            aria-describedby="modal-modal-description"
                                                        >
                                                            <Box sx={modalStyle}>
                                                                <FaRegTimesCircle onClick={handleCloseFirstPopup} style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA" ,}}
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
                                                                    <GiConfirmed  style={{marginTop:"0%", color:"red", fontSize:"2rem"}}/>
                                                                    <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight="700" textAlign="center">
                                                                        &nbsp; Accept The Request
                                                                    </Typography>
                                                                </Box>

                                                                <Box sx={{textAlign:"center", padding:"2%"}}>
                                                                    <Typography variant="h6" style={{fontSize:"17px", fontWeight: 500,  color: "#000000",marginTop: '2rem'}}>Are you sure you want to accept the request? </Typography>
                                                                </Box>
                                                                <Box sx={{display:"flex", justifyContent:"center"}}>
                                                                <Button variant="contained" onClick={handleCloseFirstPopup} style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%"}}>Accept </Button>
                                                                <Button variant="contained" onClick={handleOpenSecondPopup} style={{backgroundColor:color4, color:"white", marginTop:"7%", marginBottom:"1%",marginLeft:"1rem"}}>Reject</Button>
                                                                    <Modal
                                                                        open={openSecondPopup}
                                                                        onClose={handleCloseSecondPopup}
                                                                        aria-labelledby="modal-modal-title"
                                                                        aria-describedby="modal-modal-description"
                                                                    >
                                                                        <Box sx={modalStyle}>
                                                                            <FaRegTimesCircle onClick={handleCloseSecondPopup} style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA" ,}}
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
                                                                                    &nbsp; Submit The Reason For Rejection
                                                                                </Typography>
                                                                            </Box>

                                                                            <Box sx={{textAlign:"center", padding:"1%"}}>
                                                                                <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Reason:</InputLabel>
                                                                                <TextField variant="outlined" inputProps={{style: {height: 125, width:425,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                                                                            </Box>
                                                                                <Button variant="contained" onClick={handleCloseFirstPopup} style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%", marginLeft:"4%"}}>Submit</Button>
                                                                        </Box>
                                                                    </Modal>
                                                                </Box>
                                                            </Box>
                                                        </Modal>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                            Tharindu Gunawardhane
                                        </TableCell>
                                        <TableCell align="center">
                                            <Link to="/trainer/studentprofile" style={{ color:"#346E93"}}>
                                                <Box style={{backgroundColor:"#ffffff", borderRadius:"10px", height:"70%", marginTop:"0.4rem", textAlign:"center", cursor: "pointer", padding:"1%"}}>
                                                    <Typography variant="h7" style={{fontSize:"15px", fontWeight: 500,  color: "#000000",marginTop: '0.3rem'}}>View Profile </Typography>
                                                </Box>
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">2023.08.12</TableCell>
                                        <TableCell align="center">
                                            <Box style={{backgroundColor:`${color1}`, borderRadius:"5px", height:"70%", marginTop:"0.4rem", textAlign:"center", padding:"1%"}}>
                                                <Typography variant="h6" style={{fontSize:"14px", fontWeight: 500,  color: "#ffffff",marginTop: '0.3rem',textTransform: "uppercase"}}>Accepted </Typography>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align="center">
                                                Tharindu Gunawardhane
                                            </TableCell>
                                            <TableCell align="center">
                                                <Link to="/trainer/studentprofile" style={{ color:"#346E93"}}>
                                                    <Box style={{backgroundColor:"#ffffff", borderRadius:"0px", height:"70%", marginTop:"0.4rem", textAlign:"center", cursor: "pointer", padding:"1%"}}>
                                                        <Typography variant="h7" style={{fontSize:"15px", fontWeight: 500,  color: "#000000",marginTop: '0.3rem'}}>View Profile </Typography>
                                                    </Box>
                                                </Link>
                                            </TableCell>
                                            <TableCell align="center">2023.08.12</TableCell>
                                            <TableCell align="center">
                                                <Box style={{backgroundColor:`${color4}`, borderRadius:"5px", height:"70%", marginTop:"0.4rem", textAlign:"center", padding:"1%"}}>
                                                    <Typography variant="h6" style={{fontSize:"14px", fontWeight: 500,  color: "#ffffff",marginTop: '0.3rem',textTransform: "uppercase"}}>Cancelled </Typography>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
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

export default NewRequests;
