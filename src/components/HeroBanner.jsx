import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material/";
import HeroImage from "../assets/main.png";

const HeroBanner = () => {
  return (
    <>
      <Stack
        sx={{ mt: { lg: "50px", xs: "60px" } }}
        direction="row"
        style={{ backgroundColor: "red" }}
        p={{ lg: "40px 30px 0px 10px", xs: "10px" }}
      >
        <Box mt={{ lg: "80px", xs: "10px" }} ml={{ lg: "100px", xs: "10px" }}>
          <Typography
            fontWeight="800"
            color="white"
            fontSize={{ lg: "40px", xs: "20px" }}
            mb="10px"
          >
            WALK LIKE A MAN <br />
            WORKOUT LIKE AN ANIMAL
          </Typography>
          <Typography
            fontSize={{ lg: "18px", xs: "14px" }}
            lineHeight={{ lg: "30px", xs: "20px" }}
            color="#f1f1f1"
            mb="20px"
          >
            Welcome to Body Mechanics,
            <br />
            Check out the most effective way to tranform your body
          </Typography>
          <Button
            variant="solid"
            color="danger"
            sx={{ bgcolor: "#fff", color: "#000" }}
          >
            Join Us
          </Button>
        </Box>
        <Stack ml={{ lg: "200px", xs: "0px" }} alignItems="flex-end">
          <img src={HeroImage} alt="hero" style={{ width: "310px" }} />
        </Stack>
      </Stack>
      <Typography
        fontWeight="900"
        fontSize="70px"
        color="white"
        align="end"
        sx={{
          color: "red",
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "1px",
          letterSpacing: "5px",
          display: { lg: "block", xs: "none" },
        }}
      >
        DON'T SIT, GET FIT
      </Typography>
    </>
  );
};

export default HeroBanner;
