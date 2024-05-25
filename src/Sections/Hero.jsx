import React from 'react'
import Left from '../assets/images/Left.png'

function Hero() {
  // function onDescClickHandler(e){
  //   e.target.classList.remove('line-clamp-2')
  // }
  return (
    <section className='md:h-[85vh]'>
      <div className="container mx-auto flex h-full overflow-hidden px-4 py-16 md:px-4 md:pt-52 lg:px-5 lg:py-7 xl:px-10 ">
        <div className="relative flex w-full flex-col-reverse items-center md:flex-row md:gap-x-7 ">
          <div data-aos="fade-right" className="flex flex-col gap-4 md:w-1/2 md:gap-8">
            <h1 className='text-heading'>Search & review your <span className='text-primary underline'>fav book</span> effortlessly</h1>
            <p className='text-desc-base line-clamp-3 sm:line-clamp-none' onClick={e => e.target.classList.remove('line-clamp-3')}>Embark on a literary journey like never before with our revolutionary library application! Introducing a seamless experience that transcends traditional boundaries, where  you can effortlessly search your favorite books.✨</p>
            <a href="#" className='md:px-13 h-12 w-40 rounded-10 bg-primary px-6 py-3 text-center text-sm font-bold leading-6 text-white drop-shadow-bold-primary transition duration-300 ease-in-out hover:opacity-40 md:h-[3.75rem] md:w-[12.5rem] md:py-[1.125rem] lg:text-base'>Start now →</a>
          </div>
          <img src={Left} data-aos="fade-left" alt="Books" className='min-[529px]:max-w-96 w-screen max-w-[23rem] md:w-full lg:w-1/2 lg:max-w-full'/>
        </div>
        <div data-aos="fade-left" data-aos-duration="900" className='absolute right-0 top-0 -z-30 h-[26rem] w-[75vw] bg-[url("./assets/Cover.svg")] bg-cover bg-no-repeat min-[516px]:w-[64vw] sm:w-[55vw] md:h-[107vh] lg:max-w-[37.875rem] xl:h-[130vh] xl:max-w-none '></div>
      </div>
    </section>
  )
}

export default Hero
