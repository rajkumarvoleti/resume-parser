import Header from "../components/Header";
import { Box, Button, Typography } from "@mui/material";
import About from "../components/About";
import Feature from "../components/Feature";
import Steps from "../components/Steps";
import Join from "../components/Join";
import Contact from "../components/Contact";
import { useEffect, useRef } from "react";

const style = {
  width: "100%",
};

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    Home: homeRef,
    About: aboutRef,
    Products: productsRef,
    "Contact Us": contactRef,
  };
  const scrollTo = (key) => {
    const ref = refs[key].current;
    setTimeout(() => {
      ref?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <Box sx={style}>
      <Box ref={homeRef}>
        <Header scrollTo={scrollTo} />
      </Box>
      <Box ref={aboutRef}>
        <About />
      </Box>
      <Box ref={productsRef} className="center" sx={{ width: "100%" }}>
        <Feature left={true} />
        <Feature left={false} />
        <Feature left={true} />
      </Box>
      <Box className="center" sx={{ width: "100%", mt: "150px" }}>
        <Steps />
      </Box>
      <Box sx={{ my: "100px" }} className="center">
        <Join />
      </Box>
      <Box ref={contactRef}>
        <Contact />
      </Box>
    </Box>
  );
}
