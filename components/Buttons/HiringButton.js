import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// this button is used to redirect user to resume parser website

export default function HiringButton({ scrollTo }) {
  return (
    <Box>
      <Button
        onClick={() => scrollTo("Contact Us")}
        sx={{
          width: { xs: "100%", lg: "200px" },
          my: { xs: "10px", lg: 0 },
          height: "45px",
        }}
        variant="contained"
        className="blueButton"
      >
        I'm Hiring
      </Button>
    </Box>
  );
}
