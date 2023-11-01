import React,{ useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import { Typography,  Select, MenuItem, Button, InputLabel, FormControl, TextField} from "@mui/material";
import { BiSolidMessageEdit,BiSolidMessageSquareAdd } from "react-icons/bi";
import { Bar } from 'react-chartjs-2';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Modal from "@mui/material/Modal";
import { FaRegTimesCircle } from "react-icons/fa";
import axios from 'axios';
import Swal from "sweetalert2";

const color1 = "#102B4C" //dark blue
const color2 = "#346E93" //light blue
const color3 = "#96CDEF" //lighter blue
const color4 = "#DC1E2A" //red 

const Reports = () => {

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  const [openComplaintPopup, setOpenComplaintPopup] = React.useState(false);

  const handleOpenComplaintPopup = () => setOpenComplaintPopup(true);
	const handleCloseComplaintPopup = () => setOpenComplaintPopup(false);

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newComplaint, setNewComplaint] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Virtual Member"' && localStorage.getItem('userType') !== '"Physical Member"')){
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

  const modalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: "35%",
		bgcolor: 'background.paper',
		borderRadius: '10px',
		boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
		p: 4,
	};

      //get form inputs
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewComplaint((prevComplaint) => ({
          ...prevComplaint,
          [name]: value,
        }));
      };
  
      const handleSubmit = async () => {
  
        if (!newComplaint.title || !newComplaint.content) {
          // Display error messages or styles for empty fields
          setSubmitted(true);
          return;
        }  
    
        try {
          const payload = {
            subject: newComplaint.title,
            content: newComplaint.content,
            userID: JSON.parse(localStorage.getItem('userID')),
          };
  
          console.log("payload : ", payload);
    
          const res = await axios.post(
            "http://localhost:8000/api/complaints/addcomplaint",
            payload
          );
      
          if (res.status === 201) {
            console.log("res from backend :", res.data.data)
            handleCloseComplaintPopup();
            setNewComplaint({ title: "", content: "" }); // Clear the form
            setSubmitted(false);
          }

          Swal.fire({
            icon: 'success',
            title: 'Complaint added successfully',
            showConfirmButton: false,
            timer: 1500
          })
        } catch (error) {
          console.error("Adding complaint failed:", error);
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
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [{
          label: 'Sales',
          data: [5, 2, 3, 1, 4, 2, 3,1,2,0,1,1,2,1,3,0,4,1,2,5,4,3,1,2,0,1,2,3,0,0,1],
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
        <Sidebar sidebarLinkId = "6"/>
      </Box>
      
      <Box component="main" sx={{flex:1 }}>
      <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <Navbar />
        </div>
        <Box sx={{ paddingLeft:"5rem", flex:1 }}>
        <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign:"left"}}>Reports</Typography>

        <Box sx={{justifyContent:"right"}}>
              <Button variant="contained" onClick={handleOpenComplaintPopup} style={{marginLeft:"81.5%",height:"30%",backgroundColor:"#96CDEF", color:"black", fontWeight:"700", marginTop: "2rem",marginBottom:"1%"}}><BiSolidMessageEdit size={20} />  &nbsp; Complaints</Button>
        </Box>
        
        <Box sx={{display:"flex", width:"95%", height:"60%", backgroundColor:"#E5E8E8", padding:"0.8rem", borderRadius:"10px", marginBottom:"1rem", marginTop:"0.5rem"}}>
            <Box sx={{width:"75%", height:"100%", backgroundColor:"white", borderRadius:"10px"}}>
                <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"center" }}>Monthly Session Overview</Typography>
                <Box sx={{}}>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                        <Box sx={{backgroundColor: "#E5E8E8", padding:"0.7rem", borderRadius:"10px", margin:"1rem", width:"25%"}}>
                            <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center",  }}>Scheduled personal <br /> Workouts </Typography>
                            <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>12 </Typography>
                        </Box>
                        <Box sx={{backgroundColor: "#E5E8E8", padding:"0.7rem", borderRadius:"10px",  margin:"1rem", width:"26%"}}>
                            <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center",  }}>Completed personal <br />Workouts </Typography>
                            <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>10 </Typography>
                        </Box>
                        <Box sx={{backgroundColor: "#E5E8E8", padding:"0.7rem", borderRadius:"10px",  margin:"1rem", width:"25%"}}>
                            <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>Cancelled personal <br /> Workouts </Typography>
                            <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>02 </Typography>
                        </Box>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                        <Box sx={{backgroundColor: "#E5E8E8", padding:"0.7rem", borderRadius:"10px",  margin:"1rem", width:"25%"}}>
                            <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>Scheduled training <br />Workouts </Typography>
                            <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center",  }}>15 </Typography>
                        </Box>
                        <Box sx={{backgroundColor: "#E5E8E8", padding:"0.7rem", borderRadius:"10px",  margin:"1rem", width:"26%"}}>
                            <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>Completed training <br />Workouts </Typography>
                            <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>15 </Typography>
                        </Box>
                        <Box sx={{backgroundColor: "#E5E8E8", padding:"0.7rem", borderRadius:"10px",  margin:"1rem", width:"25%"}}>
                            <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center",  }}>Cancelled training <br />Workouts </Typography>
                            <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center",  }}>00 </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Bar data={data} options={options} style={{padding:"4rem"}}/>   
                </Box>

               

            </Box>
            <Box sx={{width:"25%", height:"100%", marginLeft:"5%"}}>
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
                
                <Button variant="contained" style={{marginTop:"36rem", backgroundColor:color2}}>Download</Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Modal
							open={openComplaintPopup}
							onClose={handleCloseComplaintPopup}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
							<Box sx={modalStyle}>
								<FaRegTimesCircle onClick={handleCloseComplaintPopup} style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA" ,}}
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
									<BiSolidMessageSquareAdd  style={{marginTop:"0%", color:"red", fontSize:"2rem"}}/>
									<Typography id="modal-modal-title" variant="h6" component="h2" fontWeight="700" textAlign="center">
										&nbsp; Add Complaints
									</Typography>
								</Box>

								<Box sx={{textAlign:"center", padding:"1%"}}>

                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", marginLeft:"4%",color:"#000000" }}>Title:</InputLabel>
                    <TextField variant="outlined" name="title" value={newComplaint.title} onChange={handleInputChange} error={submitted && !newComplaint.title} helperText={submitted && !newComplaint.title ? "Title is required" : ""} inputProps={{style: {height: 1, width:400,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "3%", textAlign:"left", marginLeft:"4%", color:"#000000" }}>Description:</InputLabel>
                    <TextField variant="outlined" name="content" value={newComplaint.content} onChange={handleInputChange} error={submitted && !newComplaint.content} helperText={submitted && !newComplaint.content ? "Content is required" : ""}   multiline rows="4" style={{height: 125, width:425, borderRadius:"5px", outline:"none", border:"1px solid D8D9DA"}}/>

									<Button variant="contained" onClick={handleSubmit} style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%"}}>Add</Button>

								</Box>

							</Box>
						</Modal>
     
    </Box>

  );
};

export default Reports;
