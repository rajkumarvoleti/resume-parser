import Header from "../components/landingPage/Header";
import Box from "@mui/material/Box";
// import About from "../components/landingPage/About";
import Feature from "../components/landingPage/Feature";
// import Steps from "../components/landingPage/Steps";
import Join from "../components/landingPage/Join";
import Contact from "../components/Contact";
import { useRef } from "react";
import Head from "next/head";
import Picture1 from "../images/Picture1.png";
import Picture2 from "../images/Picture2.png";
import Picture3 from "../images/Picture3.png";
import Picture4 from "../images/Picture4.png";
import { Typography } from "@mui/material";
import Arrow from "../components/Arrow";

// home page

const style = {
  width: "100%",
};

export default function Home() {
  // these refs are made to help the onclick events in the menu bar
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    Home: homeRef,
    "How It Works": aboutRef,
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
        {/* <Box ref={aboutRef}>
          <About />
        </Box> */}
        {/* <Arrow /> */}
        <Box ref={aboutRef} className="center" sx={{ width: "100%" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "52px",
              fontWeight: "600",
              mt: "50px",
            }}
          >
            How It Works
          </Typography>
          <Feature left={true} src={Picture1}>
            <Typography
              fontFamily="Montserrat, sans-serif"
              fontSize="24px"
              fontWeight="400"
              lineHeight="36px"
              textAlign={{ lg: "left", xs: "center" }}
            >
              As a first step, our
              <Typography
                fontFamily="Montserrat, sans-serif"
                fontSize="36px"
                fontWeight="800"
                lineHeight="48px"
                sx={{ color: "darkBlue1" }}
              >
                AI engine
              </Typography>
              scans through hundreds of resume from our database to find the
              most
              <Typography
                fontFamily="Montserrat, sans-serif"
                fontSize="36px"
                fontWeight="800"
                lineHeight="48px"
                sx={{ color: "darkBlue1" }}
              >
                preferred
              </Typography>
              candidates for job
            </Typography>
          </Feature>
          <Feature left={false} src={Picture2}>
            <Typography
              fontFamily="Montserrat, sans-serif"
              fontSize="24px"
              fontWeight="400"
              lineHeight="36px"
              textAlign={{ lg: "right", xs: "center" }}
            >
              Next, out of all the AI screened candidates, our
              <Typography
                fontFamily="Montserrat, sans-serif"
                fontSize="36px"
                fontWeight="800"
                lineHeight="48px"
                sx={{ color: "darkBlue1" }}
              >
                network of industry experts
              </Typography>
              with years of hiring experiences select the best for the given job
            </Typography>
          </Feature>

          <Feature left={true} src={Picture3}>
            <Typography
              fontFamily="Montserrat, sans-serif"
              fontSize="24px"
              fontWeight="400"
              lineHeight="36px"
              textAlign={{ lg: "left", xs: "center" }}
            >
              Lastly, our
              <Typography
                fontFamily="Montserrat, sans-serif"
                fontSize="36px"
                fontWeight="800"
                lineHeight="48px"
                sx={{ color: "darkBlue1" }}
              >
                recruitment success buddy
              </Typography>
              connects with the candidates, understands their expectations and
              career aspirations. Then, only the
              <Typography
                fontFamily="Montserrat, sans-serif"
                fontSize="36px"
                fontWeight="800"
                lineHeight="48px"
                sx={{ color: "darkBlue1" }}
              >
                best fit profiles
              </Typography>
              are shared with hiring managers
            </Typography>
          </Feature>
          <Feature left={false} src={Picture4}>
            <Typography
              fontFamily="Montserrat, sans-serif"
              fontSize="24px"
              fontWeight="400"
              lineHeight="36px"
              textAlign={{ lg: "right", xs: "center" }}
            >
              <Typography
                fontFamily="Montserrat, sans-serif"
                fontSize="36px"
                fontWeight="800"
                lineHeight="48px"
                sx={{ color: "darkBlue1" }}
              >
                We are not done yet!
              </Typography>
              During the entire interview process, we keep the
              <Typography
                fontFamily="Montserrat, sans-serif"
                fontSize="36px"
                fontWeight="800"
                lineHeight="48px"
                sx={{ color: "darkBlue1" }}
              >
                information flowing
              </Typography>
              to hiring managers and candidates alike making the whole process
              very
              <Typography
                fontFamily="Montserrat, sans-serif"
                fontSize="36px"
                fontWeight="800"
                lineHeight="48px"
                sx={{ color: "darkBlue1" }}
              >
                transparent
              </Typography>
              for all
            </Typography>
          </Feature>
        </Box>
        {/* <Box className="center" sx={{ width: "100%", mt: "150px" }}>
          <Steps />
        </Box> */}
        <Box sx={{ my: "100px" }} className="center">
          <Join scrollTo={scrollTo} />
        </Box>
        <Box ref={contactRef}>
          <Contact />
        </Box>
      </Box>
    </>
  );
}
