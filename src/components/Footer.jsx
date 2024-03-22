import React from "react";
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
        direction="row"
        justifyContent="space-around"
        mt="100px"
        bgcolor="#333"
        color="#fff"
        pt="80px"
      >
        <Box sx={{ display: "grid", placeItems: "center", mb: "120px" }}>
          <img src={Logo} alt="logo" style={{ width: "300px" }} />
          <Typography variant="h6" fontWeight="800" align="center" mt="20px">
            Walk Like a Man <br />
            Workout Like an Animal
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" fontWeight="600" ml="10px" mb="10px">
            About
          </Typography>
          <List>
            <ListItem>Why Us?</ListItem>
            <ListItem>Programs Offered</ListItem>
            <ListItem>Blog</ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant="h5" fontWeight="600" align="center" mb="10px">
            Contact
          </Typography>
          <List>
            <ListItem>
              <InstagramIcon sx={{ mr: "10px" }} />
              Instagram
            </ListItem>
            <ListItem>
              <XIcon sx={{ mr: "10px" }} />
              Twitter
            </ListItem>
            <ListItem>
              <FacebookIcon sx={{ mr: "10px" }} />
              Facebook
            </ListItem>
          </List>
        </Box>
      </Stack>
      <Divider inset="none" />
      <Typography p="5px" align="center">
        Designed by @ Poovarasan
      </Typography>
    </>
  );
};

export default Footer;
