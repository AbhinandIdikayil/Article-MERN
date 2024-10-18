import Navbar from '../component/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer/Footer'

function UserLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout