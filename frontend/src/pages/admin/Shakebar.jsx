import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import ProfileImg from '../../assets/photo-1633332755192-727a05c4013d.jpg';
import {PiMedalFill} from 'react-icons/pi';
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Shakebar = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = (item) => {
    setSelectedItem(item); // Set the selected item before opening the modal
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const [itemData, setItemData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  //const [item, setItem] = useState([]);

  const [fixedNavbar, setFixedNavbar] = useState(false);

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Admin"')){
      navigate('/login');
    }
    viewItems();

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
  }, [navigate]);

  const viewItems = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/shakebar/items");
      setItemData(res.data.data);
    } catch (error) {
      console.error("Retrieving failed:", error);
      // Handle error scenarios here
    }
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

  return (
    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <AdminSidebar sidebarLinkId = "5"/>
      </Box>
      
      <Box component="main" sx={{flex:1 }}>
      <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <AdminNavbar />
        </div>
        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
           
        <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Shakebar</Typography>
          <TableContainer component={Paper} style={{ marginTop: '1rem', width: '95%', fontSize: '15px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: '700' }}>Item ID</TableCell>
                  <TableCell style={{ fontWeight: '700' }}>Item Name</TableCell>
                  <TableCell style={{ fontWeight: '700' }}>Quantity</TableCell>
                  <TableCell style={{ fontWeight: '700' }}>Unit Price (LKR)</TableCell>
                  <TableCell style={{ fontWeight: '700' }}>Category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ backgroundColor: '#F5F5F5' }}>
                {itemData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.available_count}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell style={{ fontSize: '14px' }}>
                        <Button key={item.id} onClick={() => handleOpen(item)} variant="contained" color="primary" style={{ backgroundColor: "#346E93" }} size="small">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    
        
        </Box>
      </Box>
     
    </Box>

  );
};

export default Shakebar;
