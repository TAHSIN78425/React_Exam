import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
<Route element={<Home/>} path='/'/>

<Route element={<Profile/>} path='/profile'/>



    </Routes>
    </>
  )
}

