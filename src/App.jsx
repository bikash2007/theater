import React from 'react'
import Header from './componets/Header'
import { Outlet } from 'react-router-dom'
import Footer from './componets/Footer'
import { Toaster } from 'react-hot-toast'
import GoogleAuth_redirect from './componets/Auth/GoogleAuth_redirect'

const App = () => {
  return (
    <>
      <Header />
      <Toaster position="top-right" reverseOrder={false} />
      <div className='pt-12 bg-black'>

      <Outlet />
      </div>
      <Footer/>
      
    </>
  )
}

export default App