import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminProducts = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleEdit = (id) => {
    navigate(`/admin/products/edit/${id}`);
  };

  const handleAddNew = () => {
    navigate('/admin/products/new');
  };

  return (
    <div className="container">
      <h2>Quản lý Sản phẩm</h2>
      <button className="btn btn-primary" onClick={handleAddNew}>Thêm sản phẩm mới</button>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Thể loại</th>
            <th>Số lượng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><img src={product.images[0]} alt={product.name} style={{ width: '50px', height: '50px' }} /></td>
              <td>{product.name}</td>
              <td>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td className="text-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button className="btn btn-secondary mx-1" style={{ borderRadius: '5px' }} onClick={() => handleEdit(product.id)}>Sửa</button>
                  <button className="btn btn-danger" style={{ borderRadius: '5px' }} onClick={() => handleDelete(product.id)}>Xóa</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
