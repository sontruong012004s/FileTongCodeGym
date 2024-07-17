import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/Home.css';
import { ProductSection } from '../components/user/Products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';

export default function Home() {
  const { cart, setCart, totalQuantity, addToCart, updateQuantity, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      console.log('Initializing cart from localStorage in Home:', JSON.parse(savedCart));
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

  return (
    <>
      <Header
        cart={cart}
        totalQuantity={totalQuantity}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
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
                  <img src="https://themewagon.github.io/aroma/img/home/hero-banner.png" alt="Hero Banner" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ProductSection
          cart={cart}
          addToCart={addToCart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
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
      <Footer />
    </>
  );
}
