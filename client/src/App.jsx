import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NavBar from './components/Navigations'
import Login from './components/Login'
import Register from './components/Register'
import Reviews from './components/Reviews'
import Locations from './components/Locations'

function App() {

  return (
    <>
      <div id="nav-bar-container">
        <div id="navbar">
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
          <Link to={"/reviews"}>Reviews</Link>
          <Link to={"/locations"}>Locations</Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path ="/register" element={<Register/>}/>
          <Route path ="/reviews" element={<Reviews/>}/>
          <Route path ="/locations" element={<Locations/>}/>
        </Routes>
      </div>
      
      </>
  )
}

export default App
