import inViewport from "in-viewport";
import MuiPhoneNumber from "material-ui-phone-number";
import { useEffect, useRef, useState } from "react";
import { useForm } from "../../lib/refferalFormState";

// phone input UI

export default function PhoneInput({ placeHolder, name }) {
  const [data, setData] = useState({ value: "", error: null });
  // data consists of the data present in the input field and handleChange function handles the changes in the input field
  const { getFormData, updateForm, validate } = useForm();
  // please check useForm function in lib for better understaning of the hook
  const inputRef = useRef(null);

  const handleChange = (value) => {
    updateForm(name, value);
    const formData = getFormData(name);
    setData(formData);
  };

  const handleEnter = (e) => {
    if (e.code === "Enter" && inViewport(inputRef.current.inputRef)) {
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

  // An event Listener is added to listen to the "enter" keydown event

  // please check the documentation of the material-ui-phone-number for further details about MuiPhoneNumber component used below

  return (
    <MuiPhoneNumber
      ref={inputRef}
      sx={{ fontSize: "50px" }}
      fullWidth
      variant="standard"
      autoFormat={false}
      placeholder="abc"
      onChange={handleChange}
      error={data.error !== null}
      helperText={data.error}
      inputProps={{
        style: {
          fontSize: "25px",
          fontWeight: "300",
          color: "text.secondary",
        },
      }}
      defaultCountry="in"
      regions={["asia"]}
    />
  );
}
