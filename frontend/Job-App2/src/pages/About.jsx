import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import "../styles/about-page.scss";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Former HR Director at Fortune 500 company",
      emoji: "👩‍💼",
    },
    {
      name: "Mike Chen",
      role: "Head of Engineering",
      bio: "10+ years in tech, passionate about user experience",
      emoji: "👨‍💻",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "UX/UI expert dedicated to beautiful interfaces",
      emoji: "👩‍🎨",
    },
    {
      name: "David Kim",
      role: "Head of Operations",
      bio: "Scaling teams and growing communities",
      emoji: "👨‍🔧",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "To empower job seekers and employers by creating the most intuitive job matching platform",
    },
    {
      icon: "💡",
      title: "Our Vision",
      description:
        "A world where finding your dream job is effortless and hiring top talent is simple",
    },
    {
      icon: "🤝",
      title: "Our Values",
      description:
        "We believe in transparency, excellence, and making a positive impact on people's careers",
    },
  ];

  return (
    <main className="about-page">
      <div className="about-page__container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1>About JobHub</h1>
          <p>
            Transforming the way job seekers and employers connect since 2020.
          </p>
        </section>

        {/* Story Section */}
        <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                JobHub was founded with a simple mission: to make job searching
                easier. We recognized the challenges faced by both job seekers and
                employers in the traditional hiring process.
              </p>
              <p>
                Today, we've become a trusted platform helping thousands of
                professionals find their dream jobs and hundreds of companies find
                top talent. Our commitment to innovation and user experience drives
                everything we do.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Active Job Seekers</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5K+</div>
                <div className="stat-label">Companies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100K+</div>
                <div className="stat-label">Jobs Posted</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">90%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-section">
          <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>
            What We Stand For
          </h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="about-section">
          <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>
            Meet Our Team
          </h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.emoji}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <h2>Ready to Find Your Dream Job?</h2>
          <p>
            Join thousands of professionals already using JobHub to advance their
            careers.
          </p>
          <NavLink to={ROUTES.JOBS} className="btn btn-primary btn-lg">
            Browse Jobs Now
          </NavLink>
        </section>
      </div>
    </main>
  );
};

export default About;