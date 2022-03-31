import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// thank you ui

export default function Thankyou() {
  return (
    <Box
      className="center"
      sx={{
        width: "840px",
        maxWidth: "95vw",
        textAlign: "center",
        mt: { xs: "20px", sm: "40px", lg: "60px" },
        height: "60vh",
      }}
      id="thankyou"
      name="#thankyou"
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
        THANK YOU
      </Typography>

      <Typography
        fontSize="17px"
        textAlign="center"
        sx={{ color: "text.secondary", lineHeight: "30px" }}
        component="body2"
      >
        Thanks for filling out the form. We will reach out to you once we find a
        good match.
      </Typography>
      <br />
    </Box>
  );
}
