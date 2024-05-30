import React from 'react'
import Navbar from '../Sections/Navbar'
import Hero from '../Sections/Hero'
import Features from '../Sections/Features'
import Services from '../Sections/Services'
import Reviews from '../Sections/Reviews'
import Location from '../Sections/Location'
import Footer from '../Sections/Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features />
      <Services />
      <Reviews />
      <Location />
      <Footer />
    </>
  )
}

export default Home