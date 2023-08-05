import React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid, Button } from "@mui/material";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend,  DoughnutController, ArcElement } from 'chart.js';
import { LineChart } from "@mui/x-charts/LineChart";
import { Bar, Doughnut } from 'react-chartjs-2';
import {FaUsers, FaUserClock, FaMoneyBillWave} from 'react-icons/fa';
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";

const color1 = "#102B4C" //dark blue
const color2 = "#346E93" //light blue
const color3 = "#96CDEF" //lighter blue
const color4 = "#DC1E2A" //red 


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, DoughnutController, ArcElement);

const Dashboard = () => {

  const data = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Sales',
      data: [50, 90, 150, 200, 260, 300, 400, 500],
      backgroundColor: [`${color1}`, `${color3}`, `${color4}`, `${color2}`, `${color1}`, `${color3}`, `${color4}`],
      borderColor: [`${color1}`, `${color3}`, `${color4}`, `${color2}`, `${color1}`, `${color3}`, `${color4}`],
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

  const pData = [100000, 120000, 125000, 150000, 200000, 220000, 230000, 150000 ];
   
    const xLabels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        
        
    ];

  return (
    <Box sx={{ flex: "1", display:"flex", mb:2}}>
      <Box>
        <AdminSidebar />
      </Box>
      
      <Box component="main" sx={{flex:1 }}>
        <Box>
          <AdminNavbar />
        </Box>
        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
        <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Dashboard</Typography>
          
            <Box sx={{ display:"flex", marginTop:"2rem" }}>
                <Grid md={4} sx={{display:"flex", padding:"1%", marginRight:"8%", width:"25%", borderRadius:"10px", justifyContent:"center", alignContent:"center", textAlign:"center", cursor:"pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px', transition: "ease 0.5s"}}}>
                    <Box sx={{marginRight:""}}>
                        <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>167</Typography>
                        <Typography variant="h6" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Total Users</Typography>
                    </Box>
                    <Box sx={{marginTop:"10%", marginLeft:"20%"}}>
                         <FaUsers size={40}/>
                    </Box>
                    
                </Grid>    

                <Grid md={4} sx={{display:"flex", padding:"1%", marginRight:"8%", width:"25%", borderRadius:"10px", justifyContent:"center", alignContent:"center", textAlign:"center", cursor:"pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px', transition: "ease 0.5s"}}}>
                    <Box sx={{marginRight:""}}>
                        <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>102</Typography>
                        <Typography variant="h6" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Logged in Users</Typography>
                    </Box>
                    <Box sx={{marginTop:"10%", marginLeft:"20%"}}>
                         <FaUserClock size={40}/>
                    </Box>
                    
                </Grid>    

                <Grid md={4} sx={{display:"flex", padding:"1%", width:"25%", borderRadius:"10px", justifyContent:"center", alignContent:"center", textAlign:"center", cursor:"pointer", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {boxShadow: 'rgba(52, 110, 147, 0.8) 0px 6px 10px, rgba(52, 110, 147, 0.7) 0px 1px 6px', transition: "ease 0.5s"}}}>
                    <Box sx={{marginRight:""}}>
                        <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>1.34 M</Typography>
                        <Typography variant="h6" style={{ fontWeight: 500, marginTop: "1rem", textAlign:"left" }}>Total Income</Typography>
                    </Box>
                    <Box sx={{marginTop:"10%", marginLeft:"20%"}}>
                         <FaMoneyBillWave size={40}/>
                    </Box>
                    
                </Grid>    
            </Box>  
            <Box sx={{ width: "100%", height:"80%", marginTop:"5%"}}> 
                <Box sx={{display:"flex", marginBottom:"3%"}}>
                    <Typography variant="h6" style={{ fontWeight: 700, marginTop: "0%", color: "#000000" }}>Total Users</Typography>
                    <Button variant="containedned" style={{marginLeft:"73.2%", backgroundColor:color2, color:"#ffffff", fontWeight: 700}}>View All</Button>
                </Box>
                
                <Box sx={{display:"flex"}}>
                    <Box sx={{ width: "50%", height: "50%", padding: "20px",  mt:1 }}>
                       
                        <Bar data={data} options={options} />
                    </Box>
                    
                    <Box sx={{ width: "350px", height: "100%", borderRadius: "10px", mt: 1, ml:8, justifyContent: "center", alignItems: "center" }}>
                        <div style={{ textAlign: "center",justifyContent:"center", height: "55%", width: "100%",padding: "1.5rem"}}>
                           
                            <Doughnut data={DoughnutData} options={DoughnutOptions} style={{marginLeft:"3.2rem", height:"15rem"}}/>
                        </div>
                    
                    </Box>
                </Box>
            </Box>   
            <Box sx={{ width: "100%", height:"80%", marginTop:"5%"}}> 
                <Box sx={{display:"flex", marginBottom:"3%"}}>
                    <Typography variant="h6" style={{ fontWeight: 700, marginTop: "0%", color: "#000000" }}>Logged in Users</Typography>
                    <Button variant="containedned" style={{marginLeft:"69%", backgroundColor:color2, color:"#ffffff", fontWeight: 700}}>View All</Button>
                </Box>
                
                <Box sx={{display:"flex"}}>
                    <Box sx={{ width: "50%", height: "50%", padding: "20px",  mt:1 }}>
                       
                        <Bar data={data} options={options} />
                    </Box>
                    
                    <Box sx={{ width: "350px", height: "100%", borderRadius: "10px", mt: 1, ml:8, justifyContent: "center", alignItems: "center" }}>
                        <div style={{ textAlign: "center",justifyContent:"center", height: "55%", width: "100%",padding: "1.5rem"}}>
                           
                            <Doughnut data={DoughnutData} options={DoughnutOptions} style={{marginLeft:"3.2rem", height:"15rem"}}/>
                        </div>
                    
                    </Box>
                </Box>
            </Box>  
            <Box sx={{ width: "100%", height:"80%", marginTop:"5%"}}> 
                <Box sx={{display:"flex", marginBottom:"3%"}}>
                    <Typography variant="h6" style={{ fontWeight: 700, marginTop: "0%", color: "#000000" }}>Income</Typography>
                    <Button variant="containedned" style={{marginLeft:"76.5%", backgroundColor:color2, color:"#ffffff", fontWeight: 700}}>View All</Button>
                </Box>
                
                <Box sx={{display:"flex"}}>
                    <Box sx={{ width: "50%", height: "50%", padding: "20px",  ml:1 , mt:-10}}>
                       
                        <LineChart
                            width={500}
                            height={400}
                            series={[
                                { data: pData, label: 'Income (Rs)', color: color3 , curve: 'linear'  },
                                
                            ]}
                            xAxis={[{ scaleType: 'point', data: xLabels }]}
                        />
                    </Box>
                    
                    <Box sx={{ width: "350px", height: "100%", borderRadius: "10px", mt: 1, ml:8, justifyContent: "center", alignItems: "center" }}>
                        <div style={{ textAlign: "center",justifyContent:"center", height: "55%", width: "100%",padding: "1.5rem"}}>
                           
                            <Doughnut data={DoughnutData} options={DoughnutOptions} style={{marginLeft:"3.2rem", height:"15rem"}}/>
                        </div>
                    
                    </Box>
                </Box>
            </Box>    
          
        </Box>
      </Box>
     
    </Box>
  );
};

export default Dashboard;
