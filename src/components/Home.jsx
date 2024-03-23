import React from "react";
import { Link } from "react-scroll";
import {
  Stack,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material/";
import HeroImage from "../assets/main.png";

const HeroBanner = () => {
  return (
    <>
      <Stack sx={{ mt: { lg: "50px", xs: "30px" } }} direction="row" id="home">
        <Card
          sx={{
            width: "100%",
            display: { lg: "flex", xs: "block" },
            justifyContent: "space-around",
            p: { lg: "40px 0px 0px 0px", xs: "0px" },
            bgcolor: "red",
          }}
        >
          <CardContent sx={{ mt: { lg: "30px", xs: "0px" } }}>
            <Typography
              fontWeight="800"
              fontSize={{ lg: "40px", xs: "26px" }}
              mb="10px"
              color="#fff"
            >
              WALK LIKE A MAN <br />
              WORKOUT LIKE AN ANIMAL
            </Typography>
            <Typography
              fontSize={{ lg: "18px", xs: "15px" }}
              lineHeight={{ lg: "30px", xs: "25px" }}
              mb="20px"
              sx={{ textWrap: "wrap" }}
              color="#fff"
            >
              Welcome to Body Mechanics,
              <br />
              Check out the most effective way to tranform your body
            </Typography>
            <Button variant="contained" color="inherit">
              <Link to="pricing" smooth={true}>
                Join Us
              </Link>
            </Button>
          </CardContent>
          <CardMedia
            component="img"
            image={HeroImage}
            alt="Hero Image"
            sx={{ width: { lg: "310px", xs: "250px" }, ml: { xs: "80px" } }}
          />
        </Card>
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
