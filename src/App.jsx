import { useState } from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import Cover from './assets/Cover.svg'

function App() {

  return (
    <>
      <Navbar />
      <img src={Cover} alt="Cover" className='absolute right-0 top-0 -z-[9999]'/>
      {/* <div className='bg-[url("./assets/Cover.svg")]'></div> */}
      <Hero />
    </>
  )
}

export default App
