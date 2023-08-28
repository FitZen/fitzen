import React, { useState, useEffect }  from "react";
import Box from "@mui/material/Box";
import {Tabs, Tab, InputLabel, Select, MenuItem,Typography, Button, Modal  } from '@mui/material';
import ReceiptionistSidebar from "../../components/ReceiptionistSidebar";
import ReceiptionistNavbar from "../../components/ReceiptionistNavbar";
import {FaRegTimesCircle} from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Link} from 'react-router-dom';

import item1 from "../../assets/Members/7.jpg"
import item2 from "../../assets/Members/4.jpg"
import item3 from "../../assets/Members/11.jpg"
import item4 from "../../assets/Members/3.jpg"
import item5 from "../../assets/Members/6.jpg"
import item6 from "../../assets/Members/1.jpg"
import item7 from "../../assets/Members/2.jpg"
import item8 from "../../assets/Members/5.jpg"
import item9 from "../../assets/Members/8.jpg"
import item10 from "../../assets/Members/12.jpg"
import item11 from "../../assets/Members/9.jpg"
import item12 from "../../assets/Members/10.jpg"
import item13 from "../../assets/Members/photo-1633332755192-727a05c4013d.jpg"

const Members= () => {

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

    const [selectedTab, setSelectedTab] = useState(0);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [gender, setGender] = React.useState('');
    const [value, setValue] = React.useState(null);
  
    const handleChangeGender = (event) => {
      setGender(event.target.value);
    };
  

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '55%',
        transform: 'translate(-50%, -50%)',
        width: "50%",

        bgcolor: 'background.paper',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        p: 4,
      };
  
  
  
    const handleTabChange = (event, newValue) => {
      setSelectedTab(newValue);
    };
  
    return (
      <Box sx={{ flex: "1", display: "flex", mb: 2 }}>
        <Box>
          <ReceiptionistSidebar sidebarLinkId = "2" />
        </Box>
  
        <Box component="main" sx={{ flex: 1 }}>
          <Box>
            <ReceiptionistNavbar />
          </Box>
          <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
            <Typography variant="h4" style={{ fontWeight: 700, marginTop: "1rem", textAlign: "left" ,marginBottom:'1rem'}}>Members</Typography>
  
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Report Tabs" style={{ backgroundColor: '#ffffff', width:"32%",marginTop:"2%", marginBottom:"2%", borderRadius:"5px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
              <Tab label="Physical Members" />
              <Tab label="Virtual Members" />
            </Tabs>
  
            {selectedTab === 0 && (
              <Box>
              <Typography variant="body1" style={{ marginTop: "-70px" }}>
                <Button variant="contained" color="primary" style={{backgroundColor:"#346E93",marginLeft:'88%' }} size="small" onClick={() => handleOpen()}>
                    Add New</Button>
              </Typography>
              <Box sx={{display:"flex", width:"96%", height:"70%", backgroundColor:"#E5E8E8", padding:"0.3rem", borderRadius:"10px", marginBottom:"2rem", marginTop:"1.5rem"}}>
                        <Box sx={{display:"flex",height:"82vh", flexWrap: "wrap",overflowY:"auto", width:"100%", backgroundColor:"white", borderRadius:"10px", padding: "1rem", margin:"0.1rem"}}>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item13} alt="item" style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography>
                                <br/><Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button>
                                <Link to="/receiptionist/memberprofile" style={{textDecoration:"none", color:"black"}}>
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                </Link>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item2} alt="item" style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Anne Fernando</Typography><br/>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button><br />
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item3} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography>
                               <br />
                               <Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item4} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography><br/>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button><br />
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item5} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography><br/>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button><br />
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item6} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography><br/>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button><br />
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item7} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography><br/>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button><br />
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item8} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography><br />
                                <Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item9} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography>
                                <br /><Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item10} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography>
                                <br /><Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item11} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography>
                                <br /><Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item12} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography>
                                <br /><Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                            </Box>
            
                        </Box>

                    </Box>

              </Box>
            )}
  
            {selectedTab === 1 && (
                            <Box sx={{display:"flex", width:"96%", height:"70%", backgroundColor:"#E5E8E8", padding:"0.3rem", borderRadius:"10px", marginBottom:"2rem", marginTop:"1.5rem"}}>
                            <Box sx={{display:"flex",height:"82vh", flexWrap: "wrap",overflowY:"auto", width:"100%", backgroundColor:"white", borderRadius:"10px", padding: "1rem", margin:"0.1rem"}}>
                                <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                    <img src={item13} alt="item" style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                    <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography>
                                    <br/><Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button>
                                    <Link to="/trainer/progress" style={{textDecoration:"none", color:"black"}}>
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                    </Link>
                                </Box>
                                <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                    <img src={item2} alt="item" style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                    <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Anne Fernando</Typography><br/>
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button><br />
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                </Box>
                                <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                    <img src={item3} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                    <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography>
                                   <br />
                                   <Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button>
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                    
                                </Box>
                                <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                    <img src={item4} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                    <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography><br/>
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button><br />
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                </Box>
                                <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                    <img src={item5} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                    <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography><br/>
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button><br />
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                </Box>
                                <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                    <img src={item6} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                    <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography><br/>
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button><br />
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                </Box>
                                <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                    <img src={item7} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                    <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography><br/>
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button><br />
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                </Box>
                                <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                    <img src={item8} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                    <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography><br />
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button>
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                </Box>
                                <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                    <img src={item9} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                    <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography>
                                    <br /><Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button>
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                </Box>
                                <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                    <img src={item10} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                    <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography>
                                    <br /><Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button>
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                </Box>
                                <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                    <img src={item11} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                    <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography>
                                    <br /><Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button>
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                </Box>
                                <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                    <img src={item12} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                    <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography>
                                    <br /><Button variant="contained" style={{backgroundColor:"#96CDEF",borderColor:"black", color:"black", fontWeight:"700",marginBottom:'10px'}}>Payment</Button>
                                    <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                </Box>
                
                            </Box>
    
                        </Box>
    
                
            )}
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
              <Box component="form" noValidate sx={{ mt: 1, width:"90%", textAlign:"center" }}>
                <Box sx={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                    <Box sx={{marginRight:"2%"}}>
                        <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left",color:"black" }}>First Name:</InputLabel>
                        <TextField variant="outlined" inputProps={{style: {height: 1, width:250,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                        <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left", color:"black" }}>Gender:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={gender}
                            size="small"
                            style={{marginTop:"0.5rem", width:"100%", height:"22%", marginBottom:"0.5rem", borderRadius:"5px", border:"0.1px solid"}}
                            
                            onChange={handleChangeGender}
                        >
                            <MenuItem value={10}>Male</MenuItem>
                            <MenuItem value={20}>Female</MenuItem>
                        
                        </Select>
                        
                        
                       
                    </Box>
                    <Box >
                        <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", color:"black" }}>Last Name:</InputLabel>
                        <TextField variant="outlined" inputProps={{style: {height: 1, width:250,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                        <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left", color:"black" }}>Date of Birth:</InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker 
                                label=""
                                value={value}
                                onChange={(newValue) => setValue(newValue)} 
                                renderInput={(params) => <TextField {...params}  />}
                            />
                        </LocalizationProvider>
                        
                        
                        
                    </Box>

                    
                   
                </Box>
                <Box>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "2%", textAlign:"left", color:"black" }}>Contact No:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:625,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "2%", textAlign:"left", color:"black" }}>Address:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:625,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "2%", textAlign:"left", color:"black" }}>NIC:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:625,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "2%", textAlign:"left", color:"black" }}>Email:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:625,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                </Box>
                <Box sx={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                    <Box sx={{marginRight:"2%"}}>
                        <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", color:"black" }}>Height:</InputLabel>
                        <TextField variant="outlined" inputProps={{style: {height: 1, width:250,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                        <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", color:"black" }}>Password:</InputLabel>
                        <TextField type='password' variant="outlined" inputProps={{style: {height: 1, width:250,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    </Box>
                    <Box>
                        <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", color:"black" }}>Weight:</InputLabel>
                        <TextField variant="outlined" inputProps={{style: {height: 1, width:250,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                        <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left",color:"black" }}>Confirm Password:</InputLabel>
                        <TextField type='password' variant="outlined" inputProps={{style: {height: 1, width:250,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    </Box>
                </Box>
                
             
              {/* <Link to="/medical" style={{ textDecoration: 'none' }}>	
                <Button
                    type="submit"
                    
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#000000", justifyContent:"center", alignItems:"center" }}
                >
                    Next
                </Button>
              </Link> */}
              <Button variant="contained" color="primary"  type="submit" sx={{ mt: 3, mb: 2, backgroundColor: "#000000", justifyContent:"center", alignItems:"center" }} size="small" onClick={() => handleOpen()}>
                    Next</Button>
             
            </Box>
                  
                 
             
                
              </Box>
              
          </Box>
      </Modal>

      </Box>
    );
  };

export default Members;
