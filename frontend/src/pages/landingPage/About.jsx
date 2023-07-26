import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import HighOctaneLogo from "F:/3rd Year Project/Frontend/project/src/assets/download.png";
import Place from "F:/3rd Year Project/Frontend/project/src/assets/High-Octane-Training-and-Therapy.jpg";


function VirtualGym() {
  return (
    <Container maxWidth="">
    <Typography variant="h3" sx={{ textAlign: "left", fontWeight: "bold", marginTop: "3rem", marginLeft: "5rem" }}>About us</Typography>
      <Box sx={{ height: "100vh", display: "flex" }}>
        <Box sx={{ width: "45%",  height: "60%", marginTop: "8rem", marginLeft: "4rem", marginBottom: "5rem", padding: "1rem" }}>
          
          <Typography variant="body1" sx={{ fontSize: "20px", textAlign: "justify", marginTop: "2rem" }}>
            Virtual Gym is a revolutionary fitness platform offering an all-encompassing workout experience from the comfort of one's home. Through cutting-edge technology and a diverse array of virtual workouts, users can access live classes or on-demand sessions, led by expert instructors. The platform fosters a sense of community by enabling real-time interactions with trainers and fellow fitness enthusiasts, enhancing motivation and accountability. With personalized workout plans, progress tracking, and interactive features, Virtual Gym ensures tailored fitness journeys for every individual. This accessible and flexible approach empowers users to maintain a consistent exercise routine regardless of their location or busy schedules, making fitness and well-being achievable for all.
            Virtual Gym is a revolutionary fitness platform offering an all-encompassing workout experience from the comfort of one's home. Through cutting-edge technology and a diverse array of virtual workouts, users can access live classes or on-demand sessions, led by expert instructors. The platform fosters a sense of community by enabling real-time interactions with trainers and fellow fitness enthusiasts, enhancing motivation and accountability. With personalized workout plans, progress tracking, and interactive features, Virtual Gym ensures tailored fitness journeys for every individual. This accessible and flexible approach empowers users to maintain a consistent exercise routine regardless of their location or busy schedules, making fitness and well-being achievable for all.
          </Typography>
        </Box>
        <Box sx={{ marginTop: "2rem", marginLeft: "10rem" }}>
          <img src={HighOctaneLogo} alt="Virtual Gym" style={{ width: "100%", height: "80%", marginTop:"3rem" }} />
        </Box>
      </Box>
      <Box sx={{ height: "100vh", display: "flex"}}>
        <Box sx={{ marginTop: "0rem" }}>
          <img src={Place} alt="Virtual Gym" style={{ width: "85%", height: "70%" }} />
        </Box>
        <Box sx={{ width: "44%",  height: "60%", marginTop: "3rem", marginLeft: "-2%", padding: "1rem" }}>
            <Typography variant="body1" sx={{ fontSize: "20px", textAlign: "justify", marginTop: "2rem" }}>
                Virtual Gym is a revolutionary fitness platform offering an all-encompassing workout experience from the comfort of one's home. Through cutting-edge technology and a diverse array of virtual workouts, users can access live classes or on-demand sessions, led by expert instructors. The platform fosters a sense of community by enabling real-time interactions with trainers and fellow fitness enthusiasts, enhancing motivation and accountability. With personalized workout plans, progress tracking, and interactive features, Virtual Gym ensures tailored fitness journeys for every individual. This accessible and flexible approach empowers users to maintain a consistent exercise routine regardless of their location or busy schedules, making fitness and well-being achievable for all.
                Virtual Gym is a revolutionary fitness platform offering an all-encompassing workout experience from the comfort of one's home. Through cutting-edge technology and a diverse array of virtual workouts, users can access live classes or on-demand sessions, led by expert instructors. The platform fosters a sense of community by enabling real-time interactions with trainers and fellow fitness enthusiasts, enhancing motivation and accountability. With personalized workout plans, progress tracking, and interactive features, Virtual Gym ensures tailored fitness journeys for every individual. This accessible and flexible approach empowers users to maintain a consistent exercise routine regardless of their location or busy schedules, making fitness and well-being achievable for all.
            </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default VirtualGym;
