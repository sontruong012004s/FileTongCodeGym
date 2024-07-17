import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/Product.css';

const mockProductDetails = {
  1: { id: 1, name: 'Product 1', price: 100, description: 'Description of Product 1', images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'] },
  2: { id: 2, name: 'Product 2', price: 200, description: 'Description of Product 2', images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'] },
  // Add more product details here
};

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from API or use mock data
    setProduct(mockProductDetails[id]);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <div className="row">
        {product.images.map((image, index) => (
          <div className="col-md-4" key={index}>
            <img src={image} className="img-fluid" alt={product.name} />
          </div>
        ))}
      </div>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
