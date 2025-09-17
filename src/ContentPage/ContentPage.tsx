import React from "react";
import "./ContentPage.css";

const ContentPage: React.FC = () => {
  const userData = JSON.parse(sessionStorage.getItem("userData") || "{}");
  
  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    window.history.pushState({}, '', '/');
    window.location.reload();
  };

  return (
    <div className="content-container">
      <nav className="navigation-bar">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </nav>
      <div className="welcome-message">
        <p>You are already login, {userData.username}</p>
        <p>Thank you!</p>
      </div>
    </div>
  );
};

export default ContentPage;