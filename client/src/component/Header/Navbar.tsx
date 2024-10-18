import { Menu, X } from "lucide-react"
import Toggle from "../theme/Toggle"
import { useState } from "react"

function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    function onMenuClick() {
        setIsOpen(prev => !prev)
    }
    return (
        <>
            {
                isOpen && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-background flex justify-center items-center">
                        <X className="absolute top-0 right-0 mt-5 mr-6" onClick={onMenuClick} />
                        <div className="w-fit flex-col justify-center items-center h-fit gap-5" >
                            <div className="text-xl text-center font-semibold leading-tight whitespace-nowrap py-2">
                                Profile
                            </div>
                            <Toggle mdhidden={false} />
                        </div>
                    </div>
                )
            }
            <div className="flex flex-col justify-center items-center py-2 ">
                <div className="flex justify-between items-center py-2.5 max-w-full w-[1216px]">
                    <div className="text-xl font-semibold leading-tight  w-[131px] max-md:w-full whitespace-nowrap max-md:pl-6">
                        Your Name
                    </div>
                    <div className="flex justify-end items-center gap-3.5 float-right  w-[240px] max-md:w-full pr-6">
                        <div className="max-md:hidden text-xl font-semibold leading-tight whitespace-nowrap">
                            Profile
                        </div>
                        <Toggle mdhidden={true} />
                        <Menu className="hidden max-md:block" onClick={onMenuClick} />
                    </div>
                </div>
                <div className="gap-10 mt-1 text-center max-w-full font-bold border-t border-b text-text  border-opacity-30 text-[104px] tracking-widest  w-[1216px]  max-md:max-w-full max-md:text-4xl">
                    THE BLOG
                </div>
            </div>
        </>
    )
}


export default Navbar