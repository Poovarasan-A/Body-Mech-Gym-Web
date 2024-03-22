import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PosingImg from "../assets/posing.png";

const About = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt="100px"
      mb="80px"
    >
      <Box mr="150px">
        <Typography variant="h4" fontWeight="600">
          Why should you take <br />
          proper guidance from <br />
          experienced <span style={{ color: "red" }}>Trainers</span>
        </Typography>
        <Box m="10px">
          <Stack direction="row" alignItems="center">
            <ArrowRightIcon />
            <Typography fontSize="20px" fontWeight="500" lineHeight="40px">
              Correct Posture & Technique
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <ArrowRightIcon />
            <Typography fontSize="20px" fontWeight="500" lineHeight="40px">
              Reducing the risk of Injury
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <ArrowRightIcon />
            <Typography fontSize="20px" fontWeight="500" lineHeight="40px">
              Effective Gains
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <ArrowRightIcon />
            <Typography fontSize="20px" fontWeight="500" lineHeight="40px">
              Target the Right Muscles
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <ArrowRightIcon />
            <Typography fontSize="20px" fontWeight="500" lineHeight="40px">
              Personalized Diet Plan
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Box
        position="absolute"
        ml="350px"
        sx={{
          backgroundColor: "red",
          width: "250px",
          height: "420px",
          borderRadius: "20px",
        }}
      ></Box>
      <Box
        p="30px"
        pl="30px"
        pr="30px"
        position="relative"
        sx={{
          borderRadius: "20px",
          border: "5px solid red",
        }}
      >
        <img src={PosingImg} alt="About" style={{ width: "230px" }} />
      </Box>
    </Stack>
  );
};

export default About;
