import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';
const Header = () => {
  return (
    <nav className="navbar">
        <span>
            <img src="/final-logo.png" alt="Logo" />
        </span>
        <div className="navbar-items">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Jobs">Jobs</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
        <div className="navbar-login">
            <Button variant="outline-light" className="login-btn">Login</Button>
        </div>
      
    </nav>
  );
};

export default Header;
