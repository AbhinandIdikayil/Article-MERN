import Navbar from '../components/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

function UserLayout() {
    return (
        <>
            <Navbar  />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout