import { createContext, useContext, useState } from "react";
import { getuser } from "../services/userapi";
const UserContext = createContext();
export const AuthProvider = ({ children }) => {
  const [state, setUser] = useState({
    status: "success",
    error: null,
    user: null,
  });

  function signInWithEmailAndPassword(username, password) {
    setUser({
      status: "pending",
      error: null,
      user: null,
    });

    getuser(username, password).then((user) =>
      setUser({
        status: "success",
        error: null,
        user: user,
      })
    );
  }
  function logOut() {
    setUser({
      status: "success",
      error: null,
      user: null,
    });
  }

  return (
    <UserContext.Provider
      value={{ ...state, signInWithEmailAndPassword, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useAuth() {
  const state = useContext(UserContext);
  if (!state) {
    throw new Error("useAuth must be used with a AuthProvider");
  }

  const isPending = state.status === "pending";
  const isError = state.status === "error";
  const isSuccess = state.status === "success";
  const isAuthenticated = state.user && isSuccess;

  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
}
