import { Divide as Hamburger } from 'hamburger-react'
import { useEffect, useRef, useState } from 'react'
import logo from '../assets/images/logo/Logo.svg'
import FeatherIcon from 'feather-icons-react'

const Header = () => {
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
    <header>
      <div className="container mx-auto p-2">
        <div className="flex items-center justify-between">
          <div className="z-50" >
          <Hamburger onToggle={onHamburgerClickHandler} toggled={isOpen} toggle={setOpen} size={24} />
          </div>
          <img src={logo} alt="Lidia"/>
          <button >
            <FeatherIcon icon='log-in' className='mr-2' />
          </button>
          <nav className='absolute left-0 top-0 hidden h-screen w-screen items-center justify-center bg-white opacity-0 transition duration-300 ease-in-out'>
            <ul className='flex flex-col justify-between gap-6'>
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
        </div>
      </div>
    </header>
  )
}

export default Header
