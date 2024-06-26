import React from "react";
import { Box, Stack, Typography } from "@mui/material";

// Img import

import Trainer1 from "../assets/ChrisHeria.jpeg";
import Trainer2 from "../assets/Trainer01.jpg";
import Trainer3 from "../assets/DavidLaid.jpeg";

const Trainer = () => {
  return (
    <Stack id="trainer">
      <Box alignSelf="center" mb="20px">
        <Typography variant="h4" fontWeight="700" mt="50px" align="center">
          OUR <span style={{ color: "#ff2400" }}>TRAINERS</span>
        </Typography>
        <Typography sx={{ textWrap: "wrap" }} align="center">
          Get the latest training tips and performance information from the Body
          Mechanics Gym team.
        </Typography>
      </Box>
      <Stack
        direction={{ lg: "row", xs: "column" }}
        justifyContent="space-around"
        alignItems="center"
        mt="60px"
      >
        <Box mb={{ lg: "0px", xs: "60px" }}>
          <img
            src={Trainer1}
            alt="Trainer-1"
            loading="lazy"
            style={{ width: "250px" }}
          />
          <Typography align="center" mt="10px" variant="h6" fontWeight="600">
            Chris Heria
          </Typography>
          <Typography align="center" color="#676765" fontWeight="600">
            CALISTHENIC TRAINER
          </Typography>
        </Box>
        <Box mb={{ lg: "0px", xs: "60px" }}>
          <img
            src={Trainer2}
            alt="Trainer-2"
            loading="lazy"
            style={{ width: "250px" }}
          />
          <Typography align="center" mt="10px" variant="h6" fontWeight="600">
            Eva
          </Typography>
          <Typography align="center" color="#676765" fontWeight="600">
            CROSSFIT TRAINER
          </Typography>
        </Box>
        <Box>
          <img
            src={Trainer3}
            alt="Trainer-3"
            loading="lazy"
            style={{ width: "250px" }}
          />
          <Typography align="center" mt="10px" variant="h6" fontWeight="600">
            David Laid
          </Typography>
          <Typography align="center" fontWeight="600" color="#676765">
            PHYSIQUE TRAINER
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Trainer;
