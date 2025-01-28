import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/about">Про мене</Link></li>
          <li><Link to="/contacts">Контакти</Link></li>
        </ul>
      </nav>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Темна тема" : "Світла тема"}
      </button>
    </header>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Header;
