import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products as initialProducts } from '../user/Products';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });
  const [product, setProduct] = useState(() => {
    return id ? products.find((p) => p.id === parseInt(id)) : { id: null, name: '', price: '', images: [], stock: 0, category: '', description: '' };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const updatedProducts = products.map((p) => (p.id === product.id ? product : p));
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    } else {
      const newProduct = { ...product, id: Date.now() };
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
    navigate('/admin/products');
  };

  return (
    <div className="container">
      <h2>{id ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="text" name="price" value={product.price} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Images</label>
          <input type="text" name="images" value={product.images.join(', ')} onChange={(e) => setProduct({ ...product, images: e.target.value.split(', ') })} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Stock</label>
          <input type="number" name="stock" value={product.stock} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input type="text" name="category" value={product.category} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={product.description} onChange={handleChange} className="form-control" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Add'} Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
