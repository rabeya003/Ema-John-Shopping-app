import "./Header.css";
import logo from "../../images/Logo.svg";
const Hedaer = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="ankor">
        <a href="/shop">Shop</a>
        <a href="/order">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Hedaer;
