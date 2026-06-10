import { NavLink } from "react-router-dom";
import { NAV_LINKS, ROUTES } from "../constants/routes";
import { useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to={ROUTES.HOME} className="header__logo" onClick={closeMobileMenu}>
          <span>💼</span>
          <span>JobHub</span>
        </NavLink>

        <nav className={`header__nav ${mobileMenuOpen ? "active" : ""}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `header__nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMobileMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <div className="header__search">
            <input type="text" placeholder="Search jobs..." />
            <span className="header__search-icon">🔍</span>
          </div>

          <div className="header__cta">
            <NavLink to={ROUTES.LOGIN} className="btn btn-primary btn-sm">
              Login
            </NavLink>
            <NavLink to={ROUTES.REGISTER} className="btn btn-outline btn-sm">
              Sign Up
            </NavLink>
          </div>
        </div>

        <button
          className="header__menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
