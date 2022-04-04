import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import HiringButton from "../Buttons/HiringButton";
import WorkButton from "../Buttons/WorkButton";

// Join us section

export default function Join({ scrollTo }) {
  return (
    <Box className="center">
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
          fontWeight="500"
          fontFamily="Montserrat, sans-serif"
          fontSize="40px"
        >
          Liked you've seen! or sounds so good to be true! Get in touch to hire
          or get hired the thanks buddy way!
        </Typography>
        {/* <Typography
          fontSize="17px"
          textAlign="center"
          sx={{ color: "text.secondary", lineHeight: "30px", my: "30px" }}
          component="body2"
        >
          This is a modern AI Recruiting Software that automates the candidate
          sourcing, matches the right candidates to the right jobs, gives
          insight into your hiring process, and improves the quality of hire.
        </Typography> */}
        <Box
          sx={{
            my: "30px",
            width: "500px",
            maxWidth: "95vw",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <HiringButton scrollTo={scrollTo} />
          <WorkButton />
        </Box>
      </Box>
    </Box>
  );
}
