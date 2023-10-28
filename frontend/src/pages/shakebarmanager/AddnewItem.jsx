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
import axios from "axios";
import Swal from "sweetalert2";

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

  const[category, setCategory] = useState("");
  const[descError, setDescError] = useState(null);
  const[nameError, setNameError] = useState(null);
  const[priceError, setPriceError] = useState(null);
  const[quantityError, setQuantityError] = useState(null);
  const[newItem, setNewItem] = useState({
    itemName: "",
    price: "",
    quantity: "",
    description: "",
  })
  const[submitted, setSubmitted] = useState(false);

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Shake Bar Manager"')){
      navigate('/login');
    }
    
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {

    if(!newItem.itemName || !newItem.price || !newItem.quantity || !newItem.description){
      setSubmitted(true);
      return;
    }

    try {
      const payload = {
        name: newItem.itemName,
        category: category,
        description: newItem.description,
        price: newItem.price,
        available_count: newItem.quantity
      };
      const res = await axios.post("http://localhost:8000/api/shakebar/item", payload);

      if(res.status === 201){
        navigate("/shakebarmanager/items");
        setNewItem({itemName: "", price: "", quantity: "", description: ""});
        setCategory("");
        setSubmitted(false);
       
      }

      Swal.fire({
        icon: 'success',
        title: 'Item Added Successfully',
        showConfirmButton: false,
        timer: 1500
      })

    } catch (error) {
      console.error("Adding failed:", error);
      if(error.response.data.message === "Item already exists"){
        setNameError("Item already exists");
      }
      
      // Handle error scenarios here
    }
    
  }

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

              <Grid item xs={10} md={6} sx={{padding:"1%"}}>
                <Item sx={{padding:"1%"}}>
                  <form>
                    <Box sx={{display:"flex", marginTop:"4%", marginLeft:"3%", marginRight:"2%", justifyContent:"space-between"}}>
                      <InputLabel sx={{marginRight:"4%", marginTop:"1%"}}>Item Name:</InputLabel>
                      <TextField type="text" name="itemName" value={newItem.itemName} onChange={handleInputChange} error={(submitted && !newItem.itemName) || (submitted && nameError)} helperText={submitted && !newItem.itemName ? "Item name is required" : (submitted && nameError) ? nameError : ""} inputProps={{style: {height: 1, width:350,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                    </Box>
                    
                    <Box sx={{display:"flex", marginTop:"4%", marginLeft:"3%", marginRight:"2%", justifyContent:"space-between"}}>
                      <InputLabel sx={{marginRight:"4%", marginTop:"1%"}}>Unit Price:</InputLabel>
                      <TextField type="text" name="price" value={newItem.price} onChange={handleInputChange} error={(submitted && !newItem.price) || (submitted && priceError)} helperText={submitted && !newItem.price ? "Item price is required" : ""} inputProps={{style: {height: 1, width:350,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                    </Box>

                    <Box sx={{display:"flex", marginTop:"4%", marginLeft:"3%", marginRight:"2%", justifyContent:"space-between"}}>
                      <InputLabel sx={{marginRight:"4%", marginTop:"1%"}}>Category:</InputLabel>
                      <Select 
                        style= {{height:38, width:378,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        >
                          <MenuItem value="supplement">Supplement</MenuItem>
                          <MenuItem value="protein">Protein</MenuItem>
                          <MenuItem value="Snack">Shake</MenuItem>
                          <MenuItem value="Snack">Snack</MenuItem>
                      </Select>
                    </Box>
                   
                    <Box sx={{display:"flex", marginTop:"4%", marginLeft:"3%", marginRight:"2%", justifyContent:"space-between"}}>
                      <InputLabel sx={{marginRight:"4%", marginTop:"1%"}}>Quantity:</InputLabel>
                      <TextField type="text" name="quantity" value={newItem.quantity} onChange={handleInputChange} error={(submitted && !newItem.quantity) || (submitted && quantityError)} helperText={submitted && !newItem.quantity ? "Item quantity is required" : ""} inputProps={{style: {height: 1, width:350,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                    </Box>
                    
                    <Box sx={{display:"flex", marginTop:"4%", marginLeft:"3%", marginRight:"2%", justifyContent:"space-between"}}>
                      <InputLabel sx={{marginRight:"4%", marginTop:"1%"}}>Description:</InputLabel>
                      <TextField type="text" name="description" value={newItem.description} onChange={handleInputChange} error={(submitted && !newItem.description) || (submitted && descError)} helperText={submitted && !newItem.description ? "Item description is required" : ""} inputProps={{style: {height: 1, width:350,border:"1px solid D8D9DA", borderRadius:"5px", outline:"none"}}}/>
                    </Box>
                    <Box sx={{display:"flex", marginTop:"5%", justifyContent:"center"}}>
                      <Button
                        variant="contained"
                        style={{
                          fontSize: "17px",
                          width: "100px",
                          marginLeft: "15px",
                          backgroundColor: "#346E93",
                          marginRight: "30px",
                          marginTop: "30px",
                          color: "#ffffff"
                      }}
                      onClick={handleSubmit}
                      >
                        Add
                      </Button>
                      <Button
                        variant="contained"
                        onClick={handleCancelClick}
                        style={{
                          fontSize: "17px",
                          width: "120px",
                          backgroundColor: "#CD0808",
                          marginTop: "30px",
                          color: "#ffffff"
                        }}
                      >
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
