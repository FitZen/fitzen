import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ListAtIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "F:/3rd Year Project/Frontend/project/src/assets/logo.png";
import { Container } from "@mui/material";
import CustomButton from "./CustomButton";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";

const color1 = "#000000"; // Black
const color2 = "#FFFFFF"; // White
const color3 = "#FF0000"; // Red

const NavbarContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "100%",
  gap: "2.5rem",
  padding: theme.spacing(2),
  backgroundColor: color1,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1, 2),
  },
}));

const NavLink = styled("a")(({ theme }) => ({
  fontSize: "18px",
  color: color2,
  fontWeight: "700",
  cursor: "pointer",
  padding: theme.spacing(1, 2),
  zIndex: 1,
  "&:hover": {
    color: color2,
    borderBottom: "4px solid red", // Only the bottom border will be red on hover
    
  },
}));

const NavLinkSign = styled("a")(({ theme }) => ({
  fontSize: "18px",
  color: color2,
  backgroundColor: color3,
  fontWeight: "700",
  cursor: "pointer",
  padding: theme.spacing(1, 2),
  zIndex: 1,
  "&:hover": {
    color: color2,
    border: "2px solid red", // Only the bottom border will be red on hover
    backgroundColor: color1,
  },
}));

const NavbarLinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "20%",
  maxWidth: "100%",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
  display: "none",
  cursor: "pointer",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const NavbarLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
  width: "180px",
  marginLeft: "200px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const LoginSignupBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
}));

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "grey", height: "100vh" }}
    >
      <List>
        {["Home", "Discover", "About", "Contact Us"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon style={{color: color2}}/>}
                {index === 1 && <FeaturedPlayListIcon style={{color:color2}}/>}
                {index === 2 && <ListAtIcon style={{color:color2}}/>}
                {index === 3 && <ContactsIcon style={{color:color2}}/>}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ style: { color: color2 } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <NavbarContainer style={{ width: "100vw", maxWidth: "100%" }}>
      {/* Logo and Menu Icon */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "rem" }}>
        <CustomMenuIcon
          onClick={toggleDrawer("left", true)}
          style={{ marginTop: "6px", color: color2 }}
        />
        <Drawer
          anchor="left"
          open={mobileMenu["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
        <NavbarLogo src={logoImg} alt="logo" style={{ marginLeft: "50%" }} />
      </Box>

      {/* Links */}
      <NavbarLinkBox>
        <NavLink variant="body2">HOME</NavLink>
        <NavLink variant="body2">DISCOVER</NavLink>
        <NavLink variant="body2">ABOUT</NavLink>
        <NavLink variant="body2">CONTACT US</NavLink>
      </NavbarLinkBox>

      {/* Login and Signup Links */}
      <LoginSignupBox>
        <NavLink variant="body2"  style={{marginLeft: "-25%"}}>LOGIN</NavLink>
        <NavLinkSign
          variant="body2"
          style={{
            padding: "0.6rem",
            borderRadius: "100px",
            
          }}
        >
          SIGN UP
        </NavLinkSign>
      </LoginSignupBox>
    </NavbarContainer>
  );
};

export default Navbar;
