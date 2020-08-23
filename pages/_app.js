import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Particle from "../components/Particle";
import Navbar from "../components/materialUi/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="./logott.ico" type="image/x-icon"></link>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />
      <Particle />
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
