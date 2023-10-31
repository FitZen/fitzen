import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography,Select, MenuItem, InputLabel, FormControl, TextField } from "@mui/material";
import {FaTelegram, FaFeatherAlt, FaBandcamp, FaUserEdit, FaRegTimesCircle, FaBitbucket} from 'react-icons/fa';
import avatar from '../../assets/avatar.jpg';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Rating from '@mui/material/Rating';
import Modal from "@mui/material/Modal";
import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";


const PhysicalTrainerPack = [
  {
    id: 1,
    title: "Gold",
    sessions: 20,
    price: 30000,
    fact1: "Full physical gym experience",
    fact2: "Personalized training",
    fact3: "Diet plan & workout plans",
    fact4: "Access to all gym facilities",
  },
  {
    id: 2,
    title: "Silver",
    sessions: 15,
    price: 25000,
    fact1: "Full physical gym experience",
    fact2: "Personalized training",
    fact3: "Diet plan & workout plans",
    fact4: "Access to all gym facilities",
  },
  {
    id: 3,
    title: "Bronze",
    sessions: 10,
    price: 20000,
    fact1: "Full physical gym experience",
    fact2: "Personalized training",
    fact3: "Diet plan & workout plans",
    fact4: "Access to all gym facilities",
  },
  
];

const VirtualTrainerPack = [
  {
    id: 1,
    title: "Gold",
    sessions: 20,
    price: 20000,
    fact1: "Full Guidance on workout plans",
    fact2: "Personalized training",
    fact3: "Diet plan & workout plans",
    fact4: "Give tricky workouts",
  },
  {
    id: 2,
    title: "Silver",
    sessions: 15,
    price: 15000,
    fact1: "Full Guidance on workout plans",
    fact2: "Personalized training",
    fact3: "Diet plan & workout plans",
    fact4: "Give tricky workouts",
  },
  {
    id: 3,
    title: "Bronze",
    sessions: 10,
    price: 10000,
    fact1: "Full physical gym experience",
    fact2: "Personalized training",
    fact3: "Diet plan & workout plans",
    fact4: "Give tricky workouts",
  },
];

