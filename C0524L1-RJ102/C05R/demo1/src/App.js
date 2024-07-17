import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import Home from './page/Home';
import ProductDetail from './components/user/ProductDetail';
import Login from './page/Login';
import Register from './page/Register';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminProducts from './components/admin/AdminProducts';
import AdminCarts from './components/admin/AdminCarts';
import AdminCategories from './components/admin/AdminCategories';
import AdminOrders from './components/admin/AdminOrders';
import AdminLayout from './components/admin/AdminLayout';
import ProductForm from './components/admin/ProductForm';
import CategoryProducts from './components/user/CategoryProducts';
import { AuthProvider, useAuth } from './AuthContext';
import Header from './components/Header';
import { CartProvider } from './components/CartContext';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const HeaderSelector = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin') || location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }
  return <Header />;
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <HeaderSelector />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
            <Route path="/product/:id" element={<PrivateRoute element={<ProductDetail />} />} />
            <Route path="/category/:categoryId" element={<PrivateRoute element={<CategoryProducts />} />} />
            <Route path="/admin" element={<PrivateRoute element={<AdminLayout />} />}>
              <Route index element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="categories" element={<AdminCategories />} />
              <Route path="carts" element={<AdminCarts />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="products/edit/:id" element={<ProductForm />} />
              <Route path="products/new" element={<ProductForm />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
