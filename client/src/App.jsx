import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navigations'

function App() {

  return (
    <>
    <Router>
      <div id = "NavBar">
        <NavBar></NavBar>
      </div>
    </Router>
    </>
  )
}

export default App
