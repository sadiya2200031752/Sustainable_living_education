import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await ApiService.getUser();
      setUser(data); // Save user data in state
    };

    fetchUser();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
