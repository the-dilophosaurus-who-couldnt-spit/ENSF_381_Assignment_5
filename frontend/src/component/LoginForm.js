//LoginForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onSwitchToSignup}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Authenticated, setAuthenticated] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  console.log("");
  console.log(`username: ${username}`);
  console.log(`pass: ${password}`);
  console.log(`authenticated: ${Authenticated}`);
  console.log(`messege: ${message}`);

  function handleLogin(e) {
    e.preventDefault();
  
    fetch('http://127.0.0.1:5000/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'username': username, 'password': password }),
    })
      .then(response => response.json())
      .then(data => {
        setAuthenticated(data.authenticated);
        setMessage(data.message);
        if (data.authenticated) {
          navigate("/products");
        }
      })
      .catch(error => {
        console.error(`Error: ${error}`);
        setMessage(error);
      });
  };

  return (
    <form onSubmit={handleLogin}>

      <div style={{ marginBottom: '10px' }}>
        <span style={{ color: 'red', display: 'block', fontSize: '14px' }}>{message}</span>
      </div>

      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button type="submit">Login</button>
      </div>

      <div>
        <button type="button" onClick={onSwitchToSignup}>Switch to Signup</button>
      </div>
    </form>
  );
};

export default LoginForm;