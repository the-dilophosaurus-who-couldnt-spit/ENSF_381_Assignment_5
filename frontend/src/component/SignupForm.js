//Signup Form

import React, { useState } from 'react';

const SignupForm = ({ onSwitchToLogin, onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || email.trim() === '') {
      setMessage('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Password and Confirm Password must match.');
      return;
    }
    fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({'username':username, 'password':password, 'email': email})
    })
    .then(response => response.json())
    .then(response => {
      setMessage(response.message);
    })
    .catch(error => {
      console.error(`Consol ERROR: ${error}`);
      setMessage(error);
    });
    
  };

  return (
    <form onSubmit={handleSignup}>
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
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      <div>
        <button type="button" onClick={onSwitchToLogin}>Switch to Login</button>
      </div>
    </form>
  );
};

export default SignupForm;