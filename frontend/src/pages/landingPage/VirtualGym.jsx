import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Image1 from "../../assets/krakenimages-4l8UH4G2_Dg-unsplash.jpg";
import Image2 from "../../assets/images.jpg";
import Image3 from "../../assets/at-home-workout.jpg";

const images = [Image1, Image2, Image3];

const StyledBox = styled(Box)(({ theme }) => ({

  width: "40%",
  height: "50%",
  marginTop: "3.5rem",
  marginLeft: "4rem",
  marginBottom: "5rem",
  padding: "1rem",
 
}));

function VirtualGym() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(timer);
  }, []);

  return (
    <Container id="discover" maxWidth="">
      <Box sx={{ height: "100vh", display: "flex" }} >
        <StyledBox>
          <Typography variant="h3" sx={{ textAlign: "left", fontWeight: "bold", marginTop: "1.5rem" }}>Virtual Gym Experience</Typography>
          <Typography variant="body1" sx={{ fontSize: "18px", textAlign: "justify", marginTop: "2rem" }}>
            Virtual Gym is a revolutionary fitness platform offering an all-encompassing workout experience from the comfort of one's home. Through cutting-edge technology and a diverse array of virtual workouts, users can access live classes or on-demand sessions, led by expert instructors. The platform fosters a sense of community by enabling real-time interactions with trainers and fellow fitness enthusiasts, enhancing motivation and accountability. With personalized workout plans, progress tracking, and interactive features, Virtual Gym ensures tailored fitness journeys for every individual. This accessible and flexible approach empowers users to maintain a consistent exercise routine regardless of their location or busy schedules, making fitness and well-being achievable for all.
          </Typography>
        </StyledBox>
        <Box sx={{ marginTop: "5rem", marginLeft:"2%" }}>
          {/* Animate the image from the right-hand side */}
          <motion.img
            src={images[currentImage]}
            alt="Virtual Gym"
            style={{ width: "90%", height: "80%", marginTop: "2rem", cursor: "pointer" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default VirtualGym;
