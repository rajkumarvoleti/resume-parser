import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import AppBarComp from "../AppBarComp";
import HiringButton from "../Buttons/HiringButton";
import WorkButton from "../Buttons/WorkButton";

// header UI

export default function Header({ scrollTo }) {
  // scroll To function helps to scroll to the particular section of a page. More information about this can be obtained in it's parent component
  return (
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
          }}
        >
          Hire Top Candidates Faster With AI Recruiting Software
        </Typography>
        <Divider sx={{ my: "20px", width: "700px", maxWidth: "90vw" }} />
        <Typography
          fontSize="17px"
          textAlign="center"
          sx={{ color: "text.secondary", lineHeight: "30px" }}
          component="body2"
        >
          This is a modern AI Recruiting Software that automates the candidate
          sourcing, matches the right candidates to the right jobs, gives
          insight into your hiring process, and improves the quality of hire.
        </Typography>
        <Box
          sx={{
            my: "50px",
            width: "500px",
            maxWidth: "95vw",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <HiringButton />
          <WorkButton />
        </Box>
      </Box>
    </Box>
  );
}
