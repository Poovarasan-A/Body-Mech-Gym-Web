import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

const Contact = () => {
  const [submit, setSubmit] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    if (value.trim() === "") {
      alert("Please provide your email and try again");
    } else {
      setSubmit(`" Your response was successfully submitted "`);
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
        <Box fontStyle="italic" color="red" sx={{ mt: "30px" }}>
          {submit}
        </Box>
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
    </>
  );
};

export default Contact;
