import Navbar from '../components/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { useState } from 'react'

function UserLayout() {
    const [createArtcle, setCreateArticle] = useState<boolean>(false);
    return (
        <>
            <Navbar setCreateArticle={setCreateArticle} createArticle={createArtcle} />
            <Outlet context={{ createArtcle, setCreateArticle }} />
            <Footer />
        </>
    )
}

export default UserLayout