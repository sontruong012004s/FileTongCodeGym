import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    setCategories([...categories, { id: categories.length + 1, name: newCategory }]);
    setNewCategory('');
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  return (
    <div>
      <h2>Quản lý thể loại</h2>
      <div className="form-group">
        <label>Tên thể loại</label>
        <input 
          type="text" 
          className="form-control" 
          value={newCategory} 
          onChange={(e) => setNewCategory(e.target.value)} 
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddCategory}>Thêm thể loại</button>
      <h3 className="mt-4">Danh sách thể loại</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên thể loại</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDeleteCategory(category.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryManagement;
