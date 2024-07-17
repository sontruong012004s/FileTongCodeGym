import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Products.css';
import { useCart } from '../CartContext';

const products = [];

const formatPrice = (price) => {
  const priceNumber = parseInt(price, 10);
  if (isNaN(priceNumber)) {
    return 'Giá không hợp lệ';
  }
  return priceNumber.toLocaleString('vi-VN') + ' VND';
};

const ProductList = ({ products, addToCart }) => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card h-100">
            <img src={product.images[0]} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{formatPrice(product.price)}</p>
              <div className="card-buttons">
                <button className="btn btn-primary btn-detail" onClick={() => handleViewDetails(product.id)}>Xem Chi Tiết</button>
                <button className="btn btn-secondary btn-add-cart" onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const getInitialCategories = () => {
  const savedCategories = localStorage.getItem('categories');
  return savedCategories ? JSON.parse(savedCategories) : [];
};

const ProductSection = () => {
  const [searchCategory, setSearchCategory] = useState('');
  const [searchName, setSearchName] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [displayedCategory, setDisplayedCategory] = useState('');
  const [showTitle, setShowTitle] = useState(false);
  const [searchResult, setSearchResult] = useState('');
  const categories = getInitialCategories();
  const { cart, addToCart, updateQuantity, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setFilteredProducts(JSON.parse(savedProducts));
    }
  }, []);

  const handleCategoryChange = (e) => {
    setSearchCategory(e.target.value);
  };

  const handleNameChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const savedProducts = localStorage.getItem('products');
    const allProducts = savedProducts ? JSON.parse(savedProducts) : products;
    const filtered = allProducts.filter(product => {
      const matchesCategory = searchCategory ? product.category === searchCategory : true;
      const matchesName = searchName ? product.name.toLowerCase().includes(searchName.toLowerCase()) : true;
      return matchesCategory && matchesName;
    });

    setFilteredProducts(filtered);
    setDisplayedCategory(searchCategory);
    setShowTitle(true);

    if (filtered.length === 0) {
      setSearchResult('Không tìm thấy sản phẩm nào phù hợp.');
    } else {
      setSearchResult('');
    }
  };

  const calculateTotalPrice = (price, quantity) => {
    const priceNumber = parseInt(price.replace(/\D/g, ''), 10);
    if (isNaN(priceNumber)) {
      return 0;
    }
    return priceNumber * quantity;
  };

  const totalCartPrice = cart.reduce((total, item) => total + calculateTotalPrice(item.price, item.quantity), 0);

  return (
    <section className="container product">
      <h2>Danh Sách Sản Phẩm</h2>
      <div className="d-flex align-items-center mt-2 pb-4">
        <h2 className="mr-2 mb-0">Chọn thể loại:</h2>
        <form className="form-inline" onSubmit={handleSearchSubmit}>
          <select className="custom-select" value={searchCategory} onChange={handleCategoryChange}>
            <option value="">Tất cả sản phẩm</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </select>
          <input type="text" id="inputSearch" value={searchName} onChange={handleNameChange} placeholder="Nhập tên sản phẩm..." />
          <button type="submit" className="btn btn-primary search">Tìm kiếm</button>
        </form>
      </div>
      {showTitle && (
        <h3 className="mt-0">
          <ins>Bạn đang xem</ins>{displayedCategory ? (<span><ins> sản phẩm:</ins> {displayedCategory}</span>) : (<><ins>:</ins> Tất cả sản phẩm</>)}
        </h3>
      )}
      {searchResult && <p><strong>{searchResult}</strong></p>}
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </section>
  );
};

export { ProductSection, products };
