import { Button, styled } from "@mui/material";
import React from "react";

const CustomButton = (backgroundColor, color, buttonText, heroBtn, guideBtn, getStartedBtn) => {
    const CustomButton = styled (Button) (({theme}) => ({
        backgroundColor: "red",
        color: "white",
        fontSize: "14px",
        fontWeight: "700",
        marginTop: "3rem",
        padding: "0.6rem 1rem",
        cursor: "pointer",
        borderRadius: "50px",
        textTransform: "none",
        display: "block",
        border: "2px solid transparent",
        "&:hover": {
            backgroundColor: "black",
            color: "yellow",
            border: "yellow 2px solid"
        },

        [theme.breakpoints.down("md")]: {
            margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
            width: (heroBtn || getStartedBtn) && "90%",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: guideBtn && theme.spacing(3),
            width: guideBtn && "90%",
        },
    }));

return <CustomButton>Get Started</CustomButton>;
};

export default CustomButton;