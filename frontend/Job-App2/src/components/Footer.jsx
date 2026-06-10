
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>JobHub</h3>
            <p>
              Your one-stop destination for finding your dream job and connecting
              with top employers.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Twitter">
                𝕏
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="footer__social-link" aria-label="GitHub">
                ⚙️
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                f
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h3>For Job Seekers</h3>
            <ul>
              <li>
                <NavLink to="/">Browse Jobs</NavLink>
              </li>
              <li>
                <a href="#companies">Companies</a>
              </li>
              <li>
                <a href="#salaries">Salaries</a>
              </li>
              <li>
                <a href="#resources">Resources</a>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h3>For Employers</h3>
            <ul>
              <li>
                <a href="#post-job">Post a Job</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#solutions">Solutions</a>
              </li>
              <li>
                <a href="#help">Help Center</a>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h3>Company</h3>
            <ul>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#press">Press</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} JobHub. All rights reserved.
          </p>
          <div className="footer__links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;