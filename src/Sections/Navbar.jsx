import { Divide as Hamburger } from 'hamburger-react'
import { useEffect, useRef, useState } from 'react'
import logo from '../assets/images/logo/Logo.svg'
import FeatherIcon from 'feather-icons-react'
import Cover from '../assets/Cover.svg'

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
      <div className="container mx-auto p-2 xl:px-24 xl:py-14">
        {/* <img src={Cover} alt="Cover" className='absolute -right-16 top-0 -z-[9999] transition ease-in-out 2xl:right-0'/> */}
        <div className="flex items-center justify-between md:p-3 lg:gap-12 xl:gap-28">
          <div className="z-50 md:hidden" >
          <Hamburger onToggle={onHamburgerClickHandler} toggled={isOpen} toggle={setOpen} size={24} />
          </div>
          <img src={logo} alt="Lidia" className='rounded-[1.25rem] px-[0.625rem] py-2'/>
          <nav className='absolute left-0 top-0 z-10 hidden h-screen w-screen items-center justify-center bg-white opacity-0 transition duration-300 ease-in-out md:static md:left-auto md:top-auto md:flex md:h-auto md:w-auto md:bg-transparent md:opacity-100'>
            <ul className='flex flex-col justify-between gap-6 md:flex-row lg:gap-10'>
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
          <button className='rounded-[0.625rem] md:bg-white lg:ml-auto'>
            <FeatherIcon icon='log-in' className='mr-2 md:hidden' />
            <span className='mx-12 my-2 hidden font-bold leading-6 text-heading md:block'>Login</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
