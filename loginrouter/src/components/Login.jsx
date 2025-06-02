import { useLayoutEffect } from "react";
import { useAuth } from "../context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const { isPending } = useAuth();
  const { signInWithEmailAndPassword, isAuthenticated } = useAuth();
  const { from } = location.state || { from: { pathname: "/" } };
  useLayoutEffect(() => {
    if (isAuthenticated) {
      Navigate(from, { replace: true });
    }
  }, [from, isAuthenticated, Navigate]);

  return (
    <>
      {isPending ? (
        <div>
          <h1>loadin.....</h1>
        </div>
      ) : (
        <button
          onClick={() => {
            signInWithEmailAndPassword("abolfazl", 121358);
          }}
        >
          login
        </button>
      )}
    </>
  );
};

export default Login;
