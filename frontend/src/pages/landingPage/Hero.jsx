import { Box, Container, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";

// Import the background image
import Img1 from "../../assets/Homepage/home1.jpg";
import Img2 from "../../assets/Homepage/home2.jpg";
import Img3 from "../../assets/Homepage/home3.jpg";
import Img4 from "../../assets/Homepage/home4.jpg";
import Img5 from "../../assets/Homepage/home5.jpg";
import Img6 from "../../assets/Homepage/home6.jpg";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const color1 = "#000000"; // Black
const color2 = "#FFFFFF"; // White
const color3 = "#FF0000"; // Red

const Hero = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setIsTransitioning(false);
      }, 5000); // Transition duration is 0.5 seconds
    }, 5000); // 3 seconds interval

    return () => clearInterval(timer);
  }, []);

  const CustomBackgroundBox = styled(Box)(({ theme }) => ({
    position: "relative",
    minHeight: "100vh",
    backgroundImage: `url(${images[currentImage]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginTop: theme.spacing(-3),
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity here (0.5 means 50% darkness)
    },
    transition: "background-image 0.5s ease",
  }));

  const CustomContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    width: "80%",
    gap: theme.spacing(5),
    marginTop: theme.spacing(4),
    
    position: "relative",
    zIndex: 1, // Ensure the content appears above the background image
    maxWidth: "900px", // Limit the width on larger screens
    textAlign: "left", // Align the content to the left 
    padding: theme.spacing(6, 2), // Add horizontal padding for smaller screens
    [theme.breakpoints.down("md")]: {
      marginLeft: "50%", // Center the content box on smaller screens
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%"
    },
    [theme.breakpoints.down("1200px")]: {
      marginLeft: "50%"
    },
    [theme.breakpoints.down("xl")]: {
      marginLeft: "-15%"
    }
    
    
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "3.5rem",
    color: color2,
    fontWeight: "bold",
    margin: theme.spacing(10, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
  }));

  return (
    <Box>
      {/* <Navbar /> Navbar is now at the top of the page */}
      <CustomBackgroundBox>
        <Container id="home">
          
          <CustomContentBox>
            <Box sx={{ flex: "1", mt: 12, ml:9 }}>
              <Title variant="h1">
                Get the best physical & virtual
                <Typewriter 
                  options={{ 
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: [
                      "gym experience with us",
                    ],
                  }}

                />
                
              </Title>
              <Typography
                variant="body1" // Changed from "body" to "body1" to use Material-UI typography variants
                sx={{
                  fontSize: "18px",
                  fontWeight: "regular", // Changed from "bold" to "regular"
                  color: color2,
                  mt: 6,
                  mb: 4,
                }}
              >
                Get the superior Gym experience with us. We provide the best
                physical & virtual gym experience with the best trainers in the country.
              </Typography>
              <CustomButton 
                  backgroundColor="red" 
                  color="black" 
                  buttonText="Get Started" 
                  heroBtn={true}
              />
            </Box>
          </CustomContentBox>
        </Container>
      </CustomBackgroundBox>
    </Box>
  );
};

export default Hero;
