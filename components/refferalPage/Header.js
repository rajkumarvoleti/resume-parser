import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import { scroller } from "react-scroll";
import AppBarComp from "../AppBarComp";

// header component in the refferal page

export default function Header({ scrollTo }) {
  // scroll To function helps to scroll to the particular section of a page. More information about this can be obtained in it's parent component
  return (
    <Box id="welcome" sx={{ height: "100vh" }}>
      <Box className="center">
        <AppBarComp scrollTo={scrollTo} />
        <Box
          className="center"
          sx={{
            width: "840px",
            maxWidth: "95vw",
            textAlign: "center",
            mt: { xs: "20px", sm: "40px", lg: "60px" },
          }}
        >
          <Typography
            fontWeight="700"
            fontFamily="Montserrat, sans-serif"
            sx={{
              letterSpacing: "0.3px",
              lineHeight: { xs: "60px", lg: "90px" },
              fontSize: { xs: "36px", lg: "64px" },
              mb: "30px",
            }}
          >
            Welcome to Thanks Buddy! Referral Form
          </Typography>

          <Typography
            fontSize="17px"
            textAlign="center"
            sx={{ color: "text.secondary", lineHeight: "30px" }}
            component="body2"
          >
            Thanks Buddy! is a peer to peer hiring network where we aim to match
            and refer your profile to hiring managers currently recruiting for
            positions suitable to your experience and expertise. Please fill up
            this short form to help us know you better and don't forget to drop
            your resume!
          </Typography>
          <br />
          <Typography
            fontSize="17px"
            textAlign="center"
            sx={{ color: "text.secondary", lineHeight: "30px", mb: "30px" }}
            component="body2"
          >
            Wish you all the very best for your job search!
          </Typography>
          <Button
            sx={{
              width: { xs: "80%", lg: "300px" },
              my: { xs: "10px", lg: 0 },
              height: "45px",
            }}
            text="Continue"
            className="blueButton"
            variant="contained"
            onClick={() =>
              setTimeout(() => {
                scroller.scrollTo("#name", {
                  smooth: true,
                });
              }, 100)
            }
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
