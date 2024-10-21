import { RootState } from '@/redux/store'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }: { children: ReactNode }) {
    const user = useSelector((state: RootState) => state.user)
    if (user.loggedIn) {
        return children
    } else {
        return <Navigate to={'/login'} />
    }
}

export default ProtectedRoute