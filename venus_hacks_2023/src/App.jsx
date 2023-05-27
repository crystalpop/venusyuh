import { useState } from 'react'
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import './App.css'
import Home from './pages/home/Home'
import Start from './pages/start/Start'


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/start' element={<Start />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
