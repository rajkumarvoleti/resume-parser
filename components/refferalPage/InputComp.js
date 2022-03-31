import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useRef } from "react";
import inViewPort from "in-viewport";
import scroller from "react-scroll/modules/mixins/scroller";
import { useForm } from "../../lib/refferalFormState";

// Input component is made to manage all the inputs in the form.

// Page ids here are used so that scroll To function works properly. If one wants to add items to a form please add that id in here in correct order

const pageIds = [
  "#welcome",
  "#name",
  "#email",
  "#phone",
  "#role",
  "#experience",
  "#resume",
  "#thankyou",
];

// Input component takes question, name, desc, number, children as props and children cn be any type of input like text input or Auto Complete input

export default function InputComp({ question, name, desc, number, children }) {
  const buttonRef = useRef(null);
  const { getFormData, validate, canSubmit } = useForm();

  // please check useForm function in lib for better understaning of the hook

  // moveToNextInput helps to move to the next input after validating the current input

  const moveToNextInput = () => {
    validate();
    // as resume is the last input after uploading the resume it directly submits the form instead of moving to the next input
    if (name === "resume") {
      if (canSubmit()) alert("Submitted");
      else alert("fill properly");
    }

    // we need to check if there is any error in the current input. If there is a error we will display the error and return the function
    const data = getFormData(name);
    if (data.error) return;
    // else we will scrol to the next input
    setTimeout(() => {
      scroller.scrollTo(pageIds[number + 1], {
        smooth: true,
      });
    }, 100);
  };

  // hanleEnter makes the form scroll to the next input if there is no error in the current input

  const handleEnter = (e) => {
    if (e && e.code !== "Enter") return;
    if (inViewPort(buttonRef.current)) moveToNextInput();
  };

  // An event Listener is added to listen to the "enter" keydown event

  useEffect(() => {
    window.addEventListener("keydown", handleEnter);
    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "700px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      id={name}
      name={`#${name}`}
    >
      <Box sx={{ display: "flex", p: { xs: "10px", lg: "50px" } }}>
        <Typography color="text.secondary" sx={{ pt: "20px", px: "20px" }}>
          {number}🠖
        </Typography>
        <Box sx={{ ">*": { my: "20px" }, width: "100%" }}>
          <Typography
            fontSize="50px"
            lineHeight="60px"
            sx={{ mb: "40px" }}
            fontWeight="300"
          >
            {question}
          </Typography>
          <Typography>{desc}</Typography>
          {children}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              id={`${name}btn`}
              ref={buttonRef}
              variant="contained"
              className="blueButton"
              sx={{ mt: "30px", fontSize: "16px" }}
              onClick={moveToNextInput}
            >
              <Typography sx={{ pr: "10px" }}>
                {name == "resume" ? "submit" : "Ok"}
              </Typography>{" "}
              ✔
            </Button>
            <Typography sx={{ pt: "25px", pl: "10px" }}>
              press Enter ↵
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
