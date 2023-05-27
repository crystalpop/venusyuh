import { useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom"
import './App.css'
import Home from './pages/home/Home'
import { Header } from './Components/header/Header.jsx'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
        
      <Header />
    </>
  )
}

export default App
