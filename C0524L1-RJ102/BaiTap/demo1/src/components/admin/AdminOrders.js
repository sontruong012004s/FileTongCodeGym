import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

const orders = [
  // Mock data for orders
  {
    id: 1,
    user: 'User1',
    items: [
      { productId: 1, name: 'Quần Dài Jean Nam', quantity: 2, price: '219000' },
      { productId: 2, name: 'Quần 1', quantity: 1, price: '200000' }
    ],
    total: '638000'
  },
  {
    id: 2,
    user: 'User2',
    items: [
      { productId: 3, name: 'Quần 1', quantity: 3, price: '200000' }
    ],
    total: '600000'
  }
];

const AdminOrders = () => {
  return (
    <AdminLayout>
      <h1>Manage Orders</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Items</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user}</td>
              <td>
                <ul>
                  {order.items.map(item => (
                    <li key={item.productId}>{item.name} (x{item.quantity})</li>
                  ))}
                </ul>
              </td>
              <td>{order.total} VND</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default AdminOrders;
