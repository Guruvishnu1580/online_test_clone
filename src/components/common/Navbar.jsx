import React from 'react'
import { BellRing,LogOut } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        CW HR Dashboard
      </div>
      
      <div className="navbar-controls">
        <button 
          className="nav-button notification-button"
          aria-label="View Notifications"
        >
          <BellRing /></button>
        <button 
          className="nav-button logout-button"
          aria-label="Logout"
        >
          <LogOut />
        </button>
      </div>
    </header>
  )
}

export default Navbar