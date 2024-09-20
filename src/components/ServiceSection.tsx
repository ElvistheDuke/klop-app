import { ArrowUpRightIcon } from '@heroicons/react/16/solid'
import ServiceLine from './ServiceLine'


const services = [
    {
        name: 'Fragile item protection ',
        desc: 'KLOP employs specialized tamper-evident packaging, to ensure the safe transport of fragile items, minimizing the risk of damage.'
    },
    {
        name: 'Delays and Unreliable Timelines',
        desc: 'Experience our advanced tracking systems and optimized routing which uses predictive analytics to anticipate potential delays and ensure accurate delivery timelines and minimize delays.'
    },
    {
        name: 'Complex Customs Procedures for International Shipments',
        desc: 'We offer comprehensive customs brokerage services, handling all necessary documentation and ensuring smooth customs clearance for international shipments.'
    },
    {
        name: 'Limited Shipping Options',
        desc: 'Enjoy a range of shipping choices, including express, standard, and economy options, accommodating various delivery speed and budget requirements.'
    }
]

function ServiceSection() {
  return (
    <div className='container mx-auto'>
        <div className='px-8'>
            <div className='flex items-center gap-1'>
                <div className='h-2 w-2 bg-[#F6EBAE] rounded-full mb-[2px]' />
                <p className='text-xs'>Our Service</p>
            </div>
            <div className='flex justify-between items-end'>
                <div className='aboutTop'>
                    <div className='sm:flex gap-1'>
                        <div className='flex gap-1'>
                            <h2>WE USE</h2><h2 className='bg-[#F6EBAE]'>SIMPLE</h2>
                        </div>
                        <h2>SOLUTIONS</h2>
                    </div>
                    <div className='sm:flex gap-1'>
                        <h2>TO SOLVE COMPLEX</h2>
                        <div className='flex'>
                            <h2 className='bg-[#F6EBAE]'>PROBLEMS</h2>
                        </div>
                    </div>
                </div>
                <div className='flex mb-2 gap-1'>
                    <div className='bg-[#F6EBAE] min-w-24 text-center rounded-3xl h-8 px-4 font-bold text-sm pt-2'>
                        <p className='text-xs'>See More</p>
                    </div>
                    <div className='w-8 h-8 bg-[#F6EBAE] rounded-full items-center justify-center flex'>
                        <ArrowUpRightIcon className='h-6 text-black' />
                    </div>  
                </div>
            </div>
            <div className='my-2 flex flex-col gap-1'>
                {
                    services.map((item, index) => {
                        return <ServiceLine name={item.name} desc={item.desc} key={index} num={index + 1} />
                    })
                }
            </div>
            <div className='bg-black rounded-3xl gap-40 p-8 flex flex-col justify-between'>
                <div>
                    <p className='text-white max-w-[70%] md:max-w-[30%]'>Get a free consultation with a supply-chain specialist right now - take your first step towards commercial freedom</p>
                </div>
                <div className='flex justify-between items-end'>
                    <div>
                        <h2 className='text-white'>LET'S GET STARTED</h2>
                        <h2 className='text-white'>WITH US. ONCE CLICK AWAY</h2>
                    </div>
                    <div className='flex mb-2 gap-1'>
                        <div className='bg-[#F6EBAE] text-center min-w-24 rounded-3xl h-8 px-4 font-bold text-sm pt-2'>
                            <p className='text-xs'>Let's Work</p>
                        </div>
                        <div className='w-8 h-8 bg-[#F6EBAE] rounded-full items-center justify-center flex'>
                            <ArrowUpRightIcon className='h-6 text-black' />
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceSection