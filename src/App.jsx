
import React from 'react'
import Home from './pages/Home'
import Humidity from './pages/Humidity'
import NavBar from './componenets/NavBar'

import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
 

  return (
    <>
       {/* <Home /> */}

       <NavBar />
      <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path='/humidity' element={<Humidity />} />
      </Routes>
       
    </>
  )
}

export default App


