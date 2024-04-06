// ProductList.js

import React from 'react';
import ProductItem from './ProductItem';
import product from '../data/products';

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {product.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;