import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import Features from './Sections/Features'
import Services from './Sections/Services'
import Reviews from './Sections/Reviews'
import Location from './Sections/Location'
import Footer from './Sections/Footer'
import { useEffect } from 'react'

// animation on scroll
import AOS from 'aos'
import 'aos/dist/aos.css'
// import 'aos/dist'

function App() {
  useEffect(() => {
    AOS.init({duration: 1200})
  })

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

export default App
