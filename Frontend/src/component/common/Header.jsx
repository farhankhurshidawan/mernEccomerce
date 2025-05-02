import React from 'react'
import Topbar from '../layout/Topbar'
import Navbar from './Navbar'

function Header() {
  return (
    <header>
    {/* Topbar */}
    <Topbar/>
    {/* navbar */}
    <Navbar/>
    {/* Cart Drawer */}
    </header>
  )
}

export default Header