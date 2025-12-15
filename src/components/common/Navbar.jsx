import React from 'react'

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
          🔔Notifications 
        </button>

      
        <button 
          className="nav-button logout-button"
          aria-label="Logout"
        >
          🚪Logout
        </button>
      </div>
    </header>
  )
}

export default Navbar