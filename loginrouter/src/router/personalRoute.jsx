import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const PersonalRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
        }}
        replace
      />
    );
  }

  return children;
};

export default PersonalRoute;
