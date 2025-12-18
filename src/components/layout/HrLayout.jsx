import React from 'react'
import Navbar from '../common/Navbar'
import Sidebar from '../common/Sidebar'
import { Outlet } from 'react-router-dom'
import '../../App.css'
import Footer from '../common/Footer'

const HrLayout = () => {
  return (
    <div className="hr-dashboard-layout">
        <Navbar/>
        <div className="hr-layout-content">
            <Sidebar/>
            <main className="hr-main-section">
               <Outlet/>
            </main>
        </div>
        <Footer/>
    </div> 
  )
}

export default HrLayout