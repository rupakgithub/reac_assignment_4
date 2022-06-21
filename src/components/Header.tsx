import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="ele">
      <NavLink to="/about" exact activeClassName="is-Active">About</NavLink>
      {" "}
      <NavLink to="/product" exact activeClassName="is-Active">Products</NavLink>
    </header>
  );
};

export default Header;
