import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminCategories = () => {
  const [categories, setCategories] = useState(['Áo', 'Quần']);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = (e) => {
    e.preventDefault();
    setCategories([...categories, newCategory]);
    setNewCategory('');
  };

  const handleDeleteCategory = (category) => {
    setCategories(categories.filter(cat => cat !== category));
  };

  return (
    <AdminLayout>
      <h1>Manage Categories</h1>
      <form onSubmit={handleAddCategory} className="mb-3">
        <div className="form-group">
          <label>New Category</label>
          <input type="text" className="form-control" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Category</button>
      </form>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category}>
              <td>{category}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteCategory(category)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default AdminCategories;
