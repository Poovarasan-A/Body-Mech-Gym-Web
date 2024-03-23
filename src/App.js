import React, { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const App = () => {
  const [theme, setTheme] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme && darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar setTheme={setTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;

// #cc5500
// #7f2b0a
