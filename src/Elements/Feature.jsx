import React from 'react'

function Feature({logo, title, description, className=''}) {
  return (
    <div className={`flex flex-col gap-5 max-w-[17.5625rem] justify-between items-center `+ className}>
      <div className="h-[6.375rem] w-[6.375rem] rounded-[1.625rem] bg-primary drop-shadow-extrabold-dark">
        <img src={logo} className='p-7' alt=""/>
      </div>
      <h5 className='!font-bold'>{title}</h5>
      <p className='text-desc-base text-center font-medium leading-[1.875rem] tracking-[.02em]'>{description}</p>
    </div>
  )
}

export default Feature
