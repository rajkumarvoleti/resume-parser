import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Screening from "../images/screening.svg";

const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  ".item": {
    width: "450px",
    mx: "20px",
  },
  ".item > *": {
    textAlign: { lg: "left", xs: "center" },
  },
};

export default function Feature({ left }) {
  return (
    <Box
      className="properWidth"
      sx={{ ...style, flexDirection: `${left ? "row" : "row-reverse"}` }}
    >
      <Box className="item" sx={{ width: "100%" }}>
        <Image src={Screening} alt="Screening" width="480px" />
      </Box>
      <Box className="item center" sx={{ textAlign: "center" }}>
        <Typography
          fontFamily="Montserrat, sans-serif"
          fontSize="30px"
          fontWeight="700"
          lineHeight="48px"
        >
          Find Right Candidates For Right Job Using AI For Resume Screening
        </Typography>
        <Typography
          fontFamily="Montserrat, sans-serif"
          fontSize="16px"
          fontWeight="300"
          lineHeight="30px"
          color="text.secondary"
          my="30px"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
          autem. Animi doloremque harum eos cupiditate unde suscipit voluptate
          libero earum asperiores maiores. Doloremque iusto itaque fugiat
          reiciendis cum voluptatum consequuntur? Fugit, quia blanditiis cumque
          obcaecati rerum nihil. Dolorem minus consectetur iste eaque inventore
          saepe distinctio, ab at adipisci rem aliquid, esse, corrupti
          perspiciatis laborum eveniet. Dolor esse vel suscipit consequatur!
        </Typography>
      </Box>
    </Box>
  );
}
