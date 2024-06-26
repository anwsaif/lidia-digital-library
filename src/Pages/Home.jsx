import React, { useEffect, useState } from "react";
import Navbar from "../Sections/Navbar";
import Hero from "../Sections/Hero";
import Features from "../Sections/Features";
import Services from "../Sections/Services";
import Reviews from "../Sections/Reviews";
import Location from "../Sections/Location";
import Footer from "../Sections/Footer";
import { clearPreloader } from '../Functions/clearPreloader'

function Home() {
  useEffect(() => {
    clearPreloader()
  }, [])
  return (
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
  );
}

export default Home;
