import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import inViewport from "in-viewport";
import { useEffect, useRef, useState } from "react";
import { useForm } from "../../lib/refferalFormState";

// AutoComplete UI

export default function AutoCompleteInput({ placeHolder, name, options }) {
  const [data, setData] = useState({ value: "", error: null });
  const { getFormData, updateForm, validate } = useForm();
  const inputRef = useRef(null);

  // data consists of the data present in the input field and handleChange function handles the changes in the input field

  const handleChange = (e) => {
    updateForm(name, e.target.value);
    const formData = getFormData(name);
    setData(formData);
  };

  // hanleEnter makes the form scroll to the next input if there is no error in the current input

  const handleEnter = (e) => {
    if (e.code === "Enter" && inViewport(inputRef.current)) {
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

  // please check the documentation of MUI Autocomplete for furthere details

  return (
    <Autocomplete
      freeSolo
      disablePortal
      options={options}
      onSelect={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          ref={inputRef}
          error={data.error !== null}
          helperText={data.error}
          onChange={handleChange}
          InputProps={{
            ...params.InputProps,
            style: {
              fontSize: "25px",
              fontWeight: "300",
              color: "text.secondary",
            },
          }}
          sx={{ fontSize: "50px" }}
          fullWidth
          variant="standard"
          placeholder={placeHolder}
        />
      )}
    />
  );
}
