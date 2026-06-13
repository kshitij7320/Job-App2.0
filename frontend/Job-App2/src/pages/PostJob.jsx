import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jobService } from "../services/api";
import { ROUTES } from "../constants/routes";

const PostJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "Full-time",
    category: "Technology",
    description: "",
    logo: "📋",
    link: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await jobService.createJob(formData);
      setSuccess("Job posted successfully. Redirecting to jobs...");
      setTimeout(() => {
        navigate(ROUTES.JOBS);
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to post job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="post-job-page">
      <div className="post-job__container">
        <section className="section post-job-form">
          <h1>Post a Job</h1>
          <p>Fill out the details below to add a job listing to the board.</p>

          {error && <div className="alert alert-error">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form onSubmit={handleSubmit} className="post-job__form">
            <div className="form-grid">
              <label>
                Job Title
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Company
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Location
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Salary
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                />
              </label>
              <label>
                Type
                <select name="type" value={formData.type} onChange={handleChange}>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Freelance</option>
                </select>
              </label>
              <label>
                Category
                <select name="category" value={formData.category} onChange={handleChange}>
                  <option>Technology</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                  <option>Operations</option>
                </select>
              </label>
              <label className="full-width">
                Description
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </label>
              <label>
                Logo / Icon
                <input
                  type="text"
                  name="logo"
                  value={formData.logo}
                  onChange={handleChange}
                />
              </label>
              <label>
                Application Link
                <input
                  type="url"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                />
              </label>
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Posting..." : "Post Job"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default PostJob;