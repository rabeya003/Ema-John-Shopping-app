import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { AuthProvider } from "../../Context/AuthProviders";
import toast from "react-hot-toast";
const LogIn = () => {
  const { signIn } = useContext(AuthProvider);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
        toast.success("User succesfully Loged");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.massage);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Please Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <input className="btn-submit" value="Login" type="submit" />
        <p>
          <small>
            New here? <Link to="/signup">SignUP</Link>
          </small>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
