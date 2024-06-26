import { Divide as Hamburger } from 'hamburger-react'
import { useEffect, useRef, useState } from 'react'
import logo from '../assets/images/logo/Logo.svg'
import FeatherIcon from 'feather-icons-react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const [isOpen, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(
    () => {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },
    []
  )

  const handleScroll = () => {
    if (window.scrollY > 104) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  const [nav, setNav] = useState(null)
  useEffect(() => {
    const n = document.querySelector('nav')
    if(n) setNav(n)
  }, [])

  const onHamburgerClickHandler = (isToggled) => {
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
    <>
    <header className={'duration-600 fixed z-20 w-full bg-white bg-opacity-90  backdrop-blur-lg transition ease-in-out '+ (isScrolled ? 'lg:bg-white lg:bg-opacity-80 lg:backdrop-blur-lg' : 'lg:bg-transparent lg:backdrop-blur-0')}>
      <div className="container mx-auto p-2 xl:px-10 xl:py-7">
        <div className="flex items-center justify-between md:p-3 lg:gap-4 lg:px-0 xl:gap-12 2xl:gap-28">
          <div className="z-50 lg:hidden" >
          <Hamburger onToggle={onHamburgerClickHandler} toggled={isOpen} toggle={setOpen} size={24} />
          </div>
          <a href="/#" title='Home Page' className='hover:opacity-100'>
            <img src={logo} alt="Lidia" className='rounded-[1.25rem] px-[0.625rem] py-2 lg:px-0'/>
          </a>
          <nav className='absolute left-0 top-0 z-10 hidden h-screen w-screen items-center justify-center bg-white opacity-0 transition duration-300 ease-in-out lg:static lg:left-auto lg:top-auto lg:flex lg:h-auto lg:w-auto lg:bg-transparent lg:opacity-100'>
            <ul className='flex flex-col justify-between gap-6 lg:flex-row lg:gap-10'>
              <li>
                <a href="#features" onClick={onNavLinkClickHandler}>Features</a></li>
              <li>
                <a href="#services" onClick={onNavLinkClickHandler}>Services</a></li>
              <li>
                <a href="#reviews" onClick={onNavLinkClickHandler}>Reviews</a></li>
              <li>
                <a href="#location" onClick={onNavLinkClickHandler}>Location</a></li>
            </ul>
          </nav>
          <Link to={'/login'} className={'rounded-[0.625rem] lg:ml-auto ' + (isScrolled ? 'lg:bg-primary lg:text-white' : 'lg:bg-white lg:text-heading')} title='Login'>
            <FeatherIcon icon='log-in' className='mr-2 lg:hidden' />
            <span className='mx-12 my-2 hidden font-bold leading-6 lg:block'>Login</span>
          </Link>
        </div>
      </div>
    </header>
    <a href='#' className={'duration-400 fixed bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary transition ease-in hover:opacity-100 ' + (isScrolled ? 'z-10 opacity-100' : '-z-40 opacity-0')}>
      <FeatherIcon icon='arrow-up' className='text-white' />
    </a>
    </>
  )
}

export default Navbar
