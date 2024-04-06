import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';

const App = () => {
  const [authentication, setAuthentication] = useState(true);


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* Use a ternary operator to conditionally render components /}
          <Route
            path="/products"
            element={authentication ? <Productpage /> : <LoginPage/>}
          />
          {/ Render the LoginPage component for the /login route */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;