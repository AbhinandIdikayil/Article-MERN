import { X } from "lucide-react"
import { useState } from "react"

// Higher Order Component
export function ModalHOC<P extends object>(
    WrappedComponent: React.ComponentType<P>,
    ModalContent: React.ComponentType
) {
    return function WithModal(props: P) {
        const [isOpen, setIsOpen] = useState(false)

        const openModal = () => setIsOpen(true)
        const closeModal = () => setIsOpen(false)

        return (
            <>
                <WrappedComponent {...props} onClick={openModal} />
                {
                    isOpen && (
                        <div style={{ zIndex: 99 }} className="fixed flex justify-center items-center top-0 left-0  z-50 w-full h-full bg-black bg-opacity-40">
                            <div className="relative flex-col h-[350px] w-1/3 max-md:w-5/6  rounded-md border border-solid border-gray-500 shadow-md bg-white px-4 py-2 show-article scroll-smooth overflow-y-scroll">
                                <div className="flex justify-between absolute right-4 top-2">
                                    <X className='text-black'
                                        onClick={closeModal}
                                    />
                                </div>
                                <ModalContent />
                            </div>
                        </div>
                    )
                }
            </>
        )
    }
}