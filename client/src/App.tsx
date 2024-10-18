import { Route, Routes } from 'react-router-dom'
import './App.css'
import Articles from './component/Articles/Articles'
import Navbar from './component/Header/Navbar'
import LatestArticle from './component/LatestArticle'
import Registeration from './pages/Registeration/Registeration'
import Login from './pages/Login/Login'
import UserLayout from './layout/UserLayout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/signup' element={<Registeration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<UserLayout />}>
        //! route for user home page
          <Route path='' element={<>
            <LatestArticle />
            <Articles />
          </>} />

        </Route>
      </Routes>
    </>
  )
}

export default App
