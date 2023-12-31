import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {FaSignOutAlt} from 'react-icons/fa';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Typography } from '@mui/material';
import avatar from '../assets/avatar.jpg';
import {Link} from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { lineHeight } from '@mui/system';


export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [userData, setUserData] = useState({});

  const [userID, setUserID] = useState('');
  const [actor, setActor] = useState('');

  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  useEffect(() => {
  
    if(!localStorage.getItem('userID')){
      navigate('/login');
    }else{
      setUserID(JSON.parse(localStorage.getItem('userID')));
      setActor(JSON.parse(localStorage.getItem('userType')));

      getUserDetails();
    }
  
    
  }, []);

   //load user details
   const getUserDetails = async () => {
    try {
      const reqData = {
        userID: JSON.parse(localStorage.getItem('userID')),
        userType: JSON.parse(localStorage.getItem('userType')),
      };
      const res2 = await axios.get('http://localhost:8000/api/users/details',{params:reqData});
      setUserData(res2.data.data);
      
    } catch (error) {
      console.log('error message: ',error.data);
    }
  
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const reqData = {
        userID: userID,
        userType: actor,
      };
      
      const res1 = await axios.post("http://localhost:8000/api/users/logout",reqData);
      localStorage.clear();
      navigate("/login");

      // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle error scenarios here
    }
  };

  let ProfileImage;

  if (userData.profile_pic === null) {
    ProfileImage = avatar;
  } else {
    const img = userData.profile_pic;
    ProfileImage = `http://localhost:3000/Profile/${img}`; // Update this line to correctly display the profile image
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    > 
      <Link to="/member/profile" style={{textDecoration:"none", color:"black"}}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      
    >
      <MenuItem sx={{lineHeight:"3%"}}>
        <IconButton size="1rem" aria-label="show 4 new mails" color="inherit">
          <Badge variant="dot" color="error">
            <MailIcon style={{fontSize:"1.2rem"}}/>
          </Badge>
        </IconButton>
        <p style={{fontSize:"13px", marginLeft:"0.5rem"}}>Messages</p>
      </MenuItem >
      <Link to="/member/notification" style={{textDecoration:"none", color:"black"}}>
        <MenuItem  sx={{lineHeight:"3%"}}>
            <IconButton
              size="1rem"
              color="inherit"
            >
              <Badge variant="dot" color="error">
                <NotificationsIcon style={{fontSize:"1.2rem"}}/>
              </Badge>
            </IconButton>
            <p style={{fontSize:"13px", marginLeft:"0.5rem"}}>Notifications</p>
        </MenuItem>
      </Link>
      <Link to="/member/profile" style={{textDecoration:"none", color:"black"}}>
        <MenuItem onClick={handleProfileMenuOpen}  sx={{lineHeight:"2%"}}>
          <IconButton
            sx={{ml:-0.7}}
            size="1rem"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            {/* <AccountCircle /> */}
            <img src={ProfileImage} alt="Profile" width="30px" height="30px"  style={{borderRadius:"50px"}}/>
          </IconButton>
          <p style={{fontSize:"13px", marginLeft:"0.2rem"}}>Profile</p>
        </MenuItem>
      </Link>
      <MenuItem onClick={handleLogout}  sx={{lineHeight:"3%"}}>
            <IconButton
              size="1rem"
              color="inherit"
            >
              
              <FaSignOutAlt style={{fontSize:"1.2rem"}}/>
            </IconButton>
            <p style={{fontSize:"13px", marginLeft:"0.5rem"}}>Logout</p>
        </MenuItem>
    </Menu>
  );


  return (
    <Box sx={{ flexGrow: 1 }}>
      {userData && (
        <AppBar position="static" sx={{ backgroundColor: 'white', height: '60px' }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
             <Link to="/chat" style={{ textDecoration: 'none', color: 'black' }}>
              <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  style={{
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    marginTop: '5px',
                  }}
                >
                  <Badge variant="dot" color="error">
                    <MailIcon style={{ fontSize: '1.2rem', color: 'black' }} />
                  </Badge>
                </IconButton>
             </Link>
              <Link to="/member/notification" style={{ textDecoration: 'none', color: 'black' }}>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  style={{
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    marginTop: '5px',
                  }}
                >
                  <Badge variant="dot" color="error" style={{ marginRight: '10px' }}>
                    <NotificationsIcon style={{ fontSize: '1.2rem', color: 'black' }} />
                  </Badge>
                </IconButton>
              </Link>
              <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, mt: 2, mr: 1, fontSize: '14px', color: 'black', fontWeight: 700 }}>
                {userData.first_name} {userData.last_name}
                <Typography variant="subtitle2" gutterBottom sx={{ flexGrow: 1, fontSize: '12px', color: 'grey', fontWeight: 500, textAlign: 'right' }}>
                  {actor}
                </Typography>
              </Typography>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                color="inherit"
              >
                <img src={ProfileImage} alt="Profile" width="40px" height="40px" style={{ borderRadius: '50px' }} />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <ArrowDropDownIcon style={{ color: '#000000' }} />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon style={{ color: 'black' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      )}

      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
