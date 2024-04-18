import React from 'react'
import Feature from '../Elements/Feature'
import search from '../assets/images/ui/search.svg'
import review from '../assets/images/ui/review.svg'
import wishlist from '../assets/images/ui/wishlist.svg'

const features = [
  {
    logo: search,
    title: 'Search books',
    description: 'Effortlessly find your next read with our powerful and intuitive book search.'
  },
  {
    logo: review,
    title: 'Review books',
    description: 'Discover insightful critiques  and share your thoughts on diverse literary masterpieces effortlessly.'
  },
  {
    logo: wishlist,
    title: 'Wishlist books',
    description: 'Curate your literary dreams–wishlist books  for future adventures and discoveries.',
  },
]

function Features() {
  return (
    <section>
      <div className="container mx-auto my-12 px-4 py-2 md:px-4 lg:my-[6.25rem] lg:px-5 lg:py-7 xl:px-20">
        <div className="flex w-full flex-col">
          <span className='capitalised text-xs text-primary'>FEATURES</span>
          <h2>🤔• What You Can Do?</h2>

          <div className="flex flex-wrap justify-center gap-28 gap-6">
            {features.map(({logo, title, description, index}) => {
              return <Feature logo={logo} title={title} description={description} className='mt-4 lg:mt-20' />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
