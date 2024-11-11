import { Route, Routes } from 'react-router-dom'
import './App.css'
import Articles from './components/Articles/Articles'
import Registeration from './pages/Registeration/Registeration'
import Login from './pages/Login/Login'
import UserLayout from './layout/UserLayout'
import Profile from './pages/Profile/Profile'
import ProtectedRoute from './pages/ProtectedRoute'
import ArticlePage from './pages/ArticlePage/ArticlePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/signup' element={<Registeration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={
          <ProtectedRoute>
            <UserLayout />
          </ProtectedRoute>
        }>
        //! route for user home page
          <Route path='' element={<>
            <Articles />
          </>} />
          <Route path='/settings' element={<Profile />} />
          <Route path='/article' element={<ArticlePage />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
