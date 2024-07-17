import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin panel. Use the navigation to manage products, categories, and view orders.</p>
    </AdminLayout>
  );
};

export default AdminDashboard;
