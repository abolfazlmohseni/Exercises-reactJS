import React, { useContext, useReducer } from "react";
import { initialState, reduser } from "./reduser";

const authStateContext = React.createContext();
const authDispacherContext = React.createContext();

export function useAuthState() {
  const context = useContext(authStateContext);

  if (!context) {
    throw Error("useAuthState must be used with a AuthProvider");
  }
  return context;
}

export function useAuthDispacher() {
  const context = useContext(authDispacherContext);

  if (!context) {
    throw Error("useAuthDispacher must be used with a AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reduser,initialState);

  return (
    <authStateContext.Provider value={state}>
      <authDispacherContext.Provider value={dispatch}>
        {children}
      </authDispacherContext.Provider>
    </authStateContext.Provider>
  );
}
