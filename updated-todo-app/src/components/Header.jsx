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
      <div className="theme-toggle">
        <label className="theme-switch-label">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="theme-switch-slider"></span>
        </label>
      </div>
    </header>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Header;