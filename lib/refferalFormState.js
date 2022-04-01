import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";

// this a context made to mange state of the refferal form

function FormStateProvider({ children }) {
  // formData consists of all the form data as an object which contain two keys value and error which consists of the data represened by the key.

  const [formData, setFormData] = useState({
    name: {
      value: "",
      error: null,
    },
    email: {
      value: "",
      error: null,
    },
    phone: {
      value: "",
      error: null,
    },
    alternativePhone: {
      value: "",
      error: null,
    },
    linkedin: {
      value: "",
      error: null,
    },
    experience: {
      value: "0",
      error: null,
    },

    currentCompany: {
      value: "",
      error: null,
    },
    currentDesignation: {
      value: "",
      error: null,
    },
    currentCompanyStartDate: {
      value: "",
      error: null,
    },
    currentDesignation: {
      value: "",
      error: null,
    },
    highestQualification: {
      value: "",
      error: null,
    },
    subjectArea: {
      value: "",
      error: null,
    },
    institute: {
      value: "",
      error: null,
    },
    gradYear: {
      value: "",
      error: null,
    },
    currentCTC: {
      value: "",
      error: null,
    },
    expectedCTC: {
      value: "",
      error: null,
    },
    salaryNegotiable: {
      value: "",
      error: null,
    },
    servingNoticePeriod: {
      value: "",
      error: null,
    },
    noticePeriod: {
      value: "",
      error: null,
    },
    noticePeriodNegotiable: {
      value: "",
      error: null,
    },
    holdingOffer: {
      value: "",
      error: null,
    },
    bestOffer: {
      value: "",
      error: null,
    },
    reason: {
      value: "",
      error: null,
    },
    skills: {
      value: "",
      error: null,
    },
    coverLetter: {
      value: "",
      error: null,
    },
    resume: {
      value: "",
      error: null,
    },
  });

  // checks if there is any error in the input fields

  function checkError(key, value) {
    // check if the field is empty
    if (!value || value === "") {
      return { value: value, error: "This field cannot be empty" };
    }
    // checks if it's a correct email
    if (key === "email") {
      const isGood = isEmail(value);
      if (!isGood) {
        return { value: value, error: "This is not a proper email address" };
      }
    }
    // checks if it's a correct phone number
    if (key === "phone") {
      const isGood = isMobilePhone(value);
      if (!isGood) {
        return { value: value, error: "This is not a proper mobile number" };
      }
    }
    return { value: value, error: null };
  }

  function validate() {
    // it checks if there is any empty field
    Object.keys(formData).forEach((key) => {
      if (formData[key].value === "") {
        formData[key].error = "This field cannot be empty";
        setFormData(formData);
      }
    });
  }

  // checks if the form can be submitted
  function canSubmit() {
    var can = true;
    Object.keys(formData).forEach((key) => {
      if (formData[key].error) {
        can = false;
      }
    });
    return can;
  }

  // it updates the form on change event
  function updateForm(key, value) {
    const newData = checkError(key, value);
    formData[key] = newData;
    setFormData(formData);
  }

  // it return the form data
  const getFormData = (key) => {
    return formData[key];
  };

  // all these functions are sent to the provider

  return (
    <LocalStateProvider
      value={{ getFormData, updateForm, validate, canSubmit }}
    >
      {children}
    </LocalStateProvider>
  );
}

// A custom hook is made to access the local state

function useForm() {
  // we use a consumer here to acess the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { FormStateProvider, useForm };
