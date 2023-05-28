import { useState } from 'react'
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import './App.css'
import Home from './pages/home/Home'
import Start from './pages/start/Start'
import { ThemeProvider } from 'react-bootstrap'
import Video from './pages/videos/Video'

function App() {
 

  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/major-video' element={<Video />} />
        <Route path='/home' element={<Home />} />
        <Route path='/start' element={<Start />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
