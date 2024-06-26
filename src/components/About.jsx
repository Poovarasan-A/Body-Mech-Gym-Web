import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PosingImg from "../assets/posing.png";
import CardContent from "@mui/material/CardContent";
import { List, ListItem } from "@mui/material";
import Container from "@mui/material/Container";

const About = () => {
  return (
    <Container id="about">
      <Stack
        direction={{ lg: "row", xs: "column" }}
        justifyContent="center"
        alignItems="center"
        mt="100px"
        mb="80px"
      >
        <Box variant="soft" sx={{ width: "100%" }} ml={{ lg: "100px" }}>
          <CardContent sx={{ ml: { lg: "30px" } }}>
            <Typography fontSize={{ lg: "35px", xs: "30px" }} fontWeight="600">
              Why should you take <br />
              proper guidance from <br />
              experienced <span style={{ color: "#ff2400" }}>Trainers</span>
            </Typography>
            <List m="15px">
              <ListItem>
                <ArrowRightIcon />
                <Typography
                  fontSize={{ lg: "20px", xs: "18px" }}
                  fontWeight="500"
                  lineHeight="40px"
                >
                  Correct Posture & Technique
                </Typography>
              </ListItem>
              <ListItem>
                <ArrowRightIcon />
                <Typography
                  fontSize={{ lg: "20px", xs: "18px" }}
                  fontWeight="500"
                  lineHeight="40px"
                >
                  reducing the risk of Injury
                </Typography>
              </ListItem>
              <ListItem>
                <ArrowRightIcon />
                <Typography
                  fontSize={{ lg: "20px", xs: "18px" }}
                  fontWeight="500"
                  lineHeight="40px"
                >
                  Effective Gains
                </Typography>
              </ListItem>
              <ListItem>
                <ArrowRightIcon />
                <Typography
                  fontSize={{ lg: "20px", xs: "18px" }}
                  fontWeight="500"
                  lineHeight="40px"
                >
                  Target the Right Muscles
                </Typography>
              </ListItem>
              <ListItem>
                <ArrowRightIcon />
                <Typography
                  fontSize={{ lg: "20px", xs: "18px" }}
                  fontWeight="500"
                  lineHeight="40px"
                >
                  Personalized Diet Plan
                </Typography>
              </ListItem>
            </List>
          </CardContent>
        </Box>
        <Box
          position="absolute"
          ml={{ lg: "360px", xs: "80px" }}
          mt={{ lg: "0px", xs: "470px" }}
          sx={{
            backgroundColor: "#ff2400",
            width: "270px",
            height: "420px",
            borderRadius: "20px",
          }}
        ></Box>
        <Box
          p="30px"
          pl="30px"
          pr="30px"
          mr={{ lg: "190px", xs: "30px" }}
          position="relative"
          sx={{
            borderRadius: "20px",
            border: "5px solid #ff2400",
          }}
        >
          <img
            src={PosingImg}
            loading="lazy"
            alt="About"
            style={{ width: "230px" }}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default About;
