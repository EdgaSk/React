import './App.css'
import NavBar from './components/NavBar'
import {Route, Routes} from "react-router-dom";
import PostPage from './pages/Postspage';
import Products from './pages/Productspage';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<PostPage/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      
    </>
  )
}

export default App
