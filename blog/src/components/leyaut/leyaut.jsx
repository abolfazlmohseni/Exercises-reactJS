import React from "react";
import Nav from "../nav";
import Main from "../main";
import Footer from "../footer";
const Leyaut = ({children}) => {
  return (
    <>
      <Nav />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default Leyaut;
