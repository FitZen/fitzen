import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Typography, InputLabel, Select, MenuItem} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../assets/logo.png';
import BGImg from '../assets/Trainers/spencer-davis-0ShTs8iPY28-unsplash.jpg';
import axios from 'axios';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import { style } from '@mui/system';

const defaultTheme = createTheme();

export default function SignUpSide() {

  const navigate = useNavigate();
  const [gender, setGender] = React.useState('');
  const [value, setValue] = React.useState(null);

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);

    try {
      const response = await axios.post('http://localhost:8000/api/users/login', formData);
      console.log('Response from the backend:', response.data);
      const userRole = response.data.type;

     
      // Handle the response from the backend as needed (e.g., redirect user, set authentication state)
    } catch (error) {
      console.error('Error sending data to the backend:', error.message);
      // Handle the error appropriately (e.g., display error message to the user)
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={{ display: "none" }}
          md={6}
          sx={{
            backgroundImage: `url(${BGImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            objectFit: 'cover',
            height: '100vh',
          }}
        />
        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square sx={{ heightL:"100vh"}}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              overflowY: 'auto',
              flexWrap: 'wrep',
              height: '100vh',
            }}
          >
            
            <Box component="img" src={Logo} sx={{ width: 150, height: 75 }} />
            <Typography component="h1" variant="h5" fontWeight={700}>
              Let's Get Started
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width:"90%", textAlign:"center" }}>
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
                                renderInput={(params) => <TextField {...params} inputProps={{style: {height: 1, width:250,border:"1px solid"}}}/>}
                            />
                        </LocalizationProvider>
                        <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "2%", textAlign:"left", color:"black" }}>Emergency Contact No:</InputLabel>
                        <TextField variant="outlined" inputProps={{style: {height: 1, width:250,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                        
                    </Box>

                    
                   
                </Box>
                <Box>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "2%", textAlign:"left", color:"black" }}>Address:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:642,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "2%", textAlign:"left", color:"black" }}>NIC:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:642,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
                    <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "2%", textAlign:"left", color:"black" }}>Email:</InputLabel>
                    <TextField variant="outlined" inputProps={{style: {height: 1, width:642,border:"1px solid", borderRadius:"5px", outline:"none"}}}/>
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
                
             
              <Link to="/medical" style={{ textDecoration: 'none' }}>	
                <Button
                    type="submit"
                    
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#000000", justifyContent:"center", alignItems:"center" }}
                >
                    Next
                </Button>
              </Link>
             
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
