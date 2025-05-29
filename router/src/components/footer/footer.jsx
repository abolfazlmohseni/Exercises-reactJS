import Link from "../../router/link";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-right">
        <h2>berand footer</h2>
      </div>
      <div className="footer-left">
        <div className="footer-left__item">
          <Link to="/">home</Link>
        </div>
        <div className="footer-left__item">
          <Link to="/abute">abute</Link>
        </div>
        <div className="footer-left__item">
          <Link to="/blog">blog</Link>
        </div>
        <div className="footer-left__item">
          <Link to="/contact">contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
