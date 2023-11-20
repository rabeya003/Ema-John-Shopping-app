import { Link } from "react-router-dom";
import "./Signup.css";
const SignUp = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Please SignUp</h2>
      <form>
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
