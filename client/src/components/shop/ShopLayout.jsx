import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navbar from './Navbar'
import NavbarHome from './Navbar'
function ShopLayout() {
  return (
    <>
    <NavbarHome/>
 <Outlet/>
    </>
  )
}

export default ShopLayout