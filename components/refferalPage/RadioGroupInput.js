import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { useForm } from "../../lib/refferalFormState";

export default function RadioGroupInput({ name }) {
  const [data, setData] = React.useState({ value: "0", error: null });
  // data consists of the data present in the input field and handleChange function handles the changes in the input field
  const { getFormData, updateForm } = useForm();
  // please check useForm function in lib for better understaning of the hook

  const handleChange = (e) => {
    updateForm(name, e.target.value);
    const formData = getFormData(name);
    setData(formData);
  };

  // please check the documentation of MUI for respective components used below for further details.

  return (
    <FormControl>
      <RadioGroup onChange={handleChange} value={data.value}>
        <FormControlLabel
          value="0"
          control={<Radio size="medium" sx={{ color: "darkBlue1" }} />}
          label={
            <Typography
              fontSize="22px"
              sx={{ pl: "10px" }}
              color="text.secondary"
            >
              Fresher
            </Typography>
          }
        />
        <FormControlLabel
          value="1-4"
          control={<Radio size="medium" sx={{ color: "darkBlue1" }} />}
          label={
            <Typography
              fontSize="22px"
              sx={{ pl: "10px" }}
              color="text.secondary"
            >
              1 - 4
            </Typography>
          }
        />
        <FormControlLabel
          value="4-7"
          control={<Radio size="medium" sx={{ color: "darkBlue1" }} />}
          label={
            <Typography
              fontSize="22px"
              sx={{ pl: "10px" }}
              color="text.secondary"
            >
              4 - 7
            </Typography>
          }
        />
        <FormControlLabel
          value="7-10"
          control={<Radio size="medium" sx={{ color: "darkBlue1" }} />}
          label={
            <Typography
              fontSize="22px"
              sx={{ pl: "10px" }}
              color="text.secondary"
            >
              7 - 10
            </Typography>
          }
        />
        <FormControlLabel
          value="10+"
          control={<Radio size="medium" sx={{ color: "darkBlue1" }} />}
          label={
            <Typography
              fontSize="22px"
              sx={{ pl: "10px" }}
              color="text.secondary"
            >
              10+
            </Typography>
          }
        />
      </RadioGroup>
      {data.error !== null && <Typography>*please select an option</Typography>}
    </FormControl>
  );
}
