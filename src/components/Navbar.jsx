import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Box, Drawer } from "@mui/material";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LogoLight from "../assets/Gym Logo light.png";
import LogoDark from "../assets/Gym Logo light.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { List, ListItem } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Navbar = ({ setTheme }) => {
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(true);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      pt="20px"
      ml="20px"
      mr="20px"
    >
      <Box>
        <img src={LogoLight} alt="Logo" style={{ width: "150px" }} />
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        fontSize="17px"
        sx={{
          gap: "40px",
          visibility: { xs: "hidden", lg: "visible" },
        }}
      >
        <Link style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
        <Link style={{ textDecoration: "none", color: "inherit" }}>
          Programs
        </Link>
        <Link style={{ textDecoration: "none", color: "inherit" }}>About</Link>
        <Link style={{ textDecoration: "none", color: "inherit" }}>
          Trainers
        </Link>
        <Button variant="outlined" color="error">
          Join Us
        </Button>
        <Tooltip title="Dark Mode">
          <IconButton onClick={toggleTheme}>
            <Brightness4Icon sx={{ cursor: "pointer", fontSize: "30px" }} />
          </IconButton>
        </Tooltip>
      </Stack>
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        <Tooltip title="Menu">
          <IconButton variant="outlined" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <Drawer open={open}>
          <Tooltip title="Close">
            <IconButton variant="outlined" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Programs</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Trainers</ListItem>
          </List>
        </Drawer>
      </Box>
    </Stack>
  );
};

export default Navbar;
