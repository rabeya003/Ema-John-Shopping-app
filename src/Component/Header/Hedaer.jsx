import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
const Hedaer = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="ankor">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Hedaer;
