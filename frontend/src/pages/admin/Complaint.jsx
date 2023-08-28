import React from "react";
import Box from "@mui/material/Box";
import { Typography,TextField, Button, FormControl, InputLabel, Select, MenuItem, Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Paper } from "@mui/material";
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";
import {Tabs,Tab} from '@mui/material';
import Modal from '@mui/material/Modal';
import {FaRegTimesCircle} from 'react-icons/fa';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Complaints = () => {

  const color1 = "#102B4C" //dark blue
  const color2 = "#346E93" //light blue
  const color3 = "#96CDEF" //lighter blue
  const color4 = "#DC1E2A" //red 

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [handledComplaintsData, setHandledComplaintsData] = useState([]); 
  const [unHandleComplaintsData, setUnHandleComplaintsData] = useState([]);

  const [item, setItem] = React.useState('');

  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    setItem(event.target.value);
  };

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


  useEffect(() => {

    viewUnHandleComplaints();
    viewHandledComplaints();
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

  const viewUnHandleComplaints = async () => {
    
    try {
     
      const res1 = await axios.get("http://localhost:8000/api/complaints/unhandledcomplaints");
      
      setUnHandleComplaintsData(res1.data.data);

      // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
    } catch (error) {
      console.error("Retrieving failed unhandle complaints:", error);
      // Handle error scenarios here
    }
  }

  const viewHandledComplaints = async () => {
      
      const reqData = {
        userID: JSON.parse(localStorage.getItem('userID')),
        userType: JSON.parse(localStorage.getItem('userType')),
      };
      
      try {
      
        const res2 = await axios.get("http://localhost:8000/api/complaints/handledcomplaints", {params:reqData});
        
        setHandledComplaintsData(res2.data.data);
  
        // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
      } catch (error) {
        console.error("Retrieving failed handled complaints:", error);
        // Handle error scenarios here
      }
  }

  const [value, setValue] = useState(0);

  const [handleComplaints,setHandleComplaint] = useState([
    {
      added_on: "2023-08-12 23:12:03.390954",
      subject: "Breakfast",
      content: "Oats Banana Pancakes with Protein Shake with Protein Shake Calcium Vitamin",
    },
    {
      added_on: "2023-08-12 23:12:03.390954",
      subject: "Breakfast",
      content: "Oats Banana Pancakes with Protein Shake with Protein Shake Calcium Vitamin",
    },
    {
      added_on: "2023-08-12 23:12:03.390954",
      subject: "Breakfast",
      content: "Oats Banana Pancakes with Protein Shake with Protein Shake Calcium Vitamin",
    },
    {
      added_on: "2023-08-12 23:12:03.390954",
      subject: "Breakfast",
      content: "Oats Banana Pancakes with Protein Shake with Protein Shake Calcium Vitamin",
    },
    {
      added_on: "2023-08-12 23:12:03.390954",
      subject: "Breakfast",
      content: "Oats Banana Pancakes with Protein Shake with Protein Shake Calcium Vitamin",
    },
    
  ]);

  const [toHandleComplaints, setToHandleComplaints] = useState([
    {
      date: "2021-10-01",
      time: "10:00",
      title: "Breakfast",
      description: "Oats Banana Pancakes with Protein Shake with Protein Shake Calcium Vitamin",

    },
    {
      date: "2021-10-01",
      time: "10:00",
      title: "Breakfast",
      description: "Oats Banana Pancakes with Protein Shake with Protein Shake Calcium Vitamin",

    },
    {
      date: "2021-10-01",
      time: "10:00",
      title: "Breakfast",
      description: "Oats Banana Pancakes with Protein Shake with Protein Shake Calcium Vitamin",
    },
  ]);

  const renderTable = (data) => {

    return (
      <Box sx={{width:"93%", height:"80vh", overflowY:"auto", flexWrap:"wrep", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}>
              <TableContainer component={Paper} sx={{ marginTop: "2%", width: "100%" }}>
                  <Table sx={{ minWidth: 650, }} aria-label="simple table">
                      <TableHead>
                          <TableRow>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Date</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Complaint</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}></TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {data.map((row) => (
                              <TableRow
                                  key={row.name}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                  <TableCell component="th" scope="row" align="left">
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500, color: "black", textAlign:"left", marginTop: '0.3rem'}}>{value === 1 ? new Date(row.added_on).toLocaleDateString() : new Date(row.handled_on).toLocaleDateString()}</Typography>
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500, color: "black", textAlign:"left", marginTop: '0.3rem'}}>{value === 1 ? new Date(row.added_on).toLocaleTimeString() : new Date(row.handled_on).toLocaleTimeString()}</Typography>
                                  </TableCell>
                                  <TableCell align="left">
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "black", textAlign:"left", marginTop: '0.3rem'}}>{row.subject}</Typography>
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "grey", textAlign:"left", marginTop: '0.3rem'}}>{row.content}</Typography>
                                  </TableCell>
                      
                                  <TableCell align="left">
                                      <Box style={{display:"flex", marginLeft:"30%" }}>
                                          <Button variant="outlined" onClick={handleOpen}  sx={{marginRight:"10%", color:color2, border:"1px solid #346E93"}}>View</Button>
                                          {(value === 1) ? (
                                            <Button variant="outlined" sx={{ color: color1, border: "1px solid #102B4C" }}>
                                              Handle
                                            </Button>
                                          ) : (
                                            null
                                          )} 
                                      </Box>
                                  </TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
                </TableContainer>
          </Box>


    );
  };


  return (


    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <AdminSidebar sidebarLinkId = "7"/>
      </Box>
      
      <Box component="main" sx={{flex:1 }}>
      <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <AdminNavbar />
        </div>
        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
           
          <Box sx={{display:"flex", marginTop:"5rem", justifyContent:"space-between"}}>
            <Typography variant="h4" style={{ fontWeight: 700, textAlign:"left" }}>Complaint</Typography>
           
          </Box>
          
         

          <div>
            <Box sx={{display:"flex"}}>
              <Tabs style={{ backgroundColor: '#ffffff', width:"20%",marginTop:"2%", marginBottom:"2%", borderRadius:"5px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }} value={value} onChange={handleChangeValue}>
                <Tab style={{ fontSize: '15px',fontWeight: '700' }} label="Handled" />
                <Tab style={{ fontSize: '15px', marginRight: '250px',fontWeight: '700' }} label="To Handle" />
              </Tabs>

              <Box sx={{marginTop:"2%", height:"20%", marginLeft:"53%"}}>
                  <FormControl style={{ width: "10%", height:"25%" }}>
                      <InputLabel id="demo-simple-select-label">All</InputLabel>
                      <Select
                        
                        style={{marginTop:"0.5rem", width:"15rem", height:"20%", marginBottom:"0.5rem", borderRadius:"5px"}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={item}
                        label="All"
                        size="small"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>All Complaints</MenuItem>
                        <MenuItem value={20}></MenuItem>
                      
                      </Select>
                  </FormControl>
              </Box>
            </Box>
            
            {value === 0 && renderTable(handledComplaintsData)}
            {value === 1 && renderTable(unHandleComplaintsData)}
          </div>

        
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
                            
                        </Box>
                        
                        <Box sx={{textAlign:"center", padding:"1%"}}>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Title:</InputLabel>
                            <TextField variant="outlined" inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                            <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Description:</InputLabel>
                            <TextField variant="outlined"  multiline rows="4" style={{height: 125, width:425, borderRadius:"5px", outline:"none", border:"1px solid D8D9DA"}}/>
                            
                            <Box sx={{display:"flex", marginTop:"3%", justifyContent:"center"}}>
                              <Button variant="contained" style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%", marginRight:"1%"}}>Add Announcement</Button>
                            </Box>
                            
                           
                        </Box>
                        
                    </Box>
                </Modal>
     
    </Box>

  );
};

export default Complaints;
