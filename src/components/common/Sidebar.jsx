import React from "react";
import { NavLink } from "react-router-dom";
import {
  Users,
  User,
  ShieldQuestionMark,
  BookOpenCheck,
  LayoutDashboard,
} from "lucide-react";
import "../../App.css";
 
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/hr">
            <LayoutDashboard/>
            <span>Dashboard</span>
          </NavLink>
        </li> 
        <li>
          <NavLink to="/hr/candidates">
            <User />
            <span>Candidates</span>
          </NavLink>
        </li>
 
        <li>
          <NavLink to="/hr/questions">
            <ShieldQuestionMark />
            <span>Questions</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/hr/results">
            <BookOpenCheck />
            <span>Results</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/hr/users">
            <Users />
            <span>User Management</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
 
export default Sidebar;
 
 