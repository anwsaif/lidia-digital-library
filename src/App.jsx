import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'

function App() {

  return (
    <>
      <div className="relative min-h-[97vh]">
        <div className='absolute right-0 top-0 h-[26rem] w-[75vw] bg-[url("./assets/Cover.svg")] bg-cover bg-no-repeat min-[516px]:w-[64vw] sm:w-[55vw] md:h-[107vh] '></div>
      <Navbar />
      <Hero />
      </div>
    </>
  )
}

export default App
