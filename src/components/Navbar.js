import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      px: "20px",
      py: "10px",
      background:
        "linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",

      borderRadius: "8px",
    }}
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "48px", height: "48px", margin: "0px 20px" }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          borderBottom: "3px solid #FF2625",
          transition: "border-bottom 0.3s ease-in-out",
        }}
        onMouseOver={(e) => (e.target.style.borderBottom = "3px solid #FF5733")}
        onMouseOut={(e) => (e.target.style.borderBottom = "3px solid #FF2625")}
      >
        Home
      </Link>
      <a
        href="#exercises"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          transition: "color 0.3s ease-in-out",
        }}
        onMouseOver={(e) => (e.target.style.color = "#FF5733")}
        onMouseOut={(e) => (e.target.style.color = "#3A1212")}
      >
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
