import React from 'react'

function Hero() {
  return (
    <section>
      <div className="container mx-auto p-2 lg:px-24 lg:py-14">
        <div className="relative flex flex-col items-center md:flex-row">
          <div className="flex flex-col gap-4 md:w-1/2 md:gap-8">
            <h1 className='text-heading'>Search & review your <span className='text-primary underline'>fav book</span> effortlessly</h1>
            <p className='text-desc'>Embark on a literary journey like never before with our revolutionary library application! Introducing a seamless experience that transcends traditional boundaries, where  you can effortlessly search your favorite books.✨</p>
            <a href="#" className='px-13 h-[3.75rem] w-[12.5rem] rounded-10 bg-primary py-[1.125rem] text-center font-bold leading-6 text-white transition duration-300 ease-in-out hover:opacity-40'>Start now →</a>
          </div>
          <div className="absolute right-0 h-full w-1/2">
            <div className="absolute h-10 w-10 bg-primary">
            </div>
            <div className="absolute right-0 top-7 h-10 w-10 bg-sky-300">
            </div>
            <div className="absolute bottom-4 left-8 h-10 w-10 bg-yellow-400">
            </div>
            <div className="absolute left-1 top-10 h-10 w-10 bg-lime-500">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
