import React from 'react'

function Feature({index, logo, title, description, className=''}) {
  return (
    <div data-aos="fade-right" data-aos-duration={(index === 6) ? '400' : ((index === 7) ? '800' : '1200')} key={index} className={`flex flex-col gap-5 max-w-[17.5625rem] justify-between items-center `+ className}>
      <div className="h-[6.375rem] w-[6.375rem] rounded-[1.625rem] bg-primary drop-shadow-extrabold-dark">
        <img src={logo} className='p-7' alt=""/>
      </div>
      <h5 className='!font-bold'>{title}</h5>
      <p className='text-desc-base text-center font-medium leading-[1.875rem] tracking-[.02em]'>{description}</p>
    </div>
  )
}

export default Feature
