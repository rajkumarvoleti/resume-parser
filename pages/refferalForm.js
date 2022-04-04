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
import DateInput from "../components/refferalPage/DateInput";

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
              question="Alternative phone number?"
              name="alternativePhone"
              desc=""
              number={4}
            >
              <PhoneInput
                placeHolder="Type your phone number here"
                name="alternativePhone"
              />
            </InputComp>

            <InputComp
              question="LinkedIn profile link"
              name="linkedin"
              desc=""
              number={5}
            >
              <TextInput placeHolder="your answer" name="linkedin" />
            </InputComp>

            <InputComp
              question="How many years of relevant experience do you have ?"
              name="experience"
              desc=""
              number={6}
            >
              <RadioGroupInput
                name="experience"
                options={["Fresher", "1 - 4", "4 - 7", "7 - 10", "10 +"]}
              />
            </InputComp>

            <InputComp
              question="Current company name"
              name="currentCompany"
              desc="(if Freshers/currently not working, please fill NA)"
              number={7}
            >
              <TextInput
                placeHolder="Type your answer here"
                name="currentCompany"
              />
            </InputComp>

            <InputComp
              question="Current Company Designation "
              name="currentDesignation"
              desc="(if Freshers/currently not working, please fill NA)"
              number={8}
            >
              <TextInput
                placeHolder="Type your answer here"
                name="currentDesignation"
              />
            </InputComp>

            <InputComp
              question="Current Company start date "
              name="currentCompanyStartDate"
              desc="(if Freshers/currently not working, please leave this field empty)"
              number={9}
            >
              <DateInput
                placeHolder="Type your answer here"
                name="currentCompanyStartDate"
                views={["month", "year"]}
                format={"MM/yyyy"}
              />
            </InputComp>

            <InputComp
              question="Highest Qualification"
              name="highestQualification"
              desc=""
              number={10}
            >
              <AutoCompleteInput
                options={[
                  "BS/BE/B.Tech",
                  "MS/ME/M.Tech",
                  "PHD",
                  "MBA",
                  "PG Diploma",
                ]}
                placeHolder="Type or select an option"
                name="highestQualification"
              />
            </InputComp>

            <InputComp
              question="Highest qualification subject area"
              name="subjectArea"
              desc=""
              number={11}
            >
              <TextInput placeHolder="your answer" name="subjectArea" />
            </InputComp>

            <InputComp
              question="Highest qualification institute"
              name="institute"
              desc=""
              number={12}
            >
              <TextInput placeHolder="your answer" name="institute" />
            </InputComp>

            <InputComp
              question="Highest qualification graduation year"
              name="gradYear"
              desc=""
              number={13}
            >
              <DateInput
                placeHolder="Type your answer here"
                name="gradYear"
                views={["year"]}
                format={"yyyy"}
              />
            </InputComp>

            <InputComp
              question="Current CTC (in LPA) "
              name="currentCTC"
              desc="if freshers, then 0.If not working then last drawn salary]"
              number={14}
            >
              <TextInput
                placeHolder="your answer"
                name="currentCTC"
                type={"number"}
              />
            </InputComp>

            <InputComp
              question="Expected CTC(in LPA "
              name="expectedCTC"
              desc=""
              number={15}
            >
              <TextInput
                placeHolder="your answer"
                name="expectedCTC"
                type={"number"}
              />
            </InputComp>

            <InputComp
              question="Is the expected salary negotiable?"
              desc=""
              name="salaryNegotiable"
              number={16}
            >
              <RadioGroupInput
                name="salaryNegotiable"
                options={["Yes", "No"]}
              />
            </InputComp>

            <InputComp
              question="Are you serving notice period?"
              desc=""
              name="servingNoticePeriod"
              number={17}
            >
              <RadioGroupInput
                name="servingNoticePeriod"
                options={["Yes", "No", "Out of job"]}
              />
            </InputComp>

            <InputComp
              question="Notice Period (in days) "
              name="noticePeriod"
              desc="if you are currently serving your notice period, please mention the remaining days"
              number={18}
            >
              <TextInput
                placeHolder="your answer"
                name="noticePeriod"
                type={"number"}
              />
            </InputComp>

            <InputComp
              question="Is the notice period negotiable?"
              desc=""
              name="noticePeriodNegotiable"
              number={19}
            >
              <RadioGroupInput
                name="noticePeriodNegotiable"
                options={[
                  "Yes",
                  "No",
                  "Buyout option possible",
                  "Not applicable",
                ]}
              />
            </InputComp>

            <InputComp
              question="Are you holding any offer?"
              desc=""
              name="holdingOffer"
              number={20}
            >
              <RadioGroupInput name="holdingOffer" options={["Yes", "No"]} />
            </InputComp>

            <InputComp
              question="If yes, what is the best offer?"
              name="bestOffer"
              desc=""
              number={21}
            >
              <TextInput
                placeHolder="your answer"
                name="bestOffer"
                type={"number"}
              />
            </InputComp>

            <InputComp
              question="Reason for change ?"
              name="reason"
              desc=""
              number={22}
            >
              <TextInput placeHolder="your answer" name="reason" />
            </InputComp>

            <InputComp
              question="Skillset"
              name="skills"
              desc="Type top 5 skills that describe you the best (comma separated)"
              number={23}
            >
              <TextInput placeHolder="your answer" name="skills" />
            </InputComp>

            <InputComp
              question="Cover Letter"
              name="coverLetter"
              desc=""
              number={24}
            >
              <TextInput placeHolder="your answer" name="coverLetter" />
            </InputComp>

            <InputComp
              question="Drop your resume here."
              name="resume"
              desc=""
              number={25}
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
