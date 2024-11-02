import { ListArticles } from "@/redux/action/articleAction"
import { setArticleById, updatePage } from "@/redux/reducers/userSlice"
import { AppDispatch, RootState } from "@/redux/store"
import { ChevronDown, ChevronsLeft, ChevronsRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import DropDown2 from "../DropDown2"

function Articles() {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const user = useSelector((state: RootState) => state?.user)
    const [action, setAction] = useState<{ dropDown: boolean, category: string }>({
        category: '',
        dropDown: false
    })
    function showArticle(id: string) {
        dispatch(setArticleById(id))
    }
    async function list() {
        try {
            await dispatch(ListArticles({ page: user?.page, pageSize: user?.pageSize, category: action.category })).unwrap()
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        list()
    }, [user?.page,action.category])

    const totalPages = Math.ceil((user?.articles?.totalCount[0]?.count || 3) / user?.pageSize);
    const nextPage = () => {
        if (user?.page < totalPages) {
            dispatch(updatePage(user?.page + 1))
        }
    }
    const prevPage = () => {
        if (user?.page > 1) {
            dispatch(updatePage(user?.page - 1))
        }
    }

    return (
        <div className="animate-slideUp container-latest-article flex flex-col justify-center items-center py-8 bg-background">
            <div className="flex flex-col px-8 max-w-full w-[1280px] max-md:px-5">
                <div className="flex flex-col w-full">
                    <div className="relative text-2xl font-semibold leading-none text-text max-md:max-w-full flex justify-between items-center">
                        <h1>
                            All blog posts
                        </h1>
                        <div style={{ zIndex: 99 }} onClick={() => setAction((prev) => ({ ...prev, dropDown: !prev.dropDown }))}
                            className="z-50 w-[150px] h-9 px-3 rounded-md  shadow-sm border" >
                            <div className="flex justify-between items-center font-medium text-sm capitalize ">
                                {action.category || 'all'}
                                {
                                    action.dropDown && (
                                        <DropDown2 setValue={setAction} userCategory={user?.user?.preferences ?? []} />
                                    )
                                }
                                <ChevronDown style={{ zIndex: 90 }} className={`float-end mt-1.5 text-gray-600 ${action.dropDown ? 'icon' : ''} `} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 w-full max-md:max-w-full">
                        <div className="flex flex-wrap gap-8 justify-start items-start w-full max-md:max-w-full">
                            {
                                user?.articles?.articles?.map((data) => (
                                    <div onClick={
                                        () => {
                                            showArticle(data?._id)
                                            navigate('/article')
                                        }
                                    } key={data?._id} className="flex flex-col flex-1 shrink basis-0 min-w-[300px] lg:max-w-[380px]">
                                        <img
                                            loading="lazy"
                                            srcSet={data?.image}
                                            className="object-contain w-full aspect-[1.6]"
                                        />
                                        <div className="flex flex-col mt-8 w-full">
                                            <div className="flex flex-col w-full">
                                                <div className="text-sm font-semibold leading-none text-violet-700">
                                                    Alec Whitten • 1 Jan 2023
                                                </div>
                                                <div className="flex gap-4 items-start mt-3 w-full">
                                                    <div className="flex-1 shrink text-2xl font-semibold leading-none basis-0 text-text">
                                                        {data?.title}
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
                                                    {data?.description}
                                                </div>
                                            </div>
                                            <div className="flex gap-2 items-start mt-6 w-full text-sm font-medium leading-none text-center whitespace-nowrap">
                                                <div className="flex items-start text-violet-700 bg-blend-multiply">
                                                    <div className="self-stretch px-2.5 py-0.5 bg-purple-50 rounded-2xl">
                                                        {data?.category}
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
                <div className="w-full flex justify-center items-center">
                    <button onClick={prevPage} className={`${user?.page == 1 ? 'bg-violet-300' : 'bg-violet-700'} px-2 py-1 rounded`}>
                        <ChevronsLeft />
                    </button>
                    <span className="px-3 ">
                        {user?.page} of {totalPages}
                    </span>
                    <button onClick={nextPage} className={`${user?.page == totalPages ? 'bg-violet-300' : 'bg-violet-700'} px-2 py-1 rounded`}>
                        <ChevronsRight />
                    </button>
                </div>
                {/* <div className="flex flex-wrap gap-10 justify-between items-center pt-5 mt-8 w-full text-sm font-medium leading-none text-gray-500 whitespace-nowrap border-t border-gray-200 min-h-[61px] max-md:max-w-full">
                    <div className="flex items-start self-stretch my-auto">
                        <div className="flex gap-2 justify-center items-center">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a04e7b3795c0d798a845cb07219a50d7f3a91bfd397bba3634a86d58a758ae3?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                            />
                            <div className="self-stretch my-auto">Previous</div>
                        </div>
                    </div>
                    <div className="flex gap-0.5 items-start self-stretch my-auto text-center min-w-[240px]">
                        <div className="flex overflow-hidden flex-col items-center w-10 h-10 text-violet-500 bg-purple-50 rounded-lg">
                            <div className="self-stretch px-3 py-2.5 rounded-lg min-h-[40px]">
                                1
                            </div>
                        </div>
                        <div className="flex overflow-hidden flex-col w-10 rounded-lg">
                            <div className="self-stretch px-3 py-2.5 rounded-lg min-h-[40px]">
                                2
                            </div>
                        </div>
                        <div className="flex overflow-hidden flex-col w-10 rounded-lg">
                            <div className="self-stretch px-3 py-2.5 rounded-lg min-h-[40px]">
                                3
                            </div>
                        </div>
                        <div className="flex overflow-hidden flex-col w-10 rounded-lg">
                            <div className="self-stretch px-3 py-2.5 rounded-lg min-h-[40px]">
                                ...
                            </div>
                        </div>
                        <div className="flex overflow-hidden flex-col w-10 rounded-lg">
                            <div className="self-stretch px-3 py-2.5 rounded-lg min-h-[40px]">
                                8
                            </div>
                        </div>
                        <div className="flex overflow-hidden flex-col w-10 rounded-lg">
                            <div className="self-stretch px-3 py-2.5 rounded-lg min-h-[40px]">
                                9
                            </div>
                        </div>
                        <div className="flex overflow-hidden flex-col w-10 rounded-lg">
                            <div className="self-stretch px-3 py-2.5 rounded-lg min-h-[40px]">
                                10
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start self-stretch my-auto">
                        <div className="flex gap-2 justify-center items-center">
                            <div className="self-stretch my-auto">Next</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ace37d979f68cd6c1173aeb3ad9d4f35f281a0c2a2efd308e05fb62ec05e6fd6?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}



export default Articles