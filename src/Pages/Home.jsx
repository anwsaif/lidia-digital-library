import React, { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "../Sections/Navbar";
import Hero from "../Sections/Hero";
import Features from "../Sections/Features";
import Services from "../Sections/Services";
import Reviews from "../Sections/Reviews";
import Location from "../Sections/Location";
import Footer from "../Sections/Footer";
import { Cube } from "react-preloaders";

function Home() {
  const [screenLoading, setScreenLoading] = useState(true);
  useLayoutEffect(() => {
    document.getElementsByTagName('body')[0].style.position = 'static'
    document.getElementsByTagName('body')[0].style.overflowY = 'auto'
    setTimeout(() => {
      document.getElementById('preloader').style.opacity = 0
      setTimeout(() => {
        setScreenLoading(false);
      }, 1000)
    }, 2000);
  });
  return (
    <>
      {screenLoading ? (
        <Cube color="rgb(68, 117, 242)" />
      ) :'' }
        <>
          <Navbar />
          <div className="h-[84px] w-full max-lg:hidden xl:h-[124px]"></div>
          <Hero />
          <Features />
          <Services />
          <Reviews />
          <Location />
          <Footer />
        </>
    </>
  );
}

export default Home;
