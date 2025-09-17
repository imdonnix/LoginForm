import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import ContentPage from './ContentPage/ContentPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              !isLoggedIn ? (
                <LoginForm onLogin={handleLogin} />
              ) : (
                <Navigate to="/content" replace />
              )
            } 
          />
          <Route path="/register" element={<RegistrationForm />} />
          <Route 
            path="/content" 
            element={
              isLoggedIn ? (
                <ContentPage />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
