import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import ProductPage from './component/ProductPage';
import LoginPage from './component/LoginPage';

const App = () => {
  const [authentication, setAuthentication] = useState(true);


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* Use a ternary operator to conditionally render components */}
          <Route
            path="/products"
            element={authentication? <ProductPage/> : <LoginPage/>}
          />
          {/* Render the LoginPage component for the /login route */}
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;