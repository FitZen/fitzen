import React, {useState} from "react";
import Box from "@mui/material/Box";
import { Typography,  Select, MenuItem, Button, InputLabel, FormControl} from "@mui/material";
import Rating from '@mui/material/Rating';

import item1 from "../../assets/Trainers/sab-qadeer-nP2UzV4liWQ-unsplash.jpg"
import item2 from "../../assets/Trainers/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg"
import item3 from "../../assets/Trainers/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg"
import item4 from "../../assets/Trainers/jake-nackos-IF9TK5Uy-KI-unsplash.jpg"
import item5 from "../../assets/Trainers/james-timothy-Kh3aTWwMH1I-unsplash.jpg"
import item6 from "../../assets/Trainers/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg"
import item7 from "../../assets/Trainers/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
import item8 from "../../assets/Trainers/roland-cousins-3GTHyh2lo9o-unsplash.jpg"
import item9 from "../../assets/Trainers/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg"
import item10 from "../../assets/Trainers/jd-mason-2oUiUu5QAys-unsplash.jpg"
import item11 from "../../assets/Trainers/tamarcus-brown-29pFbI_D1Sc-unsplash.jpg"
import item12 from "../../assets/Trainers/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg"



const Shakebar = () => {

    const [item, setItem] = React.useState('');

    const handleChange = (event) => {
        setItem(event.target.value);
    };


  return (
    <Box sx={{}}>
        <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left" }}>Instructors</Typography>

        <Box sx={{display:"flex", marginTop:"1rem"}}>
            <FormControl style={{width:"15%"}}>
                <InputLabel id="demo-simple-select-label">All</InputLabel>
                <Select
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
        
        <Box sx={{display:"flex", width:"95%", height:"70%", backgroundColor:"#E5E8E8", padding:"0.5rem", borderRadius:"10px", marginBottom:"2rem", marginTop:"2rem"}}>
            <Box sx={{display:"flex",height:"82vh", flexWrap: "wrap",overflowY:"auto", width:"100%", backgroundColor:"white", borderRadius:"10px", padding: "1.2rem", margin:"0.1rem"}}>
                <Box sx={{width:"22%",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"2.5em", marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#FFBF00',  transition: "ease 0.5s"}}}>
                    <img src={item1} alt="item" style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                    <Typography variant="h6" style={{fontWeight: 700}}>Mr. Jhonny</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Workouts for : Male only</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Mode : Onsite only</Typography>
                    <Rating name="read-only" value={4} readOnly /><br />
                    <Button variant="contained" style={{backgroundColor:"#FFBF00", color:"black", fontWeight:"700"}}>View Profile</Button>
                </Box>
                <Box sx={{width:"22%",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"2.5em", marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#FFBF00',  transition: "ease 0.5s"}}}>
                    <img src={item2} alt="item" style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                    <Typography variant="h6" style={{fontWeight: 700}}>Mr. Warne</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Workouts for : Both</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Mode : Onsite only</Typography>
                    <Rating name="read-only" value={4} readOnly /><br />
                    <Button variant="contained" style={{backgroundColor:"#FFBF00", color:"black", fontWeight:"700"}}>View Profile</Button>
                </Box>
                <Box sx={{width:"22%",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"2.5em", marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#FFBF00',  transition: "ease 0.5s"}}}>
                    <img src={item3} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                    <Typography variant="h6" style={{fontWeight: 700}}>Mrs. Jhonson</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Workouts for : Female only</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Mode : Onsite only</Typography>
                    <Rating name="read-only" value={4} readOnly /><br />
                    <Button variant="contained" style={{backgroundColor:"#FFBF00", color:"black", fontWeight:"700"}}>View Profile</Button>
                </Box>
                <Box sx={{width:"22%",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"2.5em", marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#FFBF00',  transition: "ease 0.5s"}}}>
                    <img src={item4} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                    <Typography variant="h6" style={{fontWeight: 700}}>Ms. Natalie</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Workouts for : Female only</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Mode : Onsite only</Typography>
                    <Rating name="read-only" value={4} readOnly /><br />
                    <Button variant="contained" style={{backgroundColor:"#FFBF00", color:"black", fontWeight:"700"}}>View Profile</Button>
                </Box>
                <Box sx={{width:"22%",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"2.5em", marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#FFBF00',  transition: "ease 0.5s"}}}>
                    <img src={item5} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                    <Typography variant="h6" style={{fontWeight: 700}}>Mr. Jhonny</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Workouts for : Male only</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Mode : Onsite only</Typography>
                    <Rating name="read-only" value={4} readOnly /><br />
                    <Button variant="contained" style={{backgroundColor:"#FFBF00", color:"black", fontWeight:"700"}}>View Profile</Button>
                </Box>
                <Box sx={{width:"22%",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"2.5em", marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#FFBF00',  transition: "ease 0.5s"}}}>
                    <img src={item6} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                    <Typography variant="h6" style={{fontWeight: 700}}>Mr. Jhonny</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Workouts for : Male only</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Mode : Onsite only</Typography>
                    <Rating name="read-only" value={4} readOnly /><br />
                    <Button variant="contained" style={{backgroundColor:"#FFBF00", color:"black", fontWeight:"700"}}>View Profile</Button>
                </Box>
                <Box sx={{width:"22%",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"2.5em", marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#FFBF00',  transition: "ease 0.5s"}}}>
                    <img src={item7} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                    <Typography variant="h6" style={{fontWeight: 700}}>Mr. Jhonny</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Workouts for : Male only</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Mode : Onsite only</Typography>
                    <Rating name="read-only" value={4} readOnly /><br />
                    <Button variant="contained" style={{backgroundColor:"#FFBF00", color:"black", fontWeight:"700"}}>View Profile</Button>
                </Box>
                <Box sx={{width:"22%",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"2.5em", marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#FFBF00',  transition: "ease 0.5s"}}}>
                    <img src={item8} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                    <Typography variant="h6" style={{fontWeight: 700}}>Mr. Jhonny</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Workouts for : Male only</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Mode : Onsite only</Typography>
                    <Rating name="read-only" value={4} readOnly /><br />
                    <Button variant="contained" style={{backgroundColor:"#FFBF00", color:"black", fontWeight:"700"}}>View Profile</Button>
                </Box>
                <Box sx={{width:"22%",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"2.5em", marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#FFBF00',  transition: "ease 0.5s"}}}>
                    <img src={item9} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                    <Typography variant="h6" style={{fontWeight: 700}}>Mr. Jhonny</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Workouts for : Male only</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Mode : Onsite only</Typography>
                    <Rating name="read-only" value={4} readOnly /><br />
                    <Button variant="contained" style={{backgroundColor:"#FFBF00", color:"black", fontWeight:"700"}}>View Profile</Button>
                </Box>
                <Box sx={{width:"22%",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"2.5em", marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#FFBF00',  transition: "ease 0.5s"}}}>
                    <img src={item10} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                    <Typography variant="h6" style={{fontWeight: 700}}>Mr. Jhonny</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Workouts for : Male only</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Mode : Onsite only</Typography>
                    <Rating name="read-only" value={4} readOnly /><br />
                    <Button variant="contained" style={{backgroundColor:"#FFBF00", color:"black", fontWeight:"700"}}>View Profile</Button>
                </Box>
                <Box sx={{width:"22%",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"2.5em", marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#FFBF00',  transition: "ease 0.5s"}}}>
                    <img src={item11} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                    <Typography variant="h6" style={{fontWeight: 700}}>Mr. Jhonny</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Workouts for : Male only</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Mode : Onsite only</Typography>
                    <Rating name="read-only" value={4} readOnly /><br />
                    <Button variant="contained" style={{backgroundColor:"#FFBF00", color:"black", fontWeight:"700"}}>View Profile</Button>
                </Box>
                <Box sx={{width:"22%",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"2.5em", marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#FFBF00',  transition: "ease 0.5s"}}}>
                    <img src={item12} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                    <Typography variant="h6" style={{fontWeight: 700}}>Mr. Jhonny</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Workouts for : Male only</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Mode : Onsite only</Typography>
                    <Rating name="read-only" value={4} readOnly /><br />
                    <Button variant="contained" style={{backgroundColor:"#FFBF00", color:"black", fontWeight:"700"}}>View Profile</Button>
                </Box>
                <Box sx={{width:"22%",justifyContent: "center", alignItems:"center",height:"70%", cursor:"pointer", border:"2px solid white", borderRadius:"10px" , padding:"1rem", marginRight:"2.5em", marginBottom:"1rem", boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', '&:hover': {borderColor: '#FFBF00',  transition: "ease 0.5s"}}}>
                    <img src={item1} alt="item"  style={{width:"80%", height:"60%", objectFit:"cover"}}></img>
                    <Typography variant="h6" style={{fontWeight: 700}}>Mr. Jhonny</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Workouts for : Male only</Typography>
                    <Typography variant="h6" style={{fontWeight: 500}}>Mode : Onsite only</Typography>
                    <Rating name="read-only" value={4} readOnly /><br />
                    <Button variant="contained" style={{backgroundColor:"#FFBF00", color:"black", fontWeight:"700"}}>View Profile</Button>
                </Box>


                
            </Box>
           
        </Box>

      
    </Box>
  );
};

export default Shakebar;
