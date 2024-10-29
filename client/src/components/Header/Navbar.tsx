import { Menu, X } from "lucide-react"
import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderH1 from "./HeaderH1";
import Toggle from "../theme/Toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import ArticleForm from "../Modals/ArticleForm";
import ArticleDetails from "../Modals/ArtcleDetails";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Logout } from "@/redux/action/userAction";
import ArticleEdit from "../Modals/ArticleEdit";

type NavbarProps = {
    createArticle: boolean,
    setCreateArticle: React.Dispatch<React.SetStateAction<boolean>>;
    showArticle: boolean,
    setShowArticle: React.Dispatch<React.SetStateAction<boolean>>;
    editArticle: boolean,
    setEditArticle: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ setCreateArticle, createArticle, showArticle, setShowArticle, editArticle, setEditArticle }: NavbarProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const location = useLocation()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    function onMenuClick() {
        setIsOpen(prev => !prev)
    }
    async function logout() {
        const data = await dispatch(Logout()).unwrap()
        if (data) {
            return navigate('/login')
        }
    }

    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            {/* 
            //! NAVBAR FOR SMALL SCREEN
            */}
            {
                isOpen && (
                    <div className="z-50 fixed top-0 left-0 w-full h-screen bg-gray-600 flex justify-center items-center text-white">
                        <X className="absolute top-0 right-0 mt-5 mr-6" onClick={onMenuClick} />
                        <div onClick={closeModal} className="w-fit flex-col justify-center items-center h-fit " >
                            <Link to={'/settings'} className="text-xl text-center font-semibold leading-tight whitespace-nowrap py-2">
                                Settings
                            </Link>
                            <div className="w-full flex justify-center py-2">
                                <Toggle mdhidden={false} />
                            </div>
                            <div className="flex justify-center py-2">
                                <div className="button-4 bg-red-300">
                                    logout
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {/* 
            //! MODAL TO SHOW THE ARTICLE DETAILS
            */}
            {
                showArticle && (
                    <ArticleDetails setShowArticle={setShowArticle} />
                )
            }

            <div className="relative flex flex-col justify-center items-center bg-background">
                {
                    createArticle && (
                        <ArticleForm setCreateArticle={setCreateArticle} />
                    )
                }
                {
                    editArticle && (
                        <ArticleEdit setEditArticle={setEditArticle} />
                    )
                }
                <div className="flex justify-between items-center py-2.5 max-w-full w-[1216px]">
                    <Link to={'/'} className="text-xl font-semibold leading-tight  w-[131px] max-md:w-full whitespace-nowrap max-md:pl-6">
                        Articles
                    </Link>
                    <div className="flex justify-end items-center gap-3.5 float-right  w-[240px] max-md:w-full pr-6">
                        {/* <Link to={'/profile'} className="max-md:hidden text-xl font-semibold leading-tight whitespace-nowrap">
                            Profile
                        </Link> */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    // variant="outline"
                                    // size="icon"
                                    className="max-md:hidden text-xl font-semibold leading-tight whitespace-nowrap border-none outline-none"
                                // className="overflow-hidden rounded-full"
                                >
                                    Profile
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link to={'/settings'}>
                                        Settings
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setCreateArticle(true)}>
                                    Create arcticle
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Toggle mdhidden={true} />
                        <Menu className="hidden max-md:block" onClick={onMenuClick} />
                    </div>
                </div>
                <div className="border-t border-b text-text  border-opacity-30  tracking-widest  w-[1216px]  max-md:max-w-full ">

                </div>
                {
                    location.pathname == '/' && (
                        <HeaderH1 />
                    )
                }
            </div>
        </>
    )
}


export default Navbar