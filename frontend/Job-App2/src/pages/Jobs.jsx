import { useState } from "react";
import JobCard from "../components/JobCard";
import { JOB_CATEGORIES, JOB_TYPES } from "../constants/config";
const Jobs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample job data - Replace with API call
  const sampleJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      salary: "$120,000 - $150,000",
      type: "Full-time",
      category: "Technology",
      description:
        "We're looking for an experienced React developer to lead our frontend team. You'll work on cutting-edge web applications and mentor junior developers.",
      logo: "⚛️",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Design Studio",
      location: "New York, NY",
      salary: "$80,000 - $100,000",
      type: "Full-time",
      category: "Technology",
      description:
        "Join our creative team to design beautiful and intuitive user interfaces for mobile and web applications.",
      logo: "🎨",
    },
    {
      id: 3,
      title: "Marketing Manager",
      company: "Growth Co",
      location: "Remote",
      salary: "$70,000 - $90,000",
      type: "Full-time",
      category: "Marketing",
      description:
        "Lead our marketing initiatives and develop strategies to grow our user base. Work with a creative and data-driven team.",
      logo: "📈",
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Cloud Systems",
      location: "Austin, TX",
      salary: "$100,000 - $130,000",
      type: "Full-time",
      category: "Technology",
      description:
        "Build scalable backend systems using Node.js and AWS. Work on distributed systems and microservices architecture.",
      logo: "🔧",
    },
    {
      id: 5,
      title: "Financial Analyst",
      company: "Finance Plus",
      location: "Boston, MA",
      salary: "$75,000 - $95,000",
      type: "Full-time",
      category: "Finance",
      description:
        "Analyze financial data, prepare reports, and provide insights to support business decisions.",
      logo: "💰",
    },
    {
      id: 6,
      title: "Content Writer",
      company: "Media Hub",
      location: "Remote",
      salary: "$40,000 - $60,000",
      type: "Part-time",
      category: "Marketing",
      description:
        "Create engaging content for blogs, social media, and marketing campaigns. Work remotely with flexibility.",
      logo: "✍️",
    },
  ];

  const filteredJobs = sampleJobs.filter((job) => {
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesType = selectedType === "All" || job.type === selectedType;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <main className="jobs-page">
      <div className="jobs-page__container">
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
                  <JobCard key={job.id} job={job} />
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
