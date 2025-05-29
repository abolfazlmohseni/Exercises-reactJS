import Link from "../../router/link";
import "./style.css";
const Nav = () => {
  return (
    <menu>
      <div className="menu-right">
        <h2>berand nav</h2>
      </div>
      <div className="menu-left">
        <div className="menu-left__item">
          <Link to="/">home</Link>
        </div>
        <div className="menu-left__item">
          <Link to="/abute">abute</Link>
        </div>
        <div className="menu-left__item">
          <Link to="/blog">blog</Link>
        </div>
        <div className="menu-left__item">
          <Link to="/contact">contact</Link>
        </div>
      </div>
    </menu>
  );
};

export default Nav;
