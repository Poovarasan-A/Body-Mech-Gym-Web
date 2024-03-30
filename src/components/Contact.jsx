import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    if (value.trim() === "") {
      toast.warn("Please provide your Email & try again");
    } else {
      toast.success(" Your response was successfully submitted ");
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Stack justifyContent="center" alignItems="center">
        <Typography
          fontSize={{ lg: "30px", xs: "20px" }}
          fontWeight="700"
          color="inherit"
          align="center"
        >
          Have Questions In Mind? <br /> Let Us Help You
        </Typography>
        <Box
          sx={{
            display: "flex",
            mt: "30px",
          }}
        >
          <Input
            placeholder="yourmail@gmail.com"
            type="email"
            value={value}
            color="error"
            onChange={handleChange}
            sx={{ width: { lg: "500px", xs: "250px" }, mr: "10px", pl: "10px" }}
          />
          <Button
            variant="contained"
            type="submit"
            color="error"
            sx={{
              p: { lg: "8px 30px", xs: "5px 12px" },
              bgcolor: "error",
              borderRadius: "30px",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Stack>
      <ToastContainer position="top-center" theme="colored" />
    </>
  );
};

export default Contact;
