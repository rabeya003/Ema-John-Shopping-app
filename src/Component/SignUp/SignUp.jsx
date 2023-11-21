import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useContext } from "react";
import { AuthProvider } from "../../Context/AuthProviders";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser } = useContext(AuthProvider);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    console.log(email, password, confirm);
    // Validation
    if (password !== confirm) {
      toast.error("Your password did not match with confirm password");
      return;
    } else if (password.length < 6) {
      toast.error("password must be 6 characters or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
        toast.success("User succesfully created");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.massage);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Please SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="confirm" required />
        </div>
        <input className="btn-submit" value="Signup" type="submit" />
        <p>
          <small>
            Already have an account? <Link to="/login">Login</Link>
          </small>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
