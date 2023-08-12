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
import MoreIcon from '@mui/icons-material/MoreVert';
import { Typography } from '@mui/material';
import Profile from '../assets/trainer_profilephoto.jpg'
import {Link} from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
        }
      
        //getUserDetails();
      }, []);
    
      const handleLogout = async (event) => {
        event.preventDefault();
        try {
          const reqData = {
            userID: userID,
            userType: actor,
          };
          await axios.post("http://localhost:8000/api/users/logout",reqData);
          localStorage.clear();
          navigate("/login");
    
          // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
        } catch (error) {
          console.error("Logout failed:", error);
          // Handle error scenarios here
        }
      };


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
            <Link to="/trainer/profile" style={{textDecoration:"none", color:"black"}}>
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
            <MenuItem>
                <IconButton size="1rem" aria-label="show 4 new mails" color="inherit">
                    <Badge variant="dot" color="error">
                        <MailIcon style={{fontSize:"1.5rem"}}/>
                    </Badge>
                </IconButton>
                <p style={{fontSize:"13px"}}>Messages</p>
            </MenuItem>
            <Link to="/trainer/notification" style={{textDecoration:"none", color:"black"}}>
                <MenuItem>
                    <IconButton
                        size="1rem"
                        color="inherit"
                    >
                        <Badge variant="dot" color="error">
                            <NotificationsIcon style={{fontSize:"1.5rem"}}/>
                        </Badge>
                    </IconButton>
                    <p style={{fontSize:"13px"}}>Notifications</p>
                </MenuItem>
            </Link>
            <Link to="/trainer/profile" style={{textDecoration:"none", color:"black"}}>
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        size="1rem"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        {/* <AccountCircle /> */}
                        <img src={Profile} alt="Profile" width="35px" height="35px"  style={{borderRadius:"50px", marginLeft:"-0.4rem"}}/>
                    </IconButton>
                    <p style={{fontSize:"13px"}}>Profile</p>
                </MenuItem>
            </Link>
        </Menu>
    );


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'white', height:"60px" }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit" style={{borderRadius: "50%",  width: "60px", height: "60px", marginTop:"5px"}}>
                            <Badge variant="dot" color="error">
                                <MailIcon style={{ fontSize: "1.2rem", color: "black"  }}/>
                            </Badge>
                        </IconButton>
                        <Link to="/trainer/notification" style={{textDecoration:"none", color:"black"}}>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                style={{borderRadius: "50%",  width: "60px", height: "60px", marginTop:"5px"}}
                            >
                                <Badge variant="dot" color="error" style={{marginRight:"10px"}}>
                                    <NotificationsIcon style={{ fontSize: "1.2rem", color: "black" }} />
                                </Badge>
                            </IconButton>
                        </Link>
                        <Typography  variant='subtitle1' component="div" sx={{ flexGrow: 1, mt:2, mr:1, fontSize:"14px", color:"black", fontWeight:700 }}>
                            Dhanush Perera
                            <Typography variant="subtitle2"  gutterBottom sx={{ flexGrow: 1, fontSize:"12px", color:"grey", fontWeight:500, textAlign:"right" }}>
                                {actor}
                            </Typography>
                        </Typography>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"

                            color="inherit"
                        >
                            {/* <AccountCircle /> */}
                            <img src={Profile} alt="Profile" width="40px" height="40px" style={{borderRadius:"50px"}}/>
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            {/* <AccountCircle /> */}
                            <ArrowDropDownIcon style={{color:"#000000"}}/>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon style={{color:"black"}}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
