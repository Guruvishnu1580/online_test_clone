import React from 'react'
import { Link } from 'react-router-dom'
import { Users ,User,ShieldQuestionMark ,BookOpenCheck,LayoutDashboard} from 'lucide-react'
import '../../App.css'

const Sidebar = () => {
  return (
    <nav className='sidebar'>
        <ul>
            <li><Link to="/hr"><LayoutDashboard /> Dashboard</Link></li>
            <li><Link to="/hr/users"><Users/> User Management</Link></li>
            <li><Link to="/hr/candidates"><User /> Candidates</Link></li>
            <li><Link to="/hr/questions"><ShieldQuestionMark /> Questions</Link></li>
            <li><Link to="/hr/results"><BookOpenCheck /> Results</Link></li>
        </ul>
    </nav>
  )
}

export default Sidebar