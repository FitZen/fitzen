import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import CustomButton from "./CustomButton";
import Navbar from "./Navbar";

// Import the background image
import firstImg from "../../assets/karsten-winegeart-0Wra5YYVQJE-unsplash.jpg";

const color1 = "#000000"; // Black
const color2 = "#FFFFFF"; // White
const color3 = "#FF0000"; // Red

const Hero = () => {
  const CustomBackgroundBox = styled(Box)(({ theme }) => ({
    position: "relative",
    minHeight: "100vh",
    backgroundImage: `url(${firstImg})`,
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
  }));

  const CustomContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    width: "59%",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    
    position: "relative",
    zIndex: 1, // Ensure the content appears above the background image
    maxWidth: "800px", // Limit the width on larger screens
    textAlign: "left", // Align the content to the left
    marginLeft: "-15%", // Add a negative margin-left to shift it to the left
    padding: theme.spacing(0, 2), // Add horizontal padding for smaller screens
    [theme.breakpoints.down("md")]: {
      marginLeft: "30%", // Center the content box on smaller screens
      padding: 0, // Remove padding on smaller screens
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%"
    },
    [theme.breakpoints.down("1200px")]: {
      marginLeft: "50%"
    },
    [theme.breakpoints.down("xl")]: {
      marginLeft: "16%"
    }
    
    
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: color2,
    fontWeight: "bold",
    margin: theme.spacing(10, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "48px",
    },
  }));

  return (
    <Box>
      <Navbar /> {/* Navbar is now at the top of the page */}
      <CustomBackgroundBox>
        <Container>
          <CustomContentBox>
            <Box sx={{ flex: "1", mt: 25, ml: -13 }}>
              <Title variant="h1">
                Get the best virtual gym experience with us
              </Title>
              <Typography
                variant="body1" // Changed from "body" to "body1" to use Material-UI typography variants
                sx={{
                  fontSize: "20px",
                  fontWeight: "regular", // Changed from "bold" to "regular"
                  color: color2,
                  mt: 8,
                  mb: 4,
                }}
              >
                Get the superior Gym experience with us. We provide the best
                virtual gym experience with the best trainers in the country.
              </Typography>
              <CustomButton 
                  backgroundColor="yellow" 
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
