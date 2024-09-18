import React from 'react'

function AboutSection() {
  return (
    <div className='container mx-auto'>
        <div className='px-8 py-12 aboutTop flex flex-col sm:gap-1'>
            <div className='sm:flex gap-1'>
                <div className='flex gap-1'>
                    <h2>PROVIDING</h2><h2 className='bg-[#F6EBAE]'>FLEXIBLE</h2><h2>AND</h2>
                </div>
                <div>
                    <h2>IMPROVED SERVICE LEVELS,</h2>
                </div>
            </div>
            <div className='sm:flex gap-1'>
                <div className='flex gap-1'>
                    <h2>ACCELERATED</h2> <h2 className='bg-[#F6EBAE]'>DELIVERY</h2><h2>,</h2>
                </div>
                <div>
                    <h2>AND REDUCED DIRCT AND </h2>
                </div>
            </div>
            <div>
                <h2>INDIRECT COST</h2>
            </div>
        </div>
    </div>
  )
}

export default AboutSection