import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/auth/login', credentials);
      if (typeof response.data === 'string') {
        setMessage(response.data); // Show error message if login fails
      } else {
        setUserDetails(response.data); // Store user details on successful login
        setMessage('Login successful!');
      }
    } catch (error) {
      setMessage(error.response?.data || 'An error occurred during login.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Log In</button>
      </form>
      {message && <p>{message}</p>}
      {userDetails && (
        <div>
          <h3>Welcome, {userDetails.name}</h3>
          <p>Role: {userDetails.role}</p>
          <p>Username: {userDetails.username}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
