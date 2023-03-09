import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import React from "react";

function MyApp({Component,pageProps}) {
  return (
    <>
    
        <Navbar/>
        <Component {...pageProps} />

        <Footer/>
    </>
  );
}

export default MyApp;
