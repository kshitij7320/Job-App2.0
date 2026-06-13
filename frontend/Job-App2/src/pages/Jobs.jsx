import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { JOB_CATEGORIES, JOB_TYPES } from "../constants/config";
import { jobService } from "../services/api";

const Jobs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError("");

      try {
        const { data } = await jobService.getJobs({
          search: searchQuery,
          category: selectedCategory,
          type: selectedType,
        });

        setJobs(data.jobs || []);
      } catch (err) {
        setError(err.response?.data?.message || err.message || "Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [selectedCategory, selectedType, searchQuery]);

  const filteredJobs = jobs;

  return (
    <main className="jobs-page">
      <div className="jobs-page__container">
        {loading && (
          <div className="jobs-page__status jobs-page__status--loading">
            Loading jobs...
          </div>
        )}
        {error && (
          <div className="jobs-page__status jobs-page__status--error">
            {error}
          </div>
        )}
        {/* Header */}
        <div className="jobs-page__header">
          <h1>Find Your Next Opportunity</h1>
          <p>Browse thousands of job listings from top companies</p>
        </div>

        {/* Search Bar */}
        <div className="jobs-page__search">
          <input
            type="text"
            placeholder="Search by job title, company, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="jobs-page__search-input"
          />
        </div>

        <div className="jobs-page__layout">
          {/* Filters Sidebar */}
          <aside className="jobs-page__filters">
            <div className="filter-section">
              <h3>Job Category</h3>
              <div className="filter-options">
                {JOB_CATEGORIES.map((category) => (
                  <label key={category} className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Job Type</h3>
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="type"
                    value="All"
                    checked={selectedType === "All"}
                    onChange={(e) => setSelectedType(e.target.value)}
                  />
                  <span>All Types</span>
                </label>
                {JOB_TYPES.map((type) => (
                  <label key={type} className="filter-option">
                    <input
                      type="radio"
                      name="type"
                      value={type}
                      checked={selectedType === type}
                      onChange={(e) => setSelectedType(e.target.value)}
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Jobs Grid */}
          <section className="jobs-page__content">
            <div className="jobs-page__results">
              <p className="jobs-page__count">
                Found <strong>{filteredJobs.length}</strong> job(s)
              </p>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="jobs-grid">
                {filteredJobs.map((job) => (
                  <JobCard key={job._id || job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="jobs-page__empty">
                <p>No jobs found matching your criteria</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedType("All");
                  }}
                  className="btn btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Jobs;
