import Header from "../components/landingPage/Header";
import Box from "@mui/material/Box";
import About from "../components/landingPage/About";
import Feature from "../components/landingPage/Feature";
import Steps from "../components/landingPage/Steps";
import Join from "../components/landingPage/Join";
import Contact from "../components/Contact";
import { useRef } from "react";
import Head from "next/head";

// home page

const style = {
  width: "100%",
};

export default function Home() {
  // these refs are made to help the onclick events in the menu bar 
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

  // this function hepls to scroll to a particular ref
  const scrollTo = (key) => {
    const ref = refs[key].current;
    setTimeout(() => {
      ref?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <Head>
        <title>Thanks Buddy!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
    </>
  );
}
