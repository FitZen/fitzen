import React, { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal } from '@mui/material';
import ShakebarmanagerSidebar from "../../components/ShakebarmanagerSidebar";
import ShakebarmanagerNavbar from "../../components/ShakebarmanagerNavbar";
import { useNavigate } from 'react-router-dom';
import item1 from "../../assets/images (3).jpg";
import axios from 'axios';
import { FaRegTimesCircle } from 'react-icons/fa';

const Items = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (item) => {
    setSelectedItem(item); // Set the selected item before opening the modal
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const [itemData, setItemData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const [fixedNavbar, setFixedNavbar] = useState(false);

  useEffect(() => {
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
  }, []);

  const viewItems = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/shakebarItems/getshakebaritems");
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

  const handleAddNewItemClick = () => {
    // Redirect to the "addnewitem" page
    navigate('/shakebarmanager/addnewitem');
  };

  return (
    <Box sx={{ flex: "1", display: "flex", mb: 2 }}>
      <Box>
        <ShakebarmanagerSidebar sidebarLinkId="2" />
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <ShakebarmanagerNavbar />
        </div>
        <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign: "left" }}>Items</Typography>

          <Button variant="contained" size="small" style={{ marginLeft: '68rem', marginTop: '-5rem', backgroundColor: "#346E93" }} onClick={handleAddNewItemClick}>Add New</Button>

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
                    <TableCell>{item.availble_count}</TableCell>
                    <TableCell>{item.unit_price}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell style={{ fontSize: '14px' }}>
                      <Button variant="contained" color="primary" style={{ backgroundColor: "#346E93" }} size="small" onClick={() => handleOpen(item)}>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <FaRegTimesCircle onClick={handleClose} style={{ float: "right", cursor: "pointer", fontSize: "1.5rem", color: "#D8D9DA" }}
            onMouseEnter={(e) => {
              e.target.style.color = "#D71313";
              e.target.style.transform = "scale(1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#D8D9DA";
              e.target.style.transform = "scale(1)";
            }}
          />

          <Box sx={{ textAlign: "center", padding: "1%", justifyContent: "center" }}>
            <Box sx={{ display: "flex", height: "40vh" }}>
              <Box>
                <img src={item1} alt="item" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
              <Box sx={{ marginTop: "8%" }}>
                <Typography variant="body1" textAlign="left"><span style={{ fontWeight: "600" }}>Item Name:</span> {selectedItem?.name}</Typography><br />
                <Typography variant="body1" textAlign="left"><span style={{ fontWeight: "600" }}>Unit Price:</span> {selectedItem?.unit_price}</Typography><br />
                <Typography variant="body1" textAlign="left"><span style={{ fontWeight: "600" }}>Category:</span> {selectedItem?.category}</Typography><br />
                <Typography variant="body1" textAlign="left"><span style={{ fontWeight: "600" }}>Quantity:</span> {selectedItem?.availble_count}</Typography><br />
                <Typography variant="body1" textAlign="left">
                  <span style={{ fontWeight: "600" }}>Description:</span> {selectedItem?.description}
                </Typography><br />
              </Box>
            </Box>

            <Button
              variant="contained"
              style={{
                fontSize: "17px",
                width: "100px",
                marginLeft: "15px",
                backgroundColor: "#346E93",
                marginRight: "30px",
                marginTop: "30px",
                color: "#ffffff"
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              style={{
                fontSize: "17px",
                width: "120px",
                backgroundColor: "#CD0808",
                marginTop: "30px",
                color: "#ffffff"
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Items;
