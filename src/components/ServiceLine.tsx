
interface Props {
    name: string,
    desc: string,
    num: number,
}

function ServiceLine( props:Props) {
  return (
    <div className=' border-t border-black flex pt-3 pb-12'>
        <div className='flex-1 justify-start'>
            <h2 className='text-lg'>/0{props.num}</h2>
        </div>
        <div className='flex-1'>
            <h2 className='font-bold text-sm max-w-[60%]'>{props.name}</h2>
        </div>
        <div className='flex-1'>
            <p className='text-xs'>{props.desc}</p>
        </div>
    </div>
  )
}

export default ServiceLine