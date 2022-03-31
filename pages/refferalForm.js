import { Box } from "@mui/material";
import AutoCompleteInput from "../components/refferalPage/AutoCompleteInput";
import FileInput from "../components/refferalPage/FileInput";
import Header from "../components/refferalPage/Header";
import PhoneInput from "../components/refferalPage/PhoneInput";
import RadioGroupInput from "../components/refferalPage/radioGroupInput";
import TextInput from "../components/refferalPage/TextInput";
import "@uppy/core/dist/style.css";
import "@uppy/drag-drop/dist/style.css";
import Thankyou from "../components/refferalPage/Thankyou";
import Contact from "../components/Contact";
import InputComp from "../components/refferalPage/InputComp";
import { FormStateProvider } from "../lib/refferalFormState";
import Head from "next/head";

// refferal form ui

export default function refferalFormPage() {
  // this contains all the questions in the form. To add a question please follow simmillar pattern as done below
  return (
    <>
      <Head>
        <title>Refferal Form!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FormStateProvider>
        <Box>
          <Header />
          <Box className="center" sx={{ "> *": { height: "100vh" } }}>
            <InputComp question="Your Name ?" name="name" desc="" number={1}>
              <TextInput placeHolder="Type your name here" name="name" />
            </InputComp>
            <InputComp
              question="Your Email Address?"
              name="email"
              desc=""
              number={2}
            >
              <TextInput
                placeHolder="Type your email address here"
                name="email"
              />
            </InputComp>
            <InputComp
              question="Your Phone Number?"
              name="phone"
              desc=""
              number={3}
            >
              <PhoneInput
                placeHolder="Type your phone number here"
                name="phone"
              />
            </InputComp>

            <InputComp
              question="Which kind role are you interested in ?"
              name="role"
              desc=""
              number={4}
            >
              <AutoCompleteInput
                placeHolder="Type or select an option"
                name="role"
              />
            </InputComp>

            <InputComp
              question="How many years of relevant experience do you have ?"
              name="experience"
              desc=""
              number={5}
            >
              <RadioGroupInput name="experience" />
            </InputComp>
            <InputComp
              question="Drop your resume here."
              name="resume"
              desc=""
              number={6}
            >
              <FileInput name="resume" />
            </InputComp>
            <Thankyou />
          </Box>
          <Contact />
        </Box>
      </FormStateProvider>
    </>
  );
}
