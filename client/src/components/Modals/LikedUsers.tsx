import { api } from '@/constant/axiosInstance'
import { RootState } from '@/redux/store'
import { CircleUserRound } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function LikedUsers() {
    type LikedUsersType = {
        _id: string
        firstname: string,
        lastname: string,
        email: string
    }
    const article = useSelector((state: RootState) => state.user.article)
    const [users, setUsers] = useState<LikedUsersType[]>([])

    useEffect(() => {
        const controller = new AbortController()
        const fetchLikedUser = async () => {
            const { data } = await api.get(`article/${article?._id}`, { signal: controller.signal })
            setUsers(data.data)
        }
        fetchLikedUser().then().catch(err => console.error(err))
        return () => {
            controller.abort()
        }
    }, [])
    return (
        <>
            <h1 className="z-50  capitalize text-black label text-xl article-form">
                Liked users
            </h1>
            <div className="w-full flex-col gap-1 h-full">
                {
                    users?.map(data => (
                        <div key={data?._id} className='shadow-sm flex article-form w-full mt-3 border border-solid border-gray-300 rounded-lg items-center px-2 gap-2'>
                            <CircleUserRound size={32} />
                            <div>
                                <h1> {data?.firstname + data?.lastname} </h1>
                                <h1> {data?.email} </h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default LikedUsers