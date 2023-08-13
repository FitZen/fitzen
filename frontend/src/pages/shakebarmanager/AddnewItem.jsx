import  { useState } from 'react';
import Box from "@mui/material/Box";
import {Typography,Grid,Paper,Button} from '@mui/material';
import Addnew from '../../assets/Shakebarmanager/addnew.png';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ShakebarmanagerSidebar from "../../components/ShakebarmanagerSidebar";
import ShakebarmanagerNavbar from "../../components/ShakebarmanagerNavbar";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF' : '#FFFFFF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    height:'500px',
    borderRadius:'15px',
   
  }));

const AddnewItem = () => {
  
  const navigate = useNavigate();

  const clickCancle=()=>{
    navigate('/shakebarmanager/items'); 
  };

    return (
        <Box sx={{ flex: "1", display:"flex", mb:2}}>
        <Box>
          <ShakebarmanagerSidebar />
        </Box>
        
        <Box component="main" sx={{flex:1 }}>
          <Box>
            <ShakebarmanagerNavbar />
          </Box>
          <Box sx={{ paddingLeft:"5rem", flex:1 }}>
          <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" ,marginBottom:'2rem'}}>Items</Typography>
            
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item xs={8} md={4} >
          <Item style={{marginRight:'50px'}} >
              <img style={{marginLeft:'30px',height:'350px',marginTop:'70px',backgroundColor:'#FFFFFF'}}src={Addnew} alt="Example" /> 
          </Item>
        </Grid>

        <Grid item xs={10} md={6}>
          <Item>
            <form  style={{fontSize:'20px',marginLeft: '100px',lineHeight:'2.5em',marginTop:'100px'}}>
                <label style={{marginRight:'60px'}}>Item Name:</label><input  style={{fontSize:'20px'}} type="text" /><br />
                <label style={{marginRight:'70px'}}>Unit Price:</label><input  type="text" style={{fontSize:'20px'}}/><br />
                <label style={{marginRight:'78px'}}>Category:</label>
                            <select style={{fontSize:'20px'}} >
                    <option value="suppliment">Suppliment</option>
                    <option value="green">Protine</option>
                    <option value="blue">Blue</option>
                  </select>
                <br />
                <label style={{marginRight:'82px'}}>Quantity:</label><input type="text" style={{fontSize:'20px'}}/><br />
                <label style={{marginRight:'55px'}}>Description:</label><input type="text" style={{fontSize:'20px',marginBottom:'70px'}}/><br />
                <Button
            variant="contained"
            style={{
              fontSize: '17px',
              width: '100px',
              marginLeft: '100px',
              backgroundColor: "#346E93" ,
              marginRight: '30px',
              color: '#ffffff'
            }}
          >
            Add
          </Button>
          <Button onClick={clickCancle}
            variant="contained"
            style={{
              fontSize: '17px',
              width: '120px',
              backgroundColor: '#CD0808',
              color: '#ffffff'
            }}
          >
            Cancel
            </Button>
           </form>
       </Item>
        </Grid>
      </Grid>
    </Box>
              
          </Box>
        </Box>
       
      </Box>  );

};

export default AddnewItem;
