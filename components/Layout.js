import React, { useContext } from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { appTheme } from "../pages/_app";

const Layout = ({ children, id }) => {
  const { theme } = useContext(appTheme)
  console.log(theme)

  return (
    <div id={theme}>
      <Head>
        <title>walletconnect</title>
        <meta name="keywords" content="walletconnect official website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* // Material Icons Link */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        {/* // Font Awesome Link */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
      </Head>
      <div className={styles.minH}>
        <Navbar />
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
