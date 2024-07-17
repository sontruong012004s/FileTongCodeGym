import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminCategories = () => {
  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : [];
  });
  const [newCategory, setNewCategory] = useState('');
  const [editCategory, setEditCategory] = useState(null);

  useEffect(() => {
    console.log('Categories updated:', categories);
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const updateProductsCategoryId = (oldId, newId, newName) => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      const products = JSON.parse(savedProducts);
      const updatedProducts = products.map(product => 
        product.categoryId === oldId ? { ...product, categoryId: newId, categoryName: newName } : product
      );
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      if (editCategory) {
        updateProductsCategoryId(editCategory.id, editCategory.id, newCategory);
        setCategories(categories.map(category => 
          category.id === editCategory.id ? { ...category, name: newCategory } : category
        ));
        setEditCategory(null);
      } else {
        const newId = categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1;
        setCategories([...categories, { id: newId, name: newCategory }]);
      }
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (id) => {
    const categoryToDelete = categories.find(category => category.id === id);
    updateProductsCategoryId(categoryToDelete.id, '', '');
    setCategories(categories.filter(category => category.id !== id));
  };

  const handleEditCategory = (category) => {
    setNewCategory(category.name);
    setEditCategory(category);
  };

  return (
    <div className="container mt-4">
      <h2>Quản lý Thể loại</h2>
      <div className="form-group">
        <label>{editCategory ? 'Chỉnh sửa Thể loại' : 'Thể loại mới'}</label>
        <input
          type="text"
          className="form-control"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleAddCategory}>
          {editCategory ? 'Lưu Thể loại' : 'Thêm Thể loại'}
        </button>
      </div>
      <h3 className="mt-4">Danh sách Thể loại</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên thể loại</th>
            <th className="text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td className="text-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button className="btn btn-secondary mx-1" style={{ borderRadius: '5px' }} onClick={() => handleEditCategory(category)}>Sửa</button>
                  <button className="btn btn-danger" style={{ borderRadius: '5px' }} onClick={() => handleDeleteCategory(category.id)}>Xóa</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCategories;
