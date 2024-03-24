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
        fontSize="20px"
        fontWeight="500"
        fontStyle="italic"
        color="error"
        mt="40px"
        align="center"
      >
        " Don't Sit, Get Fit "
      </Typography>
    </Stack>
  );
};

export default Preloader;
