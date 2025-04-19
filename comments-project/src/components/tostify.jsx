import React, { useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/ReactToastify.css";
const Tostify = ({ type = "info", masseg }) => {
  useEffect(() => {
    if (masseg) {
      toast[type](masseg);
    }
  }, [masseg, type]);

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  );
};

export default Tostify;
