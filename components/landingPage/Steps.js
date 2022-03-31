import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Step from "./Step";

// steps UI

export default function Steps() {
  return (
    <Box className="center" sx={{ width: "1000px", maxWidth: "95vw" }}>
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "40px",
            fontWeight: "500",
          }}
        >
          How It Works
        </Typography>
        <Typography
          fontFamily="Montserrat, sans-serif"
          fontSize="16px"
          fontWeight="300"
          lineHeight="30px"
          color="text.secondary"
          my="30px"
          textAlign="center"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat
          ea consectetur nulla sint quia quibusdam nesciunt ipsa deserunt alias
          provident magnam quos aspernatur quo fuga, distinctio itaque pariatur
          neque.
        </Typography>
      </Box>
      <Grid container className="center">
        <Grid item>
          <Step />
        </Grid>
        <Grid item>
          <Step />
        </Grid>
        <Grid item>
          <Step />
        </Grid>
        <Grid item>
          <Step />
        </Grid>
      </Grid>
    </Box>
  );
}
