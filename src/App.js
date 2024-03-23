import React, { useState } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Programs from "./components/Programs";
import About from "./components/About";
import Trainer from "./components/Trainer";
import Pricing from "./components/Pricing";

const App = () => {
  const [theme, setTheme] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme && darkTheme}>
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <Navbar setTheme={setTheme} theme={theme} />
        <Container maxWidth="xl">
          <Routes>
            <Route index element={<Home />} />
          </Routes>
          <Programs />
          <About />
          <Trainer />
          <Pricing />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;

// #cc5500
// #7f2b0a
