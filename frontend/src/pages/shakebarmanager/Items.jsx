import React, { useState } from 'react';
import Box from "@mui/material/Box";
import { Typography,Grid,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, IconButton } from '@mui/material';
import ShakebarmanagerSidebar from "../../components/ShakebarmanagerSidebar";
import ShakebarmanagerNavbar from "../../components/ShakebarmanagerNavbar";
import { useNavigate } from 'react-router-dom';
import item1 from "../../assets/images (3).jpg"


import {FaRegTimesCircle} from 'react-icons/fa';

const data = [
  { id: 1, name: 'Item 1', quantity: 10, price: 100, category: 'Category A', details: 'Details about Item 1' },
  { id: 2, name: 'Item 2', quantity: 15, price: 150, category: 'Category B', details: 'Details about Item 2' },
  // Add more items as needed
];

const Items = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const [selectedItemId, setSelectedItemId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

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

  // const IconButton={
  //   color:'#ffffff',
  //   backgroundColor:'#CD0808'
  // }

  const handleAddNewItemClick = () => {
    // Redirect to the "addnewitem" page
    navigate('/shakebarmanager/addnewitem'); 
  };

  return (
    <Box sx={{ flex: "1", display: "flex", mb: 2 }}>
      <Box>
        <ShakebarmanagerSidebar sidebarLinkId = "2"/>
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        <Box>
          <ShakebarmanagerNavbar />
        </Box>
        <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "1rem", textAlign: "left" }}>Items</Typography>

          <Button variant="contained"  size="small" style={{ marginLeft: '65rem',marginTop:'-5rem',backgroundColor:"#346E93"  }} onClick={handleAddNewItemClick}>Add New</Button>

          <TableContainer component={Paper} style={{marginTop:'1rem',width:'95%',fontSize: '15px'}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{fontWeight:'700'}}>Item ID</TableCell>
                  <TableCell style={{fontWeight:'700'}}>Item Name</TableCell>
                  <TableCell style={{fontWeight:'700'}}>Quantity</TableCell>
                  <TableCell style={{fontWeight:'700'}}>Unit Price (LKR)</TableCell>
                  <TableCell style={{fontWeight:'700'}}>Category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ backgroundColor: '#F5F5F5' }}>
                {data.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell style={{ fontSize: '14px' }}>
                        <Button variant="contained" color="primary" style={{backgroundColor:"#346E93" }} size="small" onClick={() => handleOpen(item)}>
                          View
                        </Button>
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* <Modal open={openModal} onClose={handleCloseModal}>
            <Box sx={{ position: 'absolute', top: '50%', left: '55%',transform: 'translate(-50%, -50%)', width: 500, bgcolor: 'background.paper', boxShadow: 24,pb:4,pl:4 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton style={{marginLeft:'26.8rem',backgroundColor:'#CD0808',borderRadius:'0',color:'#ffffff',marginTop:'0px'}} onClick={handleCloseModal}>
                  <CloseIcon />
                </IconButton>
              </div>

              <img src={item1} style={{height:'150px',marginLeft:'8rem'}}></img>

              <Grid item xs={10} md={6}>
          
            <form  style={{fontSize:'16px',marginLeft: '80px',lineHeight:'2.3em',marginTop:'10px'}}>
                <label style={{marginRight:'60px'}}>Item Name:</label><br />
                <label style={{marginRight:'70px'}}>Unit Price:</label><br />
                <label style={{marginRight:'78px'}}>Category:</label><br />
                <label style={{marginRight:'82px'}}>Quantity:</label><br />
                <label style={{marginRight:'55px'}}>Description:</label><br />
                <Button
            variant="contained"
            style={{
              fontSize: '17px',
              width: '100px',
              marginLeft: '15px',
              backgroundColor: "#346E93" ,
              marginRight: '30px',
              marginTop:'30px',
              color: '#ffffff'
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            style={{
              fontSize: '17px',
              width: '120px',
              backgroundColor: '#CD0808',
              marginTop:'30px',
              color: '#ffffff'
            }}
          >
            Delete
            </Button>
           </form>
       
        </Grid>
            </Box>
          </Modal> */}

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
              
              <Box sx={{textAlign:"center", padding:"1%", justifyContent:"center"}}>
                  <Box sx={{display:"flex", height:"40vh"}}>
                    <Box>
                      <img src={item1} alt="item" style={{width:"100%", height:"100%", objectFit:"cover"}}/>
                    </Box>
                    <Box sx={{marginTop:"8%"}}>
                      <Typography variant="body1"  textAlign="left"><span style={{fontWeight:"600"}}>Item Name:</span>Whey Protine</Typography><br />
                      <Typography variant="body1"  textAlign="left"><span style={{fontWeight:"600"}}>Unit Price:</span> Rs 2300</Typography><br />
                      <Typography variant="body1"  textAlign="left"><span style={{fontWeight:"600"}}>Category:</span> Suppliment</Typography><br />
                      <Typography variant="body1"  textAlign="left"><span style={{fontWeight:"600"}}>Quantity:</span> 30</Typography><br />
                      <Typography variant="body1" textAlign="left">
                        <span style={{fontWeight:"600"}}>Description:</span>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </Typography><br />
                    </Box>
                  </Box>
                  
                 
                  <Button
            variant="contained"
            style={{
              fontSize: '17px',
              width: '100px',
              marginLeft: '15px',
              backgroundColor: "#346E93" ,
              marginRight: '30px',
              marginTop:'30px',
              color: '#ffffff'
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            style={{
              fontSize: '17px',
              width: '120px',
              backgroundColor: '#CD0808',
              marginTop:'30px',
              color: '#ffffff'
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
