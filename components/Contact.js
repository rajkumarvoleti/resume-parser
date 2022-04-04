import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import ContactImg from "../images/contact.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

// a simple contact form UI

export default function Contact() {
  const [data, setData] = useState({
    name: {
      value: "",
      error: null,
    },
    email: {
      value: "",
      error: null,
    },
    message: {
      value: "",
      error: null,
    },
  });

  const redirect = () => {
    alert("redirecting");
  };

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
        <IconButton>
          <Link href="https://www.linkedin.com/company/thanksbuddy/">
            <a target="_blank" rel="noopener noreferrer">
              <LinkedInIcon sx={{ fontSize: "45px" }} color="primary" />
            </a>
          </Link>
        </IconButton>
        <IconButton>
          <EmailIcon sx={{ fontSize: "45px" }} color="error" />
        </IconButton>
      </Box>
    </Box>
  );
}
