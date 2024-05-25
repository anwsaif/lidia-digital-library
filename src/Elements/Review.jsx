import React from 'react'

function Review({logo, name, review, occupation}) {
  return (
    <div data-aos="fade-right" data-aos-duration="1500" className='review h-fit w-fit max-w-[366px] bg-white px-12 py-10 text-center shadow-[inset_0px_0px_1px_1px_#DEDEDE] md:w-[45%] lg:px-[3.625rem]'>
      <img src={logo} alt={name} className='mx-auto w-2/3 self-center rounded-[0.625rem] drop-shadow-extrabold-dark md:w-1/2 lg:w-max lg:max-w-[9.3125rem]'/>
      {/* <p className="mt-4 text-desc lg:mt-[1.875rem]">{review}</p> */}
      {/* <span className="mt-3 block lg:mt-6">{name}</span> */}
      {/* <span className="mt-2 block lg:mt-4">{occupation}</span> */}
      <p className="mt-10 leading-[1.875rem] text-desc">{review}</p>
      <span className="mt-[2.125rem] block text-primary">{name}</span>
      <span className="mb-3 mt-[1.625rem] block text-heading">{occupation}</span>
    </div>
  )
}

export default Review
