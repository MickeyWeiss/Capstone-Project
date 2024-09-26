import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NavBar from './components/Navigations'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <>
      <div id="nav-bar-container">
        <div id="navbar">
          <Link to={"/home"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path ="/register" element={<Register/>}/>
        </Routes>
      </div>
      </>
  )
}

export default App
