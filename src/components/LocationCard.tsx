import { ArrowUpRightIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'


interface Props {
    image: string,
    name: string,
    count: number,
}

function LocationCard( props: Props) {
  return (
    <motion.div style={{
        backgroundImage: `url(${props.image})`,
        height: 500,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }} 
    whileInView={{
        opacity: 1,
        transform: 'translateX(0)'
    }}    
    transition={{
        delay: 0.2 * props.count,
        duration: 0.3
    }}
    viewport={{once: true}}
    className='min-w-72 rounded-3xl flex flex-col justify-between p-6 2xl:flex-1 opacity-0 -translate-x-14'>
        
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
    </motion.div>
  )
}

export default LocationCard