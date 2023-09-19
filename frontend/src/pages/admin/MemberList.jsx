import React from "react";
import Box from "@mui/material/Box";
import { Typography,TextField, Button, FormControl, InputLabel, Select, MenuItem, Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Paper, Tab } from "@mui/material";
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";
import {FaPlus} from "react-icons/fa";
import Modal from '@mui/material/Modal';
import {FaRegTimesCircle} from 'react-icons/fa';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MemberList = () => {


  const color1 = "#102B4C" //dark blue
  const color2 = "#346E93" //light blue
  const color3 = "#96CDEF" //lighter blue
  const color4 = "#DC1E2A" //red 

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [MemberData, setMemberData] = useState([]);
  const navigate = useNavigate();
  const [item, setItem] = React.useState('');

  const {memberType} = useParams();
  console.log(memberType);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Admin"')){
      navigate('/login');
    }

    if(memberType === "Virtual"){
        viewVirtualMemberList();
    }
    else{
        viewPhysicalMemberList();
    }
        
    
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

  const viewPhysicalMemberList = async () => {
    
    try {
     
      const res = await axios.get("http://localhost:8000/api/members/member/physical");
      console.log(res.data.data);
      setMemberData(res.data.data);

      // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
    } catch (error) {
      console.error("Retrieving failed:", error);
      // Handle error scenarios here
    }
  };

  const viewVirtualMemberList = async () => {
    
    try {
     
      const res = await axios.get("http://localhost:8000/api/members/member/virtual");
      console.log(res.data.data);
      setMemberData(res.data.data);

      // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
    } catch (error) {
      console.error("Retrieving failed:", error);
      // Handle error scenarios here
    }
  };

  return (


    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <AdminSidebar sidebarLinkId = "2"/>
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
            <Typography variant="h4" style={{ fontWeight: 700, textAlign:"left" }}>{memberType} Members</Typography>

          </Box>

          <Box sx={{width:"93%", height:"80vh",marginTop:"2%", overflowY:"auto", flexWrap:"wrep", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}>
              <TableContainer component={Paper} sx={{ marginTop: "2%", width: "100%" }}>
                  <Table sx={{ minWidth: 650, }} aria-label="simple table">
                      <TableHead>
                          <TableRow>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Member ID</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Name</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Email</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Contact No</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}>Added On</TableCell>
                              <TableCell align="left" sx={{fontWeight:"600"}}></TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {MemberData.map((row) => (
                              <TableRow
                                  key={row.name}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                  <TableCell component="th" scope="row" align="left">
                                        <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "black", textAlign:"left", marginTop: '0.3rem'}}>{row.id}</Typography>
                                  </TableCell>
                                  <TableCell align="left">
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "black", textAlign:"left", marginTop: '0.3rem'}}>{row.first_name} {row.last_name}</Typography>
                                  </TableCell>
                                  <TableCell align="left">
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "black", textAlign:"left", marginTop: '0.3rem'}}>{row.email}</Typography>
                                  </TableCell>
                                  <TableCell align="left">
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "black", textAlign:"left", marginTop: '0.3rem'}}>{row.contact_no}</Typography>
                                  </TableCell>
                                  <TableCell align="left">
                                    <Typography variant="h6" style={{fontSize:"15px", fontWeight: 500,  color: "black", textAlign:"left", marginTop: '0.3rem'}}>{(memberType === "Virtual") ? new Date(row.joined_on).toLocaleDateString() : new Date(row.added_on).toLocaleDateString()}</Typography>
                                  </TableCell>  
                                  <TableCell align="left">
                                    <Button variant="outlined"  sx={{marginRight:"10%", color:color2, border:"1px solid #346E93"}}>View</Button>
                                  </TableCell>
                                  {/* <TableCell align="left">
                                    <Button variant="contained" style={{height:"5%", backgroundColor:color2, color:"white", fontWeight: 700, marginTop: '0.3rem'}} onClick={handleOpen}>View</Button>
                                  </TableCell> */}
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

export default MemberList;
