import TextField from "@mui/material/TextField";
import { useEffect, useRef, useState } from "react";
import { useForm } from "../../lib/refferalFormState";
import inViewPort from "in-viewport";

export default function TextInput({ placeHolder, name, type }) {
  const [data, setData] = useState({ value: "", error: null });
  // data consists of the data present in the input field and handleChange function handles the changes in the input field
  const { getFormData, updateForm, validate } = useForm();
  // please check useForm function in lib for better understaning of the hook
  const inputRef = useRef(null);

  const handleChange = (e) => {
    updateForm(name, e.target.value);
    const formData = getFormData(name);
    setData(formData);
  };

  // hanleEnter makes the form scroll to the next input if there is no error in the current input

  const handleEnter = (e) => {
    if (e.code === "Enter" && inViewPort(inputRef.current)) {
      validate();
      const formData = getFormData(name);
      setData(formData);
    }
  };

  // An event Listener is added to listen to the "enter" keydown event

  useEffect(() => {
    window.addEventListener("keydown", handleEnter);
    return () => {
      window.addEventListener("keydown", handleEnter);
    };
  }, []);

  // please check the MUI documentation for the textField component

  return (
    <TextField
      ref={inputRef}
      onChange={handleChange}
      error={data.error !== null}
      type={type || ""}
      helperText={data.error}
      sx={{ fontSize: "50px" }}
      fullWidth
      variant="standard"
      placeholder={placeHolder}
      inputProps={{
        style: {
          fontSize: "25px",
          fontWeight: "300",
          color: "text.secondary",
        },
      }}
    />
  );
}
