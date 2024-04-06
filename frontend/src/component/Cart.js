// Cart.js

import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (<CartItem key={item.id} item={item} onRemove={removeFromCart} />))}
      <h3>Total Price (in cart): ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
    </div>
  );
};

export default Cart;