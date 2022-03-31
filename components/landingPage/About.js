import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// About section

export default function About() {
  return (
    <Box
      className="center"
      sx={{
        width: "100%",
        backgroundColor: "background.secondary",
        my: "50px",
      }}
    >
      <Box
        className="center properWidth"
        sx={{
          textAlign: "center",
          my: "50px",
        }}
      >
        <Typography
          fontWeight="500"
          fontFamily="Montserrat, sans-serif"
          fontSize="36px"
          sx={{ pb: "30px" }}
        >
          AI For Recruitment
        </Typography>
        <Typography fontSize="18px" fontWeight="300" lineHeight="36px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
    </Box>
  );
}
