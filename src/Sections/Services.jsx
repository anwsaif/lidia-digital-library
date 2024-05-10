import React from 'react'
import service from '../assets/images/Service.jpg'
import reading from '../assets/images/Reading.jpg'

const services = [
  {
    logo: service,
    title: <h4><span>Rent</span> your favorite book  fairly easy on <span>Lidia</span>!</h4>,
    description: `Viewing, rent, and organize your favorite books has never been easier. An integrated digital library rent  that’s simple to use, Lidia lets you spend less time  managing your work and more time actually doing it!\n\nEffortless rentals, personalized shelves—Lidia  transforms book management, enhancing your  reading experience~`,
  },
  {
    logo: reading,
    title: <h4>Quick Book Rentals:  <span>Dive</span> into <span>Reading</span> Instantly</h4>,
    description: 'Discover instant literary delight. Access a vast library, borrow your favorite reads, and dive into captivating stories within minutes. Reading made quick and easy, just a click away!\n\nUnlock a world of stories effortlessly.  Browse genres, choose, rent in minutes.  Seamlessly manage your reading adventures  with our intuitive platform~'
  },
]

function Services() {
  return (
    <section className='2xl:mt-96' id='services'>
      <div className="container mx-auto my-12 px-4 py-2 md:px-4 lg:my-[6.25rem] lg:px-5 lg:py-7 xl:px-10">
        <div className="flex w-full flex-col gap-4 ">
          <span className='capitalised text-xs text-primary'>SERVICES</span>
          <h2>🚀• The Services for You</h2>

          <div className="flex flex-col gap-16 lg:mt-12 xl:mt-[5.625rem] xl:gap-[8.75rem]">
            {services.map(({ logo, title, description }) => {
              return <div className="flex flex-wrap justify-between gap-9 lg:flex-nowrap">
                <img src={logo} alt={title} className='w-full self-center rounded-[0.625rem] drop-shadow-extrabold-dark md:w-1/2 lg:w-1/2 lg:max-w-[37.5rem] xl:max-w-[45%]'/>
                <div className="md:max-w-[45%] lg:w-1/2 2xl:mt-16">
                  {title}
                  <p className='line-clamp-4 h-fit w-fit lg:line-clamp-none' onClick={e => e.target.classList.remove('line-clamp-4')}>
                    {description.split('\n').map((line, i) => (<>{line}<br/> </>))}
                  </p>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
