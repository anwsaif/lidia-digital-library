import React from 'react'

function Location() {
  return (
    <section className='2xl:mt-96' id='services'>
      <div className="container mx-auto my-12 px-4 py-2 md:px-4 lg:my-[6.25rem] lg:px-5 lg:py-7 xl:px-10">
        <div className="flex w-full flex-col gap-4 ">
          <span className='capitalised text-xs text-primary'>LOCATION</span>
          <h2>🗺• Our Library Location</h2>

          <div className="aspect-[80/27] rounded-10 bg-[url('./src/assets/images/Location.png')] bg-cover bg-no-repeat drop-shadow-extrabold-dark lg:mt-12 xl:mt-[5.625rem]">

          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
