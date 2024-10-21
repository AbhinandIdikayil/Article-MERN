import { RootState } from "@/redux/store"
import { Tag, ThumbsDown, ThumbsUp, X } from "lucide-react"
import { useSelector } from "react-redux"

function ArticleDetails({ setShowArticle }: { setShowArticle: React.Dispatch<React.SetStateAction<boolean>> }) {
  const user = useSelector((state: RootState) => state.user)
  return (
    <div className="z-50 w-screen h-screen bg-black bg-opacity-45 fixed top-0 left-0 bg-background flex justify-center items-center">
      <div className="show-article relative w-3/5 max-md:w-5/6 h-4/5 bg-white rounded-md shadow-md overflow-y-scroll py-4 px-4 ">
        <h1 className="w-full pb-1 capitalize article-form text-black  text-xl font-semibold tracking-wide"> {user.article?.title} </h1>
        <X onClick={() => setShowArticle(false)} className="absolute top-0 right-0 mt-5 mr-6 text-black" />
        <div className="relative break-words w-full ">
          <div className="w-full  relative">
            <h1 className="capitalize text-lg text-gray-700 font-medium tracking-wide">  {user.article?.description} </h1>
            <div className="w-full h-[300px]">
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
            <div className="flex gap-4 w-full h-full pt-2">
              <div className=" text-black flex gap-1 items-center justify-center">
                <ThumbsUp className="text-black" />
                1
              </div>
              <div className=" text-black flex gap-1 items-center justify-center" >
                <ThumbsDown className="text-black " />
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetails