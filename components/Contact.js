import { Box, Typography, TextField, Button } from "@mui/material";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import ContactImg from "../images/contact.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <Box
      className="center"
      sx={{
        width: "100%",
        backgroundColor: "background.secondary",
        py: "50px",
      }}
    >
      <Box
        className="center properWidth"
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Box
          className="center"
          sx={{
            display: { lg: "flex", xs: "block" },
            width: "480px",
            maxWidth: "95vw",
          }}
        >
          <Image
            src={ContactImg.src}
            alt="contact"
            width="480px"
            height="300px"
          />
        </Box>
        <Box className="center" sx={{ width: "480px", maxWidth: "95vw" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "40px",
              fontWeight: "500",
            }}
          >
            Contact Us
          </Typography>
          <Box sx={{ width: "100%", my: "30px" }} className="center">
            <TextField
              variant="outlined"
              size="small"
              label="Name"
              sx={{
                width: "100%",
                backgroundColor: "white",
                m: "10px",
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Email"
              sx={{
                width: "100%",
                backgroundColor: "white",
                m: "10px",
              }}
            />
            <TextField
              variant="outlined"
              label="Message"
              sx={{
                width: "100%",
                backgroundColor: "white",
                m: "10px",
              }}
              multiline
              rows={4}
            />
            <Button
              className="centerR blueButton"
              sx={{
                mt: "20px",
                width: "150px",
                fontSize: "16px",
              }}
              variant="contained"
              color="primary"
            >
              Send <SendIcon sx={{ ml: "10px", fontSize: "20px" }} />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "500px",
          maxWidth: "95vw",
          justifyContent: "space-around",
          mt: "50px",
        }}
      >
        <LinkedInIcon sx={{ fontSize: "35px" }} color="primary" />
        <EmailIcon sx={{ fontSize: "35px" }} color="error" />
        <FacebookIcon sx={{ fontSize: "35px" }} color="primary" />
      </Box>
    </Box>
  );
}
