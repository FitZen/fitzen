import React, { useState,useEffect } from 'react';
import Box from "@mui/material/Box";
import {Typography,Tabs,Tab,Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Paper,Button} from '@mui/material';
import ShakebarmanagerSidebar from "../../components/ShakebarmanagerSidebar";
import ShakebarmanagerNavbar from "../../components/ShakebarmanagerNavbar";
import { useNavigate } from "react-router-dom";

const Orders = () => {


  const [fixedNavbar, setFixedNavbar] = useState(false);
  const navigate = useNavigate();

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

    const [value, setValue] = useState(0);
    const [pendingItems, setPendingItems] = useState([
      { orderId: 1, itemName: 'Item 1', quantity: 2, totalPrice: 10000, orderedDate: '2023-08-10' },
      { orderId: 2, itemName: 'Item 2', quantity: 3, totalPrice: 6150, orderedDate: '2023-08-12' },
      { orderId: 3, itemName: 'Item 6', quantity: 5, totalPrice: 3150, orderedDate: '2023-08-12' }, 
      { orderId: 4, itemName: 'Item 6', quantity: 2, totalPrice: 33100, orderedDate: '2023-08-10' },
      { orderId: 5, itemName: 'Item 5', quantity: 3, totalPrice: 2150, orderedDate: '2023-08-12' },
      { orderId: 6, itemName: 'Item 2', quantity: 5, totalPrice: 7150, orderedDate: '2023-08-12' },
      { orderId: 4, itemName: 'Item 6', quantity: 2, totalPrice: 33100, orderedDate: '2023-08-10' },
      { orderId: 5, itemName: 'Item 5', quantity: 3, totalPrice: 2150, orderedDate: '2023-08-12' },
      { orderId: 6, itemName: 'Item 2', quantity: 5, totalPrice: 7150, orderedDate: '2023-08-12' },
      { orderId: 4, itemName: 'Item 6', quantity: 2, totalPrice: 33100, orderedDate: '2023-08-10' },
      { orderId: 5, itemName: 'Item 5', quantity: 3, totalPrice: 2150, orderedDate: '2023-08-12' },
      { orderId: 6, itemName: 'Item 2', quantity: 5, totalPrice: 7150, orderedDate: '2023-08-12' },
    ]);
    const [completedItems, setCompletedItems] = useState([
        { orderId: 1, itemName: 'Item 1', quantity: 2, totalPrice: 10000, orderedDate: '2023-08-10',issuedDate:'2023-08-15' },
        { orderId: 2, itemName: 'Item 2', quantity: 3, totalPrice: 6150, orderedDate: '2023-08-12',issuedDate:'2023-08-15' },
        { orderId: 3, itemName: 'Item 6', quantity: 5, totalPrice: 3150, orderedDate: '2023-08-12',issuedDate:'2023-08-15' }, 
        { orderId: 4, itemName: 'Item 6', quantity: 2, totalPrice: 33100, orderedDate: '2023-08-10',issuedDate:'2023-08-15' },
        { orderId: 5, itemName: 'Item 5', quantity: 3, totalPrice: 2150, orderedDate: '2023-08-12' ,issuedDate:'2023-08-15'},
        { orderId: 6, itemName: 'Item 2', quantity: 5, totalPrice: 7150, orderedDate: '2023-08-12',issuedDate:'2023-08-15' },
    ]);
    const [canceledItems, setCanceledItems] = useState([
        { orderId: 3, itemName: 'Item 6', quantity: 5, totalPrice: 3150, orderedDate: '2023-08-12',canceledDate:'2023-08-15' }, 
        { orderId: 4, itemName: 'Item 6', quantity: 2, totalPrice: 33100, orderedDate: '2023-08-10',canceledDate:'2023-08-15' },
        { orderId: 5, itemName: 'Item 5', quantity: 3, totalPrice: 2150, orderedDate: '2023-08-12' ,canceledDate:'2023-08-15'},
    ]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleDone = (item) => {
      // Remove the item from the pendingItems array
      setPendingItems((prevPendingItems) =>
        prevPendingItems.filter((pendingItem) => pendingItem.orderId !== item.orderId)
      );
  
      // Add the item to the completedItems array
      setCompletedItems((prevCompletedItems) => [...prevCompletedItems, item]);
    };
    
    const renderTable = (data) => {
        return (

          
 <Box sx={{ display: "flex", width: "96%", height: "60%", backgroundColor: "#E5E8E8", padding: "0.3rem", borderRadius: "10px", marginBottom: "2rem", marginTop: "1.5rem" }}>
            <Box sx={{ display: "flex", height: "60vh", flexWrap: "wrap", overflowY: "auto", width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "1rem", margin: "0.1rem" }}>
            <TableContainer component={Paper} style={{ fontSize: '15px',width:'95%',marginLeft:'2rem'}}>
            <Table >
              <TableHead style={{}}>
                <TableRow>
                  <TableCell style={{ fontSize: '15px',fontWeight: '700' }}><b>Order Id</b></TableCell>
                  <TableCell style={{ fontSize: '15px' }}><b>Item Name</b></TableCell>
                  <TableCell style={{ fontSize: '15px' }}><b>Quantity</b></TableCell>
                  <TableCell style={{ fontSize: '15px' }}><b>Total Price(LKR)</b></TableCell>
                  <TableCell style={{ fontSize: '15px' }}><b>Ordered Date</b></TableCell>
                  {value === 1 && <TableCell style={{ fontSize: '15px' }}><b>Issued Date</b></TableCell>}
                  {value === 0 && <TableCell style={{ fontSize: '15px' }}></TableCell>}
                </TableRow>
              </TableHead>
              <TableBody style={{ backgroundColor: '#F5F5F5' }}>
                {data.map((item) => (
                  <TableRow key={item.orderId}>
                    <TableCell style={{ fontSize: '14px' }}>{item.orderId}</TableCell>
                    <TableCell style={{ fontSize: '14px' }}>{item.itemName}</TableCell>
                    <TableCell style={{ fontSize: '14px' }}>{item.quantity}</TableCell>
                    <TableCell style={{ fontSize: '14px' }}>{item.totalPrice}</TableCell>
                    <TableCell style={{ fontSize: '14px' }}>{item.orderedDate}</TableCell>
                    {value === 1 && <TableCell style={{ fontSize: '14px' }}>{item.issuedDate}</TableCell>}
                    {value === 0 && (
                      <TableCell style={{ fontSize: '14px' }}>
                        <Button variant="contained" color="primary" style={{backgroundColor:"#346E93" }} size="small" onClick={() => handleDone(item)}>
                          Done
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
