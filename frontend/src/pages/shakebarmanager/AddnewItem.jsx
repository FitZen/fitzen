import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  Grid,
  Paper,
  Button,
  InputLabel,
  TextField,
  Select,
} from "@mui/material";
import Addnew from "../../assets/Shakebarmanager/addnew.png";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import ShakebarmanagerSidebar from "../../components/ShakebarmanagerSidebar";
import ShakebarmanagerNavbar from "../../components/ShakebarmanagerNavbar";
import MenuItem from "@mui/material/MenuItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#FFFFFF" : "#FFFFFF",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  height: "500px",
  borderRadius: "15px",
}));

const AddnewItem = () => {
  const navigate = useNavigate();
  const [fixedNavbar, setFixedNavbar] = useState(false);

  useEffect(() => {
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

  const clickCancle = () => {
    navigate("/shakebarmanager/items");
  };

  const handleCancelClick = () => {
    // Handle cancel button click here
    navigate("/shakebarmanager/items");
  };

  return (
    <Box sx={{ flex: "1", display: "flex", mb: 2 }}>
      <Box>
        <ShakebarmanagerSidebar sidebarLinkId="2" />
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <ShakebarmanagerNavbar />
        </div>
        <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
          <Typography
            variant="h4"
            style={{
              fontWeight: 700,
              marginTop: "5rem",
              textAlign: "left",
              marginBottom: "2rem",
            }}
          >
            Items
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8} md={4}>
                <Item style={{ marginRight: "50px" }}>
                  <img
                    style={{
                      marginLeft: "30px",
                      height: "350px",
                      marginTop: "70px",
                      backgroundColor: "#FFFFFF",
                    }}
                    src={Addnew}
                    alt="Example"
                  />
                </Item>
              </Grid>

              <Grid item xs={10} md={6}>
                <Item>
                  <form>
                    <Box sx={{display:"flex", marginTop:"5%", marginLeft:"3%", justifyContent:"space-between"}}>
                      <InputLabel sx={{marginRight:"4%", marginTop:"1%"}}>Item Name:</InputLabel>
                      <TextField type="text" inputProps={{style: {height: 1, width:350,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                    </Box>
                    
                    <Box sx={{display:"flex", marginTop:"5%", marginLeft:"3%", justifyContent:"space-between"}}>
                      <InputLabel sx={{marginRight:"4%", marginTop:"1%"}}>Unit Price:</InputLabel>
                      <TextField type="text" inputProps={{style: {height: 1, width:350,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                    </Box>

                    <Box sx={{display:"flex", marginTop:"5%", marginLeft:"3%", justifyContent:"space-between"}}>
                      <InputLabel sx={{marginRight:"4%", marginTop:"1%"}}>Category:</InputLabel>
                      <Select style= {{height:38, width:378,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}>
                        <MenuItem value="supplement">Supplement</MenuItem>
                        <MenuItem value="protein">Protein</MenuItem>
                        <MenuItem value="blue">Blue</MenuItem>
                      </Select>
                    </Box>
                   
                    <Box sx={{display:"flex", marginTop:"5%", marginLeft:"3%", justifyContent:"space-between"}}>
                      <InputLabel sx={{marginRight:"4%", marginTop:"1%"}}>Quantity:</InputLabel>
                      <TextField type="text" inputProps={{style: {height: 1, width:350,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                    </Box>
                    
                    <Box sx={{display:"flex", marginTop:"5%", marginLeft:"3%", justifyContent:"space-between"}}>
                      <InputLabel sx={{marginRight:"4%", marginTop:"1%"}}>Description:</InputLabel>
                      <TextField type="text" inputProps={{style: {height: 1, width:350,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                    </Box>
                    <Box sx={{display:"flex", marginTop:"15%", justifyContent:"center"}}>
                      <Button variant="contained" sx={{marginRight:"10%", width:"20%"}}>Add</Button>
                      <Button onClick={handleCancelClick} variant="contained" sx={{ width:"20%", backgroundColor:"#E74C3C", "&:hover": { backgroundColor: "#E74C3C",color: "white",},}}>
                        Cancel
                      </Button>
                    </Box>
                    
                  </form>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddnewItem;
