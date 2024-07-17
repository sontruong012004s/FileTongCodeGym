import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    images: [],
    stock: 0,
    category: '',
    description: ''
  });
  const [categories, setCategories] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedCategories = localStorage.getItem('categories');
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }

    if (id) {
      const savedProducts = localStorage.getItem('products');
      if (savedProducts) {
        const products = JSON.parse(savedProducts);
        const productToEdit = products.find(p => p.id === parseInt(id));
        if (productToEdit) {
          setProduct(productToEdit);
          setImagePreviews(productToEdit.images);
        }
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'price') {
      newValue = value.replace(/\D/g, '');
      if (newValue) {
        newValue = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newValue);
      }
    }

    setProduct(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'price') {
      const numericValue = value.replace(/\D/g, '');
      const formattedValue = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numericValue);
      setProduct(prevState => ({
        ...prevState,
        price: formattedValue
      }));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(filePreviews);

    const fileReaders = files.map(file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    }));

    Promise.all(fileReaders)
      .then(images => {
        setProduct(prevState => ({
          ...prevState,
          images
        }));
      })
      .catch(error => console.error('Error reading files:', error));
  };

  const handleRemoveImage = (index) => {
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
    const updatedImages = product.images.filter((_, i) => i !== index);
    setImagePreviews(updatedPreviews);
    setProduct(prevState => ({
      ...prevState,
      images: updatedImages
    }));
  };

  const validate = () => {
    const errors = {};
    if (!product.name) errors.name = 'Tên sản phẩm là bắt buộc';
    if (!product.price) errors.price = 'Giá là bắt buộc';
    if (!product.images.length) errors.images = 'Ít nhất một hình ảnh là bắt buộc';
    if (!product.category) errors.category = 'Thể loại là bắt buộc';
    if (!product.description) errors.description = 'Mô tả là bắt buộc';
    return errors;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const savedProducts = localStorage.getItem('products');
    let products = savedProducts ? JSON.parse(savedProducts) : [];

    if (id) {
      products = products.map(p => p.id === parseInt(id) ? { ...product, price: product.price.replace(/\D/g, '') } : p);
    } else {
      product.id = Date.now();
      product.price = product.price.replace(/\D/g, ''); // Lưu giá trị số nguyên của giá
      products.push(product);
    }

    localStorage.setItem('products', JSON.stringify(products));
    navigate('/admin/products');
  };

  return (
    <div className="container">
      <h2>{id ? 'Sửa sản phẩm' : 'Thêm sản phẩm mới'}</h2>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label>Tên sản phẩm</label>
          <input type="text" className="form-control" name="name" value={product.name} onChange={handleChange} />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label>Giá</label>
          <input type="text" className="form-control" name="price" value={product.price} onChange={handleChange} onBlur={handleBlur} />
          {errors.price && <div className="text-danger">{errors.price}</div>}
        </div>
        <div className="form-group">
          <label>Hình ảnh (chọn nhiều ảnh)</label>
          <input type="file" className="form-control" multiple onChange={handleImageChange} />
          {errors.images && <div className="text-danger">{errors.images}</div>}
          <div className="image-previews mt-2">
            {imagePreviews.map((src, index) => (
              <div key={index} className="image-preview" style={{ position: 'relative', display: 'inline-block' }}>
                <img src={src} alt="preview" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                <button 
                  type="button" 
                  style={{ position: 'absolute', top: '0', right: '0', background: 'red', color: 'white', border: 'none', borderRadius: '50%' }} 
                  onClick={() => handleRemoveImage(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Số lượng</label>
          <input type="number" className="form-control" name="stock" value={product.stock} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Thể loại</label>
          <select className="form-control" name="category" value={product.category} onChange={handleChange}>
            <option value="">Chọn thể loại</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </select>
          {errors.category && <div className="text-danger">{errors.category}</div>}
        </div>
        <div className="form-group">
          <label>Mô tả</label>
          <textarea className="form-control" name="description" value={product.description} onChange={handleChange}></textarea>
          {errors.description && <div className="text-danger">{errors.description}</div>}
        </div>
        <button type="submit" className="btn btn-primary">{id ? 'Lưu thay đổi' : 'Thêm sản phẩm'}</button>
      </form>
    </div>
  );
};

export default ProductForm;
