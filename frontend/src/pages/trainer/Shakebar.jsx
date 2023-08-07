import React, {useState} from "react";
import Box from "@mui/material/Box";
import { Typography,  Select, MenuItem, Button, InputLabel, FormControl} from "@mui/material";
import Sidebar from "../../components/TrainerSidebar";
import Navbar from "../../components/TrainerNavbar";


import item1 from "../../assets/images (3).jpg"
import item2 from "../../assets/images (2).jpg"
import item3 from "../../assets/images (4).jpg"
import item4 from "../../assets/kisspng-dietary-supplement-optimum-nutrition-serious-mass-nutrition-and-supplements-puregym-shop-5b63010863aca4.2335550215332149844083.jpg"
import item5 from "../../assets/images (5).jpg"
import item6 from "../../assets/images-9.jpg"
import item7 from "../../assets/5lb_Promasil_Choc__62208.webp"
import item8 from "../../assets/PS_NWUE_2.47lb_NEW-LOOK_Choc_Render_smaller_1c131a00-2144-43e6-b87b-1b5eeb2c29ab_grande.webp"


const TrainerShakebar = () => {

    const [item, setItem] = React.useState('');

    const handleChange = (event) => {
        setItem(event.target.value);
    };


    return (

        <Box sx={{ flex: "1", display:"flex", mb:2}}>
            <Box>
                <Sidebar />
            </Box>

            <Box component="main" sx={{flex:1 }}>
                <Box>
                    <Navbar />
                </Box>

                <Box sx={{ paddingLeft:"5rem", flex:1 }}>

                    <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Shakebar</Typography>

                    <Box sx={{display:"flex", marginTop:"1rem"}}>
                        <FormControl style={{width:"15%"}}>
                            <InputLabel id="demo-simple-select-label">All</InputLabel>
                            <Select
                                style={{height:"85%"}}
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
                        </FormControl>
                    </Box>

                    <Box sx={{display:"flex", width:"96%", height:"70%", backgroundColor:"#E5E8E8", padding:"0.3rem", borderRadius:"10px", marginBottom:"2rem", marginTop:"1.5rem"}}>
                        <Box sx={{display:"flex",height:"82vh", flexWrap: "wrap",overflowY:"auto", width:"100%", backgroundColor:"white", borderRadius:"10px", padding: "1rem", margin:"0.1rem"}}>

                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item1} alt="item" style={{width:"85%", height:"65%"}}></img>
                                <Typography variant="h6" style={{fontWeight: 700}}>Vitamin C</Typography>
                                <Typography variant="h6" style={{fontWeight: 500}}>Rs: 2300</Typography>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700", width: "50%"}}>Buy</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item2} alt="item"  style={{width:"85%", height:"65%"}}></img>
                                <Typography variant="h6" style={{fontWeight: 700}}>Vitamin C</Typography>
                                <Typography variant="h6" style={{fontWeight: 500}}>Rs: 2300</Typography>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700", width: "50%"}}>Buy</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item3} alt="item"  style={{width:"85%", height:"65%"}}></img>
                                <Typography variant="h6" style={{fontWeight: 700}}>Vitamin C</Typography>
                                <Typography variant="h6" style={{fontWeight: 500}}>Rs: 2300</Typography>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700", width: "50%"}}>Buy</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item4} alt="item"  style={{width:"60%", height:"65%"}}></img>
                                <Typography variant="h6" style={{fontWeight: 700}}>Vitamin C</Typography>
                                <Typography variant="h6" style={{fontWeight: 500}}>Rs: 2300</Typography>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700", width: "50%"}}>Buy</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item5} alt="item"  style={{width:"85%", height:"65%"}}></img>
                                <Typography variant="h6" style={{fontWeight: 700}}>Vitamin C</Typography>
                                <Typography variant="h6" style={{fontWeight: 500}}>Rs: 2300</Typography>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700", width: "50%"}}>Buy</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item6} alt="item"  style={{width:"85%", height:"65%"}}></img>
                                <Typography variant="h6" style={{fontWeight: 700}}>Vitamin C</Typography>
                                <Typography variant="h6" style={{fontWeight: 500}}>Rs: 2300</Typography>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700", width: "50%"}}>Buy</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item7} alt="item"  style={{width:"60%", height:"65%"}}></img>
                                <Typography variant="h6" style={{fontWeight: 700}}>Vitamin C</Typography>
                                <Typography variant="h6" style={{fontWeight: 500}}>Rs: 2300</Typography>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700", width: "50%"}}>Buy</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item8} alt="item"  style={{width:"85%", height:"65%"}}></img>
                                <Typography variant="h6" style={{fontWeight: 700}}>Vitamin C</Typography>
                                <Typography variant="h6" style={{fontWeight: 500}}>Rs: 2300</Typography>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700", width: "50%"}}>Buy</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item1} alt="item"  style={{width:"85%", height:"65%"}}></img>
                                <Typography variant="h6" style={{fontWeight: 700}}>Vitamin C</Typography>
                                <Typography variant="h6" style={{fontWeight: 500}}>Rs: 2300</Typography>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700", width: "50%"}}>Buy</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item1} alt="item"  style={{width:"85%", height:"65%"}}></img>
                                <Typography variant="h6" style={{fontWeight: 700}}>Vitamin C</Typography>
                                <Typography variant="h6" style={{fontWeight: 500}}>Rs: 2300</Typography>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700", width: "50%"}}>Buy</Button>
                            </Box>

                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item1} alt="item"  style={{width:"85%", height:"65%"}}></img>
                                <Typography variant="h6" style={{fontWeight: 700}}>Vitamin C</Typography>
                                <Typography variant="h6" style={{fontWeight: 500}}>Rs: 2300</Typography>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700", width: "50%"}}>Buy</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item1} alt="item"  style={{width:"85%", height:"65%"}}></img>
                                <Typography variant="h6" style={{fontWeight: 700}}>Vitamin C</Typography>
                                <Typography variant="h6" style={{fontWeight: 500}}>Rs: 2300</Typography>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700", width: "50%"}}>Buy</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item1} alt="item"  style={{width:"85%", height:"65%"}}></img>
                                <Typography variant="h6" style={{fontWeight: 700}}>Vitamin C</Typography>
                                <Typography variant="h6" style={{fontWeight: 500}}>Rs: 2300</Typography>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700", width: "50%"}}>Buy</Button>
                            </Box>
                            <Box sx={{width:"22%",textAlign:"center",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"3%", marginBottom:"1%", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#96CDEF',  transition: "ease 0.5s"}}}>
                                <img src={item1} alt="item"  style={{width:"85%", height:"65%"}}></img>
                                <Typography variant="h6" style={{fontWeight: 700}}>Vitamin C</Typography>
                                <Typography variant="h6" style={{fontWeight: 500}}>Rs: 2300</Typography>
                                <Button variant="contained" style={{backgroundColor:"#96CDEF", color:"black", fontWeight:"700", width: "50%"}}>Buy</Button>
                            </Box>



                        </Box>

                    </Box>


                </Box>



            </Box>

        </Box>


    );
};

export default TrainerShakebar;
