import React, { useState ,useEffect} from 'react';
import Box from "@mui/material/Box";
import { Typography, Tabs, Tab,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputLabel, TextField  } from '@mui/material';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend,  DoughnutController, ArcElement} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import ShakebarmanagerSidebar from "../../components/ShakebarmanagerSidebar";
import ShakebarmanagerNavbar from "../../components/ShakebarmanagerNavbar";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

const color1 = "#102B4C" //dark blue

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, DoughnutController, ArcElement);

const data = [
  { id: 1, name: 'Item 1', quantity: 10, category: 'Category A'},
  { id: 2, name: 'Item 2', quantity: 15, category: 'Category B' },
  // Add more items as needed
];


const Reports = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(currentDate.getFullYear());
  const [currMonth, setCurrMonth] = useState(currentDate.getMonth());
  const [value, setValue] = React.useState(null);

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


  const renderCalendar = () => {
    const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    const days = [];

    for (let i = firstDayofMonth; i > 0; i--) {
      days.push(
        <li key={`prev-${i}`} className="inactive">
          {lastDateofLastMonth - i + 1}
        </li>
      );
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      const isToday =
        i === currentDate.getDate() &&
        currMonth === currentDate.getMonth() &&
        currYear === currentDate.getFullYear();
      days.push(
        <li key={`current-${i}`} className={isToday ? "active" : ""}>
          {i}
        </li>
      );
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      days.push(
        <li key={`next-${i}`} className="inactive">
          {i - lastDayofMonth + 1}
        </li>
      );
    }

    return days;
  };


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
        <ShakebarmanagerSidebar sidebarLinkId = "4"/>
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        <Box>
          <ShakebarmanagerNavbar />
        </Box>
        <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "1rem", textAlign: "left" ,marginBottom:'1rem'}}>Reports</Typography>

          <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Report Tabs" style={{marginTop:"2%", marginBottom:"2%", borderRadius:"5px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', width:"32%"}}>
            <Tab label="Income" />
            <Tab label="Mostly Bought Items" />
          </Tabs>

          {selectedTab === 0 && (
          <Typography variant="body1" style={{ marginTop: "0.5rem" }}>
          <Box style={{ marginBottom: '3rem', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
            <Box style={{ marginRight: '2rem' }}>
              <InputLabel variant="body2" style={{ fontWeight: 500, color: "black" }}>From:</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker
                  label=""
                  value={value}
                  style={{ width: "100px" }}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
        
            <Box>
              <InputLabel variant="body2" style={{ fontWeight: 500, color: "black" }}>To:</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker
                  label=""
                  value={value}
                  style={{ width: "100px" }}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          </Box>
          <Box sx={{ width: "70%", height: "25rem", padding: "10px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', borderRadius: "10px", mt: 1, ml: "0.5rem" }}>
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


