import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/16/solid'
import icon1 from '../assets/h1.png'
import herobg from '../assets/herobg.png'
import { GiftIcon } from '@heroicons/react/20/solid'
import NavBar from './NavBar'
import MobileNav from './MobileNav'

const navLinks:string[] = ["Home", "About", "Services", "Dashoboard", "Blog", "Support"]

function HeroSection() {
  return (
    <div className='bg-[#1E1E1E] mx-auto sm:w-[99%] sm:rounded-[42px] relative'>
        <NavBar navLinks={navLinks} />
        <MobileNav navLinks={navLinks} />
        <div className='container relative  mx-auto flex-col justify-between sm:h-[97vh]  sm:my-2  flex sm:flex-row sm:items-end p-[42px] pt-28 sm:p-[42px] '>
            <img src={herobg} className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
            <div className='mb-12 sm:mb-0'>
                <div className='flex gap-1 flex-row items-center'>
                    <div className='h-2 w-2 bg-white rounded-full' />
                    <p className='text-white text-xs'>Logistics</p>
                </div>
                <div>
                    <h2 className='heroh2'>MAKING THE</h2>
                    <h2 className='heroh2'>WORLD OF COMMERCE</h2>
                    <div className='flex lg:items-center gap-3 lg:flex-row flex-col '>
                        <h2 className='heroh2'>MORE ACCESSIBLE</h2>
                        <div className='flex gap-3 items-center'>
                            <div className='h-10 w-10 mb-2 bg-white rounded-full flex justify-center items-center'>
                                <img src={icon1} />
                            </div>
                            <ArrowRightIcon className='h-10 mb-2 text-white' />
                            <div className='text-white flex flex-col '>
                                <p>8000+</p>
                                <p className='text-sm mb-2'>Users</p>
                            </div>
                        </div>
                    </div>
                    <p className='max-w-80 text-white text-xs my-6'>Convenience as a priority, Efficiency as an advantage, Remove trial and error. Get the service you deserve </p>
                    <div className='flex gap-3'> 
                        <div className='heroButton'>
                            <p>Track Package</p>
                        </div>
                        <div className='heroButton'>
                            <p>Get Started</p>
                        </div>
                    </div>


                </div>
            </div>
            <div className='bg-white w-64 h-40 rounded-3xl p-6 relative self-end'>
                <div className='flex gap-1 items-center'>
                    <GiftIcon className='h-4 w-4' />
                    <p className='text-sm'>Special Offer</p>
                </div>
                <p className='text-xs my-3'>Klop provides integrated solutions tailored for the transport sector, enabling you to solve your boldest delivery problems</p>
            
                <div className='w-8 h-8 bg-black rounded-full absolute right-2 bottom-2 items-center justify-center flex'>
                    <ArrowUpRightIcon className='h-6 text-white' />
                </div>  
            
            </div>
        </div>
    </div>
  )
}

export default HeroSection