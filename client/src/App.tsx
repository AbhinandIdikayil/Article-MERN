import './App.css'
import Articles from './component/Articles/Articles'
import Navbar from './component/Header/Navbar'
import LatestArticle from './component/LatestArticle'
import Toggle from './component/theme/Toggle'

function App() {

  return (
    <>
      <Navbar />
      <LatestArticle />
      <Articles />
    </>
  )
}

export default App
