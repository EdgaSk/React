import React from "react";
import Navbar from "./components/navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Nftranking from "./pages/NFTranking";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Footer from "./components/footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/nftranking" element={<Nftranking/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contacts" element={<Contacts/>} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
