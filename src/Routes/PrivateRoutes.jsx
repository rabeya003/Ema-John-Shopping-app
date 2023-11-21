import { useContext } from "react";
import { AuthProvider } from "../Context/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
const location = useLocation;
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  if (loading) {
    return <div>Loading.......</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
