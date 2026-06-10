import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { validateEmail, validatePassword } from "../utils/validators";
import "../styles/auth-page.scss";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // TODO: Replace with actual API call
    setTimeout(() => {
      console.log("Login attempt:", formData);
      setIsSubmitting(false);
      // navigate("/dashboard");
    }, 1000);
  };

  return (
    <main className="auth-page">
      <div className="auth-page__container">
        <div className="auth-card">
          <div className="auth-card__header">
            <h1>Welcome Back</h1>
            <p>Sign in to your JobHub account</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="form-error">{errors.password}</span>}
            </div>

            <div className="auth-form__remember">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#forgot">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block btn-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="auth-card__footer">
            <p>
              Don't have an account?{" "}
              <NavLink to={ROUTES.REGISTER}>Create one now</NavLink>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;