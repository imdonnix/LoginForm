import React, { useState } from "react";
import "./LoginForm.css";

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get stored user data from session storage
    const storedUserData = sessionStorage.getItem("userData");
    if (!storedUserData) {
      alert("No registered users found. Please register first.");
      return;
    }

    const userData = JSON.parse(storedUserData);
    if (username === userData.username && password === userData.password) {
      onLogin();
    } else {
      alert("Invalid username or password");
    }
  };

  const handleRegister = () => {
    // Using the history API for navigation
    window.history.pushState({}, '', '/register');
    window.location.reload();
  };

  return (
    <div>
      <h2></h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleRegister} style={{ marginTop: '10px' }}>Register</button>
    </div>
  );
};

export default LoginForm;
