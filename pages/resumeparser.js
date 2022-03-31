import Box from "@mui/material/Box";
import AppBarComp from "../components/AppBarComp";
import BigCircle from "../components/BigCircle";
import Head from "next/head";

// resume parser page
// functionality is not ready yet

export default function resumeParserPage() {
  return (
    <>
      <Head>
        <title>Resume Parser</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box>
        <AppBarComp />
        <Box className="center" sx={{ height: "80vh" }}>
          <BigCircle />
        </Box>
      </Box>
    </>
  );
}
