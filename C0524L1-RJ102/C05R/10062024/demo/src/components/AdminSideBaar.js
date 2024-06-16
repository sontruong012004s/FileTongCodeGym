import { Link } from "react-router-dom";
export default function AdminSideBar() {
  return (
    <>
      <div className="col-2">
        Admin Side Bar
        <br />
        <Link className="nav-link" to={""}>
          List Product
        </Link>
        <br />
        <Link className="nav-link" to={"order"}>
          List Order
        </Link>
      </div>
    </>
  );
}