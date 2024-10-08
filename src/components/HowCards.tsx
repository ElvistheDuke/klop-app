import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion"


interface Props {
    name: string,
    image: string,
    num: number,
}

function HowCards( props: Props) {
  return (
    // <div style={{
    //     backgroundImage: `url(${props.image})`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover'
    // }} className="md:w-[30%] w-full sm:w-[45%] h-[250px] md:h-[200px] rounded-3xl p-4">HowCards</div>
    <motion.div style={{
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }} 
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 0.5
    }}
    viewport={{once: true}}
    className="md:w-[30%] rounded-3xl sm:w-[45%] w-[100%] h-72 sm:h-auto  sm:pb-[45%] md:pb-[30%] bg-red-500 relative lg:pb-[240px] opacity-0 ">
        <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-between">
            <div className="flex justify-end p-4">
                <div className='w-8 h-8 bg-white rounded-full items-center justify-center flex'>
                    <ArrowUpRightIcon className='h-6 text-black' />
                </div> 
            </div>
            <div className="p-4">
                <h2 className="text-white text-sm sm:text-xl max-w-[80%] font-semibold">{props.name}</h2>
            </div>
        </div>
    </motion.div>
  )
}

export default HowCards