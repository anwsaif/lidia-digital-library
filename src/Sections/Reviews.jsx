import React from 'react'
import Review from '../Elements/Review'
import review1 from '../assets/images/reviews/cover.png'
import review2 from '../assets/images/reviews/cover(1).png'
import review3 from '../assets/images/reviews/cover(2).png'

const reviews = [
  {
    logo: review1,
    name: 'Ahmad Saugi',
    review: `Engaging plot, vivid characters; a captivating read that lingers in your thoughts.`,
    occupation: 'College Student',
  },
  {
    logo: review2,
    name: 'Muhammad Alfian',
    review: 'Thought-provoking narrative and rich prose. A must-read for any avid book lover!',
    occupation: 'School Student',
  },
  {
    logo: review3,
    name: 'Wahyu Amirulloh',
    review: 'Immersive storytelling!  An enriching literary experience  worth savoring and sharing.',
    occupation: 'ERP Developer',
  },
]

function Reviews() {
  let i = 0;
  return (
    <section className='2xl:mt-96' id='reviews'>
      <div className="container mx-auto my-12 px-4 py-2 md:px-4 lg:my-[6.25rem] lg:px-5 lg:py-7 xl:px-10">
        <div className="flex w-full flex-col gap-4 ">
          <span data-aos="fade-up" className='capitalised text-xs text-primary'>REVIEWS</span>
          <h2 data-aos="fade-up" data-aos-duration="1300">💬• Reviews of Others</h2>

          <div className="flex flex-wrap justify-center gap-9 lg:mt-12 lg:gap-[3.1875rem] xl:mt-[5.625rem] 2xl:justify-around ">
            {reviews.map((data) => {
              return <Review logo={data.logo} name={data.name} review={data.review} occupation={data.occupation} index={i++}/> 
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
