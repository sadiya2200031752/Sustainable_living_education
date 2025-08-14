import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import EcoStudy from './components/EcoStudy';
import DigitalStudy from './components/DigitalStudy';
import MoralStories from './components/MoralStories';
import MoreIdeas from './components/MoreIdeas';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    localStorage.setItem('loggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('loggedIn');
  };

  return (
    <Router>
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
        onLogout={handleLogout}
        isLoggedIn={isLoggedIn}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eco-study" element={<EcoStudy />} />
        <Route path="/Digital-Study" element={<DigitalStudy />} />
        <Route path="/Moral-stories" element={<MoralStories />} />
        <Route path="/more-ideas" element={<MoreIdeas />} />
      </Routes>

      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />
      )}
      {showSignup && (
        <SignupModal onClose={() => setShowSignup(false)} />
      )}
    </Router>
  );
}

export default App;
