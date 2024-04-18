import { Divide as Hamburger } from 'hamburger-react'
import { useEffect, useRef, useState } from 'react'
import logo from '../assets/images/logo/Logo.svg'
import FeatherIcon from 'feather-icons-react'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  const [nav, setNav] = useState(null)
  useEffect(() => {
    const n = document.querySelector('nav')
    if(n) setNav(n)
  }, [])

  const onHamburgerClickHandler = (isToggled) => {
    console.log(isToggled)
    if(isToggled) {
      nav.classList.replace('hidden', 'flex')
      setTimeout(() => {
        nav.classList.replace('opacity-0', 'opacity-100')
      }, 50)
    } else {
      nav.classList.replace('opacity-100','opacity-0')
      setTimeout(() => {
        nav.classList.replace('flex','hidden')
      }, 350)
    }
  }
  
  const onNavLinkClickHandler = () => {
    document.querySelector('.hamburger-react').click()
  }

  return (
    <header className='bg-white bg-opacity-80 backdrop-blur-lg lg:bg-transparent lg:backdrop-blur-0'>
      <div className="container mx-auto p-2 xl:px-10 xl:py-7">
        <div className="flex items-center justify-between md:p-3 lg:gap-4 lg:px-0 xl:gap-12 2xl:gap-28">
          <div className="z-50 lg:hidden" >
          <Hamburger onToggle={onHamburgerClickHandler} toggled={isOpen} toggle={setOpen} size={24} />
          </div>
          <img src={logo} alt="Lidia" className='rounded-[1.25rem] px-[0.625rem] py-2 lg:px-0'/>
          <nav className='absolute left-0 top-0 z-10 hidden h-screen w-screen items-center justify-center bg-white opacity-0 transition duration-300 ease-in-out lg:static lg:left-auto lg:top-auto lg:flex lg:h-auto lg:w-auto lg:bg-transparent lg:opacity-100'>
            <ul className='flex flex-col justify-between gap-6 lg:flex-row lg:gap-10'>
              <li>
                <a href="#features" onClick={onNavLinkClickHandler}>Features</a></li>
              <li>
                <a href="#services">Services</a></li>
              <li>
                <a href="#reviews">Reviews</a></li>
              <li>
                <a href="#location">Location</a></li>
            </ul>
          </nav>
          <button className='rounded-[0.625rem] lg:ml-auto lg:bg-white'>
            <FeatherIcon icon='log-in' className='mr-2 lg:hidden' />
            <span className='mx-12 my-2 hidden font-bold leading-6 text-heading lg:block'>Login</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
