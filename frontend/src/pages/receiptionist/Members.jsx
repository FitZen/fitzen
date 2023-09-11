import React, { useState, useEffect, useNavi }  from "react";
import Box from "@mui/material/Box";
import {Tabs, Tab, InputLabel, Select, MenuItem,Typography, Button, Modal  } from '@mui/material';
import ReceiptionistSidebar from "../../components/ReceiptionistSidebar";
import ReceiptionistNavbar from "../../components/ReceiptionistNavbar";
import {FaRegTimesCircle} from 'react-icons/fa';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import avatar from '../../assets/avatar.jpg';

const Members= () => {

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const navigate = useNavigate();

  if((localStorage.getItem('userType') !== '"Receptionist"')){
    navigate('/login');
  }

  useEffect(() => {

    viewPhysicalMemberList();

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

    const [medical, setMedical] = useState(false);
    const handleOpenMedical = () => {
      
      setOpen(false);
      setMedical(true);
    } 
    const handleCloseMedical = () => setMedical(false);

    const [gender, setGender] = React.useState('');
    const [value, setValue] = React.useState(null);
  
    const handleChangeGender = (event) => {
      setGender(event.target.value);
    };

    const [physicalMembers, setPhysicalMembers] = useState([]);
    const [virtualMembers, setVirtualMembers] = useState([]);

    const viewPhysicalMemberList = async () => {
    
      try {
       
        const res = await axios.get("http://localhost:8000/api/members/member/physical");
        console.log(res.data.data);
        setPhysicalMembers(res.data.data);
  
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
        setVirtualMembers(res.data.data);
  
        // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
      } catch (error) {
        console.error("Retrieving failed:", error);
        // Handle error scenarios here
      }
    };
  

    const modalStyle = {
        position: 'absolute',
        top: '40%',
        left: '55%',
        transform: 'translate(-50%, -50%)',
        justifyContent: 'center',
        width: "43%",
        marginTop: "5%",
        bgcolor: 'background.paper',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        pt: 1.5,
        pb: 1.5,
        px: 4,
        overflowY: 'auto',
        height: '97%',
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
        <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <ReceiptionistNavbar />
        </div>
          <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
            <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign: "left" ,marginBottom:'1rem'}}>Members</Typography>
  
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Report Tabs" style={{ backgroundColor: '#ffffff', width:"30%",marginTop:"2%", marginBottom:"2%", borderRadius:"5px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
              <Tab label="Physical Members" onClick={viewPhysicalMemberList}/>
              <Tab label="Virtual Members" onClick={viewVirtualMemberList}/>
            </Tabs>
  
            {selectedTab === 0 && (
              <Box>
              <Typography variant="body1" style={{ marginTop: "-70px" }}>
                <Button variant="contained" color="primary" style={{backgroundColor:"#346E93",marginLeft:'88%' }} size="small" onClick={() => handleOpen()}>
                    Add New</Button>
              </Typography>
              <Box sx={{display:"flex", width:"96%", height:"70%", backgroundColor:"#E5E8E8", padding:"0.3rem", borderRadius:"10px", marginBottom:"2rem", marginTop:"1.5rem"}}>
                        <Box sx={{display:"flex",height:"77vh", flexWrap: "wrap",overflowY:"auto", width:"100%", backgroundColor:"white", borderRadius:"10px", padding: "1rem", margin:"0.1rem"}}>
                            {physicalMembers.map((member) => (
                                <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                  
                                  <img src={member.profile_pic === null ? avatar : `../../assets/uploads/profile/${member.profile_pic}`} alt="item" style={{width:"100%", height:"60%", objectFit:"cover", marginBottom:"5%"}}></img>
                                  <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>{member.first_name} {member.last_name}</Typography><br />                               
                                  <Link to={`/receiptionist/memberprofile/Physical Member/${member.id}`} style={{textDecoration:"none", color:"black"}}>
                                      <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                  </Link>
                                </Box>
                            ))}
                            
                        </Box>

                    </Box>

              </Box>
            )}
  
            {selectedTab === 1 && (
                            <Box sx={{display:"flex", width:"96%", height:"70%", backgroundColor:"#E5E8E8", padding:"0.3rem", borderRadius:"10px", marginBottom:"2rem", marginTop:"1.5rem"}}>
                              <Box sx={{display:"flex",height:"77vh", flexWrap: "wrap",overflowY:"auto", width:"100%", backgroundColor:"white", borderRadius:"10px", padding: "1rem", margin:"0.1rem"}}>
                                  {virtualMembers.map((member) => (
                                    <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                      <img src={member.profile_pic === null ? avatar : `../../assets/uploads/profile/${member.profile_pic}`} alt="item" style={{width:"100%", height:"60%", objectFit:"cover", marginBottom:"5%"}}></img>
                                      <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>{member.first_name} {member.last_name}</Typography><br />
                                      <Link to={`/receiptionist/memberprofile/Virtual Member/${member.id}`} style={{textDecoration:"none", color:"black"}}>
                                      <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                      </Link>
                                    </Box>
                                  ))}
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
              
              <Box sx={{textAlign:"center", padding:"1%", justifyContent:"center", marginTop:"1%"}}>
                  <Typography variant="h5" style={{fontWeight:700, marginTop:"1%"}}>Add New Physical Member</Typography>
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
                            style={{marginTop:"0.5rem", width:"100%", height:"17%", marginBottom:"0.5rem", borderRadius:"5px", border:"0.1px solid"}}
                            
                            onChange={handleChangeGender}
                        >
                            <MenuItem value={10}>Male</MenuItem>
                            <MenuItem value={20}>Female</MenuItem>
                        
                        </Select>  
                        <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "2%", textAlign:"left", color:"black" }}>Contact No:</InputLabel>
                        <TextField variant="outlined" inputProps={{style: {height: 1, width:250,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
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
                        <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "2%", textAlign:"left", color:"black" }}>Emergency Contact No:</InputLabel>
                        <TextField variant="outlined" inputProps={{style: {height: 1, width:250,border:"1px solid", borderRadius:"5px", outline:"none"}}}/> 
                    </Box>  
                </Box>
                <Box>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "2%", textAlign:"left", color:"black" }}>Address:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:540,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "2%", textAlign:"left", color:"black" }}>NIC:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:540,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "2%", textAlign:"left", color:"black" }}>Email:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:540,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
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
              <Box sx={{justifyContent:"center", alignItems:"center", textAlign:"center", marginTop:"3%", marginLeft:"7%"}}>
                <Button variant="contained" sx={{width:"20%", backgroundColor: "#000000", justifyContent:"center", alignItems:"center" }} size="small" onClick={() => handleOpenMedical()}>
                      Next
                </Button>
              </Box>
             
            </Box>
                  
                 
             
                
              </Box>
              
          </Box>
      </Modal>

      
      <Modal
          open={medical}
          onClose={handleCloseMedical}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
          <Box sx={modalStyle}>
              <FaRegTimesCircle onClick={handleCloseMedical} style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA" ,}}  
                  onMouseEnter={(e) => {
                      e.target.style.color = "#D71313";
                      e.target.style.transform = "scale(1)";
                  }}
                  onMouseLeave={(e) => {
                      e.target.style.color = "#D8D9DA";
                      e.target.style.transform = "scale(1)";
                  }}
              />
              
              <Box sx={{textAlign:"center", padding:"1%", justifyContent:"center", marginTop:"1%"}}>
                  <Typography variant="h5" style={{fontWeight:700, marginTop:"1%"}}>Medical Isuues</Typography>
                  
                  <Box component="form" noValidate sx={{ mt: 1, width:"95%", textAlign:"center" }}>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", fontSize:"18pox", color:"black" }}>1. Do you have any of the following?</InputLabel>
                    <Box sx={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                        
                        <Box sx={{width:"50%", marginLeft:"5%",marginRight:"2%", display:"block", textAlign:"left"}}>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Heart Disease"
                            /> <br />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Dizziness"
                            /> <br />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Gout"
                            /> <br />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Diabetes"
                            /> <br />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Arthritis"
                            /> 
                        </Box>
                        <Box sx={{width:"50%", textAlign:"left"}}>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Cardiovascular Condition"
                            /> <br />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="High/Low Boold Preasure"
                            /> <br />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Family Hx of Heart Disease"
                            /> <br />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Infectious Disease"
                            />
                        </Box>   
                    </Box>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", fontSize:"18pox", color:"black" }}>2. Do you have any of problems/injuries in the following areas?</InputLabel>
                    <Box sx={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                        
                        <Box sx={{width:"50%", marginLeft:"5%",marginRight:"2%", display:"block", textAlign:"left"}}>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Knees"
                            /> <br />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Hips/Pelvis"
                            /> <br />
                            
                        </Box>
                        <Box sx={{width:"50%", textAlign:"left"}}>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Lower Back"
                            /> <br />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Neck/Shoulders"
                            /> <br />
                          
                        </Box>   
                    </Box>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", marginBottom:"2%", textAlign:"left", fontSize:"18pox", color:"black" }}>3. Have you had any surgery in the last 5 years, if yes, what & when?</InputLabel>
                    <TextField variant="outlined" style={{marginLeft:"5%"}} inputProps={{style: {height: 1, width:500,border:"1px solid", borderRadius:"5px", outline:"none"}}}/> <br />

                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", marginBottom:"2%", textAlign:"left", fontSize:"18pox", color:"black" }}>4. Are you on any medications, if yes, for what?</InputLabel>
                    <TextField variant="outlined" style={{marginLeft:"5%"}} inputProps={{style: {height: 1, width:500,border:"1px solid", borderRadius:"5px", outline:"none"}}}/> <br />

                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", marginBottom:"2%", textAlign:"left", fontSize:"18pox", color:"black" }}>5. Do you have any other special thing to mention about your health?</InputLabel>
                    <TextField variant="outlined" style={{marginLeft:"5%"}} inputProps={{style: {height: 1, width:500,border:"1px solid", borderRadius:"5px", outline:"none"}}}/> <br />
                    
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Accept all terms & conditions"
                    /> <br />
                
                  <Button
                    type="submit"
                    
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#000000", justifyContent:"center", alignItems:"center" }}
                  >
                    Register Me
                  </Button>
                
                </Box>
                    
            </Box>
              
          </Box>
      </Modal>

      </Box>
    );
  };

export default Members;
