import "./Header.css";
import logo from "../../images/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider } from "../../Context/AuthProviders";
import toast from "react-hot-toast";

const Hedaer = () => {
  const { user, logout } = useContext(AuthProvider);
  const handleSignOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <nav className="header">
      <Link>
        <img src={logo} alt="" />
      </Link>
      <div className="link">
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
        {user && (
          <div>
            <span>
              {user.email}
              <button onClick={handleSignOut}>SignOut</button>
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Hedaer;
