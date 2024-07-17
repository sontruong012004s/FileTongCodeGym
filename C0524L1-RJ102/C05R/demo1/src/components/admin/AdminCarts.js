import React, { useState } from 'react';

const AdminCarts = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      images: ['https://example.com/image1.jpg'],
      name: 'Sản phẩm 1',
      quantity: 1,
      price: 111111,
    },
  ]);

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item)));
  };

  const removeFromCart = id => {
    setCart(cart.filter(item => item.id !== id));
  };

  const calculateTotalPrice = (price, quantity) => {
    return price * quantity;
  };

  const formatPrice = price => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const totalCartPrice = cart.reduce((total, item) => total + calculateTotalPrice(item.price, item.quantity), 0);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="cart-container1">
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
                  <td>
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      style={{ width: '50px', height: '50px' }}
                      onError={(e) => (e.target.src = 'https://via.placeholder.com/50')}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td className="quantity-container">
                    <div className="input-group">
                      <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <input type="text" value={item.quantity} readOnly className="form-control" />
                      <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </td>
                  <td>{formatPrice(calculateTotalPrice(item.price, item.quantity))}</td>
                  <td><button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>Xóa</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <strong>Tổng tiền:</strong> {formatPrice(totalCartPrice)}
          </div>
        </div>
      ) : (
        <p>Giỏ hàng của bạn đang trống.</p>
      )}
    </div>
  );
};

export default AdminCarts;
