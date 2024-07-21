import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
        setError('Vui lòng nhập lại Password!');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <div className="bg-light-blue full-height">
        <div className="container d-flex justify-content-center align-items-center">
            <div className="login-card card-block p-4 mt-5">
                <form className="md-float-material" onSubmit={handleSubmit}>
                    <div className="text-center mb-4">
                    <img src="https://technext.github.io/quantum_able/assets/images/logo-black.png" alt="Logo" />
                    </div>
                    <h3 className="text-center txt-primary">Đăng ký tài khoản của bạn</h3>
                    {error && <p className="text-danger text-center">{error}</p>}
                    <div className="row">
                    <div className="col-md-12 mt-2 mb-2">
                        <div className="form-group">
                        <label htmlFor="email" className="text">Email:</label>
                        <input type="text" className="form-control" id="email" placeholder="Điền email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <div className="form-group">
                        <label htmlFor="password" className="text">Mật khẩu:</label>
                        <input type="password" className="form-control" id="password" placeholder="Điền mật khẩu" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <div className="form-group">
                        <label htmlFor="confirmPassword" className="text">Nhập lại mật khẩu:</label>
                        <input type="password"  className="form-control" id="confirmPassword" placeholder="Điền lại mật khẩu" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xs-10 offset-xs-1 text-center">
                        <button type="submit" className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 btn-submit" >ĐĂNG KÝ</button>
                    </div>
                    </div>
                    <div className="card-footer text-center">
                    <span className="text-muted">Bạn đã có tài khoản? </span>
                    <Link to="/" className="f-w-600 p-l-5 register_text">Đăng nhập ngay</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}
