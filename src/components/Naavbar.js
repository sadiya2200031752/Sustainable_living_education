import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-inner">
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div className="auth-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/Dashboard">overview </Link>
        <Link to="/Lessons">Lesson plan</Link>
        <Link to="/YourComponent">components</Link>
        <Link to="/Handbook">Handbook</Link>
      </div>
    </nav>
    </div>
    </div>
  );
};

export default Navbar;
