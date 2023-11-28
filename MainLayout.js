import React from 'react'
import Navbar from '../components/Navbar'

function MainLayout({children}) {
  return (
    <div>
        <Navbar></Navbar>
        <div>{children}</div>
        <div>Here is slidebar</div>
    </div>
  )
}

export default MainLayout