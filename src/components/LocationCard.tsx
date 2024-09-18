import { ArrowUpRightIcon } from '@heroicons/react/16/solid'
import React from 'react'


interface Props {
    image: string,
    name: string,
}

function LocationCard( props: Props) {
  return (
    <div style={{
        backgroundImage: `url(${props.image})`,
        height: 500,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }} className='min-w-72 rounded-3xl flex flex-col justify-between p-6'>
        
        <div className='flex justify-between'>
            <div className='bg-white rounded-xl h-8 px-4 font-bold text-sm pt-2'>
                <p className='text-xs'>Learn More</p>
            </div>
            <div className='w-8 h-8 bg-white rounded-full items-center justify-center flex'>
                <ArrowUpRightIcon className='h-6 text-black' />
            </div> 
        </div>
        <div className='flex'>
            <div className='bg-white rounded-xl h-8 px-4 font-bold text-sm items-center flex'>
                <p className='text-xs'>{props.name}</p>
            </div>
        </div>
    </div>
  )
}

export default LocationCard