const InstructorProfile = () => {

    const [fixedNavbar, setFixedNavbar] = useState(false);
    const [userData, setUserData] = useState({});
    const [rate, setRate] = useState(0.0);
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let selected_package = {};
  
    const { instructorID, instructorType } = useParams();

    const handlePackageClick = (item) => {
     
      selected_package = item;
      buyTrainerPackage();
      
    };

    const buyTrainerPackage = async () => {
      const packageDetails = {
        title: selected_package?.title,
        sessions: selected_package?.sessions,
        price: selected_package?.price,
        trainerID: instructorID,
        memberID: JSON.parse(localStorage.getItem('userID')),
      };
      
      console.log('Clicked package:', packageDetails);
      
      try{
        const res = await axios.post('http://localhost:8000/api/trainerpackage/trainerPackageBuy', packageDetails);
        window.location.href = res.data.url; 
      
      } catch (error) {
        console.error("error : ", error);
  
      }
    }

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Virtual Member"' && localStorage.getItem('userType') !== '"Physical Member"')){
      navigate('/login');
    }

    getUserDetails()
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

  const modalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
    height: "75%",
		width: "75%",
		bgcolor: 'background.paper',
		borderRadius: '10px',
		boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
		p: 4,
	};

  const getUserDetails = async () => {

    try {
      const reqData = {
        userID: instructorID,
        userType: instructorType,
      };
      const res2 = await axios.get('http://localhost:8000/api/users/details',{params:reqData});
      const res3 = await axios.get('http://localhost:8000/api/ratings/instructor/${instructorId}',{params:reqData});
      setRate(res3.data.data);
      setUserData(res2.data.data);
      
    } catch (error) {
      console.log('error message: ',error.data);
    }

  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const birthDate = new Date(userData.dob);
  const birthYear = birthDate.getFullYear();

  const age = currentYear - birthYear;

  let ProfileImage;

  if (userData.profile_pic === null) {
    ProfileImage = avatar;
  } else {
    const img = userData.profile_pic;
    ProfileImage = `http://localhost:3000/Profile/${img}`; // Update this line to correctly display the profile image
  }

  return (


    <Box sx={{ flex: "1", display:"flex", mb:2}}>
        <Box>
            <Sidebar sidebarLinkId = "2"/>
        </Box>
      
        <Box component="main" sx={{flex:1 }}>
        <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <Navbar />
        </div>
            <Box sx={{ paddingLeft:"5rem", flex:1 }}>
            
                <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Profile</Typography>
                <Box>
                    <Box sx={{display:"flex", width:"100%"}}>
                        <Box sx={{width:"30%"}}>
                            <img src={ProfileImage} alt="profile img" style={{width:"80%", borderRadius:"5px", objectFit:"cover"}} />
                        </Box>
                        <Box sx={{display:"flex", width:"50%"}}>
                            <Box sx={{display:"flex", flexDirection:"column", backgroundColor:"#000000", width:"0.2rem", borderRadius:"5px", marginRight:"15%"}}></Box>
                            <Box>
                                <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1%", marginLeft: "1rem", marginBottom:"2rem" }}>{userData.first_name} {userData.last_name}</Typography>
                                <Box sx={{width:"400px", height:"auto", textAlign:"center", justifyContent:"center", borderRadius:"10px", marginLeft:"5%", padding:"7%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', }}>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Instructor ID: {userData.id}</Typography>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Gender: {userData.gender}</Typography>
                                    <Typography variant="h6" style={{ display: instructorType === "Physiotherapist" ? "none" : "", fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Training Mode: {userData.mode}</Typography>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Age: {age}</Typography>
                                    <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Joined in: {new Date(userData.added_on).toLocaleDateString()}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box style={{width:"16%", textAlign:"right"}}>
                          <Button variant="contained" onClick={handleOpen} style={{display: instructorType === "Physiotherapist" ? "none" : "", backgroundColor:"#000000", color:"#ffffff", height:"10%", marginTop:"1%"}}><FaBandcamp style={{fontSize: "20px"}}/> &nbsp; packages</Button><br />
                          <Button variant="contained" style={{display: instructorType === "Physiotherapist" ? "none" : "", backgroundColor:"#000000", color:"#ffffff", height:"10%", marginTop:"5%"}}><FaTelegram style={{fontSize: "20px"}}/> &nbsp; Chat</Button>
                        </Box>
                        

                    </Box>
                    <Box sx={{width:"95%"}}> 
                        <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Bio</Typography>
                        <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"justify"}}>I am a professional trainer with 5 years of experience in the field. I have trained over 1000 students and have a 4.5 star rating. I am a professional trainer with 5 years of experience in the field. I have trained over 1000 students and have a 4.5 star rating. I am a professional trainer with 5 years of experience in the field. I have trained over 1000 students and have a 4.5 star rating. I am a professional trainer with 5 years of experience in the field. I have trained over 1000 students and have a 4.5 star rating.</Typography>
                    </Box>
                    <Box sx={{display:"flex", width: "100%", height:"50%", textAlign:"left", marginTop:"2rem"}}>
                        <Box style={{width:"40%"}}>
                            <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", marginLeft: "", }}>Qualification</Typography>
                            <Box style={{marginLeft:"1%"}}>
                                <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>3-year degree in psychology accredited by The British Psychological Society (BPS)</Typography>
                                <Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left"}}>Training skills including active listening and a non-judgemental approach</Typography>
                            
                            </Box>
                        </Box>
                        <Box  style={{width:"60%", marginLeft:"6%"}}>
                            <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem",  }}>Review</Typography>
                            <Box style={{marginLeft:"0%"}}>
                                <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left"}}>{`${(rate.rating / rate.count).toFixed(2)}`}</Typography>
                                <Rating name="read-only" value={rate.rating / rate.count}  precision={0.5}  readOnly />
                                <Typography variant="h6" style={{ fontSize:"12px",fontWeight: 500, color:"grey", textAlign:"left"}}>(Based on {rate.count} reviews)</Typography>
                            </Box>
                        </Box>
                    
                    </Box>
                </Box>
                    
        
            
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
									<FaBandcamp  style={{marginTop:"0%", color:"red", fontSize:"2rem"}}/>
									<Typography id="modal-modal-title" variant="h6" component="h2" fontWeight="700" textAlign="center">
										&nbsp; Trainer Packages
									</Typography>
								</Box>
                <Box sx={{display:"flex", marginTop:"5%"}}>
                {(localStorage.getItem('userType') === '"Virtual Member"') ? VirtualTrainerPack.map((item) => (
                  <Box
                    sx={{
                      width: "30%",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "60%",
                      cursor: "pointer",
                      border: "2px solid white",
                      borderRadius: "10px",
                      padding: "1rem",
                      marginRight: "3%",
                      marginBottom: "1%",
                      boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                      '&:hover': { borderColor: '#96CDEF', transition: "ease 0.5s" }
                    }}
                  >  
                      <>
                        <Typography variant="h5" style={{ fontSize: "20px", fontWeight: 700 }}>{item.title} Package</Typography>
                        <Typography variant="h6" style={{ fontSize: "12px", fontWeight: 600 }}>{item.sessions} sessions</Typography><br />
                        <Typography variant="h5" style={{ fontSize: "16px", fontWeight: 700 }}>Rs.{item.price}</Typography><br />
                        <Typography variant="body1"><span style={{ fontSize: "10px", fontWeight: 500 }}><FaBitbucket /> </span>{item.fact1}</Typography><br />
                        <Typography variant="body1"><span style={{ fontSize: "10px", fontWeight: 500 }}><FaBitbucket /> </span>{item.fact2}</Typography><br />
                        <Typography variant="body1"><span style={{ fontSize: "10px", fontWeight: 500 }}><FaBitbucket /> </span>{item.fact3}</Typography><br />
                        <Typography variant="body1"><span style={{ fontSize: "10px", fontWeight: 500 }}><FaBitbucket /> </span>{item.fact4}</Typography><br /><br />
                        <Button variant="contained" key={item.id}  onClick={() => handlePackageClick(item)} style={{ backgroundColor: "#96CDEF", color: "black", fontWeight: "700" }}>Get Started</Button>
                      </>  
                    </Box>
                    )) : PhysicalTrainerPack.map((item) => (
                      <Box
                        sx={{
                          width: "30%",
                          textAlign: "center",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "60%",
                          cursor: "pointer",
                          border: "2px solid white",
                          borderRadius: "10px",
                          padding: "1rem",
                          marginRight: "3%",
                          marginBottom: "1%",
                          boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                          '&:hover': { borderColor: '#96CDEF', transition: "ease 0.5s" }
                        }}
                      >
                      <>
                        <Typography variant="h5" style={{ fontSize: "20px", fontWeight: 700 }}>{item.title} Package</Typography>
                        <Typography variant="h6" style={{ fontSize: "12px", fontWeight: 600 }}>{item.sessions} sessions</Typography><br />
                        <Typography variant="h5" style={{ fontSize: "16px", fontWeight: 700 }}>Rs.{item.price}</Typography><br />
                        <Typography variant="body1"><span style={{ fontSize: "10px", fontWeight: 500 }}><FaBitbucket /> </span>{item.fact1}</Typography><br />
                        <Typography variant="body1"><span style={{ fontSize: "10px", fontWeight: 500 }}><FaBitbucket /> </span>{item.fact2}</Typography><br />
                        <Typography variant="body1"><span style={{ fontSize: "10px", fontWeight: 500 }}><FaBitbucket /> </span>{item.fact3}</Typography><br />
                        <Typography variant="body1"><span style={{ fontSize: "10px", fontWeight: 500 }}><FaBitbucket /> </span>{item.fact4}</Typography><br /><br />
                        <Button variant="contained"  onClick={() => handlePackageClick(item)} style={{ backgroundColor: "#96CDEF", color: "black", fontWeight: "700" }}>Get Started</Button>
                      </>
                 
          
                  </Box>
                     ))}
                </Box>          

							</Box>
						</Modal>
     
    </Box>

  );
};

export default InstructorProfile;
