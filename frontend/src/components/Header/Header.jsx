import { Link } from "react-router-dom";
import "./index.css";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">Alzura Test</div>
        <ul className="menu">
          <li>
            <Link to="/">File Upload</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
