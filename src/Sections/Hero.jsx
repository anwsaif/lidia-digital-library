import React from 'react'
import left from '../assets/images/Left.svg'
import Left from '../Elements/Left'
// import { ReactSVG } from 'react-svg'

function Hero() {
  function onDescClickHandler(e){
    e.target.classList.remove('line-clamp-2')
  }
  return (
    <section>
      <div className="container mx-auto px-5 py-2 lg:py-14 xl:px-20">
        <div className="relative flex flex-col-reverse items-center md:flex-row ">
          <div className="mt-8 flex flex-col gap-4 min-[604px]:mt-12 md:mt-0 md:w-1/2 md:gap-8">
            <h1 className='text-heading'>Search & review your <span className='text-primary underline'>fav book</span> effortlessly</h1>
            <p className='line-clamp-2 text-sm text-desc sm:line-clamp-none' onClick={onDescClickHandler}>Embark on a literary journey like never before with our revolutionary library application! Introducing a seamless experience that transcends traditional boundaries, where  you can effortlessly search your favorite books.✨</p>
            <a href="#" className='md:px-13 h-12 w-40 rounded-10 bg-primary px-6 py-3 text-center text-sm font-bold leading-6 text-white transition duration-300 ease-in-out hover:opacity-40 md:h-[3.75rem] md:w-[12.5rem] md:py-[1.125rem]'>Start now →</a>
          </div>
          <div className="h-[50dvh] w-full lg:w-1/2">
            <Left/>
            {/* <ReactSVG src={left} */}
            {/*   beforeInjection={(svg) => { */}
            {/*     // svg.classList.add('h-full w-full') */}
            {/*     svg.setAttribute('style', 'width: 100%; height: 100%') */}
            {/*   }} */}
            {/*   className='h-full w-full' */}
            {/* /> */}
          </div>
          {/* <div className="relative right-0 h-[50vh] w-1/2 lg:h-full"> */}
          {/*   <img src={book1} className='absolute max-h-[163px] w-2/3 max-w-[108px]' alt="The Visual MBA"/> */}
          {/*   <img src={book2} className='absolute top-4 max-h-[214px] w-2/3 max-w-[143px]' alt="Talking to Strangers"/> */}
          {/*   <img src={book3} className='absolute right-0 max-h-[228px] w-2/3 max-w-[150px]' alt="The Midnight Library"/> */}
          {/*   <img src={book4} className='absolute left-4 max-h-[302px] w-2/3 max-w-[209px]' alt="Dompet Ayah Sepatu Ibu"/> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
