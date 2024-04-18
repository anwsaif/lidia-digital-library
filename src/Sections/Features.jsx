import React from 'react'
import Feature from '../Elements/Feature'

function Features() {
  return (
    <section>
      <div className="container mx-auto my-12 px-4 py-2 md:px-4 lg:my-[6.25rem] lg:px-5 lg:py-7 xl:px-20">
        <div className="flex w-full flex-col">
          <span className='capitalised text-xs text-primary'>FEATURES</span>
          <h2>🤔• What You Can Do?</h2>
          <Feature />
        </div>
      </div>
    </section>
  )
}

export default Features
