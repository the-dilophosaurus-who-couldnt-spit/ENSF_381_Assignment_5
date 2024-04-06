// ProductItem.js

import React, { useState } from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} style={{width:'300px'}}/>
      <h3 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {product.name}
      </h3> 
      <p>{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        {showDescription && <p>{product.description}</p>}
    </div>
  );
};

export default ProductItem;