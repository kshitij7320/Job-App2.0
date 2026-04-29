const Job = require("../models/Job");

// CREATE JOB (recruiter)
exports.createJob = async (req, res) => {
  try {
    const job = await Job.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.json(job);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// GET ALL JOBS
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("createdBy", "name email");
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// GET SINGLE JOB
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.json(job);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};