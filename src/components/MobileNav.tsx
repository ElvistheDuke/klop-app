import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import { useState } from "react"


interface Props {
    navLinks: string[]
}

function MobileNav(props: Props) {

    const [isClicked, setClicked] = useState<boolean>(false)

  return (
    <div className="md:hidden">
        {
            isClicked ? <div className="fixed z-10 h-full w-full bg-black bg-opacity-20">
            <div className="h-full w-[40%] bg-white flex flex-col px-8 py-12 gap-3">
                {
                    props.navLinks.map((item,index) => {
                        return <p key={index}>{item}</p>
                    })
                }
                <div>
                    <XMarkIcon className="h-10 cursor-pointer" onClick={() => {
                        setClicked(!isClicked)
                    }} />
                </div>
            </div>
        </div> : ""
        }
        
        <div onClick={() => {
            setClicked(!isClicked)
        }} className="container mx-auto px-8 pt-8 ">
            <Bars3Icon className="h-10 text-white cursor-pointer" />
        </div>
        
    </div>
  )
}

export default MobileNav