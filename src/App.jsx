import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import Features from './Sections/Features'
import Services from './Sections/Services'
import Reviews from './Sections/Reviews'
import Location from './Sections/Location'
import Footer from './Sections/Footer'

function App() {

  return (
    <>
      <div className="relative min-h-[97vh]">
        <div className='absolute right-0 top-0 h-[26rem] w-[75vw] bg-[url("./assets/Cover.svg")] bg-cover bg-no-repeat min-[516px]:w-[64vw] sm:w-[55vw] md:h-[107vh] lg:max-w-[37.875rem] xl:h-[130vh] xl:max-w-none '></div>
        <Navbar />
        <Hero />
      </div>
      <Features />
      <Services />
      <Reviews />
      <Location />
      <Footer />
    </>
  )
}

export default App
