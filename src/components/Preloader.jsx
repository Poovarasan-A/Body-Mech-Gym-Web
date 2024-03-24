import React from "react";
import { ClimbingBoxLoader } from "react-spinners";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Preloader = () => {
  return (
    <Stack
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      bgcolor="#121212"
    >
      <ClimbingBoxLoader color="red" />
      <Typography
        variant="p"
        fontSize="18px"
        letterSpacing="1px"
        fontWeight="500"
        fontStyle="italic"
        color="#c2c2c2"
        mt="40px"
        align="center"
        sx={{ wordSpacing: "2px" }}
      >
        " Don't Sit, Get Fit "
      </Typography>
    </Stack>
  );
};

export default Preloader;
