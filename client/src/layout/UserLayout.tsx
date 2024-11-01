import Navbar from '../components/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { useState } from 'react'
import Loading from '@/components/Loading';

function UserLayout() {
    const [createArtcle, setCreateArticle] = useState<boolean>(false);
    const [showArticle, setShowArticle] = useState<boolean>(false)
    const [editArticle, setEditArticle] = useState<boolean>(false)
    return (
        <>
            <Navbar
                editArticle={editArticle} setEditArticle={setEditArticle}
                setShowArticle={setShowArticle} showArticle={showArticle}
                setCreateArticle={setCreateArticle} createArticle={createArtcle}
            />
            <Loading />
            <Outlet context={{ createArtcle, setCreateArticle, showArticle, setShowArticle, setEditArticle }} />
            <Footer />
        </>
    )
}

export default UserLayout