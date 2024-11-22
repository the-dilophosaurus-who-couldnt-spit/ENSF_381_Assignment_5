// MoviePage.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useAuth } from './AuthContext'; // Import the useAuth hook
import Header from './Header';
import MovieList from './MovieList';
import Cart from './Cart';
import Footer from './Footer';

const MoviePage = () => {
  const { authenticated } = useAuth(); // Get the authenticated state from the context
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (!authenticated) {
      // Redirect to login page if not authenticated
      navigate('/login');
    } else {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      if (storedCartItems) {
        setCartItems(storedCartItems);
      }
    }
  }, [authenticated, navigate]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (movie) => {
    navigate(`/movies/${movie.id}/seatmap`);
  };
  
/*
  const addToCart = (movie) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === movie.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...movie, quantity: 1 }]);
    }
  };
*/
  const removeFromCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
  
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      const updatedItem = { ...updatedCartItems[existingItemIndex] };
  
      if (updatedItem.quantity > 1) {
        updatedItem.quantity -= 1;
        updatedCartItems[existingItemIndex] = updatedItem;
      } else {
        updatedCartItems.splice(existingItemIndex, 1);
      }
  
      setCartItems(updatedCartItems);
    }
  };
  
  return (
    <div className="movie-page">
      <Header />
      <table style={{ width: "100%" }}>
        <tr>
          <td style={{ verticalAlign: 'top' }}><MovieList addToCart={addToCart} /></td>
          <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} removeFromCart={removeFromCart} /></td>
        </tr>
      </table>
      <Footer />
    </div>
  );
};

export default MoviePage;
