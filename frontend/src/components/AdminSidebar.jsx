import React, { useState } from 'react';
import { FaBars, FaTachometerAlt, FaUsers, FaUserEdit, FaUserFriends, FaCocktail, FaBullhorn, FaBookmark, FaBookOpen, FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
// import Dashboard from '../pages/member/Dashboard';
// import Instructors from '../pages/member/Instructors';
// import Schedule from '../pages/member/Schedule';
// import Progress from '../pages/member/Progress';
// import Shakebar from '../pages/member/Shakebar';
// import Reports from '../pages/member/Reports';
// import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import Profile from '../assets/photo-1633332755192-727a05c4013d.jpg'
// import MoreIcon from '@mui/icons-material/MoreVert';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Notification from '../pages/member/Notification';  



const drawerWidth = 250;

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
  height: '60px',
  marginBottom: "-0.8rem",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
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
  width: 130,
  height: 55,
  marginRight: '1.5rem',
}));

const ListItemIconStyled = styled(ListItemIcon)(({ theme, open }) => ({
  fontSize: '1.2rem', // Increase the icon font size
  marginLeft: '1rem', // Add a left margin to the icon
  justifyContent: open ? 'flex-start' : 'center', // Center the icon when closed
  display: 'flex', // Enable flexbox properties
  color: '#ffffff', // Change icon color to white
  transition: 'color 1s ease',
  height:open ? 'inherit' : '1.8rem',
  marginTop:open ? 'inherit' : '0.418rem',
}));

const SidebarLink = styled(Typography)({
  fontSize: '1.1rem', // Increase the font size
  marginLeft: '0.2rem', // Adjust the spacing between the icon and text
  color: '#ffffff', // Change the link color to white
  fontWeight: 500, // Increase the font weight
  lineHeight: 2, // Set the line height
});

const activeLinkStyle = {
  backgroundColor: '#cccccc', // Add the background color for the hovered state
  color:'#000000'
};


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
  fontSize: '1.2rem', // Increase the icon size
  marginTop: '0.6rem', // Add some margin to the top
  marginLeft: '1.6rem', // Add some margin to the left
  marginRight: '0.3rem', // Add some margin to the right
};

const footerIcons = {
  color: 'white', // Change the color to your desired color
  fontSize: '1.2rem', // Increase the icon size
  marginRight: '2rem', // Add some margin to the left
  cursor: 'pointer',
}





