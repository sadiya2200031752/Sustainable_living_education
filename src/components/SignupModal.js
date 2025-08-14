import React, { useState } from 'react';

function SignupModal({ onClose }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [age, setAge] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleSignup = () => {
    if (!fullName || !email || !user || !age || !pass || !confirmPass) {
      alert('All fields are required');
      return;
    }

    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email');
      return;
    }

    if (pass !== confirmPass) {
      alert('Passwords do not match');
      return;
    }

    localStorage.setItem(
      'ecoUser',
      JSON.stringify({ fullName, email, user, pass })
    );

    alert('Signup successful! Please login.');
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close">&times;</span>
        <h3>Signup</h3>
        <input
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        />
        <input 
          placeholder="Age" 
          type="number" 
          onChange={(e) => setAge(e.target.value)} 
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          type="password"
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
}

export default SignupModal;
