import { motion } from "framer-motion"

interface Props {
    name: string,
    desc: string,
    num: number,
}

function ServiceLine( props:Props) {
  return (
    <motion.div 
    whileInView={{
        opacity: 1,
        transform: 'translateY(0)'
    }}
    viewport={{once: true}}
    transition={{
        duration: 0.5,
        delay: 0.1 * props.num
    }}
    className=' border-t border-black flex pt-3 pb-12 opacity-0 -translate-y-14'>
        <div className='flex-1 justify-start'>
            <h2 className='text-lg'>/0{props.num}</h2>
        </div>
        <div className='flex-1'>
            <h2 className='font-bold text-sm max-w-[60%]'>{props.name}</h2>
        </div>
        <div className='flex-1'>
            <p className='text-xs'>{props.desc}</p>
        </div>
    </motion.div>
  )
}

export default ServiceLine