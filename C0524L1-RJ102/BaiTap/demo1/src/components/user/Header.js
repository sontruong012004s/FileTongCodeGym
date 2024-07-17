import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../css/Header.css';  // Create this CSS file for header-specific styles if needed

export default function Header({ cart, totalQuantity, updateQuantity, removeFromCart, clearCart }) {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const formatPrice = (price) => {
    return parseInt(price).toLocaleString('vi-VN') + ' VND';
  };

  const calculateTotalPrice = (price, quantity) => {
    const priceNumber = parseInt(price.replace(/\D/g, ''), 10);
    return priceNumber * quantity;
  };

  const totalCartPrice = cart.reduce((total, item) => total + calculateTotalPrice(item.price, item.quantity), 0);

  return (
    <header className="header_area pt-2">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="container">
            <Link className="navbar-brand logo_h" to="/">
              <img src="https://themewagon.github.io/aroma/img/logo.png" alt="Aroma Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Trang chủ</Link></li>
                <li className="nav-item dropdown">
                  <Link to="#" className="nav-link dropdown-toggle" id="shopDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sản phẩm</Link>
                  <div className="dropdown-menu" aria-labelledby="shopDropdown">
                    <Link className="dropdown-item" to="#">Áo</Link>
                    <Link className="dropdown-item" to="#">Quần</Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link to="#" className="nav-link dropdown-toggle" id="blogDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</Link>
                  <div className="dropdown-menu" aria-labelledby="blogDropdown">
                    <Link className="dropdown-item" to="#">Blog Single</Link>
                    <Link className="dropdown-item" to="#">Blog Details</Link>
                  </div>
                </li>
                <li className="nav-item"><Link className="nav-link" to="#">Contact</Link></li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button className="btn btn-cart" onClick={toggleCart}>
                    <i className="bi bi-cart"></i> Giỏ hàng: <span>{totalQuantity}</span>
                  </button>
                  {showCart && (
                    <div className="cart-container">
                      <button className="delete" onClick={clearCart}>Xóa tất cả</button>
                      <table className="table table-bordered mt-2">
                        <thead>
                          <tr>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th>Thao tác</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map(item => (
                            <tr key={item.id}>
                              <td><img src={item.images[0]} alt={item.name} style={{ width: '50px', height: '50px' }} /></td>
                              <td>{item.name}</td>
                              <td className="quantity-container">
                                <div className="input-group">
                                  <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                  <input type="text" value={item.quantity} readOnly className="form-control" />
                                  <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                              </td>
                              <td>{formatPrice(calculateTotalPrice(item.price, item.quantity).toString())}</td>
                              <td><button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>Xóa</button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div>
                        <strong>Tổng tiền:</strong> {formatPrice(totalCartPrice.toString())}
                      </div>
                    </div>
                  )}
                </li>
                <li className="nav-item"><Link className="btn btn-primary" to="#">Mua Ngay</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
