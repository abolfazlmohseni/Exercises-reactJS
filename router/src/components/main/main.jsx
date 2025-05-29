import Nav from "../nav";
import Footer from "../footer";

const Main = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Main;
