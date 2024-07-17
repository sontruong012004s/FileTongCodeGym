import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import '../css/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if ((email === 'admin' && password === 'admin') || (email === 'user' && password === 'user')) {
      const userRole = email === 'admin' ? 'admin' : 'user';
      login(userRole);
      if (userRole === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      setError('Thông tin đăng nhập không chính xác');
    }
  };

  return (
    <div className="bg-light-blue full-height d-flex align-items-center justify-content-center">
      <div className="container-fluid border-0">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="login-card card-block p-4 mt-5">
              <form className="md-float-material" onSubmit={handleSubmit}>
                <div className="text-center mb-4">
                  <img src="https://technext.github.io/quantum_able/assets/images/logo-black.png" alt="Logo" />
                </div>
                <h3 className="text-center txt-primary">Đăng nhập vào tài khoản của bạn</h3>
                {error && <p className="text-danger text-center">{error}</p>}
                <div className="row">
                  <div className="col-md-12 mt-2 mb-2">
                    <div className="form-group">
                      <label htmlFor="email" className="text">Email:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Điền email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <label htmlFor="password" className="text">Mật khẩu:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Điền mật khẩu"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-12 mb-2">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="rememberMe">Nhớ tôi</label>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-12 text-right">
                    <a href="forgot-password.html" className="text-right f-w-600 forgot_password"> Quên mật khẩu?</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-10 offset-xs-1 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 btn-submit"
                    >
                      ĐĂNG NHẬP
                    </button>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <span className="text-muted">Bạn chưa có tài khoản? </span>
                  <Link to="/register" className="f-w-600 p-l-5 register_text"> Đăng ký ngay</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
