import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)">
    <Stack
      gap="20px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "80px", height: "41px" }} />
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "600",
          color: "#3A1212",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        TiwariGym
      </Typography>
    </Stack>
    <Typography
      variant="h5"
      sx={{
        fontSize: { lg: "24px", xs: "18px" },
        mt: "30px",
        textAlign: "center",
        color: "#3A1212",
      }}
    >
      Made by{" "}
      <a
        href="https://www.linkedin.com/in/vishal-kumar-tiwari-692601210/"
        style={{
          textDecoration: "none",
          fontWeight: "600",
          color: "#FF2625",
          transition: "color 0.3s ease-in-out",
        }}
        onMouseOver={(e) => (e.target.style.color = "#FF5733")}
        onMouseOut={(e) => (e.target.style.color = "#FF2625")}
      >
        Vishal Kumar Tiwari
      </a>
    </Typography>
    <Typography
      sx={{
        fontSize: "14px",
        textAlign: "center",
        color: "#3A1212",
        mt: "10px",
        pb: "40px",
      }}
    >
      © 2024 TiwariGym. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
