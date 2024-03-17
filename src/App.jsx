import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Main from './components/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  )
}