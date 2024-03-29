import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import logo from '../assets/images/logo/Logo.svg'
import FeatherIcon from 'feather-icons-react'

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <header>
      <div className="container mx-auto p-2">
        <div className="flex items-center justify-between">
          <div className="z-50" >

          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
          </div>
          <img src={logo} alt="Lidia"/>
          <button >
            <FeatherIcon icon='log-in' className='mr-2' />
          </button>
          <nav className='absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-white'>
            <ul className='flex flex-col justify-between gap-6'>
              <li>Features</li>
              <li>Services</li>
              <li>Reviews</li>
              <li>Location</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
