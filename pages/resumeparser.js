import { Box } from "@mui/material";
import AppBarComp from "../components/AppBarComp";
import BigCircle from "../components/BigCircle";

export default function resumeParserPage() {
  return (
    <Box>
      <AppBarComp />
      <Box className="center" sx={{ height: "80vh" }}>
        <BigCircle />
      </Box>
    </Box>
  );
}
