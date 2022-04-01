import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Screening from "../../images/Picture1.png";

// feature section

const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  my: "80px",
  ".item": {
    width: "450px",
    mx: "20px",
  },
};

export default function Feature({ left, src, children }) {
  // here the flexDirection of this components changes according to "left" prop
  return (
    <Box
      className="properWidth"
      sx={{
        ...style,
        flexDirection: `${left ? "row" : "row-reverse"}`,
      }}
    >
      <Box className="item center" sx={{ width: "100%" }}>
        <Image src={src} alt="Screening" />
      </Box>
      <Box className="item center" sx={{ textAlign: "center", m: "50px" }}>
        {children}
      </Box>
    </Box>
  );
}
