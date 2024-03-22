import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import HeroBanner from "../components/HeroBanner";
import Programs from "../components/Programs";
import About from "../components/About";
import Trainer from "../components/Trainer";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <HeroBanner />
      <Programs />
      <About />
      <Trainer />
      <Pricing />
    </Container>
  );
};

export default Home;
