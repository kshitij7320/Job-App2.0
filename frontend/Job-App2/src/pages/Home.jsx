import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { JOB_POSTING_URL } from "../constants/config";

const Home = () => {
  const features = [
    {
      icon: "🔍",
      title: "Smart Search",
      description: "Find jobs that match your skills and preferences with our advanced filtering system.",
    },
    {
      icon: "⚡",
      title: "Quick Apply",
      description: "Apply to multiple jobs in seconds with our one-click application feature.",
    },
    {
      icon: "📊",
      title: "Job Insights",
      description: "Get salary trends, company reviews, and job market insights at a glance.",
    },
    {
      icon: "🎯",
      title: "Personalized Matches",
      description: "Receive personalized job recommendations based on your profile and preferences.",
    },
    {
      icon: "🤝",
      title: "Direct Connect",
      description: "Connect directly with hiring managers and recruiters for better opportunities.",
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Search and apply for jobs on the go with our mobile-optimized platform.",
    },
  ];

  return (
    <main className="home">
      <div className="home__container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero__content">
            <h1>Find Your Dream Job Today</h1>
            <p>
              Explore thousands of job listings from top companies. Your next career opportunity
              is just a click away.
            </p>
            <div className="hero__cta">
              <NavLink to={ROUTES.JOBS} className="btn btn-secondary btn-lg">
                Browse Jobs
              </NavLink>
              <a
                href={JOB_POSTING_URL}
                className="btn btn-outline btn-lg"
                target="_blank"
                rel="noreferrer"
              >
                Post a Job
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <h2>Why Choose JobHub?</h2>
          <p>
            We've built the platform job seekers love. Smart recommendations, easy applications,
            and powerful career tools all in one place.
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-card__icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ textAlign: "center" }}>
          <h2>Ready to Start Your Career Journey?</h2>
          <p>
            Browse open roles or share a new opportunity with JobHub visitors.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <NavLink to={ROUTES.JOBS} className="btn btn-primary btn-lg">
              Start Browsing
            </NavLink>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
