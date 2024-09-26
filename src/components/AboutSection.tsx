import { motion } from 'framer-motion'


function AboutSection() {
  return (
    <div className='container mx-auto'>
        <motion.div 
        whileInView={{
            opacity: 1,
            transform: 'translateY(0)'
        }}
        transition={{
            duration: 0.6
        }}
        viewport={{once: true}}
        className='px-8 py-12 aboutTop flex flex-col sm:gap-1 opacity-0 translate-y-14'>
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
        </motion.div>
    </div>
  )
}

export default AboutSection