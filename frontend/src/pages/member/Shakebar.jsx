import React, { useState, useEffect} from "react";
import Box from "@mui/material/Box";
import { Typography, Select, MenuItem, Button, InputLabel, TextField, FormControl, IconButton } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Modal from '@mui/material/Modal';
import {FaRegTimesCircle, FaPlus, FaMinus} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios';


const Shakebar = () => {
  // State to store the selected item from the Select component
  const [item, setItem] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openCart, setOpenCart] = React.useState(false);
  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);
  const [count, setCount] = React.useState(0);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => {
    if (selectedItem) {
      // Find the item in the cart
      const existingCartItem = cartItems.find((cartItem) => cartItem.id === selectedItem.id);

      if (existingCartItem) {
        // Update the quantity if the item already exists in the cart
        existingCartItem.quantity += count;
        setCartItems([...cartItems]);
      }
      else if(count === 0){
        setCartItems([...cartItems]);
      }
      else {
        // Add a new item to the cart
        setCartItems([...cartItems, { id: selectedItem.id, name: selectedItem.name, quantity: count, price: selectedItem.price, image: selectedItem.image }]);
      }

      // Reset the count
      setCount(0);

      // Close the cart modal
      //console.log("Cart Items: ", cartItems);
      //handleCloseCart();
      handleClose();
    }
  };
  

  const handleBuyClick = (itemData) => {
    setSelectedItem(itemData);
    handleOpen(); // Open the modal to display item details
  };

  // function increment() {
  //   setCount(prevCount => prevCount + 1);
  // }

  function increment() {
    if (selectedItem && count < selectedItem?.available_count && count < 3) {
      setCount(prevCount => prevCount + 1);
    }
  }
  

  function decrement() {
    setCount(prevCount => {

      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  }


  const [fixedNavbar, setFixedNavbar] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Virtual Member"' && localStorage.getItem('userType') !== '"Physical Member"')){
      navigate('/login');
    }

    getAllShakebarItems();

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

  const getAllShakebarItems = async () => {
    
    try {
      const response = await axios.get("http://localhost:8000/api/shakebar/items");
      console.log("response : ", response.data.data);
      setItems(response.data.data);
    } catch (error) {
      console.error("error : ", error.message);
    }
  };

  const color1 = "#102B4C" //dark blue
  const color2 = "#346E93" //light blue
  const color3 = "#96CDEF" //lighter blue

  const modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: "35%",
      bgcolor: 'background.paper',
      borderRadius: '10px',
      boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
      p: 4,
    };

    const modalCartStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height: "70%",
      width: "45%",
      bgcolor: 'background.paper',
      borderRadius: '10px',
      boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
      p: 4,
    };

  // Event handler for handling the Select component's value change
  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const submitPayment = async () => {

    const reqData = {
      userID : JSON.parse(localStorage.getItem('userID')),
      totalAmount : cartItems.reduce((a, b) => a + (b.price*b.quantity), 0),
      cartItems : cartItems,
    };

    console.log("reqData : ", reqData);

    try{
      const response = await axios.post("http://localhost:8000/api/checkout/shakebar-order", reqData);
      //console.log("response : ", response.data.url);
      // setCartItems([]);
      // handleCloseCart();
      // console.log("response : ", response.data.url);
      window.location.href = response.data.url;

    } catch (error) {
      console.error("error : ", error);

    }

  };

  return (
    <Box sx={{ flex: "1", display: "flex", mb: 2 }}>
      {/* Sidebar */}
      <Box>
        <Sidebar sidebarLinkId = "5"/>
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        {/* Navbar */}
        <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <Navbar />
        </div>

        {/* Main content */}
        <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
          {/* Heading */}
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem", textAlign: "left" }}>
            Shakebar
          </Typography>

          {/* Select component */}
          <Box sx={{ display: "flex", marginTop: "1rem" }}>
            {/* <FormControl style={{ width: "15%" }}>
              <InputLabel id="demo-simple-select-label">All</InputLabel>
              <Select
                style={{ height: "75%" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={item}
                label="All"
                onChange={handleChange}
              >
                <MenuItem value={10}>Vitamins</MenuItem>
                <MenuItem value={20}>Proteins</MenuItem>
                <MenuItem value={30}>Shakes</MenuItem>
              </Select>
            </FormControl> */}
            <Button variant="contained" onClick={handleOpenCart} size="small" style={{height:"15%", marginLeft:"88%", backgroundColor:color2, color:"#ffffff", fontWeight: 700}}>View Cart</Button>
          </Box>

          {/* Item boxes */}
          <Box sx={{ display: "flex", width: "96%", height: "70%", backgroundColor: "#E5E8E8", padding: "0.3rem", borderRadius: "10px", marginBottom: "2rem", marginTop: "1.5rem" }}>
            <Box sx={{ display: "flex", height: "82vh", flexWrap: "wrap", overflowY: "auto", width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "1rem", margin: "0.1rem" }}>
              {/* Map over the data array to generate Box components */}
              {items.map((itemData) => (
                <Box
                  key={itemData.id}
                  sx={{
                    width: "22%",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70%",
                    cursor: "pointer",
                    border: "2px solid white",
                    borderRadius: "10px",
                    padding: "1rem",
                    marginRight: "3%",
                    marginBottom: "1%",
                    boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                    "&:hover": { borderColor: "#96CDEF", transition: "ease 0.5s" },
                  }}
                >
                  <img src={(itemData?.image) ? `http://localhost:3000/Shakebar/${itemData?.image}` : 'http://localhost:3000/Shakebar/item.jpg'} alt="item" style={{ width: "85%", height: "65%" }} />
                  <Typography variant="body1" style={{ fontWeight: 700 }}>
                    {itemData.name}
                  </Typography>
                  <Typography variant="body1" style={{ fontWeight: 600 }}>
                    {itemData.price}
                  </Typography>
                  <Typography variant="body2" style={{ fontWeight: 700, color: itemData.available_count > 0 ? 'green' : 'red' }}>
                    {itemData.available_count > 0 ? "In Stock" : "Out of Stock"}
                  </Typography>
                  <Button variant="contained"  disabled={itemData.available_count <= 0} key={itemData.id} onClick={() => handleBuyClick(itemData)} style={{ backgroundColor: "#96CDEF", color: "black", fontWeight: "700", width: "50%" }}>
                    Buy
                  </Button>
                  
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
          <Box sx={modalStyle}>
              <FaRegTimesCircle onClick={handleClose} style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA" ,}}  
                  onMouseEnter={(e) => {
                      e.target.style.color = "#D71313";
                      e.target.style.transform = "scale(1)";
                  }}
                  onMouseLeave={(e) => {
                      e.target.style.color = "#D8D9DA";
                      e.target.style.transform = "scale(1)";
                  }}
              />
              <Box sx={{display:"flex", textAlign:"center", justifyContent:"center"}}>
                  
                  <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight="700" textAlign="center">
                      {selectedItem?.name}
                  </Typography>
              </Box>
              
              <Box sx={{textAlign:"center", padding:"1%", justifyContent:"center"}}>
                  <Box sx={{display:"flex", height:"40vh"}}>
                    <Box>
                      <img src={(selectedItem?.image) ? `http://localhost:3000/Shakebar/${selectedItem?.image}` : `http://localhost:3000/Shakebar/item.jpg`} alt="item" style={{width:"100%", height:"100%", objectFit:"cover"}}/>
                    </Box>
                    <Box sx={{marginTop:"10%"}}>
                      <Typography variant="body1"  textAlign="left"><span style={{fontWeight:"600"}}>Price:</span> {selectedItem?.price}</Typography><br />
                      <Typography variant="body1" textAlign="left">
                        <span style={{fontWeight:"600"}}>Description:</span>  {selectedItem?.description}
                      </Typography><br />
                      <Typography variant="body1" textAlign="left"><span style={{fontWeight:"600"}}>Stock: </span> {selectedItem?.available_count > 0 ? "In Stock" : "Out of Stock"}</Typography><br />
                      <Typography variant="body1" textAlign="left"><span style={{fontWeight:"600"}}>Quantity: &nbsp;
                        <IconButton size="small" onClick={decrement} aria-label="minus" style={{border:"1px solid"}}>
                          <FaMinus />
                        </IconButton>
                        <Typography variant="body1" textAlign="center" style={{display:"inline-block", width:"10%"}}>{count}</Typography>
                        <IconButton size="small" onClick={increment} aria-label="plus" style={{border:"1px solid"}}>
                          <FaPlus />
                        </IconButton>
                        
                      </span> </Typography>
                    </Box>
                  </Box>
                  
                 
                  <Button variant="contained" onClick={handleAddToCart} style={{backgroundColor:color2, color:"white", marginTop:"7%", marginBottom:"1%"}}><AddShoppingCartIcon/>&nbsp;&nbsp;Add to Cart</Button>
                
              </Box>
              
          </Box>
      </Modal>
      <Modal
          open={openCart}
          onClose={handleCloseCart}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
          <Box sx={modalCartStyle}>
              <FaRegTimesCircle onClick={handleCloseCart} style={{float:"right", cursor:"pointer", fontSize:"1.5rem", color:"#D8D9DA" ,}}  
                  onMouseEnter={(e) => {
                      e.target.style.color = "#D71313";
                      e.target.style.transform = "scale(1)";
                  }}
                  onMouseLeave={(e) => {
                      e.target.style.color = "#D8D9DA";
                      e.target.style.transform = "scale(1)";
                  }}
              />
              <Box sx={{display:"flex", textAlign:"center", justifyContent:"center"}}>
                  
                  <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight="700" textAlign="center">
                      Your Cart
                  </Typography>
              </Box>
              
              <Box sx={{textAlign:"center", padding:"1%", justifyContent:"center"}}>
                  <Box sx={{overflowY:"auto", height:"20rem", padding:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}> 
                    {cartItems.map((cartItem) =>  ( 
                        <Box key={cartItem.id} sx={{margin:"0.5%", marginBottom:"2%", display:"flex", height:"40%", borderRadius:"5px", borderColor: '#96CDEF', boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}}>
                          <img src={`http://localhost:3000/Shakebar/${cartItem.image}`} alt="item" style={{width:"15%", height:"90%", objectFit:"cover", margin:"1%"}}/>
                          <Box sx={{margin:"1%", marginLeft:"5%", width:"50%"}}>
                            <Typography variant="body1" style={{marginTop:"4%"}}  textAlign="left"><span style={{fontWeight:"600"}}>Name:</span> {cartItem.name}</Typography>
                            <Typography variant="body1" style={{marginTop:"4%"}}  textAlign="left"><span style={{fontWeight:"600" }}>Price:</span> {cartItem.price}</Typography>
                            <Typography variant="body1" style={{marginTop:"4%"}} textAlign="left"><span style={{fontWeight:"600" }}>Quantity:</span> {cartItem.quantity}</Typography>
                          </Box>
                          <Box sx={{marginLeft:"1%", marginTop:"3%"}}>
                      
                            <Typography variant="body1" textAlign="left"><span style={{fontWeight:"600"}}>Sub Total:</span> {(cartItem.price)*(cartItem.quantity)}.00</Typography><br />
                          </Box>
                      </Box>
                    ))}
                    
                   
                  </Box>
                  
                  <Box sx={{marginTop:"2%", marginBottom:"1%", display:"flex", height:"40%", borderRadius:"5px", backgroundColor:"#D8D9DA", justifyContent:"space-between"}}>
                      <Typography variant="body1"  textAlign="left" style={{marginLeft:"1%"}}><span style={{fontWeight:"600"}}>Total Items:</span> {cartItems.reduce((a, b) => a + (b.quantity), 0)}</Typography><br /> 
                      <Typography variant="body1"  textAlign="left" style={{marginLeft:"33%"}}><span style={{fontWeight:"600"}}>Total:</span> {cartItems.reduce((a, b) => a + (b.price*b.quantity), 0)}.00</Typography><br />
                  </Box>
                 
                  <Button variant="contained" onClick={submitPayment} style={{backgroundColor:color2, color:"white", marginTop:"5%", marginBottom:"1%"}}><AddShoppingCartIcon/>&nbsp;&nbsp;Pay now</Button>
                
              </Box>
              
          </Box>
      </Modal>
    </Box>

    
  );
};

export default Shakebar;


