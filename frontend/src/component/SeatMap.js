import React from 'react';
import CartItem from './CartItem';

const SeatMap = ({ seatMap, cartItems, removeFromCart }) => {
    return (
        <div className="seatmap">
          <h2>SeatMap</h2>
          {cartItems.map(item => (<CartItem key={item.id} seatMap={seatMap} onRemove={removeFromCart} />))}
          <h3>Choose your seat:</h3>
        </div>
      );
};