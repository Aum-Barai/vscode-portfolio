/** @format */

import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import { Analytics } from "@vercel/analytics/react";
import LoadingScreen from "../components/LoadingScreen";
import "../styles/globals.css";
import "../styles/themes.css";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen finishLoading={() => setIsLoading(false)} />}
      <Layout>
        <Head title={`Aum Barai | ${pageProps.title}`} />
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}

export default MyApp;
