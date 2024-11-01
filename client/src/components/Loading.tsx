import { RootState } from '@/redux/store'
import { LoaderCircle } from 'lucide-react'
import { useSelector } from 'react-redux'

function Loading() {
    const loading = useSelector((state: RootState) => state.user.loading)
    return (
        loading && (
            <div className='fixed top-0 left-0 bg-gray-950 w-screen h-full opacity-25 flex justify-center items-center' style={{ zIndex: 99 }}>
                <LoaderCircle className='animate-spin text-white' size={60} />
            </div>
        )
    )
}

export default Loading