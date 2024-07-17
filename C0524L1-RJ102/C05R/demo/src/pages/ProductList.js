import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../CSS/Product.css';

const mockProducts = [
  { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 200, image: 'https://via.placeholder.com/150' },
  // Add more products here
];

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API or use mock data
    setProducts(mockProducts);
  }, []);

  return (
    <div className="container">
      <h2>Product List</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

