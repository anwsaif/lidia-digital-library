import React from 'react'
import Left from '../assets/images/Left.png'

function Hero() {
  function onDescClickHandler(e){
    e.target.classList.remove('line-clamp-2')
  }
  return (
    <section className='md:h-[85vh]'>
      <div className="container mx-auto flex h-full px-4 py-2 md:px-4 lg:px-5 lg:py-7 xl:px-20">
        <div className="relative flex w-full flex-col-reverse items-center md:flex-row md:gap-x-7 ">
          <div className="mt-8 flex flex-col gap-4 min-[604px]:mt-12 sm:mt-6 md:mt-0 md:w-1/2 md:gap-8">
            <h1 className='text-heading'>Search & review your <span className='text-primary underline'>fav book</span> effortlessly</h1>
            <p className='line-clamp-2 text-sm text-desc sm:line-clamp-none' onClick={onDescClickHandler}>Embark on a literary journey like never before with our revolutionary library application! Introducing a seamless experience that transcends traditional boundaries, where  you can effortlessly search your favorite books.✨</p>
            <a href="#" className='md:px-13 h-12 w-40 rounded-10 bg-primary px-6 py-3 text-center text-sm font-bold leading-6 text-white transition duration-300 ease-in-out hover:opacity-40 md:h-[3.75rem] md:w-[12.5rem] md:py-[1.125rem]'>Start now →</a>
          </div>
          <div className="relative flex h-fit w-full justify-center md:w-1/2 lg:h-[50dvh] lg:w-1/2">
            <img src={Left} alt="" className='max-w-80 w-screen min-[529px]:max-w-[22rem] md:w-full'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
