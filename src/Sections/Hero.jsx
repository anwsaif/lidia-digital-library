import React from 'react'
import book1 from '../assets/images/The Visual MBA.png'
import book2 from '../assets/images/Talking to Strangers.png'
import book3 from '../assets/images/The Midnight Library.png'
import book4 from '../assets/images/Dompet Ayah Sepatu Ibu.png'

function Hero() {
  return (
    <section>
      <div className="container mx-auto p-2 lg:px-24 lg:py-14">
        <div className="relative flex flex-col-reverse items-center md:flex-row ">
          <div className="flex flex-col gap-4 md:w-1/2 md:gap-8">
            <h1 className='text-heading'>Search & review your <span className='text-primary underline'>fav book</span> effortlessly</h1>
            <p className='text-desc'>Embark on a literary journey like never before with our revolutionary library application! Introducing a seamless experience that transcends traditional boundaries, where  you can effortlessly search your favorite books.✨</p>
            <a href="#" className='px-13 h-[3.75rem] w-[12.5rem] rounded-10 bg-primary py-[1.125rem] text-center font-bold leading-6 text-white transition duration-300 ease-in-out hover:opacity-40'>Start now →</a>
          </div>
          <div className="relative right-0 h-[50vh] w-1/2 lg:h-full">
            <img src={book1} className='absolute max-h-[163px] w-2/3 max-w-[108px]' alt="The Visual MBA"/>
            <img src={book2} className='absolute top-4 max-h-[214px] w-2/3 max-w-[143px]' alt="Talking to Strangers"/>
            <img src={book3} className='absolute right-0 max-h-[228px] w-2/3 max-w-[150px]' alt="The Midnight Library"/>
            <img src={book4} className='absolute left-4 max-h-[302px] w-2/3 max-w-[209px]' alt="Dompet Ayah Sepatu Ibu"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
