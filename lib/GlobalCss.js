import GlobalStyles from "@mui/material/GlobalStyles";

// these are all the global css rules applied to this website

const styles = {
  ".center": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  ".centerR": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
  "svg.margin": {
    width: "30px",
    height: "auto",
  },
};

export default function GlobalCss() {
  return <GlobalStyles styles={styles} />;
}
