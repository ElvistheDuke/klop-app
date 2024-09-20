import { ArrowUpRightIcon } from '@heroicons/react/16/solid'
import card1 from '../assets/cards/card1.png'
import card2 from '../assets/cards/card2.png'
import card3 from '../assets/cards/card3.png'
import card4 from '../assets/cards/card4.png'
import card5 from '../assets/cards/card5.png'
import card6 from '../assets/cards/card6.png'
import HowCards from './HowCards'



const howcards = [
    {
        name: 'FOOD DELIVERIES',
        img: card1
    },
    {
        name: 'PARCEL DELIVERIES',
        img: card2
    },
    {
        name: 'DOCUMENT AND VALUABLES',
        img: card3
    },
    {
        name: 'WATER FREIGHT',
        img: card4
    },
    {
        name: 'TRAIN FREIGHT',
        img: card5
    },
    {
        name: 'AIR FREIGHT',
        img: card6
    },
]

function HowSection() {
  return (
    <div className='container mx-auto my-12'>
        <div className="px-8">
            <div className="aboutTop flex justify-between gap-12">
                <div className="flex gap-1 flex-wrap">
                    <h2>HOW WE</h2> 
                    <div><h2 className="bg-[#F6EBAE]">OPERATE</h2></div>
                </div>
                <div className="max-w-60 text-xs">
                    <p>Get a free consultation with an IFB specialist right now - take your first step towards financial freedom</p>
                </div>
            </div>
            <div className='flex flex-wrap justify-between gap-8 my-8'>
                {
                    howcards.map((item, index) => {
                        return<HowCards key={index} name={item.name} image={item.img} />
                    })
                }
            </div>
            <div className='bg-black rounded-3xl gap-40 p-8 flex flex-col justify-between'>
                <div>
                    <p className='text-white max-w-[70%] md:max-w-[30%]'>Explore how our team has tackled diverse challenges in financial technology, assisting startups and major players in the commerce industry</p>
                </div>
                <div className='flex justify-between items-end'>
                    <div>
                        <h2 className='text-white max-w-[80%]'>DISCOVER OUR EXPERTISE THROUGH SUCCESFUL CASE STUDIES</h2>
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

export default HowSection