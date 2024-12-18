import LikedUsers from '@/components/Modals/LikedUsers'
import { ModalHOC } from '@/components/Modals/ModalHOC'
import { blockArticle, dislikeArticle, likeArticle } from '@/redux/action/articleAction'
import { AppDispatch, RootState } from '@/redux/store'
import { CircleArrowLeft, Shield, Tag, ThumbsDown, ThumbsUp } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function ArticlePage() {
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>()
    async function onLike() {
        try {
            if (user.article?._id) {
                const data = await dispatch(likeArticle(user.article?._id))
                console.log(data)
            }
        } catch (error) {
            console.log(error)

        }
    }
    async function onDislike() {
        try {
            if (user.article?._id) {
                const data = await dispatch(dislikeArticle(user.article?._id))
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    async function block(articleId: string) {
        try {
            await dispatch(blockArticle(articleId)).unwrap()
            toast.success('Article blocked')
        } catch (error) {
            console.log(error)
        }
    }
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }

    function SimpleButton({ onClick }: { onClick?: () => void }) {
        return <button className='underline' onClick={onClick}> Likes </button>
    }

    const ListLikedUsers = ModalHOC(SimpleButton, LikedUsers)

    return (
        <>
            {/* <ModalHOC Component={LikedUsers} /> */}
            <main className='w-full flex justify-center items-center h-full'>
                <section className=' max-w-full w-[1216px] h-auto'>
                    <div className='bg-[#232E52] relative flex items-center justify-center py-2.5 rounded-sm h-[150px] w-full'>
                        <CircleArrowLeft onClick={goBack} className='absolute top-5 left-5 text-white' size={40} />
                        <div className='w-1/2'>
                            <h1 className="w-full pb-1 capitalize article-form text-white  text-4xl font-semibold tracking-wide"> {user.article?.title} </h1>
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='w-[660px]'>
                            <div className="relative break-words w-full ">
                                <div className="w-full ">
                                    <h1 className="article-form capitalize text-2xl  font-semibold tracking-wide py-3">  {user.article?.description} </h1>
                                    <div className="w-full h-[300px] mb-2">
                                        <img
                                            loading="lazy"
                                            srcSet={user.article?.image}
                                            className="h-full w-full object-cover rounded"
                                        />
                                    </div>
                                    <p className='article-form-p text-inherit'>
                                        {user.article?.content}
                                    </p>
                                    <div className="flex justify-between items-center font-medium">
                                        <h1 >Date</h1>
                                        <h1 className="text-violet-500 flex items-center gap-1">
                                            <Tag size={15} />
                                            {user.article?.category}
                                        </h1>
                                    </div>
                                    <div className="flex gap-4 items-center w-full h-full pt-2">
                                        <div className="flex gap-1 items-center justify-center">
                                            <ThumbsUp
                                                onClick={onLike}
                                                className="text-inherit" />
                                            {user.article?.likes?.length}
                                            <ListLikedUsers />
                                        </div>
                                        <div className="  flex gap-1 items-center justify-center" >
                                            <ThumbsDown
                                                onClick={onDislike}
                                                className="text-inherit" />
                                            {user.article?.dislikes?.length}
                                        </div>
                                        <div
                                            onClick={() => {
                                                if (user.article?._id) {
                                                    block(user.article?._id)
                                                }
                                            }}
                                            className="hover:cursor-pointer bg-red-500 px-2 rounded-lg py-1 text-black flex gap-1 items-center justify-center" >
                                            <Shield className="text-black " />
                                            block
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ArticlePage