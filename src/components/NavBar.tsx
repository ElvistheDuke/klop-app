import { ArrowUpRightIcon } from "@heroicons/react/16/solid"

interface Props {
    navLinks: string[]
}

function NavBar(props: Props) {
  return (
    <div className='absolute h-10  w-[90%] translate-x-[-50%] left-[50%] top-5 md:flex gap-3 hidden'>
        <div className='flex bg-white rounded-3xl justify-center items-center px-3'>
            <ArrowUpRightIcon className='h-4 mb-[1px]' />
            <h1 className='text-xs font-extrabold'>KLOP</h1>
        </div>
        <div className='flex flex-1 bg-white rounded-3xl items-center px-1'>
            <div className='flex gap-1'>
                <div className='bg-black px-4 py-2 rounded-3xl'>
                    <p className='text-white font-bold text-sm'>Home</p>
                </div>
                {
                    props.navLinks.map((name, index) => {
                        if(index > 0){
                            return<div key={index} className='bg-white px-4 py-2 rounded-3xl'>
                        <p className='text-black font-bold text-sm cursor-pointer'>{name}</p>
                    </div>
                        }else{
                            return
                        }
                        
                    })
                }
            </div>
        </div>
        <div className='flex bg-white rounded-3xl justify-center items-center px-3'>
            <h1 className='text-xs font-extrabold'>Get quote</h1>
        </div>
    </div>
  )
}

export default NavBar