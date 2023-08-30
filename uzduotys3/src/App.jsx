import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
