import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header'; 
import Footer from '../../components/Footer'; 
import { useCart } from '../../components/CartContext';
import '../../css/Products.css';

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
            <img 
              src={product.images[0]} 
              className="card-img-top" 
              alt={product.name} 
              onError={(e) => e.target.src = 'https://via.placeholder.com/150'} 
            />
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

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const { cart, totalQuantity, addToCart, updateQuantity, removeFromCart, clearCart } = useCart(); // Sử dụng các hàm từ CartContext
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
          const allProducts = JSON.parse(savedProducts);
          const categoryProducts = allProducts.filter(product => 
            product.category === categoryId || product.category === categoryId.toString()
          );
          setProducts(categoryProducts);
        } else {
          throw new Error('No products found in localStorage');
        }
      } catch (error) {
        setError(error.toString());
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <React.Fragment>
      <Header cart={cart} totalQuantity={totalQuantity} updateQuantity={updateQuantity} removeFromCart={removeFromCart} clearCart={clearCart} />
      <div className="container" style={{ paddingTop: '80px' }}>
        <h2>Sản phẩm theo thể loại</h2>
        {error ? (
          <div className="alert alert-danger" role="alert">
            Error: {error}
          </div>
        ) : (
          <div className="row">
            {products.length > 0 ? (
              <ProductList products={products} addToCart={addToCart} />
            ) : (
              <p>Không có sản phẩm nào trong thể loại này.</p>
            )}
          </div>
        )}
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default CategoryProducts;
