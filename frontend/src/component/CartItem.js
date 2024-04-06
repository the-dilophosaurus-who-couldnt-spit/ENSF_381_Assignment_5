// CartItem.js

import React from 'react';

const CartItem = ({ item, onRemove }) => {
  const { image, name, price, quantity } = item;
  const totalPrice = price * quantity;

  return (
    <div className="cart-item">
      <img src={image} alt={name} style= {{width:'300px'}}/>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={() => onRemove(item)}>Remove</button>
    </div>
  );
};

export default CartItem;