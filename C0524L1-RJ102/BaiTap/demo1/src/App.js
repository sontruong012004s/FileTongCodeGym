import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './page/Home';
import ProductDetail from './components/user/ProductDetail';
import Login from './page/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminProducts from './components/admin/AdminProducts';
import ProductForm from './components/admin/ProductForm';
import AdminCategories from './components/admin/AdminCategories';
import AdminOrders from './components/admin/AdminOrders';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider, useAuth } from './AuthContext';

function App() {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const quantity = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(quantity);
  }, [cart]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
          <Route path="/admin/products" element={<PrivateRoute><AdminProducts /></PrivateRoute>} />
          <Route path="/admin/products/new" element={<PrivateRoute><ProductForm /></PrivateRoute>} />
          <Route path="/admin/products/edit/:id" element={<PrivateRoute><ProductForm /></PrivateRoute>} />
          <Route path="/admin/categories" element={<PrivateRoute><AdminCategories /></PrivateRoute>} />
          <Route path="/admin/orders" element={<PrivateRoute><AdminOrders /></PrivateRoute>} />
          <Route path="*" element={<RequireAuth><Home cart={cart} setCart={setCart} totalQuantity={totalQuantity} addToCart={addToCart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} /></RequireAuth>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default App;
