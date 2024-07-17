import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Admin from './pages/Admin';
import User from './pages/User';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without Header */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Routes with Header */}
        <Route path="/" element={<Layout />}>
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="admin" element={<Admin />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
