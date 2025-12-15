import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../common/Sidebar'
import Navbar from '../common/Navbar'
import '../../App.css'

const HrLayout = () => {
  return (
    <div className="hr-dashboard-layout">
      <Navbar />
      <div className="hr-layout-content">
        <Sidebar />
        <main className="hr-main-section">
          <Outlet />
        </main>
      </div>
    </div>
  )
}


export default HrLayout