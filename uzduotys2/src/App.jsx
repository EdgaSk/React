import './App.css'
import NavBar from './components/NavBar'
import {Route, Routes} from "react-router-dom";
import PostPage from './pages/Postspage';
import ProductsPage from './pages/ProductsPage';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<PostPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
      </Routes>
      
    </>
  )
}

export default App
