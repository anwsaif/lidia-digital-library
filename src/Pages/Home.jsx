import React, { useEffect, useState } from "react";
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
  useEffect(() => {

    const preloader = document.getElementById('preloader')
    if(preloader){
      setTimeout(() => {
        setScreenLoading(false)
      })
      setTimeout(() => {
        preloader.style.opacity = 0
        document.getElementsByTagName('body')[0].style.position = 'static'
        document.getElementsByTagName('body')[0].style.overflowY = 'auto'
        setTimeout(() => {
          preloader.style.display = 'none'
        }, 1000)
      }, 1000)
    }
  }, [])
  return (
    <>
    <Cube color="rgb(68, 117, 242)" />
      {!screenLoading && (
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
      ) }
    </>
  );
}

export default Home;
