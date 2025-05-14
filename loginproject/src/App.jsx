import React from "react";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { useAuthState } from "./context/auth-context";
const App = () => {
  const { token } = useAuthState();
  return <>{token ? <Dashboard /> : <Login />}</>;
};

export default App;
