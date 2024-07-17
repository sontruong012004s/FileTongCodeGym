import React from 'react';
import '../CSS/Header.css';
export default function Header() {
    return (
        <div className="container-fluid bg-light-blue">
            <div className="row align-items-center">
                <div className="col-6 ">
                    <ul className="list-inline mb-0 d-flex">
                        <li ><a href="/products">Trang chủ</a></li>
                        <li className="list-inline-item product"><span>Danh sách sản phẩm</span>
                            <i className="info-item-down fas fa-angle-down"></i>
                            <i className="info-item-up fas fa-angle-up"></i>
                            <ul className="product_menu">
                                <li className="austria" title="Áo">Áo</li>
                                <li className="pants" title="Quần">Quần</li>
                                <li className="wallet" title="Ví">Ví</li>
                            </ul>
                        </li>
                        <li>Chính sách</li>
                    </ul>
                </div>
                <div className="col-2 text-center">
                    <div className="Search">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
                <div className="col-4 text-end">
                    <div className="Logout">
                        <button className="btn btn-danger">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

