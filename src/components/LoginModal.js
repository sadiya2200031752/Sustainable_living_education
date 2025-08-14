import React, { useState } from 'react';

function LoginModal({ onClose, onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    const stored = JSON.parse(localStorage.getItem('ecoUser'));
    if (stored?.user === user && stored?.pass === pass) {
      alert('Login successful!');
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close">&times;</span>
        <h3>Login</h3>
        <input placeholder="Username" onChange={(e) => setUser(e.target.value)} />
        <input placeholder="Password" type="password" onChange={(e) => setPass(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginModal;
