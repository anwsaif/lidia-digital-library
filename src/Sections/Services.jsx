import React from 'react'
import service from '../assets/images/Service.jpg'
import reading from '../assets/images/Reading.jpg'

const services = [
  {
    logo: service,
    title: 'Rent your favorite book  fairly easy on Lidia!',
    description: `Viewing, rent, and organize your favorite books has never been easier. An integrated digital library rent  that’s simple to use, Lidia lets you spend less time  managing your work and more time actually doing it!\n\nEffortless rentals, personalized shelves—Lidia  transforms book management, enhancing your  reading experience~`,
  },
  {
    logo: reading,
    title: 'Quick Book Rentals:  Dive into Reading Instantly',
    description: 'Discover instant literary delight. Access a vast library, borrow your favorite reads, and dive into captivating stories within minutes. Reading made quick and easy, just a click away!\n\nUnlock a world of stories effortlessly.  Browse genres, choose, rent in minutes.  Seamlessly manage your reading adventures  with our intuitive platform~'
  },
]

function Services() {
  return (
    <section className='2xl:mt-96'>
      <div className="container mx-auto my-12 px-4 py-2 md:px-4 lg:my-[6.25rem] lg:px-5 lg:py-7 xl:px-10">
        <div className="flex w-full flex-col gap-4">
          <span className='capitalised text-xs text-primary'>SERVICES</span>
          <h2>🚀• The Services for You</h2>

          <div className="flex flex-col">
            {services.map(({ logo, title, description }) => {
              return <div className="flex flex-wrap">
                <img src={logo} alt={title} className='rounded-[0.625rem] drop-shadow-extrabold-dark lg:w-1/2'/>
                <div className="fit-content lg:w-1/2">
                  <h6>{title}</h6>
                  <p>{description}</p>
                </div>
              </div>
            })}
          </div>
          {/* <div className="flex flex-wrap justify-around gap-6 lg:gap-x-28 xl:justify-between"> */}
          {/*   {features.map(({logo, title, description, index}) => { */}
          {/*     return <Feature logo={logo} title={title} description={description} className='mt-4 lg:mt-20' /> */}
          {/*   })} */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default Services
