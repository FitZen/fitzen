import React, { useState,useEffect } from 'react';
import Box from "@mui/material/Box";
import {Typography,Tabs,Tab,Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Paper,Button} from '@mui/material';
import ShakebarmanagerSidebar from "../../components/ShakebarmanagerSidebar";
import ShakebarmanagerNavbar from "../../components/ShakebarmanagerNavbar";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Orders = () => {


  const [fixedNavbar, setFixedNavbar] = useState(false);
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState([]);


  const [pendingItems, setPendingItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);


  useEffect(() => {

    if((localStorage.getItem('userType') !== '"Shake Bar Manager"')){
      navigate('/login');
    }
    
    viewOrder();
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

  const viewOrder = async () => {
    
    try {
     
      const res = await axios.get("http://localhost:8000/api/shakebar/orders");
      console.log("data under axios",res.data.data);
      setOrderData(res.data.data);

      // Perform any additional actions after successful logout, such as clearing local storage, redirecting, etc.
    } catch (error) {
      console.error("Retrieving failed:", error);
      // Handle error scenarios here
    }
  };

  

    const [value, setValue] = useState(0);
    useEffect(() => {
      setPendingItems(orderData.filter(order => order.status === 'Pending'));
      setCompletedItems(orderData.filter(order => order.status === 'Closed'));
    }, [orderData]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleDone = (row) => {
      // Remove the item from the pendingItems array
      setPendingItems((prevPendingItems) =>
        prevPendingItems.filter((pendingItem) => pendingItem.orderId !== row.orderId)
      );
  
      // Add the item to the completedItems array
      setCompletedItems((prevCompletedItems) => [...prevCompletedItems, row]);
    };
    
    const renderTable = () => {
        return (

          
 <Box sx={{ display: "flex", width: "96%", height: "60%", backgroundColor: "#E5E8E8", padding: "0.3rem", borderRadius: "10px", marginBottom: "2rem", marginTop: "1.5rem" }}>
            <Box sx={{ display: "flex", height: "60vh", flexWrap: "wrap", overflowY: "auto", width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "1rem", margin: "0.1rem" }}>
            <TableContainer component={Paper} style={{ fontSize: '15px',width:'95%',marginLeft:'2rem'}}>
            <Table >
              <TableHead style={{}}>
                <TableRow>
                  <TableCell style={{ fontSize: '15px',fontWeight: '700' }}><b>Order Id</b></TableCell>
                  <TableCell style={{ fontSize: '15px' }}><b>Total Amount</b></TableCell>
                  <TableCell style={{ fontSize: '15px' }}><b>Placed On</b></TableCell>
                  <TableCell style={{ fontSize: '15px' }}><b>Placed By</b></TableCell>
                  {/* <TableCell style={{ fontSize: '15px' }}><b>Total Price(LKR)</b></TableCell>
                  <TableCell style={{ fontSize: '15px' }}><b>Ordered Date</b></TableCell> */}
                  {/* {value === 1 && <TableCell style={{ fontSize: '15px' }}><b>Issued Date</b></TableCell>} */}
                  {value === 0 && <TableCell style={{ fontSize: '15px' }}></TableCell>}
                </TableRow>
              </TableHead>
              <TableBody style={{ backgroundColor: '#F5F5F5' }}>
                {orderData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell style={{ fontSize: '14px' }}>{row.id}</TableCell>
                    <TableCell style={{ fontSize: '14px' }}>{row.total_amount}</TableCell>
                    <TableCell style={{ fontSize: '14px' }}>{row.placed_on}</TableCell>
                    <TableCell style={{ fontSize: '14px' }}>{row.placed_by}</TableCell>
                    {/* <TableCell style={{ fontSize: '14px' }}>{row.totalPrice}</TableCell>
                    <TableCell style={{ fontSize: '14px' }}>{row.orderedDate}</TableCell> */}
                    {/* {value === 1 && <TableCell style={{ fontSize: '14px' }}>{row.issuedDate}</TableCell>} */}
                    {value === 0 && (
                      <TableCell style={{ fontSize: '14px' }}>
                        <Button variant="contained" color="primary" style={{backgroundColor:"#346E93" }} size="small" onClick={() => handleDone(row)}>
                          Completed
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
            </Box>
          </Box>
         
        );
      };


  

    return (
        <Box sx={{ flex: "1", display:"flex", mb:2}}>
        <Box>
          <ShakebarmanagerSidebar sidebarLinkId = "3"/>
        </Box>
        
        <Box component="main" sx={{flex:1 }}>
        <div
          className={`navbar ${fixedNavbar ? "fixed" : ""}`}
          style={{ width: "100%" }}
        >
          <ShakebarmanagerNavbar />
        </div>
          <Box sx={{ paddingLeft:"5rem", flex:1 }}>
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: "5rem",marginBottom:'2rem', textAlign:"left" }}>Orders</Typography>
              
     
        <div>
          <Tabs style={{ backgroundColor: '#D7D7D7'  ,marginRight:'4rem',position:'sticky'}} value={value} onChange={handleChange}>
            <Tab style={{ fontSize: '15px', margin: '0 250px 0 100px',fontWeight: '700' }} label="Pending" />
            <Tab style={{ fontSize: '15px', marginRight: '250px',fontWeight: '700' }} label="Completed" />
          </Tabs>
          {value === 0 && renderTable(pendingItems)}
          {value === 1 && renderTable(completedItems)}
        </div>
          
          </Box>
        </Box>
       
      </Box>  
     
    );

};

export default Orders;     