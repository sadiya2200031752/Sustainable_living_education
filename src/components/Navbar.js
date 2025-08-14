import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link for routing

function Navbar({ onLoginClick, onSignupClick, onLogout, isLoggedIn }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">EcoEdu</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          {!isLoggedIn ? (
            <>
              <li><button onClick={onLoginClick}>Login</button></li>
              <li><button onClick={onSignupClick}>Signup</button></li>
            </>
          ) : (
            <li><button onClick={onLogout}>Signout</button></li>
          )}
        </ul>

        {/* Hamburger menu */}
        <div className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </div>
      </nav>

      {/* Sidebar menu */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <ul>
          <li><Link to="/eco-study" onClick={toggleSidebar}>Eco-friendly Study</Link></li>
          <li><Link to="/digital-study" onClick={toggleSidebar}>Digital Study</Link></li>
          <li><Link to="/moral-stories" onClick={toggleSidebar}>Moral Stories</Link></li>
          <li><Link to="/more-ideas" onClick={toggleSidebar}>More Ideas</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
