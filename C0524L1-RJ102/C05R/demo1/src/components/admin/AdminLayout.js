import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useAuth } from '../../AuthContext';

const AdminLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="admin-layout">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/admin">Bảng điều khiển Quản trị</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/products">Sản phẩm</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/categories">Thể loại</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/admin/carts">Giỏ hàng</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/admin/orders">Đơn hàng</Link>
            </li>
          </ul>
          <button className="btn btn-danger" onClick={handleLogout}>Đăng xuất</button>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
