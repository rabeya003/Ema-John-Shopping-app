import { useContext } from "react";
import { AuthProvider } from "../Context/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthProvider);
  console.log(user);
  if (loading) {
    return <div>Loading.......</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
