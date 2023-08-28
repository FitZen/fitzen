import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend,  DoughnutController, ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import {FaClock, FaCalendarCheck, FaDotCircle, FaCheckCircle, FaTimesCircle} from 'react-icons/fa';
import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Icon3 from '../../assets/icon3.png'
import Sidebar from "../../components/TrainerSidebar";
import Navbar from "../../components/TrainerNavbar";
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

const color1 = "#102B4C" //dark blue
const color2 = "#346E93" //light blue
const color3 = "#96CDEF" //lighter blue
const color4 = "#DC1E2A" //red


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, DoughnutController, ArcElement);

const TrainerDashboard = () => {

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

	const data = {
		labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
		datasets: [{
			label: 'Sales',
			data: [5, 2, 3, 1, 4, 2, 3],
			backgroundColor: [`${color2}`],
			borderColor: [`${color2}`],
			borderWidth: 1
		}]
	};

	const options = {
		plugins: {
			legend: {
				display: false,
			}
		},
		scales: {
			x: {
				grid: {
					display: false,
				}
			},
			y: {
				grid: {
					display: false,
				}
			}
		}
	};

	const DoughnutData = {
		labels: ['Completed', 'Upcoming', 'Cancelled', 'Total'],
		datasets: [{
			data: [65, 59, 80, 81],
			backgroundColor: [`${color3}`,`${color2}`, `${color4}`, `${color1}`],
			borderColor: '#000',
			borderWidth: 0
		}]
	};

	const DoughnutOptions = {
		plugins: {
			legend: {
				display: false,
				position: 'right'
			}
		}
	};

	return (
		<Box sx={{ flex: "1", display:"flex", mb:2}}>
			<Box>
				<Sidebar sidebarLinkId = "1"/>
			</Box>

			<Box component="main" sx={{flex:1 }}>
				<div
					className={`navbar ${fixedNavbar ? "fixed" : ""}`}
					style={{ width: "100%" }}
					>
					<Navbar />
				</div>
				<Box sx={{ paddingLeft:"5rem", flex:1 }}>
					<Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left" }}>Dashboard</Typography>
					<Box sx={{ display:"flex", width: "100%", height:"100%"}}>

						<Box>
							<Box sx={{ width: "350px", height: "100%", borderRadius: "10px", mt: 1, justifyContent: "center", alignItems: "center" }}>
								<div style={{ textAlign: "center",justifyContent:"center", height: "55%", width: "100%",padding: "1.5rem",borderRadius:"10px",boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}>
									<Typography variant="h6" style={{ fontWeight: 700,  color: "#000000", marginTop:"-1rem" }}>Session Stats</Typography>
									<Doughnut data={DoughnutData} options={DoughnutOptions} style={{marginLeft:"3.2rem", height:"15rem"}}/>
								</div>
								<Box sx={{boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',borderRadius:"10px", marginTop:"1rem", width: "100%", height:"35%", padding:"0.5rem", justifyContent:"center",textAlign:"center"}}>
									<Typography variant="h6" style={{ fontWeight: 700,  color: "#000000"}}>Next Session</Typography>
									<FaCalendarCheck size={50} />
									<Typography variant="h6" style={{ fontWeight: 500,fontSize: "1rem",  color: "#000000" }}>Time : 10:30 am</Typography>
									<Typography variant="h6" style={{ fontWeight: 500, fontSize: "1rem", color: "#000000" }}>Type : Physical</Typography>
								</Box>
							</Box>

						</Box>
						<Box sx={{ width: "62%", height: "50%", padding: "20px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', borderRadius:"10px", mt:1, ml: "2rem" }}>
							<Typography variant="h6" style={{ fontWeight: 700, marginTop: "-1rem", color: "#000000" }}>Current Week Schedule</Typography>
							<Bar data={data} options={options} />
						</Box>

					</Box>



					<Box sx={{display: "flex", width: "100%", height: "250px", backgroundColor: "#ffffff",  mt:5 , mb: 2, borderRadius:"10px", paddingTop:"1rem"}}>
						<Link to="/trainer/NewRequests" style={{textDecoration:"none", color:"#000000"}}>
							<Box sx={{width:"98%", height:"90%", bgcolor: "#ffffff", borderRadius:"10px", mr:9, cursor: "pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px',transition: "ease 0.5s"}}}>
							<img src={Icon1} alt="Icon1" style={{textAlign:"left", marginLeft:"5%", marginTop:"5%"}} />
							<Typography variant="h5" style={{ fontWeight: 700,  color: "#000000", textAlign:"center", marginLeft:"10%"}}>2 New Student Requests</Typography>
						</Box>
						</Link>
						<Box sx={{width:"30%", height:"90%", bgcolor: "#ffffff", borderRadius:"10px", ml:4,  mr:4 , cursor: "pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px', transition: "ease 0.5s"}}}>
							<img src={Icon3} alt="Icon3" style={{textAlign:"left", marginLeft:"5", marginTop:"5%"}}/>
							<Typography variant="h5" style={{ fontWeight: 700,  color: "#000000", textAlign:"center", marginLeft:"0%"}}>30 Physical Students</Typography>
						</Box>
						<Box sx={{width:"29%", height:"90%", bgcolor: "#ffffff", borderRadius:"10px" , cursor: "pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',border: '2px solid white', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px', transition: "ease 0.5s"}}}>
							<img src={Icon2} alt="Icon2" style={{textAlign:"left", marginLeft:"5%", marginTop:"5%"}}/>
							<Typography variant="h5" style={{ fontWeight: 700,  color: "#000000", textAlign:"center", marginLeft:"0%"}}>15 Virtual Students</Typography>
						</Box>
					</Box>

					<Typography variant="h5" style={{ fontWeight: 700,  color: "#000000", textAlign:"left", marginTop:"2rem"}}>Today Sessions</Typography>
					<Box sx={{ width: "94%", backgroundColor: "#E5E8E8", padding: "20px", mt:3 , mb: 2, borderRadius:"10px",  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
						<Box sx={{width:"100%", height:"20%", backgroundColor:"#E5E8E8", borderRadius:"10px", display: "flex", marginTop: "0.5rem"}}>
							<Typography variant="h6" style={{ fontSize: "20px",fontWeight: 550,  color: "#000000", textAlign:"left", marginLeft:"4rem"}}>Student Name</Typography>
							<Typography variant="h6" style={{ fontSize: "20px",fontWeight: 550,  color: "#000000", textAlign:"left", marginLeft:"10rem"}}>Type</Typography>
							<Typography variant="h6" style={{ fontSize:"20px",fontWeight: 550,  color: "#000000", textAlign:"center", marginLeft:"10rem"}}>Time</Typography>
							<Typography variant="h6" style={{fontSize:"20px", fontWeight: 550,  color: "#000000", marginLeft: "17rem"}}>Status </Typography>
						</Box>
						<Box sx={{width:"100%", height:"20%", backgroundColor:"#ffffff", borderRadius:"10px", display: "flex", marginTop: "0.5rem",cursor:"pointer" ,"&:hover": {transform: "scale(1.02)", transition: "transform 0.2s ease"}}}>
							<FaDotCircle style={{marginTop: "1.3rem", marginLeft:"1rem", marginRight:"1rem", color:"#000000"}}/>
							<Typography variant="h6" style={{ fontSize: "18px",fontWeight: 500,  color: "#000000", textAlign:"left", marginLeft:"1rem", marginTop:"1rem"}}>Adheesha Chamodh</Typography>
							<Typography variant="h6" style={{ fontSize:"18px",fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"8rem", marginTop:"1rem"}}>Physical</Typography>
							<Typography variant="h6" style={{ fontSize:"18px",fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"8rem", marginTop:"1rem"}}>10:30 am</Typography>
							<Box style={{display:"flex", backgroundColor:`${color3}`, borderRadius:"50px", width: "15%", height:"70%",  marginLeft:"20%", marginTop:"0.4rem", textAlign:"center", cursor: "pointer"}}>
								<Typography variant="h6" style={{fontSize:"18px", fontWeight: 500,  color: "#000000", marginLeft: "1rem", marginTop: '0.3rem'}}>Completed </Typography>
								<FaCheckCircle style={{ fontSize: '1.2rem',  color: '#000000',margin: '0 auto', marginTop: '0.6rem', textAlign: "right"}}/>
							</Box>

						</Box>
						<Box sx={{width:"100%", height:"20%", backgroundColor:"#ffffff", borderRadius:"10px", display: "flex", marginTop: "1rem",cursor:"pointer" ,"&:hover": {transform: "scale(1.02)", transition: "transform 0.2s ease"}}}>
							<FaDotCircle style={{marginTop: "1.3rem", marginLeft:"1rem", marginRight:"1rem", color:"#000000"}}/>
							<Typography variant="h6" style={{ fontSize: "18px",fontWeight: 500,  color: "#000000", textAlign:"left", marginLeft:"1rem", marginTop:"1rem"}}>Adheesha Chamodh</Typography>
							<Typography variant="h6" style={{ fontSize:"18px",fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"8rem", marginTop:"1rem"}}>Virtual</Typography>
							<Typography variant="h6" style={{ fontSize:"18px",fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"9rem", marginTop:"1rem"}}>11:30 am</Typography>
							<Box style={{display:"flex", backgroundColor:`${color2}`, borderRadius:"50px", width: "15%", height:"70%",  marginLeft:"20%", marginTop:"0.4rem", textAlign:"center", cursor: "pointer"}}>
								<Typography variant="h6" style={{fontSize:"18px", fontWeight: 500,  color: "#000000", marginLeft: "1rem", marginTop: '0.3rem'}}>Upcoming </Typography>
								<FaClock style={{ fontSize: '1.2rem',  color: '#000000',margin: '0 auto', marginTop: '0.6rem', textAlign: "right"}}/>
							</Box>

						</Box>
						<Box sx={{width:"100%", height:"20%", backgroundColor:"#ffffff", borderRadius:"10px", display: "flex", marginTop: "1rem",cursor:"pointer" ,"&:hover": {transform: "scale(1.02)", transition: "transform 0.2s ease"}}}>
							<FaDotCircle style={{marginTop: "1.3rem", marginLeft:"1rem", marginRight:"1rem", color:"#000000"}}/>
							<Typography variant="h6" style={{ fontSize: "18px",fontWeight: 500,  color: "#000000", textAlign:"left", marginLeft:"1rem", marginTop:"1rem"}}>Adheesha Chamodh</Typography>
							<Typography variant="h6" style={{ fontSize:"18px",fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"8rem", marginTop:"1rem"}}>Virtual</Typography>
							<Typography variant="h6" style={{ fontSize:"18px",fontWeight: 500,  color: "#000000", textAlign:"center", marginLeft:"9rem", marginTop:"1rem"}}>10:30 am</Typography>
							<Box style={{display:"flex", backgroundColor:`${color4}`, borderRadius:"50px", width: "15%", height:"70%",  marginLeft:"20%", marginTop:"0.4rem", textAlign:"center", cursor: "pointer"}}>
								<Typography variant="h6" style={{fontSize:"18px", fontWeight: 500,  color: "#000000", marginLeft: "1rem", marginTop: '0.3rem'}}>Cancelled </Typography>
								<FaTimesCircle style={{ fontSize: '1.2rem',  color: '#000000',margin: '0 auto', marginTop: '0.6rem', textAlign: "right"}}/>
							</Box>

						</Box>

					</Box>
				</Box>
			</Box>

		</Box>
	);
};

export default TrainerDashboard;
