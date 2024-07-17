import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/AdminLayout.css';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/admin">Admin Dashboard</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/orders">Orders</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
