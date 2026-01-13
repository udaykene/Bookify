import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-24'>
        <Title title="What Our Guests Say" subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 sm:p-8 rounded-xl shadow hover:shadow-lg transition-shadow duration-200 flex flex-col">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-lg sm:text-xl">{testimonial.name}</p>
                                <p className="text-gray-500 text-sm sm:text-base">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                           <StarRating />
                        </div>
                        <p className="text-gray-500 max-w-md mt-4 text-sm sm:text-base">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Testimonial