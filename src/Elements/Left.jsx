import React from 'react'
import book1 from '../assets/images/The Visual MBA.png'
import book2 from '../assets/images/Talking to Strangers.png'
import book3 from '../assets/images/The Midnight Library.png'
import book4 from '../assets/images/Dompet Ayah Sepatu Ibu.png'

function Left() {
  return (
    <div className="relative h-[33.19rem] w-[38.44rem]">
      <img src={book1} className='absolute bottom-0 left-[50.104%] max-h-[163px] w-2/3 max-w-[108px]' alt="The Visual MBA"/>
      <img src={book2} className='absolute left-[14.75rem] top-0 max-h-[214px] w-2/3 max-w-[143px]' alt="Talking to Strangers"/>
      <img src={book3} className='absolute bottom-[7.0625rem] right-0 h-[14.25rem] max-h-[228px] w-[9.375rem] max-w-[150px]' alt="The Midnight Library"/>
      <img src={book4} className='absolute bottom-[0.625rem] left-4 max-h-[302px] w-2/3 max-w-[209px]' alt="Dompet Ayah Sepatu Ibu"/>
    </div>  
  )
}

export default Left 
