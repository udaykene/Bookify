import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center min-h-screen'>
        <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-16 md:mt-20'>The Ultimate Hotel Experience</p>
        <h1 className='font-playfair text-3xl sm:text-4xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover Your Perfect Gateway Destination</h1>
        <p className='max-w-xl mt-2 text-sm md:text-base text-gray-100/90'>Unparalleled luxury and comfort await at the most exclusive hotels and resorts. Start your journey today.</p> 

        
        <form className='bg-white text-gray-500 rounded-lg px-4 sm:px-6 md:px-6 py-4 mt-8 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full max-w-4xl mx-auto'>

                <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 text-sm'>
                    <img src={assets.calenderIcon} alt='' className='h-4' />
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                <datalist id="destinations">
                    {cities.map((city, index) => (
                        <option key={index} value={city} />
                    ))}

                </datalist>
            </div>

            <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 text-sm'>
                    <img src={assets.calenderIcon} alt='' className='h-4' />
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 text-sm'>
                    <img src={assets.calenderIcon} alt='' className='h-4' />
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex items-center md:flex-col gap-2'>
                <label htmlFor="guests" className='text-sm'>Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-20" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-2 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer w-full md:w-auto md:self-end' >
                <img src={assets.searchIcon} alt="searchIcon" className='h-6 md:h-7' />
                <span className='text-sm md:text-base'>Search</span>
            </button>
        </form>

    </div>
  )
}

export default Hero