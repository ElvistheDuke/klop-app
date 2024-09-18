import { ArrowUpRightIcon } from '@heroicons/react/16/solid'
import React from 'react'
import lagosimg from '../assets/locations/lagos.png'
import berlinimg from '../assets/locations/berlin.png'
import newyorkimg from '../assets/locations/newyork.png'
import sanfranimg from '../assets/locations/sanfran.png'
import LocationCard from './LocationCard'

function LocationSection() {

    // const locations = [lagosimg, berlinimg, newyorkimg, sanfranimg, berlinimg]
    const locations = [
        {
            Name: 'LAGOS',
            image: lagosimg 
        },
        {
            Name: 'NEW-YORK',
            image: newyorkimg 
        },
        {
            Name: 'BERLIN',
            image: berlinimg 
        },
        {
            Name: 'SAN-FRANCISCO',
            image: sanfranimg
        },
    ]

  return (
    <div className='container mx-auto'>
        <div className='px-8 flex justify-between items-center'>
            <div>
                <div className='flex items-center gap-1'>
                    <div className='h-2 w-2 bg-[#F6EBAE] rounded-full mb-[2px]' />
                    <p className='text-xs'>Our Locations</p>
                </div>
                <h2 className='sm:text-2xl text-md'>TO EVERY DIRECTION</h2>
            </div>
            <div className='flex gap-1'>
                <div className='bg-[#F6EBAE] rounded-3xl h-8 px-4 font-bold text-sm pt-2'>
                    <p className='text-xs'>More Locations</p>
                </div>
                <div className='w-8 h-8 bg-[#F6EBAE] rounded-full items-center justify-center flex'>
                    <ArrowUpRightIcon className='h-6 text-black' />
                </div>  
            </div>
        </div>
        <div className='flex px-8 py-4 gap-4 overflow-scroll no-scrollbar'>
            {
                locations.map((item, index) => {
                    return <LocationCard key={index} image={item.image} name={item.Name} />
                })
            }
        </div>
    </div>
  )
}

export default LocationSection