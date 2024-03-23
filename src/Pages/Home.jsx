import Container from "@mui/material/Container";
import HeroBanner from "../components/HeroBanner";
import Programs from "../components/Programs";
import About from "../components/About";
import Trainer from "../components/Trainer";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <Container maxWidth={{ lg: "xl", xs: "" }}>
      <HeroBanner />
      <Programs />
      <About />
      <Trainer />
      <Pricing />
    </Container>
  );
};

export default Home;
