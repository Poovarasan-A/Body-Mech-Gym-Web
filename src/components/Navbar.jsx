import React, { useState } from "react";
import { Link } from "react-scroll";
import { Stack, Box, Drawer } from "@mui/material";
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
      bgcolor="inherit"
      pt="10px"
      height="70px"
      width="100%"
      pl="30px"
      pr="30px"
      position="sticky"
      top="0"
      zIndex="100"
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
          cursor: "pointer",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="home"
          smooth={true}
          offset={-100}
        >
          Home
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="programs"
          smooth={true}
          offset={-100}
        >
          Programs
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="about"
          smooth={true}
          offset={-100}
        >
          About
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="trainer"
          smooth={true}
          offset={-20}
        >
          Trainers
        </Link>
        <Button variant="outlined" color="error">
          <Link to="pricing" smooth={true} offset={-100}>
            Join Us
          </Link>
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
          <Stack direction="row" mt="30px" justifyContent="space-around">
            <Tooltip title={!theme ? "Dark Mode" : "Light Mode"}>
              <IconButton
                onClick={() => setTheme(!theme)}
                sx={{
                  visibility: { lg: "hidden", xs: "visible" },
                  bgcolor: "#aaa",
                }}
              >
                {!theme ? (
                  <DarkModeIcon sx={{ cursor: "pointer", fontSize: "25px" }} />
                ) : (
                  <LightModeIcon sx={{ cursor: "pointer", fontSize: "25px" }} />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title="Close">
              <IconButton
                variant="outlined"
                onClick={() => setOpen(false)}
                sx={{ bgcolor: "#aaa" }}
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Stack>
          <List
            sx={{
              width: "200px",
              mt: "30px",
              cursor: "pointer",
              paddingLeft: "30px",
            }}
          >
            <ListItem>
              <Link to="home" smooth={true} offset={-100}>
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link to="programs" smooth={true} offset={-50}>
                Programs
              </Link>
            </ListItem>
            <ListItem>
              <Link to="about" smooth={true} offset={-50}>
                About
              </Link>
            </ListItem>
            <ListItem>
              <Link to="trainer" smooth={true} offset={-20}>
                Trainer
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Stack>
  );
};

export default Navbar;
