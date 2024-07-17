import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/Home.css';
import { ProductSection, products } from '../components/user/Products';
import { Link } from 'react-router-dom';

export default function Home({ cart, setCart, totalQuantity, addToCart, updateQuantity, removeFromCart }) {
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

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
    <>
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
      <main className="main-content">
        <section className="hero-banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-text">
                  <h1>Mua sắm thật vui</h1>
                  <h2>TÌM HIỂU SẢN PHẨM CAO CẤP CỦA CHÚNG TÔI</h2>
                  <p>Chúng ta vượt qua các dấu hiệu phân chia quyền thống trị sâu sắc mang lại cho họ thịt beho trên trái đất của riêng mình mà không có buổi sáng thứ ba. Con đực của họ khô. Chúng xuất hiện tuyệt vời có cỏ bay trên đất.</p>
                  <Link to="#" className="btn btn-primary">Duyệt ngay</Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-image">
                  <img src="https://themewagon.github.io/aroma/img/home/hero-banner.png" alt="Hero Banner" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProductSection products={products} cart={cart} addToCart={addToCart} updateQuantity={updateQuantity} />
        <section className="subscription-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="subscription-inner text-center">
                  <h1>GET UPDATE FROM ANYWHERE</h1>
                  <p>Bearing Void gathering light light his eavening unto dont afraid</p>
                  <div className="subscription-form">
                    <form action="#">
                      <div className="input-group">
                        <input type="email" className="form-control" placeholder="Your Email Address" required />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">Subscribe Now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-area">
          <div className="container">
            <div className="row section_gap">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget tp_widgets">
                  <h4 className="footer_title large_title">Our Mission</h4>
                  <p>
                    So seed seed green that winged cattle in. Gathering thing made fly you're no 
                    divided deep moved us lan Gathering thing us land years living.
                  </p>
                  <p>
                    So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved 
                  </p>
                </div>
              </div>
              <div className="offset-lg-1 col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget tp_widgets">
                  <h4 className="footer_title">Quick Links</h4>
                  <ul className="list">
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">Shop</Link></li>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">Product</Link></li>
                    <li><Link to="#">Brand</Link></li>
                    <li><Link to="#">Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget instafeed">
                  <h4 className="footer_title">Gallery</h4>
                  <ul className="list instafeed d-flex flex-wrap">
                    <li><img src="https://themewagon.github.io/aroma/img/gallery/r1.jpg" alt=""/></li>
                    <li><img src="https://themewagon.github.io/aroma/img/gallery/r2.jpg" alt=""/></li>
                    <li><img src="https://themewagon.github.io/aroma/img/gallery/r3.jpg" alt=""/></li>
                    <li><img src="https://themewagon.github.io/aroma/img/gallery/r5.jpg" alt=""/></li>
                    <li><img src="https://themewagon.github.io/aroma/img/gallery/r7.jpg" alt=""/></li>
                    <li><img src="https://themewagon.github.io/aroma/img/gallery/r8.jpg" alt=""/></li>
                  </ul>
                </div>
              </div>
              <div className="offset-lg-1 col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget tp_widgets">
                  <h4 className="footer_title">Contact Us</h4>
                  <div className="ml-40">
                    <p className="sm-head"><span className="fa fa-location-arrow"></span>Head Office</p>
                    <p>123, Main Street, Your City</p>
                    <p className="sm-head"><span className="fa fa-phone"></span>Phone Number</p>
                    <p>+123 456 7890 <br/>+123 456 7890</p>
                    <p className="sm-head"><span className="fa fa-envelope"></span>Email</p>
                    <p>free@infoexample.com <br/>www.infoexample.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row d-flex">
              <p className="col-lg-12 footer-text text-center">
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com"Chọn thể loại>Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
