import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Typography, InputLabel, Select, MenuItem} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../assets/logo.png';
import BGImg from '../assets/Trainers/john-fornander-TAZoUmDqzXk-unsplash.jpg';
import axios from 'axios';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

const defaultTheme = createTheme();

export default function SignUpMedicalSide() {

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

  const datePickerStyle = {
    border: '2px solid red', // Change the border style here
    color: 'red', // Change the text color here
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
          }}
        />
        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 1,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Box component="img" src={Logo} sx={{ width: 150, height: 75 }} />
            <Typography component="h1" variant="h5" fontWeight={700}>
              Medical Questionaire
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width:"90%", textAlign:"center" }}>
                <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", fontSize:"18pox", color:"black" }}>1. Do you have any of the following?</InputLabel>
                <Box sx={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                    
                    <Box sx={{width:"50%", marginLeft:"5%",marginRight:"2%", display:"block", textAlign:"left"}}>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Heart Disease"
                        /> <br />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Dizziness"
                        /> <br />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Gout"
                        /> <br />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Diabetes"
                        /> <br />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Arthritis"
                        /> 
                    </Box>
                    <Box sx={{width:"50%", textAlign:"left"}}>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Cardiovascular Condition"
                        /> <br />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="High/Low Boold Preasure"
                        /> <br />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Family Hx of Heart Disease"
                        /> <br />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Infectious Disease"
                        />
                    </Box>   
                </Box>
                <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", textAlign:"left", fontSize:"18pox", color:"black" }}>2. Do you have any of problems/injuries in the following areas?</InputLabel>
                <Box sx={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                    
                    <Box sx={{width:"50%", marginLeft:"5%",marginRight:"2%", display:"block", textAlign:"left"}}>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Knees"
                        /> <br />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Hips/Pelvis"
                        /> <br />
                        
                    </Box>
                    <Box sx={{width:"50%", textAlign:"left"}}>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Lower Back"
                        /> <br />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Neck/Shoulders"
                        /> <br />
                       
                    </Box>   
                </Box>
                <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", marginBottom:"2%", textAlign:"left", fontSize:"18pox", color:"black" }}>3. Have you had any surgery in the last 5 years, if yes, what & when?</InputLabel>
                <TextField variant="outlined" style={{marginLeft:"-2%",}} inputProps={{style: {height: 1, width:550,border:"1px solid", borderRadius:"5px", outline:"none"}}}/> <br />

                <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", marginBottom:"2%", textAlign:"left", fontSize:"18pox", color:"black" }}>4. Are you on any medications, if yes, for what?</InputLabel>
                <TextField variant="outlined" style={{marginLeft:"-2%",}} inputProps={{style: {height: 1, width:550,border:"1px solid", borderRadius:"5px", outline:"none"}}}/> <br />

                <InputLabel variant="body2" style={{ fontWeight: 500, marginTop: "5%", marginBottom:"2%", textAlign:"left", fontSize:"18pox", color:"black" }}>5. Do you have any other special thing to mention about your health?</InputLabel>
                <TextField variant="outlined" style={{marginLeft:"-2%",}} inputProps={{style: {height: 1, width:550,border:"1px solid", borderRadius:"5px", outline:"none"}}}/> <br />
                
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Accept all terms & conditions"
                /> <br />
             
              <Button
                type="submit"
                
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#000000", justifyContent:"center", alignItems:"center" }}
              >
                Register Me
              </Button>
             
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
