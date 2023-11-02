import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../../components/TrainerSidebar";
import Navbar from "../../components/TrainerNavbar";
import {useEffect, useState} from 'react';
import {Typography,  Select, MenuItem, Button, InputLabel, FormControl} from "@mui/material";
import { useNavigate } from 'react-router-dom';

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
import {Link} from "react-router-dom";


const Students = () => {

    const [item, setItem] = React.useState('');
    const [fixedNavbar, setFixedNavbar] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Trainer"')){
		navigate('/login');
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

    const handleChange = (event) => {
        setItem(event.target.value);
    };


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

                    <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Trainees</Typography>

                    <Box sx={{display:"flex", width:"96%", height:"70%", backgroundColor:"#E5E8E8", padding:"0.3rem", borderRadius:"10px", marginBottom:"2rem", marginTop:"1.5rem"}}>
                        <Box sx={{display:"flex",height:"82vh", flexWrap: "wrap",overflowY:"auto", width:"100%", backgroundColor:"white", borderRadius:"10px", padding: "1rem", margin:"0.1rem"}}>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={"http://localhost:3000/Profile/vm0001.jpg"} alt="item" style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Tharindu Gunawardhane</Typography>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 500}}>Type : Virtual</Typography>
                                <br/>
                                <Link to="/trainer/progress" style={{textDecoration:"none", color:"black"}}>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                                </Link>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={"http://localhost:3000/Profile/pm0001.jpg"} alt="item" style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Rusiru Rathmina</Typography>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 500}}>Type : Physical</Typography>
                                <br/>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={"http://localhost:3000/Profile/pm0002.jpg"} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Mahindha Kumara</Typography>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 500}}>Type : Physical</Typography>
                                <br/>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={"http://localhost:3000/Profile/vm0002.jpg"} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 700}}>Hasantha Kariyawasam</Typography>
                                <Typography variant="h6" style={{fontSize:"16px",fontWeight: 500}}>Type : Physical</Typography>
                                <br/>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700"}}>View Profile</Button>
                            </Box>

                        </Box>

                    </Box>


                </Box>



            </Box>

        </Box>


    );
};

export default Students;