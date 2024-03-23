import React from "react";
import { Typography, Stack } from "@mui/material";

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
        sx={{ fontSize: { xs: "22px", lg: "30px" } }}
        fontWeight="700"
        mt="50px"
        mb={{ lg: "60px", xs: "30px" }}
      >
        Free Workout <span style={{ color: "red" }}>Programs</span>
      </Typography>
      <Stack
        direction="row"
        justifyContent={{ lg: "space-between", xs: "space-around" }}
        textTransform="uppercase"
        mb="20px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexGrow: "1",
          gap: { lg: 2, xs: 2 },
          p: "0",
          m: "0",
        }}
      >
        <Card variant="soft">
          <CardMedia
            component="img"
            image={FatLossImg}
            alt="Cover Image"
            sx={{
              width: { lg: "200px", xs: "150px" },
            }}
          />
          <CardContent>
            <Typography
              level="body-lg"
              align="center"
              fontWeight="800"
              color="#fff"
              mt={{ lg: -6, xs: -6 }}
              letterSpacing="1px"
            >
              Fat Loss
            </Typography>
          </CardContent>
        </Card>
        <Card variant="soft">
          <CardMedia
            component="img"
            sx={{ width: { lg: "200px", xs: "150px" } }}
            image={WeightGainImg}
            alt="Cover Image"
          ></CardMedia>
          <CardContent>
            <Typography
              level="body-lg"
              align="center"
              fontWeight="800"
              color="#fff"
              mt={{ lg: -6, xs: -6 }}
              letterSpacing="1px"
            >
              Weight Gain
            </Typography>
          </CardContent>
        </Card>
        <Card variant="soft">
          <CardMedia
            component="img"
            sx={{ width: { lg: "200px", xs: "150px" } }}
            image={WeightLiftingImg}
            alt="Cover Image"
          ></CardMedia>
          <CardContent>
            <Typography
              level="body-lg"
              align="center"
              fontSize="14px"
              fontWeight="800"
              color="#fff"
              mt={{ lg: -6, xs: -6 }}
              letterSpacing="1px"
            >
              Weight Lifting
            </Typography>
          </CardContent>
        </Card>
        <Card variant="soft">
          <CardMedia
            component="img"
            sx={{ width: { lg: "200px", xs: "150px" } }}
            image={CrossFitImg}
            alt="Cover Image"
          ></CardMedia>
          <CardContent>
            <Typography
              level="body-lg"
              align="center"
              fontWeight="800"
              color="#fff"
              mt={{ lg: -6, xs: -6 }}
              letterSpacing="1px"
            >
              Cross Fit
            </Typography>
          </CardContent>
        </Card>
        <Card variant="soft">
          <CardMedia
            component="img"
            sx={{ width: { lg: "200px", xs: "150px" } }}
            image={CalisImg}
            alt="Cover Image"
          ></CardMedia>
          <CardContent>
            <Typography
              level="body-lg"
              align="center"
              fontWeight="800"
              color="#fff"
              mt={{ lg: -6, xs: -6 }}
              letterSpacing="1px"
            >
              Calisthenics
            </Typography>
          </CardContent>
        </Card>
        <Card variant="soft">
          <CardMedia
            component="img"
            sx={{ width: { lg: "200px", xs: "150px" } }}
            image={YogaImg}
            alt="Cover Image"
          ></CardMedia>
          <CardContent>
            <Typography
              level="body-lg"
              align="center"
              fontWeight="800"
              color="#fff"
              mt={{ lg: -6, xs: -6 }}
              letterSpacing="1px"
            >
              Yoga
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Programs;
