import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Box, Drawer, Menu } from "@mui/material";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LogoLight from "../assets/Gym Logo light.png";
import LogoDark from "../assets/Gym Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { List, ListItem } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = ({ setTheme, theme }) => {
  const [open, setOpen] = useState(false);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      pt="20px"
      ml="20px"
      mr="25px"
    >
      <Box>
        <img
          src={!theme ? LogoLight : LogoDark}
          alt="Logo"
          style={{ width: "150px" }}
        />
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        fontSize="17px"
        sx={{
          gap: "40px",
          display: { xs: "none", lg: "flex" },
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
        <Tooltip title={!theme ? "Dark Mode" : "Light Mode"}>
          <IconButton onClick={() => setTheme(!theme)}>
            {!theme ? (
              <DarkModeIcon sx={{ cursor: "pointer", fontSize: "25px" }} />
            ) : (
              <LightModeIcon sx={{ cursor: "pointer", fontSize: "25px" }} />
            )}
          </IconButton>
        </Tooltip>
      </Stack>
      <Box sx={{ display: { xs: "block", lg: "none" }, alignItems: "center" }}>
        <Tooltip title="Menu">
          <IconButton
            variant="outlined"
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <Drawer open={open}>
          <Stack direction="row" mt="50px" justifyContent="space-around">
            <Tooltip title={!theme ? "Dark Mode" : "Light Mode"}>
              <IconButton
                onClick={() => setTheme(!theme)}
                sx={{ visibility: { lg: "hidden", xs: "visible" } }}
              >
                {!theme ? (
                  <DarkModeIcon sx={{ cursor: "pointer", fontSize: "25px" }} />
                ) : (
                  <LightModeIcon sx={{ cursor: "pointer", fontSize: "25px" }} />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title="Close">
              <IconButton variant="outlined" onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Stack>
          <List
            sx={{
              width: "200px",
              mt: "50px",
            }}
          >
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
