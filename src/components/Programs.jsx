import React from "react";
import { Box, Typography, Stack } from "@mui/material";

// img import

import FatLossImg from "../assets/fatloss.jpeg";
import WeightGainImg from "../assets/Bulikng.jpeg";
import WeightLiftingImg from "../assets/weightlifting.jpeg";
import CrossFitImg from "../assets/crossfit.jpeg";
import CalisImg from "../assets/Calisthenics.jpeg";
import YogaImg from "../assets/yoga.jpeg";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const Programs = () => {
  return (
    <Stack>
      <Typography
        sx={{ fontSize: { xs: "18px", lg: "30px" } }}
        fontWeight="700"
        mt="50px"
        mb="30px"
      >
        Free Workout <span style={{ color: "red" }}>Programs</span>
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        mt="30px"
        color="#fff"
        textTransform="uppercase"
        mb="20px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexGrow: "1",
          gap: 2,
          p: "0",
          m: "0",
        }}
      >
        <Card sx={{ bgcolor: "red", color: "#fff", minWidth: "200px" }}>
          <CardMedia
            component="img"
            image={FatLossImg}
            alt="Cover Image"
            sx={{ width: "200px" }}
          ></CardMedia>
          <CardContent>
            <Typography align="center" fontWeight="700">
              Fat Loss
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ bgcolor: "red", color: "#fff", minWidth: "200px" }}>
          <CardMedia
            component="img"
            sx={{ width: "200px" }}
            image={WeightGainImg}
            alt="Cover Image"
          ></CardMedia>
          <CardContent>
            <Typography align="center" fontWeight="700">
              Weight Gain
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ bgcolor: "red", color: "#fff", minWidth: "200px" }}>
          <CardMedia
            component="img"
            sx={{ width: "200px" }}
            image={WeightLiftingImg}
            alt="Cover Image"
          ></CardMedia>
          <CardContent>
            <Typography align="center" fontWeight="700">
              Weight Lifting
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ bgcolor: "red", color: "#fff", minWidth: "200px" }}>
          <CardMedia
            component="img"
            sx={{ width: "200px" }}
            image={CrossFitImg}
            alt="Cover Image"
          ></CardMedia>
          <CardContent>
            <Typography align="center" fontWeight="700">
              Cross Fit
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ bgcolor: "red", color: "#fff", minWidth: "200px" }}>
          <CardMedia
            component="img"
            sx={{ width: "200px" }}
            image={CalisImg}
            alt="Cover Image"
          ></CardMedia>
          <CardContent>
            <Typography align="center" fontWeight="700">
              Calisthenics
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ bgcolor: "red", color: "#fff", minWidth: "200px" }}>
          <CardMedia
            component="img"
            sx={{ width: "200px" }}
            image={YogaImg}
            alt="Cover Image"
          ></CardMedia>
          <CardContent>
            <Typography align="center" fontWeight="700">
              Yoga
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Programs;
