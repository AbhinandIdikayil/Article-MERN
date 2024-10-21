import { ListArticles } from "@/redux/action/articleAction"
import { AppDispatch } from "@/redux/store"
import { OutletContextType } from "@/types"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useOutletContext } from "react-router-dom"

function Articles() {
    const dispatch = useDispatch<AppDispatch>()
    const { setShowArticle } = useOutletContext<OutletContextType>()
    function showArticle() {
        setShowArticle(true)
    }
    async function list(){
        try {
            await dispatch(ListArticles()).unwrap()
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        list()
    },[])
    return (
        <div className="flex flex-col justify-center items-center py-8 bg-background">
            <div className="flex flex-col px-8 max-w-full w-[1280px] max-md:px-5">
                <div className="flex flex-col w-full">
                    <div className="text-2xl font-semibold leading-none text-text max-md:max-w-full">
                        All blog posts
                    </div>
                    <div className="flex flex-col mt-8 w-full max-md:max-w-full">
                        <div className="flex flex-wrap gap-8 justify-start items-start w-full max-md:max-w-full">
                            <div onClick={showArticle} className="flex flex-col flex-1 shrink basis-0 min-w-[300px] lg:max-w-[380px]">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                    className="object-contain w-full aspect-[1.6]"
                                />
                                <div className="flex flex-col mt-8 w-full">
                                    <div className="flex flex-col w-full">
                                        <div className="text-sm font-semibold leading-none text-violet-700">
                                            Alec Whitten • 1 Jan 2023
                                        </div>
                                        <div className="flex gap-4 items-start mt-3 w-full">
                                            <div className="flex-1 shrink text-2xl font-semibold leading-none basis-0 text-text">
                                                Bill Walsh leadership lessons
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
                                            Like to know the secrets of transforming a 2-14 team
                                            into a 3x Super Bowl winning Dynasty?
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-start mt-6 w-full text-sm font-medium leading-none text-center whitespace-nowrap">
                                        <div className="flex items-start text-violet-700 bg-blend-multiply">
                                            <div className="self-stretch px-2.5 py-0.5 bg-purple-50 rounded-2xl">
                                                Leadership
                                            </div>
                                        </div>
                                        <div className="flex items-start text-indigo-900 bg-blend-multiply">
                                            <div className="self-stretch px-2.5 py-0.5 rounded-2xl bg-slate-50">
                                                Management
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 shrink basis-0 min-w-[300px] lg:max-w-[380px]">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8dfe1e8895e57ebf6b6c773a0a8bd0608994db5f11b1fecee2069d567fa74761?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dfe1e8895e57ebf6b6c773a0a8bd0608994db5f11b1fecee2069d567fa74761?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dfe1e8895e57ebf6b6c773a0a8bd0608994db5f11b1fecee2069d567fa74761?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dfe1e8895e57ebf6b6c773a0a8bd0608994db5f11b1fecee2069d567fa74761?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dfe1e8895e57ebf6b6c773a0a8bd0608994db5f11b1fecee2069d567fa74761?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dfe1e8895e57ebf6b6c773a0a8bd0608994db5f11b1fecee2069d567fa74761?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dfe1e8895e57ebf6b6c773a0a8bd0608994db5f11b1fecee2069d567fa74761?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dfe1e8895e57ebf6b6c773a0a8bd0608994db5f11b1fecee2069d567fa74761?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                    className="object-contain w-full aspect-[1.6]"
                                />
                                <div className="flex flex-col mt-8 w-full">
                                    <div className="flex flex-col w-full">
                                        <div className="text-sm font-semibold leading-none text-violet-700">
                                            Demi WIlkinson • 1 Jan 2023
                                        </div>
                                        <div className="flex gap-4 items-start mt-3 w-full">
                                            <div className="flex-1 shrink text-2xl font-semibold leading-none basis-0 text-text">
                                                PM mental models
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
                                            Mental models are simple expressions of complex
                                            processes or relationships.
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-start mt-6 w-full text-sm font-medium leading-none text-center whitespace-nowrap">
                                        <div className="flex items-start text-sky-700 bg-blend-multiply">
                                            <div className="self-stretch px-2.5 py-0.5 bg-sky-50 rounded-2xl">
                                                Product
                                            </div>
                                        </div>
                                        <div className="flex items-start text-indigo-700 bg-blend-multiply">
                                            <div className="self-stretch px-2.5 py-0.5 bg-indigo-50 rounded-2xl">
                                                Research
                                            </div>
                                        </div>
                                        <div className="flex items-start text-orange-700 bg-blend-multiply">
                                            <div className="self-stretch px-2.5 py-0.5 bg-orange-50 rounded-2xl">
                                                Frameworks
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 shrink basis-0 min-w-[300px] lg:max-w-[380px]">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/86333bd13ff38052ed7b6fea11032ab3b5a30de6b3d5ee0335fd345fb467b95e?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/86333bd13ff38052ed7b6fea11032ab3b5a30de6b3d5ee0335fd345fb467b95e?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86333bd13ff38052ed7b6fea11032ab3b5a30de6b3d5ee0335fd345fb467b95e?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/86333bd13ff38052ed7b6fea11032ab3b5a30de6b3d5ee0335fd345fb467b95e?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/86333bd13ff38052ed7b6fea11032ab3b5a30de6b3d5ee0335fd345fb467b95e?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86333bd13ff38052ed7b6fea11032ab3b5a30de6b3d5ee0335fd345fb467b95e?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/86333bd13ff38052ed7b6fea11032ab3b5a30de6b3d5ee0335fd345fb467b95e?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/86333bd13ff38052ed7b6fea11032ab3b5a30de6b3d5ee0335fd345fb467b95e?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                    className="object-contain w-full aspect-[1.6]"
                                />
                                <div className="flex flex-col mt-8 w-full">
                                    <div className="flex flex-col w-full">
                                        <div className="text-sm font-semibold leading-none text-violet-700">
                                            Candice Wu • 1 Jan 2023
                                        </div>
                                        <div className="flex gap-4 items-start mt-3 w-full">
                                            <div className="flex-1 shrink text-2xl font-semibold leading-none basis-0 text-text">
                                                What is Wireframing?
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
                                            Introduction to Wireframing and its Principles. Learn
                                            from the best in the industry.
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-start mt-6 w-full text-sm font-medium leading-none text-center whitespace-nowrap">
                                        <div className="flex items-start text-violet-700 bg-blend-multiply">
                                            <div className="self-stretch px-2.5 py-0.5 bg-purple-50 rounded-2xl">
                                                Design
                                            </div>
                                        </div>
                                        <div className="flex items-start text-indigo-700 bg-blend-multiply">
                                            <div className="self-stretch px-2.5 py-0.5 bg-indigo-50 rounded-2xl">
                                                Research
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1  shrink basis-0  min-w-[300px] lg:max-w-[380px]">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f2215787eaa541913a1e9697a1f072e1eb234a3fcf6c20fd3ca143db89aabc2?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f2215787eaa541913a1e9697a1f072e1eb234a3fcf6c20fd3ca143db89aabc2?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f2215787eaa541913a1e9697a1f072e1eb234a3fcf6c20fd3ca143db89aabc2?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f2215787eaa541913a1e9697a1f072e1eb234a3fcf6c20fd3ca143db89aabc2?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f2215787eaa541913a1e9697a1f072e1eb234a3fcf6c20fd3ca143db89aabc2?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f2215787eaa541913a1e9697a1f072e1eb234a3fcf6c20fd3ca143db89aabc2?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f2215787eaa541913a1e9697a1f072e1eb234a3fcf6c20fd3ca143db89aabc2?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f2215787eaa541913a1e9697a1f072e1eb234a3fcf6c20fd3ca143db89aabc2?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                    className="object-contain w-full aspect-[1.6]"
                                />
                                <div className="flex flex-col mt-8 w-full">
                                    <div className="flex flex-col w-full">
                                        <div className="text-sm font-semibold leading-none text-violet-700">
                                            Natali Craig • 1 Jan 2023
                                        </div>
                                        <div className="flex gap-4 items-start mt-3 w-full">
                                            <div className="flex-1 shrink text-2xl font-semibold leading-8 basis-0 text-text">
                                                How collaboration makes us better designers
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
                                            Collaboration can make our teams stronger, and our
                                            individual designs better.
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-start mt-6 w-full text-sm font-medium leading-none text-center whitespace-nowrap">
                                        <div className="flex items-start text-violet-700 bg-blend-multiply">
                                            <div className="self-stretch px-2.5 py-0.5 bg-purple-50 rounded-2xl">
                                                Design
                                            </div>
                                        </div>
                                        <div className="flex items-start text-indigo-700 bg-blend-multiply">
                                            <div className="self-stretch px-2.5 py-0.5 bg-indigo-50 rounded-2xl">
                                                Research
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 shrink basis-0  min-w-[300px] lg:max-w-[380px] ">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/db0191e63059c57b604c955bdd9c77c694a2b23faae55a316f73d7ab502d3861?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/db0191e63059c57b604c955bdd9c77c694a2b23faae55a316f73d7ab502d3861?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db0191e63059c57b604c955bdd9c77c694a2b23faae55a316f73d7ab502d3861?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/db0191e63059c57b604c955bdd9c77c694a2b23faae55a316f73d7ab502d3861?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/db0191e63059c57b604c955bdd9c77c694a2b23faae55a316f73d7ab502d3861?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db0191e63059c57b604c955bdd9c77c694a2b23faae55a316f73d7ab502d3861?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/db0191e63059c57b604c955bdd9c77c694a2b23faae55a316f73d7ab502d3861?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/db0191e63059c57b604c955bdd9c77c694a2b23faae55a316f73d7ab502d3861?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                    className="object-contain w-full aspect-[1.6]"
                                />
                                <div className="flex flex-col mt-8 w-full">
                                    <div className="flex flex-col w-full">
                                        <div className="text-sm font-semibold leading-none text-violet-700">
                                            Orlando Diggs • 1 Jan 2023
                                        </div>
                                        <div className="flex gap-4 items-start mt-3 w-full">
                                            <div className="flex-1 shrink text-2xl font-semibold leading-8 basis-0 text-text">
                                                Podcast: Creating a better CX Community
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
                                            Starting a community doesn’t need to be complicated, but
                                            how do you get started?
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-start mt-6 w-full text-sm font-medium leading-none text-center">
                                        <div className="flex items-start text-violet-700 whitespace-nowrap bg-blend-multiply">
                                            <div className="self-stretch px-2.5 py-0.5 bg-purple-50 rounded-2xl">
                                                Podcasts
                                            </div>
                                        </div>
                                        <div className="flex items-start text-indigo-900 bg-blend-multiply">
                                            <div className="self-stretch px-2.5 py-0.5 rounded-2xl bg-slate-50">
                                                Customer Success
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-10 justify-between items-center pt-5 mt-8 w-full text-sm font-medium leading-none text-gray-500 whitespace-nowrap border-t border-gray-200 min-h-[61px] max-md:max-w-full">
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
                </div>
            </div>
        </div>
    )
}



export default Articles