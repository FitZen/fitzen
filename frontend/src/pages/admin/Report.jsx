import React from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  Paper,
  Table,
  TableHead,
  TableRow, TableCell, TableBody, TableContainer
} from "@mui/material";
import { Bar } from 'react-chartjs-2';
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";
import {FaTelegram, FaFeatherAlt} from 'react-icons/fa';
import ProfileImg from '../../assets/photo-1633332755192-727a05c4013d.jpg';
import {PiMedalFill} from 'react-icons/pi';
import {FaUserEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
;

const color1 = "#102B4C" //dark blue
const color2 = "#346E93" //light blue
const color3 = "#96CDEF" //lighter blue
const color4 = "#DC1E2A" //red


const Report = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = (item) => {
    setSelectedItem(item); // Set the selected item before opening the modal
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [itemData, setItemData] = useState([]);
  const [setSelectedItem] = useState(null);

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if((localStorage.getItem('userType') !== '"Admin"')){
      navigate('/login');
    }

    viewItems();
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
  }, [navigate]);

  const viewItems = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/shakebar/items");
      setItemData(res.data.data);
    } catch (error) {
      console.error("Retrieving failed:", error);
      // Handle error scenarios here
    }
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };


  const data = {
    labels: ['Membership', 'Shakebar', 'Trainers'],
    datasets: [{
      label: 'Sales',
      data: [5, 4, 2],
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

  const selectStyle = {

    marginBottom: "2rem",
    color: "black",
    backgroundColor: "lightgray",
    width: "10rem",
    height: "3rem",
  };




  return (

      <Box sx={{ flex: "1", display:"flex", mb:2}}>
        <Box>
          <AdminSidebar sidebarLinkId = "5"/>
        </Box>

        <Box component="main" sx={{flex:1 }}>
          <div
              className={`navbar ${fixedNavbar ? "fixed" : ""}`}
              style={{ width: "100%" }}
          >
            <AdminNavbar />
          </div>
          <Box sx={{ paddingLeft:"5rem", flex:1 }}>
            <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left"}}>Reports</Typography>

            <Box sx={{display:"flex", width:"94%", height:"60%", backgroundColor:"#E5E8E8", padding:"0.8rem", borderRadius:"10px", marginBottom:"1rem", marginTop:"0.5rem"}}>
              <Box sx={{width:"94%", height:"100%", backgroundColor:"white", borderRadius:"10px"}}>
                <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"center" }}>Monthly Revenue</Typography>
                <Box sx={{}}>
                  <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Box sx={{backgroundColor: "#96CDEF", padding:"0.7rem", borderRadius:"10px", margin:"1rem", width:"25%"}}>
                      <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center",  }}>Total <br /> Income </Typography>
                      <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>100,000 LKR </Typography>
                    </Box>
                    <Box sx={{backgroundColor: "#96CDEF", padding:"0.7rem", borderRadius:"10px",  margin:"1rem", width:"26%"}}>
                      <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center",  }}>Total <br />Expenditures </Typography>
                      <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>20,000 LKR </Typography>
                    </Box>
                    <Box sx={{backgroundColor: "#96CDEF", padding:"0.7rem", borderRadius:"10px",  margin:"1rem", width:"25%"}}>
                      <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>Total <br /> Revenue </Typography>
                      <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>80,000 LKR </Typography>
                    </Box>
                    <Box sx={{padding:"0.7rem",  margin:"1rem", width:"25%"}}>
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">Year</InputLabel>
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectedYear}
                          label="Year"
                          onChange={handleYearChange}
                          style={selectStyle}
                      >
                        <MenuItem value="2020">2020</MenuItem>
                        <MenuItem value="2021">2021</MenuItem>
                        <MenuItem value="2022">2022</MenuItem>
                        <MenuItem value="2023">2023</MenuItem>
                      </Select>
                    </FormControl>


                    <br />
                    <FormControl>
                      <InputLabel htmlFor="month-select">Month</InputLabel>
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectedMonth}
                          label="Month"
                          onChange={handleMonthChange}
                          style={selectStyle}
                      >
                        <MenuItem value="January">January</MenuItem>
                        <MenuItem value="February">February</MenuItem>
                        <MenuItem value="March">March</MenuItem>
                        <MenuItem value="April">April</MenuItem>
                        <MenuItem value="May">May</MenuItem>
                        <MenuItem value="June">June</MenuItem>
                        <MenuItem value="July">July</MenuItem>
                        <MenuItem value="August">August</MenuItem>
                        <MenuItem value="September">September</MenuItem>
                        <MenuItem value="October">October</MenuItem>
                        <MenuItem value="November">November</MenuItem>
                        <MenuItem value="December">December</MenuItem>
                      </Select>
                    </FormControl>
                    <br />
                    </Box>
                  </Box>

                </Box>
                <Box sx={{ width: "62%", height: "100%", padding: "30px", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', borderRadius:"10px", mt:1, ml: "2rem" }}>
                  <Typography variant="h6" style={{ fontWeight: 700, marginTop: "-1rem",marginBottom: "1rem", color: "#000000" }}>Total Income</Typography>
                  <Bar data={data} options={options} />
                </Box>

              </Box>
            </Box>
              <Box sx={{width:"94%", height:"100%", backgroundColor:"white", borderRadius:"10px"}}>
                <TableContainer component={Paper} style={{ marginTop: '1rem', width: '95%', fontSize: '15px' }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ fontWeight: '700' }}>Item ID</TableCell>
                        <TableCell style={{ fontWeight: '700' }}>Item Name</TableCell>
                        <TableCell style={{ fontWeight: '700' }}>Quantity</TableCell>
                        <TableCell style={{ fontWeight: '700' }}>Unit Price (LKR)</TableCell>
                        <TableCell style={{ fontWeight: '700' }}>Category</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody style={{ backgroundColor: '#F5F5F5' }}>
                      {itemData.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.available_count}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell style={{ fontSize: '14px' }}>
                              <Button key={item.id} onClick={() => handleOpen(item)} variant="contained" color="primary" style={{ backgroundColor: "#346E93" }} size="small">
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Box>

      </Box>

  );
};

export default Report;
