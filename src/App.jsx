import React from 'react'
import Header from './componets/Header'
import { Outlet } from 'react-router-dom'
import Footer from './componets/Footer'

const App = () => {
  return (
    <>
      <Header />
      
      <Outlet />
      <Footer/>
    </>
  )
}

export default App