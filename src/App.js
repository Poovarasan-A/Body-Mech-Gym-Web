import React, { useEffect, useState } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Programs from "./components/Programs";
import About from "./components/About";
import Trainer from "./components/Trainer";
import Pricing from "./components/Pricing";

import Preloader from "./components/Preloader";
import Contact from "./components/Contact";

const App = () => {
  const [theme, setTheme] = useState(true);
  const [loading, setLoading] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, []);

  return (
    <ThemeProvider theme={theme && darkTheme}>
      {loading ? (
        <Preloader />
      ) : (
        <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
          <Navbar setTheme={setTheme} theme={theme} />
          <Container maxWidth="xl">
            <Home />
            <Programs />
            <About />
            <Trainer />
            <Pricing />
            <Contact />
          </Container>
          <Footer />
        </Box>
      )}
    </ThemeProvider>
  );
};

export default App;

// #cc5500
// #7f2b0a
// <HashLoader color="#36d7b7" />
