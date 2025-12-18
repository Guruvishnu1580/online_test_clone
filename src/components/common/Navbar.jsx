import { BellRing, LogOut } from 'lucide-react'
import React from 'react'
import '../../App.css'
import logo from '../../assets/images/candorworkslogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="navbar">
        <div className='navbar-logo'>
            <Link to="/hr"><img src={logo} alt="CANDORWORKS Logo" className="navbar-logo" /></Link>
        </div>

        <div className="navbar-controls">

          <button className="nav-button notification-button" aria-label="View Notifications"
          ><BellRing /></button>

          <button className="nav-button logout-button" aria-label="Logout">
            <LogOut />
          </button>
        </div>
    </header>
  )
}

export default Navbar