import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Products.css';

const products = [
  {
    id: 1,
    name: 'Quần Dài Jean Nam Lb Co Giãn Mạnh, Vải Jean Denim Dày Dặn. Màu Xanh Nhạt Trơn, Dễ Phối Đồ, phom Slim Jean , Dnbb5224',
    price: '219000',
    images: [
      'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lt661e3eh2ft2a',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmpupechgr544',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmpupec687l50'
    ],
    stock: 10,
    category: 'Áo',
    description: `- Thông tin sản phẩm quần jeans dài nam LBjean 5224

Quần slim-fit sử dụng chất liệu vải co giãn, đường may ôm theo hình dáng cơ thể của người mặc. Kiểu quần này thường có thiết kế phần cổ chân không bó sát, túm ống và chỉ vừa với dáng chân. Điều khiến chiếc quần slim-fit được các chàng yêu thích đó là sự cân bằng tuyệt vời giữa phong cách và sự thoải mái, vừa đẹp vừa tiện.

Thương hiệu : LB

 Xuất xứ : được thiết kế và gia công tại xưỡng sản xuất LBjean,tp HCM – Việt Nam

- Chất liệu : 95% jean Cotton, 5% sợi pandex

- Chất jean cotton loại 1 dày dặn lên dáng chuẩn lắm các bạn nhé 

- Thiết kế cạp cao cá tính mặc vào tôn dáng lắm luôn nà 

- Dễ dàng phối đồ với áo polo thích hợp 4 mùa, mặc đi chơi dạo phố đều rất đẹp nà

- Thiết kế theo xu hướng thời trang mới nhất.

- Phong cách hàn quốc phù hợp mọi lứa tuổi 

- Quần jeans được làm màu bằng công nghệ mới giúp vãi mềm mịn và tươi màu, không bị phai bạc màu khi sữ dụng nên bạn yên tâm hàng luôn bền màu như mới nhé

#quanjeannam #quanjeantron #quanjeannamcaocap #jeannam #quannam #quanjeannamtron #quanbonam #quanjeannamhanquoc #quanjeannamgiare #quan  #quanrinnam #quanjeansnam 

#quanjeannamcogian #quanjeannamongcon #quanjeannambody #quanjeannamxanh`
  },
  {
    id: 2,
    name: 'Quần 1',
    price: '200000',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150/008000',
      'https://via.placeholder.com/150/FFFF00'
    ],
    stock: 5,
    category: 'Quần',
    description: 'Đây là mô tả sản phẩm Quần 1.'
  },
  {
    id: 3,
    name: 'Quần 1',
    price: '200000',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150/008000',
      'https://via.placeholder.com/150/FFFF00'
    ],
    stock: 5,
    category: 'Quần',
    description: 'Đây là mô tả sản phẩm Quần 1.'
  },
  {
    id: 4,
    name: 'Quần 1',
    price: '200000',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150/008000',
      'https://via.placeholder.com/150/FFFF00'
    ],
    stock: 5,
    category: 'Quần',
    description: 'Đây là mô tả sản phẩm Quần 1.'
  },
];

const formatPrice = (price) => {
  return parseInt(price).toLocaleString('vi-VN') + ' VND';
};

const ProductList = ({ products, addToCart }) => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card h-100">
            <img src={product.images[0]} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{formatPrice(product.price)}</p>
              <div className="card-buttons">
                <button className="btn btn-primary btn-detail" onClick={() => handleViewDetails(product.id)}>Xem Chi Tiết</button>
                <button className="btn btn-secondary btn-add-cart" onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ProductSection = ({ products, cart, addToCart, updateQuantity, removeFromCart, clearCart }) => {
  const [searchCategory, setSearchCategory] = useState('');
  const [searchName, setSearchName] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [displayedCategory, setDisplayedCategory] = useState('');
  const [showTitle, setShowTitle] = useState(false);
  const [searchResult, setSearchResult] = useState('');

  const handleCategoryChange = (e) => {
    setSearchCategory(e.target.value);
  };

  const handleNameChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchCategory && !searchName) {
      setSearchResult('Vui lòng nhập tên sản phẩm để tìm kiếm.');
      setFilteredProducts([]);
      setShowTitle(false);
      return;
    }

    const filtered = products.filter(product => {
      const matchesCategory = searchCategory ? product.category === searchCategory : true;
      const matchesName = searchName ? product.name.toLowerCase().includes(searchName.toLowerCase()) : true;
      return matchesCategory && matchesName;
    });

    setFilteredProducts(filtered);
    setDisplayedCategory(searchCategory);
    setShowTitle(true);

    if (filtered.length === 0) {
      setSearchResult('Không tìm thấy sản phẩm nào phù hợp.');
    } else {
      setSearchResult('');
    }
  };

  const calculateTotalPrice = (price, quantity) => {
    const priceNumber = parseInt(price.replace(/\D/g, ''), 10);
    return priceNumber * quantity;
  };

  const totalCartPrice = cart.reduce((total, item) => total + calculateTotalPrice(item.price, item.quantity), 0);

  return (
    <section className="container product">
      <h2>Danh Sách Sản Phẩm</h2>
      <div className="d-flex align-items-center mt-2 pb-4">
        <h2 className="mr-2 mb-0">Chọn thể loại:</h2>
        <form className="form-inline" onSubmit={handleSearchSubmit}>
          <select className="custom-select" value={searchCategory} onChange={handleCategoryChange}>
            <option value="">Tất cả sản phẩm</option>
            <option value="Áo">Áo</option>
            <option value="Quần">Quần</option>
          </select>
          <input type="text" id="inputSearch" value={searchName} onChange={handleNameChange} placeholder="Nhập tên sản phẩm..." />
          <button type="submit" className="btn btn-primary search">Tìm kiếm</button>
        </form>
      </div>
      {showTitle && filteredProducts.length > 0 && (
        <h3 className="mt-0">
          <ins>Bạn đang xem</ins>{displayedCategory ? (<span><ins> sản phẩm:</ins> {displayedCategory}</span>) : (<><ins>:</ins> Tất cả sản phẩm</>)}
        </h3>
      )}
      {searchResult && <p><strong>{searchResult}</strong></p>}
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </section>
  );
};

export { products, ProductSection };
