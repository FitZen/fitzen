import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {Typography,Grid,Paper,Button,InputLabel, TextField,Select,} from "@mui/material";
import Addnew from "../../assets/Shakebarmanager/addnew.png";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import ShakebarmanagerSidebar from "../../components/ShakebarmanagerSidebar";
import ShakebarmanagerNavbar from "../../components/ShakebarmanagerNavbar";
import MenuItem from "@mui/material/MenuItem";
import Swal from "sweetalert2";
import axios from 'axios';

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

  const [newItem, setNewItem] = useState({
    name: "",
    availble_count: "",
    unit_price: "",
    category: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [item, setItem] = React.useState('');

  const handleChange = (event) => {
    setItem(event.target.value);
  };

 
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


    //get form inputs
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    };
  
    const handleSubmit = async () => {
  
      if (!newItem.name || !newItem.availble_count || !newItem.unit_price || !newItem.category || !newItem.description) {
        // Display error messages or styles for empty fields
        setSubmitted(true);
        return;
      }  
  
      try {
        const payload = {
          name: newItem.name,
          availble_count: newItem.availble_count,
          unit_price:newItem.unit_price,
          category:newItem.category,
          description:newItem.description,
          userID: JSON.parse(localStorage.getItem('userID')),
        };
  
        const res = await axios.post(
          "http://localhost:8000/api/shakebarItems/addshakebaritem",
          payload
        );
    
        if (res.status === 201) {
          // handleClose(); // Close the modal
          // viewAnnouncement(); // Refresh the announcement list
          setNewItem({name: "",availble_count: "",unit_price: "",category: "",description: "" }); // Clear the form
          setSubmitted(false);
        }
  
        Swal.fire({
          icon: 'success',
          name: 'Item added successfully',
          showConfirmButton: false,
          timer: 1500
        })
  
      } catch (error) {
        console.error("Adding item failed:", error);
        // Handle error scenarios here
      }
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

          <Box sx={{ flexGrow: 1, width:"100%"}}>
            <Grid container spacing={2}>
              <Grid item xs={8} md={4}>
                <Item style={{ marginRight: "50px" }}>
                  <img
                    style={{
                      marginLeft: "60px",
                      height: "350px",
                      marginTop: "70px",
                      backgroundColor: "#FFFFFF",
                    }}
                    src={Addnew}
                    alt="Example"
                  />
                </Item>
              </Grid>

              <Grid item xs={10} md={6} sx={{padding:"1%"}}>
                <Item sx={{padding:"1%"}}>
                  <form>
                    <Box sx={{display:"flex", marginTop:"5%", justifyavailble_count:"space-between", marginLeft:"10%"}}>
                      <InputLabel sx={{marginRight:"5%", marginTop:"1%"}}>Item Name:</InputLabel>
                      <TextField type="text" style={{marginRight:"3%"}} name="name" value={newItem.name} onChange={handleInputChange} error={submitted && !newItem.name} helperText={submitted && !newItem.name ? "Name is required" : ""} inputProps={{style: {height: 1, width:350,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                    </Box>
                    
                    <Box sx={{display:"flex", marginTop:"5%", marginLeft:"10%"}}>
                      <InputLabel sx={{marginRight:"6%", marginTop:"1%"}}>Unit Price:</InputLabel>
                      <TextField type="text" style={{marginRight:"3%"}} name="unit_price" value={newItem.unit_price} onChange={handleInputChange} error={submitted && !newItem.unit_price} helperText={submitted && !newItem.unit_price ? "Unit price is required" : ""} inputProps={{style: {height: 1, width:350,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                    </Box>

                    <Box sx={{display:"flex", marginTop:"5%", marginLeft:"10%", marginRight:"2%", justifyavailble_count:"space-between"}}>
                      <InputLabel sx={{marginRight:"6.5%", marginTop:"1%"}}>Category:</InputLabel>
                      <Select name="category" value={newItem.category} onChange={handleInputChange} error={submitted && !newItem.category} helperText={submitted && !newItem.category ? "Category is required" : ""} style= {{height:38, width:378,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}>
                        <MenuItem value="supplement">Supplement</MenuItem>
                        <MenuItem value="protein">Protein</MenuItem>
                        <MenuItem value="blue">Blue</MenuItem>
                      </Select>
                    </Box>
                   
                    <Box sx={{display:"flex", marginTop:"5%", marginLeft:"10%", marginRight:"2%", justifyavailble_count:"space-between"}}>
                      <InputLabel sx={{marginRight:"7%", marginTop:"1%"}}>Quantity:</InputLabel>
                      <TextField type="text" name="availble_count" value={newItem.availble_count} onChange={handleInputChange} error={submitted && !newItem.availble_count} helperText={submitted && !newItem.availble_count ? "Quantity is required" : ""} inputProps={{style: {height: 1, width:350,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                    </Box>
                    
                    <Box sx={{display:"flex", marginTop:"5%", marginLeft:"10%", marginRight:"2%", justifyavailble_count:"space-between"}}>
                      <InputLabel sx={{marginRight:"3.5%", marginTop:"1%"}}>Description:</InputLabel>
                      <TextField type="text" name="description" value={newItem.description} onChange={handleInputChange} error={submitted && !newItem.description} helperText={submitted && !newItem.description ? "Description is required" : ""} inputProps={{style: {height: 1, width:350,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                    </Box>
                    <Box sx={{display:"flex", marginTop:"15%", justifyavailble_count:"center"}}>
                      <Button onClick={handleCancelClick} variant="contained" sx={{marginRight:"10%",marginLeft:"25%", width:"20%"}}>Add</Button>
                      <Button onClick={handleSubmit} variant="contained" sx={{ width:"20%", backgroundColor:"#E74C3C", "&:hover": { backgroundColor: "#E74C3C",color: "white",},}}>
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
