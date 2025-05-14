import React from "react";
import { useAuthState } from "../../context/auth-context";
const Dashbard = () => {
  const state = useAuthState();

  return (
    <>
      <p>{state.user.email}</p>
      <p>{state.user.id}</p>
      <p>{state.user.name}</p>
    </>
  );
};

export default Dashbard;
