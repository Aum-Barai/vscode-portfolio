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
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Handle theme
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }

    // Hide scrollbar during loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isLoading]);

  // Function to handle when loading is complete
  const handleFinishLoading = () => {
    setIsLoading(false);
    // Delay showing content for smooth transition
    setTimeout(() => setIsContentVisible(true), 500);
  };

  return (
    <>
      {isLoading && <LoadingScreen finishLoading={handleFinishLoading} />}
      <div style={{ visibility: isContentVisible ? "visible" : "hidden" }}>
        <Layout>
          <Head title={`Aum Barai | ${pageProps.title}`} />
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
