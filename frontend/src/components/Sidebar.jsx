import React, { useState } from 'react';
import { FaBars, FaTachometerAlt, FaUsers, FaCalendarAlt, FaChartLine, FaCocktail, FaClipboardList, FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Dashboard from '../pages/member/Dashboard';
import Instructors from '../pages/member/Instructors';
import Schedule from '../pages/member/Schedule';
import Progress from '../pages/member/Progress';
import Shakebar from '../pages/member/Shakebar';
import Reports from '../pages/member/Reports';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Profile from '../assets/photo-1633332755192-727a05c4013d.jpg'
import MoreIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(-0.5, 1),
  height: '70px',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': {
      ...openedMixin(theme),
      background: '#000000', // Change the background color of the drawer to black
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': {
      ...closedMixin(theme),
      background: '#000000', // Change the background color of the drawer to black
    },
  }),
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: 150,
  height: 70,
  marginRight: theme.spacing(7),
}));

const ListItemIconStyled = styled(ListItemIcon)(({ theme, open }) => ({
  fontSize: '1.5rem', // Increase the icon font size
  marginLeft: '0.45rem', // Add a left margin to the icon
  justifyContent: open ? 'flex-start' : 'center', // Center the icon when closed
  display: 'flex', // Enable flexbox properties
  color: '#ffffff', // Change icon color to white
  transition: 'color 1s ease',
  height:open ? 'inherit' : '2.5rem',
  marginTop:open ? 'inherit' : '1rem',
}));

const SidebarLink = styled(Typography)({
  fontSize: '1.4rem', // Increase the font size
  marginLeft: '1rem', // Adjust the spacing between the icon and text
  color: '#ffffff', // Change the link color to white
  fontWeight: 500, // Increase the font weight
  lineHeight: 2.5, // Set the line height
});


const ListItemButtonStyled = styled(ListItemButton)(({ theme, open }) => ({
  minHeight: 48,
  justifyContent: open ? 'initial' : 'center',
  px: 2.5,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#cccccc', // Change the background color on hover
  },
}));

const iconStyle = {
  color: 'white', // Change the color to your desired color
  fontSize: '1.8rem', // Increase the icon size
  marginTop: '0.5rem', // Add some margin to the top
  marginRight: '0.4rem', // Add some margin to the left
};

const footerIcons = {
  color: 'white', // Change the color to your desired color
  fontSize: '1.8rem', // Increase the icon size
  marginRight: '1.5rem', // Add some margin to the left
  cursor: 'pointer',
}

const HeaderIconStyle = {
  backgroundColor:"gray",
  cursor: 'pointer',
  justifyContent: 'center',
  borderRadius: '50%',
  padding: '0.5rem',
}


export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState('Dashboard');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = (page) => {
    setActivePage(page);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
    handleDrawerClose();
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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge variant="dot" color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge variant="dot" color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/* <AccountCircle /> */}
          <img src={Profile} alt="Profile" width="40px" height="40px"  style={{borderRadius:"50px"}}/>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (

    <Box>
      <AppBar position="static" sx={{ backgroundColor: 'white', height:"78px" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" style={{borderRadius: "50%",  width: "60px", height: "60px", marginTop:"5px"}}>
              <Badge variant="dot" color="error">
                <MailIcon style={{ fontSize: "25px", color: "black"  }}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              style={{borderRadius: "50%",  width: "60px", height: "60px", marginTop:"5px"}}
            >
              <Badge variant="dot" color="error" style={{marginRight:"10px"}}>
              <NotificationsIcon style={{ fontSize: "25px", color: "black" }} />
              </Badge>
            </IconButton>
            <Typography  variant='subtitle1' component="div" sx={{ flexGrow: 1, mt:2, mr:1, fontSize:"15px", color:"black", fontWeight:700 }}>
                Tharindu Gunawardhana
                <Typography variant="subtitle2"  gutterBottom sx={{ flexGrow: 1, fontSize:"12px", color:"grey", fontWeight:500, textAlign:"right" }}>
                  Physical Member
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
              <img src={Profile} alt="Profile" width="50px" height="50px" style={{borderRadius:"50px"}}/>
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

      <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          
          <Drawer variant="permanent" elevation={1} open={open} sx={{ backgroundColor: '#000000' }}>
            <DrawerHeader>
              {open && <LogoImage src={Logo} alt="Logo" />}
              <IconButton onClick={handleToggleDrawer}>
                <FaBars style={iconStyle} />
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleMenuItemClick('Dashboard')}>
                <ListItemButtonStyled theme={theme} open={open}>
                  <ListItemIconStyled open={open}>
                    <FaTachometerAlt />
                  </ListItemIconStyled>
                  {open && <SidebarLink variant="subtitle1" component="span">Dashboard</SidebarLink>}
                </ListItemButtonStyled>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleMenuItemClick('Instructors')}>
                <ListItemButtonStyled theme={theme} open={open}>
                  <ListItemIconStyled open={open}>
                    <FaUsers />
                  </ListItemIconStyled>
                  {open && <SidebarLink variant="subtitle1" component="span">Instructors</SidebarLink>}
                </ListItemButtonStyled>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleMenuItemClick('Schedule')}>
                <ListItemButtonStyled theme={theme} open={open}>
                  <ListItemIconStyled open={open}>
                    <FaCalendarAlt />
                  </ListItemIconStyled>
                  {open && <SidebarLink variant="subtitle1" component="span">Schedule</SidebarLink>}
                </ListItemButtonStyled>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleMenuItemClick('Progress')}>
                <ListItemButtonStyled theme={theme} open={open}>
                  <ListItemIconStyled open={open}>
                    <FaChartLine />
                  </ListItemIconStyled>
                  {open && <SidebarLink variant="subtitle1" component="span">Progress</SidebarLink>}
                </ListItemButtonStyled>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleMenuItemClick('Shakebar')}>
                <ListItemButtonStyled theme={theme} open={open}>
                  <ListItemIconStyled open={open}>
                    <FaCocktail />
                  </ListItemIconStyled>
                  {open && <SidebarLink variant="subtitle1" component="span">Shakebar</SidebarLink>}
                </ListItemButtonStyled>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleMenuItemClick('Reports')}>
                <ListItemButtonStyled theme={theme} open={open}>
                  <ListItemIconStyled open={open}>
                    <FaClipboardList />
                  </ListItemIconStyled>
                  {open && <SidebarLink variant="subtitle1" component="span">Reports</SidebarLink>}
                </ListItemButtonStyled>
              </ListItem>
            </List>

            <Box sx={{ display: open? 'flex' : 'none', marginTop: '22rem', marginLeft: '4rem'}}>

              <FaFacebook style={footerIcons}/>
              <FaInstagramSquare style={footerIcons}/>
              <FaTwitter style={footerIcons}/>
            </Box>

          </Drawer>

          <Box component="main" sx={{ paddingLeft:"5rem", flex:1 }}>
            {activePage === 'Dashboard' && <Dashboard />}
            {activePage === 'Instructors' && <Instructors />}
            {activePage === 'Schedule' && <Schedule />}
            {activePage === 'Progress' && <Progress />}
            {activePage === 'Shakebar' && <Shakebar />}
            {activePage === 'Reports' && <Reports />}
          </Box>

          
        </Box>
  </Box>

    
      
    
  );
}
