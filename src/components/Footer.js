import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "80px", height: "41px" }} />
      <Typography style={{ fontSize: "30px", fontWeight: "600" }}>
        PowerPulse
      </Typography>
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made by{" "}
      <a
        href="https://www.linkedin.com/in/vishal-kumar-tiwari-692601210/"
        style={{ textDecoration: "none", fontWeight: "600" }}
      >
        Vishal Kumar Tiwari{" "}
      </a>
    </Typography>
  </Box>
);

export default Footer;