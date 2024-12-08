// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Naavbar'; // Ensure this path is correct
import Login from './components/Login';
import Register from './components/Register';
import YourComponent from './components/YourComponent';
import Dashboard from './components/Dashboard';
import Lessons from './components/Lessons';
import Handbook from './components/Handbook';


 // Import your CSS styles
 

const App = () => {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage /> } />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/yourcomponent" element={<YourComponent />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/Lessons" element={<Lessons />} />
                    <Route path="/Handbook" element={<Handbook />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
