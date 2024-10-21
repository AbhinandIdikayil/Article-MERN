import { ArticlesOfOneUser } from "@/redux/action/articleAction"
import { getUser } from "@/redux/action/userAction"
import { setArticleById } from "@/redux/reducers/userSlice"
import { AppDispatch, RootState } from "@/redux/store"
import { ArticleType, OutletContextType } from "@/types"
import { CalendarDays, Grip, KeyRound, Mail, Phone, UserPen } from "lucide-react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useOutletContext } from "react-router-dom"



function Profile() {
  const { setCreateArticle, setEditArticle } = useOutletContext<OutletContextType>()
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) => state.user)
  async function getuser() {
    try {
      await dispatch(getUser()).unwrap()
      await dispatch(ArticlesOfOneUser()).unwrap()
    } catch (error) {
      console.log(error)
    }
  }
  function onEdit(articleId: string) {
    dispatch(setArticleById(articleId))
    setEditArticle(true)
  }
  function onDelete(articleId: string) {

  }
  useEffect(() => {
    getuser()
  }, [])
  return (
    <div className="px-16 h-screen flex-col justify-center items-center profile">
      <div className="w-full h-1/2 flex gap-5 mt-5 ">
        <div className="h-full border border-text border-opacity-50 rounded-sm w-1/3 px-2 py-1">
          <div className="py-1">
            <span className="text-xl capitalize tracking-wide font-semibold text-text"> username </span>
            <UserPen className="float-right" />
          </div>
          <h1 className="flex gap-4 py-2">
            <Mail />
            <span> {user.user?.email} </span>
          </h1>
          <h1 className="flex gap-4  py-2">
            <CalendarDays />
            <span> {user.user?.DOB} </span>
          </h1>
          <h1 className="flex gap-4  py-2">
            <Phone />
            <span> {user.user?.phone} </span>
          </h1>
          <h1 className="flex gap-4  py-2">
            <Grip />
            preferences
          </h1>
          <h1 className="flex gap-4  py-2">
            <KeyRound />
            Change password
          </h1>
        </div>
        <div className="w-2/3 h-full border border-text  rounded-sm p-3">
          <h1 className="text-xl capitalize tracking-wide font-semibold text-text"> liked articles </h1>
        </div>
      </div>
      <div className="border border-text rounded-sm w-full h-fit mt-5 p-3">
        <h1 className="text-xl capitalize tracking-wide font-semibold text-text">
          Your articles
          <button onClick={() => setCreateArticle(true)} className="float-right button-4"> create article</button>
        </h1>
        <div className="flex flex-col  w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-8 justify-start items-start w-full max-md:max-w-full">
            {
              user?.myArticles?.map((data: ArticleType) => (
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[300px] lg:max-w-[380px]">
                  <div className="w-full flex justify-between">
                    <button onClick={() => onEdit(data._id)} className="button-4 text-blue-500">edit</button>
                    <button onClick={() => onDelete(data._id)} className="button-4 text-red-500">delete</button>
                  </div>
                  <img
                    loading="lazy"
                    srcSet={data.image}
                    className="object-contain w-full aspect-[1.6]"
                  />
                  <div className="flex flex-col mt-8 w-full">
                    <div className="flex flex-col w-full">
                      <div className="text-sm font-semibold leading-none text-violet-700">
                        Candice Wu • 1 Jan 2023
                      </div>
                      <div className="flex gap-4 items-start mt-3 w-full">
                        <div className="flex-1 shrink text-2xl font-semibold leading-none basis-0 text-text">
                          {data.title}
                        </div>
                        <div className="flex flex-col pt-1 w-6">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd6a10a9684ba64ac2587abd49cc16f9dbb7b4b67ae7f4ca4c8a94ccc5fed255?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                            className="object-contain w-6 aspect-square"
                          />
                        </div>
                      </div>
                      <div className="mt-3 text-base leading-6 text-gray-500 text-p">
                        {data.description}
                      </div>
                    </div>
                    <div className="flex gap-2 items-start mt-6 w-full text-sm font-medium leading-none text-center whitespace-nowrap">
                      <div className="flex items-start text-violet-700 bg-blend-multiply">
                        <div className="self-stretch px-2.5 py-0.5 bg-purple-50 rounded-2xl">
                          {
                            data.category
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
