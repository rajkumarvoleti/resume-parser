import { createTheme } from "@mui/material/styles";

// check the mui themes section for better details

const lightTheme = createTheme({
  palette: {
    mode: "light",
    darkBlue1: "#00a8b5",
    darkBlue2: "#127681",
    background: {
      primary: "#fff",
      secondary: "#F2F5F9",
    },
    text: {
      primary: "#1F2C3C",
      secondary: "#3d4f66",
    },
  },
});

export default lightTheme;
