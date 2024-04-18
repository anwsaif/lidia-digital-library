import React from 'react'

function Feature({logo, title, description, className=''}) {
  return (
    <div className={`flex flex-col gap-5 max-w-[16.625rem] justify-between items-center `+ className}>
      <div className="h-[6.375rem] w-[6.375rem] rounded-[1.625rem] bg-primary drop-shadow-extrabold-dark">
        <img src={logo} className='p-7' alt=""/>
      </div>
      <h5 className='!font-bold'>{title}</h5>
      <p className='text-center font-medium text-desc'>{description}</p>
    </div>
  )
}

export default Feature
