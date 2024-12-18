import { blockArticle, dislikeArticle, likeArticle } from "@/redux/action/articleAction"
import { AppDispatch, RootState } from "@/redux/store"
import { Shield, Tag, ThumbsDown, ThumbsUp, X } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"

function ArticleDetails({ setShowArticle }: { setShowArticle: React.Dispatch<React.SetStateAction<boolean>> }) {
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
      setShowArticle(false)
      toast.success('Article blocked')

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="z-50 w-screen h-screen bg-black bg-opacity-45 fixed top-0 left-0 bg-background flex justify-center items-center">
      <div className="show-article relative w-3/5 max-md:w-5/6 h-4/5 bg-white rounded-md shadow-md overflow-y-scroll py-4 px-4 ">
        <h1 className="w-full pb-1 capitalize article-form text-black  text-xl font-semibold tracking-wide"> {user.article?.title} </h1>
        <X onClick={() => setShowArticle(false)} className="absolute top-0 right-0 mt-5 mr-6 text-black" />
        <div className="relative break-words w-full ">
          <div className="w-full  relative">
            <h1 className="capitalize text-lg text-gray-700 font-medium tracking-wide mb-2">  {user.article?.description} </h1>
            <div className="w-full h-[300px] mb-2">
              <img
                loading="lazy"
                srcSet={user.article?.image}
                className="h-full w-full object-cover rounded"
              />
            </div>
            <p>
              {user.article?.content}
            </p>
            <div className="flex justify-between items-center text-black font-medium">
              <h1 >Date</h1>
              <h1 className="text-violet-500 flex items-center gap-1">
                <Tag size={15} />
                {user.article?.category}
              </h1>
            </div>
            <div className="flex gap-4 items-center w-full h-full pt-2">
              <div className=" text-black flex gap-1 items-center justify-center">
                <ThumbsUp onClick={onLike} className="text-black" />
                {user.article?.likes?.length}
              </div>
              <div className=" text-black flex gap-1 items-center justify-center" >
                <ThumbsDown onClick={onDislike} className="text-black " />
                {user.article?.dislikes?.length}
              </div>
              <div onClick={() => {
                if (user.article?._id) {
                  block(user.article?._id)
                }
              }} className="hover:cursor-pointer bg-red-500 px-2 rounded-lg py-1 text-black flex gap-1 items-center justify-center" >
                <Shield className="text-black " />
                block
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetails