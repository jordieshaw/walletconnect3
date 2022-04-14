import Layout from "../components/Layout";
import 'tailwindcss/tailwind.css'
import "../styles/globals.css";
import "@material-tailwind/react/tailwind.css";
import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const appTheme = createContext('')
function MyApp({ Component, pageProps }) {
  const [theme, setValue] = useLocalStorage('theme', 'dark')
  console.log(theme)
  return (
    <appTheme.Provider value={{ theme, setTheme: setValue }}>
      <Layout id={theme}>
        <Component {...pageProps} />
      </Layout>
    </appTheme.Provider>
  );
}

export default MyApp;
