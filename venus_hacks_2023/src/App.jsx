import { useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom"
import './App.css'
import Home from './pages/home/Home'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
