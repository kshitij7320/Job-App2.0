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
            <NavLink to="/login">
                <Button variant="outline-primary">Login</Button>
            </NavLink>
        </div>
      
    </nav>
  );
};

export default Header;