export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState('Dashboard');


  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = (page) => {
    setActivePage(page);
  };




  return (

    <Box>
      

      <Box sx={{ display: 'flex', height:"100vh" }}>
          <CssBaseline />
          
          <Drawer variant="permanent" elevation={1} open={open} sx={{ backgroundColor: '#000000', height:"100vh" }}>
            <DrawerHeader>
              {open && <LogoImage src={Logo} alt="Logo" />}
              <IconButton onClick={handleToggleDrawer}>
                <FaBars style={iconStyle} />
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <Link to="/admin/dashboard" style={{textDecoration:"none"}}onClick={() => handleMenuItemClick('Dashboard')}> 
                <ListItem disablePadding sx={{ display: 'block' }} >
                  <ListItemButtonStyled theme={theme} open={open} style={activePage === 'Dashboard' ? activeLinkStyle : {}}>
                    <ListItemIconStyled open={open}>
                      <FaTachometerAlt />
                    </ListItemIconStyled>
                    {open && <SidebarLink variant="subtitle1" component="span">Dashboard</SidebarLink>}
                  </ListItemButtonStyled>
                </ListItem>
              </Link> 

              <Link to="/admin/members" style={{textDecoration:"none"}} onClick={() => handleMenuItemClick('Members')}>
                <ListItem disablePadding sx={{ display: 'block' }} >
                  <ListItemButtonStyled theme={theme} open={open} style={activePage === 'Members' ? activeLinkStyle : {}}>
                    <ListItemIconStyled open={open}>
                      <FaUsers />
                    </ListItemIconStyled>
                    {open && <SidebarLink variant="subtitle1" component="span">Members</SidebarLink>}
                  </ListItemButtonStyled>
                </ListItem>
              </Link>
              
              <Link to="/admin/instructors" style={{textDecoration:"none"}}>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleMenuItemClick('Instructors')}>
                  <ListItemButtonStyled theme={theme} open={open} style={activePage === 'Instructors' ? activeLinkStyle : {}}>
                    <ListItemIconStyled open={open}>
                      <FaUserFriends />
                    </ListItemIconStyled>
                    {open && <SidebarLink variant="subtitle1" component="span">Instructors</SidebarLink>}
                  </ListItemButtonStyled>
                </ListItem>
              </Link>

              <Link to="/admin/employees" style={{textDecoration:"none"}}>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleMenuItemClick('Employee')}>
                  <ListItemButtonStyled theme={theme} open={open} style={activePage === 'Employee' ? activeLinkStyle : {}}>
                    <ListItemIconStyled open={open}>
                      <FaUserEdit/>
                    </ListItemIconStyled>
                    {open && <SidebarLink variant="subtitle1" component="span">Employee</SidebarLink>}
                  </ListItemButtonStyled>
                </ListItem>
              </Link>

              <Link to="/admin/shakebar" style={{textDecoration:"none"}}>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleMenuItemClick('Shakebar')}>
                  <ListItemButtonStyled theme={theme} open={open} style={activePage === 'Shakebar' ? activeLinkStyle : {}}>
                    <ListItemIconStyled open={open}>
                      <FaCocktail />
                    </ListItemIconStyled>
                    {open && <SidebarLink variant="subtitle1" component="span">Shakebar</SidebarLink>}
                  </ListItemButtonStyled>
                </ListItem>
              </Link>

              <Link to="/admin/announcement" style={{textDecoration:"none"}}>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleMenuItemClick('Announcement')}>
                  <ListItemButtonStyled theme={theme} open={open} style={activePage === 'Announcement' ? activeLinkStyle : {}}>
                    <ListItemIconStyled open={open}>
                      <FaBullhorn />
                    </ListItemIconStyled>
                    {open && <SidebarLink variant="subtitle1" component="span">Announcement</SidebarLink>}
                  </ListItemButtonStyled>
                </ListItem>
              </Link>

              <Link to="/admin/complaint" style={{textDecoration:"none"}}>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleMenuItemClick('Complaints')}>
                  <ListItemButtonStyled theme={theme} open={open} style={activePage === 'Complaints' ? activeLinkStyle : {}}>
                    <ListItemIconStyled open={open}>
                      <FaBookmark />
                    </ListItemIconStyled>
                    {open && <SidebarLink variant="subtitle1" component="span">Complaints</SidebarLink>}
                  </ListItemButtonStyled>
                </ListItem>
              </Link>

              <Link to="/admin/report" style={{textDecoration:"none"}}>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleMenuItemClick('Reports')}>
                <ListItemButtonStyled theme={theme} open={open} style={activePage === 'Reports' ? activeLinkStyle : {}}>
                  <ListItemIconStyled open={open}>
                    <FaBookOpen />
                  </ListItemIconStyled>
                  {open && <SidebarLink variant="subtitle1" component="span">Reports</SidebarLink>}
                </ListItemButtonStyled>
              </ListItem>
              </Link>
            </List>

            <Box sx={{ display: open? 'flex' : 'none', marginTop: '90%',width:"100%", justifyContent:"center", alignItems:"center",textAlign:"center", marginLeft:"0.5rem"}}>

              <FaFacebook style={footerIcons}/>
              <FaInstagramSquare style={footerIcons}/>
              <FaTwitter style={footerIcons}/>
            </Box>

          </Drawer>

          
          
        </Box>
  </Box>
  
    
      
    
  );
}
