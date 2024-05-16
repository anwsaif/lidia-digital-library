import React from 'react'
import logo from '../assets/images/logo/Logo - Text Black 1.png'
import xtwitter from '../assets/images/socials/Twitter(1).svg'
import instagram from '../assets/images/socials/Instagram(1).svg'
import facebook from '../assets/images/socials/Facebook(1).svg'

function Footer() {
  return (
    <footer className='2xl:mt-96' id='footer'>
      <div className="container mx-auto my-12 px-4 py-2 md:px-4 lg:my-[6.25rem] lg:px-5 lg:py-7 xl:px-10">
        <div className="mx-auto flex w-fit flex-wrap gap-12 lg:gap-24">
          <div className="flex flex-col gap-4 lg:items-center lg:gap-6">
            <span className='subtitle-1 lg:text-2xl'>Managed By</span>
            <img src={logo} alt="Brand Logo" className='w-20 lg:w-auto'/>
          </div>
          <div className="flex flex-col gap-4 lg:items-center lg:gap-14">
            <span className='subtitle-1 lg:text-2xl'>Social Media</span>
            <div className="flex gap-[1.125rem]">
              <a href="#">
                <img src={xtwitter} alt="X/Twitter"/>
              </a>
              <a href="#">
                <img src={instagram} alt="Instagram"/>
              </a>
              <a href="#">
                <img src={facebook} alt="Facebook"/>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:items-center lg:gap-[3.75rem]">
            <span className='subtitle-1 lg:text-2xl'>Slogan</span>
            <h6>#RentFavBooks</h6>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white">
        <div className="container mx-auto py-6 lg:py-12">
          <span className='block w-full text-center text-xs font-bold lg:text-sm'>© 2024 Lidia. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
