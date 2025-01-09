import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<h2>Login Page (Coming Soon)</h2>} />
        <Route path="/signup" element={<h2>Sign-Up Page (Coming Soon)</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
