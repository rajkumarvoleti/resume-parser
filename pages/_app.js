import React from "react";
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Router from "next/router";
import nProgress from "nprogress";
import createEmotionCache from "../lib/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import "../styles/nprogress.css";
import GlobalCss from "../lib/GlobalCss";

const clientSideEmotionCache = createEmotionCache();

// manages progress bar on route change. Please check the documentation of the nProgress for further details
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <GlobalCss />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
