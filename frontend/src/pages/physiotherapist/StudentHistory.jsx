import React from "react";
import Box from "@mui/material/Box";
import {Button, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import { LineChart } from '@mui/x-charts/LineChart';
import {GiBodyHeight, GiWeight, GiProgression} from 'react-icons/gi';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import Sidebar from "../../components/PhysiotherapistSidebar";
import Navbar from "../../components/PhysiotherapistNavbar";
import ProfileImg from '../../assets/Members/photo-1633332755192-727a05c4013d.jpg';
import {PiMedalFill,PiVideoCameraFill} from 'react-icons/pi';
import { AiFillSchedule } from "react-icons/ai";
import { FaHistory, FaRegAddressBook } from "react-icons/fa";


import BMI from "../../assets/BMI-Calculator.png";
import {Link} from "react-router-dom";
import {FaCalendarCheck, FaUserEdit} from "react-icons/fa";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const StudentHistory = () => {

	const [item, setItem] = React.useState('');

	const handleChange = (event) => {
		setItem(event.target.value);
	};

	const pData = [80,80,79,75,70,70 ];

	const xLabels = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June'

	];


	return (

		<Box sx={{ flex: "1", display:"flex", mb:2}}>
			<Box>
				<Sidebar />
			</Box>

			<Box component="main" sx={{flex:1 }}>
				<Box>
					<Navbar />
				</Box>

				<Box sx={{ paddingLeft:"5rem", flex:1 }}>
					<Box sx={{ display:"flex", width: "100%", height:"100%", marginTop: "1rem"}}>
						<Box sx={{ width: "50%", height:"100%", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
							<img src={ProfileImg} alt="Profile" width="45%"  style={{borderRadius:"100%", marginTop:"0.5rem"}}/>
						</Box>
						<Box sx={{ width: "50%", height:"100%", flexDirection:"column",marginTop: "1rem", marginLeft:"-15%", justifyContent:"center"}}>
							<Box style={{display:"flex"}}>
								<Typography variant="h5" style={{ fontWeight: 700, textAlign:"left", marginLeft:"-8rem" }}><PiMedalFill style={{marginTop: "1rem"}}/>  Personal Information</Typography>
							</Box>
							<Box sx={{display: "flex", marginLeft:"3rem"}}>
								<Box >
									<Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>Name: Dhanush Perera</Typography>
									<Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>Age: 38</Typography>
									<Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>Gender: Male</Typography>
									<Typography variant="h6" style={{ fontSize:"16px",fontWeight: 500, marginTop: "1rem", textAlign:"left", marginLeft:"-57%" }}>Contact Number: (+94) (76) 156 2514</Typography>
								</Box>
								<Box sx={{boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',borderRadius:"10px", marginLeft:"10%", width: "45%", height:"35%", padding:"0.5rem", justifyContent:"center",textAlign:"center",cursor:"pointer",'&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px', transition: "ease 0.5s"}}}>
									<Typography variant="h6" style={{ fontWeight: 700,  color: "#000000"}}>Schedule</Typography>
									<AiFillSchedule size={50} />
									<Typography variant="h6" style={{ fontWeight: 500,fontSize: "1rem",  color: "#000000" }}>Next Session : 21st August 10:30 am</Typography>
								</Box>
							</Box>

						</Box>

					</Box>
					<Box style={{display:"flex"}}>
						<Typography variant="h5" style={{ fontWeight: 700, textAlign:"left", marginLeft:"2rem" }}><FaHistory style={{marginTop: "3rem"}}/>  Student History</Typography>
						<Box sx={{ paddingTop:"2.8rem",paddingLeft:"2rem", flex:1 }}>
							<Button variant="contained" style={{backgroundColor:"#102B4C", color:"white", fontWeight:"600",}}><FaRegAddressBook style={{marginRight: "0.5rem"}}/>  Add another Therapy Session Summary</Button>
						</Box>
					</Box>
					<Box sx={{ paddingLeft:"5rem", flex:1, paddingTop:"3rem" }}>
						<Box sx={{  width: "90%", height:"55vh", padding:"1rem", overflowY:"auto", flexWrap:"wrep", borderRadius:"10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>

							<Box sx={{display:"flex", padding:"1rem", borderRadius:"10px",marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border:"2px solid white", '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>

								<Box sx={{display:"flex", flexDirection:"column",  width:"2%", borderRadius:"5px", backgroundColor:"#346E93"}}></Box>
								<Box sx={{marginLeft:"5%", marginRight:"5%", width:"85%", borderRadius:"10px", padding:"1rem", border:"1px solid #96CDEF"}}>
									<Typography variant="h6" style={{ fontWeight: 700, textAlign:"left" }}>Session Date: 2023.05.07</Typography>
									<Typography variant="body1" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>During today's session, John Smith presented with complaints of lower back pain, which he rated as a 6/10 on the pain scale.I conducted a thorough assessment of John's range of motion, muscle strength, and flexibility.</Typography>
								</Box>
								<CheckBoxIcon style={{marginLeft:"5%", marginTop:"5%", cursor:"pointer"}}/>

							</Box>
							<Box sx={{display:"flex", padding:"1rem", borderRadius:"10px",marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border:"2px solid white", '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>

								<Box sx={{display:"flex", flexDirection:"column",  width:"2%", borderRadius:"5px", backgroundColor:"#346E93"}}></Box>
								<Box sx={{marginLeft:"5%", marginRight:"5%", width:"85%", borderRadius:"10px", padding:"1rem", border:"1px solid #96CDEF"}}>
									<Typography variant="h6" style={{ fontWeight: 700, textAlign:"left" }}>Session Date: 2023.05.07</Typography>
									<Typography variant="body1" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>During today's session, John Smith presented with complaints of lower back pain, which he rated as a 6/10 on the pain scale.I conducted a thorough assessment of John's range of motion, muscle strength, and flexibility.</Typography>
								</Box>
								<CheckBoxIcon style={{marginLeft:"5%", marginTop:"5%", cursor:"pointer"}}/>

							</Box>
							<Box sx={{display:"flex", padding:"1rem", borderRadius:"10px",marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border:"2px solid white", '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>

								<Box sx={{display:"flex", flexDirection:"column",  width:"2%", borderRadius:"5px", backgroundColor:"#346E93"}}></Box>
								<Box sx={{marginLeft:"5%", marginRight:"5%", width:"85%", borderRadius:"10px", padding:"1rem", border:"1px solid #96CDEF"}}>
									<Typography variant="h6" style={{ fontWeight: 700, textAlign:"left" }}>Session Date: 2023.05.07</Typography>
									<Typography variant="body1" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>During today's session, John Smith presented with complaints of lower back pain, which he rated as a 6/10 on the pain scale.I conducted a thorough assessment of John's range of motion, muscle strength, and flexibility.</Typography>
								</Box>
								<CheckBoxIcon style={{marginLeft:"5%", marginTop:"5%", cursor:"pointer"}}/>

							</Box>
						</Box>
					</Box>
					<Box sx={{display:"flex", width:"100%"}}>
						<Box sx={{display:"flex",width:"90%" , justifyContent:"center", alignItems:"center"}}>
							<Box sx={{width:"85%" , border: "1px solid white", padding:"1rem",paddingBottom:"2rem", marginLeft:"2rem",cursor:"pointer", marginTop:"1rem", borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px', transition: "ease 0.5s"} }}>
								<Typography variant="h6" style={{ fontWeight: 650 }}>Current Body Status</Typography>
								<Box sx={{display:"flex", justifyContent:"center", marginTop:"2rem"}}>
									<Box sx={{width:"14rem" , height:"8rem", display:"flex", padding:"1rem", marginRight:"1rem", borderRadius:"10px", boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',}}>
										<GiWeight size={120} style={{marginTop:"-1rem", marginRight:"0.1rem"}}/>
										<Box>
											<Typography variant="h6" style={{fontSize:"16px", fontWeight: 650, marginTop:"1rem"  }}>Weight</Typography>
											<Typography variant="h6" style={{fontSize:"16px", fontWeight: 700, marginTop: "1.5rem" }}>70 KG</Typography>
										</Box>
									</Box>
									<Box sx={{width:"14rem" , height:"8rem", display:"flex", padding:"1rem", marginRight:"rem", borderRadius:"10px", boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',}}>
										<GiBodyHeight size={120} style={{marginTop:"-1rem", marginRight:"0.rem"}}/>
										<Box>
											<Typography variant="h6" style={{fontSize:"16px", fontWeight: 650,marginTop: "1rem"   }}>Height</Typography>
											<Typography variant="h6" style={{fontSize:"16px", fontWeight: 700, marginTop: "1.5rem" }}>180 cm</Typography>
										</Box>
									</Box>
								</Box>

							</Box>
							<Box sx={{width:"85%" , border: "1px solid white", padding:"1rem",paddingBottom:"2rem", marginLeft:"2rem",marginBottom:"1em", marginTop:"7rem", borderRadius:"10px",justifyContent:"center", alignItems:"center", textAlign:"center",cursor:"pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px','&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px', transition: "ease 0.5s"}}}>
								<Typography variant="h6" style={{ fontWeight: 650 }}>Body Mass Index</Typography>
								<img src={BMI} alt="BMI" width="70%" height="70%"  style={{borderRadius:"50px", marginTop:"0.5rem", }}/>
								<Box sx={{display:"flex", justifyContent:"center", textAlign:"center"}}>
									<Box sx={{boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em', width:"30%", borderRadius:"20px",textAlign:"center"}}>
										<Typography variant="h6" style={{ fontWeight: 700, marginTop: "1rem" }}>20.5</Typography>
										<Typography variant="h6" style={{ fontWeight: 750, marginTop: "1rem" }}>Normal</Typography>
									</Box>
								</Box>

							</Box>
						</Box>
					</Box>

				</Box>
			</Box>

		</Box>


	);
};

export default StudentHistory;
