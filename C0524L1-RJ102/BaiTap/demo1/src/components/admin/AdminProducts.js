import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { products } from '../../components/user/Products';
import { Link } from 'react-router-dom';
import '../../css/AdminProducts.css';

const AdminProducts = () => {
  const [productList, setProductList] = useState(products);

  const handleDelete = (id) => {
    const updatedProducts = productList.filter(product => product.id !== id);
    setProductList(updatedProducts);
  };

  return (
    <AdminLayout>
      <h1>Manage Products</h1>
      <Link to="/admin/products/new" className="btn btn-primary mb-3">Add New Product</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList.map(product => (
            <tr key={product.id}>
              <td><img src={product.images[0]} alt={product.name} style={{ width: '50px', height: '50px' }} /></td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <Link to={`/admin/products/edit/${product.id}`} className="btn btn-secondary btn-sm">Edit</Link>
                <button onClick={() => handleDelete(product.id)} className="btn btn-danger btn-sm ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default AdminProducts;
