import GlobalStyles from "@mui/material/GlobalStyles";

const styles = {
  ".center": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  ".border": {
    border: "2px solid red",
  },
  ".properWidth": {
    width: "1000px",
    maxWidth: "95vw",
  },
  ".blueButton": {
    backgroundColor: "#00a8b5 !important",
    "&:hover": { backgroundColor: "#127681 !important" },
  },
};

export default function GlobalCss() {
  return <GlobalStyles styles={styles} />;
}
