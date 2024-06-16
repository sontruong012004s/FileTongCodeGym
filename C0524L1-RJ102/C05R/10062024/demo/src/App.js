import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListProduct from "./pages/home/ListProduct";
import ListOrder from "./pages/home/ListOrder";
import Student from "./pages/admin/student/Student";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path="" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="home" element={<Home />}>
            <Route path="" element={<ListProduct />}></Route>
            <Route path="order" element={<ListOrder />}></Route>
          </Route>
          <Route path="admin" element={<Admin />}>
            <Route path="" element={<ListProduct />}></Route>
            <Route path="order" element={<ListOrder />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;