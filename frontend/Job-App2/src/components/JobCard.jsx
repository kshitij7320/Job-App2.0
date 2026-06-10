import "../styles/job-card.css";

const JobCard = ({ job }) => {
  const {
    title = "Job Title",
    company = "Company Name",
    location = "Remote",
    salary = "$50,000",
    type = "Full-time",
    description = "Job Description",
    logo = "📋",
  } = job || {};

  const handleApplyClick = () => {
    // TODO: Implement apply functionality
    console.log(`Applied for ${title} at ${company}`);
  };

  return (
    <div className="job-card">
      <div className="job-card__header">
        <div className="job-card__info">
          <h3 className="job-card__title">{title}</h3>
          <p className="job-card__company">{company}</p>
        </div>
        <div className="job-card__logo">
          {typeof logo === "string" && logo.length === 1 ? (
            <span style={{ fontSize: "2rem" }}>{logo}</span>
          ) : (
            <img src={logo} alt={company} />
          )}
        </div>
      </div>

      <div className="job-card__meta">
        <span className="job-card__tag">📍 {location}</span>
        <span className="job-card__tag">⏰ {type}</span>
      </div>

      <p className="job-card__description">{description}</p>

      <div className="job-card__footer">
        <span className="job-card__salary">{salary}</span>
        <button className="job-card__btn" onClick={handleApplyClick}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;