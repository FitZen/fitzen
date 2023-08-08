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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../assets/logo.png';
import BGImg from '../assets/Trainers/valery-sysoev-LDAirERNzew-unsplash.jpg';
import axios from 'axios';

const defaultTheme = createTheme();

export default function SignInSide() {

  const navigate = useNavigate();

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
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

      setFormErrors({
        email: '',
        password: '',
      });

      // Redirect user based on their role
      if (userRole === 'Admin') {
        // Redirect to the admin dashboard
        navigate('/admin/dashboard');
      } else if (userRole === 'Virtual Member') {
        // Redirect to the user dashboard
        navigate('/member/dashboard');
      } else if(userRole === 'Trainer') {
        navigate('/trainer/dashboard');
        // Handle other roles or scenarios
      } else if(userRole === 'Physical Member') {
        navigate('/member/dashboard');
      } else if(userRole === 'Receptionist') {
        navigate('/receiptionist/dashboard');
      } else if(userRole === 'Shake Bar Manager'){
        navigate('/shakebarmanager/dashboard');
      }
      // Handle the response from the backend as needed (e.g., redirect user, set authentication state)
    } catch (error) {
      console.error('Error sending data to the backend:', error.response.data);
      if (error.response.data.message === 'Incorrect password') {
        setFormErrors({
          ...formErrors,
          password: 'Incorrect password',
        });
      } else if (error.response.data.message === "User doesn't exist") {
        setFormErrors({
          ...formErrors,
          email: "User doesn't exist",
        });
      }
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
          md={7}
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
        <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} >
              <LockOutlinedIcon xs={false} />
            </Avatar>
            <Box component="img" src={Logo} sx={{ width: 200, height: 100 }} />
            <Typography component="h1" variant="h5" fontWeight={500}>
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
                error={formErrors.email !== ''}
                helperText={formErrors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                error={formErrors.password !== ''}
                helperText={formErrors.password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#000000" }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
