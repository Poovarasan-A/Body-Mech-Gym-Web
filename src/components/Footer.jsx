import React from "react";
import { Link } from "react-scroll";
import { Box, Stack, Typography, Divider } from "@mui/material";
import { List, ListItem } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

// img import

import Logo from "../assets/Gym Logo.png";

const Footer = () => {
  return (
    <>
      <Stack
        direction={{ lg: "row", xs: "column" }}
        justifyContent="space-around"
        alignItems="center"
        mt="50px"
        pb="40px"
        bgcolor="#333"
        color="#fff"
        pt="40px"
      >
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            ml: "100px",
            mr: "100px",
            mb: { xs: "60px" },
          }}
        >
          <img src={Logo} alt="logo" style={{ width: "300px" }} />
          <Typography
            variant="h6"
            fontWeight="800"
            align="center"
            mt={{ lg: "20px", xs: "0px" }}
          >
            Walk Like a Man <br />
            Workout Like an Animal
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="space-around" width="100%">
          <Box>
            <Typography variant="h5" fontWeight="600" ml="10px" mb="10px">
              About
            </Typography>
            <List sx={{ cursor: "pointer" }}>
              <ListItem>
                <Link to="about" smooth={true} offset={-100}>
                  Why Us?
                </Link>
              </ListItem>
              <ListItem>
                <Link to="programs" smooth={true} offset={-100}>
                  Programs Offered
                </Link>
              </ListItem>
              <ListItem>
                <Link to="trainer" smooth={true} offset={-20}>
                  Blog
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="600" align="center" mb="10px">
              Contact
            </Typography>
            <List>
              <ListItem>
                <InstagramIcon sx={{ mr: "10px" }} />
                <a
                  href="https://www.instagram.com/im_darkk_"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Instagram
                </a>
              </ListItem>
              <ListItem>
                <XIcon sx={{ mr: "10px" }} />
                <a
                  href="https://www.linkedin.com/in/poovarasan-arumugam-3b798523b/"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Twitter
                </a>
              </ListItem>
              <ListItem>
                <FacebookIcon sx={{ mr: "10px" }} />
                <a
                  href="https://www.instagram.com/im_darkk_"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Facebook
                </a>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Stack>
      <Divider inset="none" />
      <Typography p="3px" align="center">
        Designed by @ Poovarasan
      </Typography>
    </>
  );
};

export default Footer;
