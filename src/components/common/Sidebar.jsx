import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
const Sidebar = () => {
  return (
    <nav className='sidebar'>
        <ul>
            <li><Link to="/hr">Dashboard</Link></li>
            <li><Link to="/hr/users">User Management</Link></li>
            <li><Link to="/hr/candidates">Candidates</Link></li>
            <li><Link to="/hr/questions">Questions</Link></li>
            <li><Link to="/hr/results">
            Results</Link></li>
        </ul>
    </nav>
  )
}

export default Sidebar