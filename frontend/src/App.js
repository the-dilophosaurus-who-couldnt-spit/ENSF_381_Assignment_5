// App.js

import React from 'react';
import { AuthProvider } from './component/AuthContext'; // Import the Authentication context
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import ProductPage from './component/ProductPage';
import LoginPage from './component/LoginPage';


const App = () => {
  return (
    <Router>
      <AuthProvider> {/* Wrap your Routes with AuthProvider */}
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
