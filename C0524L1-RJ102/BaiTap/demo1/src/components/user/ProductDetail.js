import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { products } from './Products'; // Đảm bảo đúng đường dẫn
import Header from './Header';
import Footer from './Footer';
import '../../css/ProductDetail.css';

const formatPrice = (price) => {
  return parseInt(price).toLocaleString('vi-VN') + ' VND';
};

const ProductDetail = ({ cart = [], setCart, addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    setTotalQuantity(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  const handleQuantityChange = (event) => {
    setQuantity(Math.max(1, Number(event.target.value)));
  };

  const handleAddToCart = () => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Header 
        cart={cart} 
        totalQuantity={totalQuantity} 
        updateQuantity={updateQuantity} 
        removeFromCart={removeFromCart} 
        clearCart={clearCart}
      />
      <div className="container custom-see-details" style={{ paddingTop: '70px' }}>
        <div className="row custom-product-description">
          <div className="col-md-6">
            <Carousel>
              {product.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image}
                    className="d-block w-100 custom-carousel-img"
                    alt={`${product.name} ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-md-6">
            <h1 className="custom-product-name">{product.name}</h1>
            <p className="custom-product-price text-danger">{formatPrice(product.price)}</p>
            <p className="custom-product-stock">Số sản phẩm còn lại: {product.stock}</p>
            <div><b>MÔ TẢ SẢN PHẨM</b></div>
            <p className="custom-product-description">{product.description}</p>
            <div className="custom-shipping-info">Miễn phí vận chuyển</div>
            <div className="custom-social-share">
              <span>Chia sẻ:</span>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-pinterest"></i></a>
              <a href="#"><i className="bi bi-messenger"></i></a>
            </div>
            <div className="custom-quantity">
              <label>Số lượng: </label>
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={handleQuantityChange}
                className="form-control custom-quantity-input"
              />
            </div>
            <div className="custom-action-buttons">
              <button className="btn custom-add-to-cart-btn" onClick={handleAddToCart}>
                Thêm vào giỏ hàng
              </button>
              <button className="btn custom-buy-now-btn">
                Mua Ngay
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
