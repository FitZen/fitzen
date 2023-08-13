import React, { useState } from 'react';
import Box from "@mui/material/Box";
import { Typography, Tabs, Tab,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper  } from '@mui/material';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend,  DoughnutController, ArcElement} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import ShakebarmanagerSidebar from "../../components/ShakebarmanagerSidebar";
import ShakebarmanagerNavbar from "../../components/ShakebarmanagerNavbar";

const color1 = "#102B4C" //dark blue

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, DoughnutController, ArcElement);

const data = [
  { id: 1, name: 'Item 1', quantity: 10, category: 'Category A'},
  { id: 2, name: 'Item 2', quantity: 15, category: 'Category B' },
  // Add more items as needed
];


const Reports = () => {
  const [selectedTab, setSelectedTab] = useState(0);


  const income = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed','Thur','Fri', 'Sat'],
    datasets: [{
      label: 'Sales',
      data: [10000, 5000, 7000, 3200, 4500, 20000, 3800],
      backgroundColor: [`${color1}`],
      borderColor: [`${color1}`],
      borderWidth: 1,
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



  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ flex: "1", display: "flex", mb: 2 }}>
      <Box>
        <ShakebarmanagerSidebar />
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        <Box>
          <ShakebarmanagerNavbar />
        </Box>
        <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
          <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign: "left" ,marginBottom:'1rem'}}>Reports</Typography>

          <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Report Tabs" style={{marginBottom:'2rem',fontWeight:'7000'}}>
            <Tab label="Income" />
            <Tab label="Mostly Bought Items" />
          </Tabs>

          {selectedTab === 0 && (
            <Typography variant="body1" style={{ marginTop: "0.5rem" }}>
              <Box style={{marginBottom:'3rem',fontSize:'20px'}}>
              <label style={{marginRight:'1rem',marginLeft:'1rem'}}>From</label>  <input type='text'></input>
              <label  style={{marginRight:'1rem',marginLeft:'5rem'}}>To</label>  <input type='text'></input>
              </Box>
              <Box sx={{ width: "70%", height: "25rem", padding: "10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', borderRadius:"10px", mt:1, ml: "0.5rem" }}>
              <Bar data={income} options={options} />
             </Box>
            </Typography>
          )}

          {selectedTab === 1 && (
            <Typography variant="body1" style={{ marginTop: "1rem" }}>
                        <TableContainer component={Paper} style={{marginTop:'1rem',width:'80%',fontSize: '15px'}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{fontWeight:'700'}}>Item ID</TableCell>
                  <TableCell style={{fontWeight:'700'}}>Item Name</TableCell>
                  <TableCell style={{fontWeight:'700'}}>Quantity</TableCell>
                  <TableCell style={{fontWeight:'700'}}>Category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ backgroundColor: '#F5F5F5' }}>
                {data.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.category}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
            </Typography>
          )}

        </Box>
      </Box>

    </Box>
  );
};

export default Reports;


