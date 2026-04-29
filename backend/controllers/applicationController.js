const Application = require("../models/Application");

// APPLY TO JOB
exports.applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    // prevent duplicate apply
    const existing = await Application.findOne({
      userId: req.user.id,
      jobId,
    });

    if (existing) {
      return res.status(400).json({ msg: "Already applied" });
    }

    const application = await Application.create({
      userId: req.user.id,
      jobId,
    });

    res.json(application);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// GET USER APPLICATIONS
exports.getMyApplications = async (req, res) => {
  try {
    const apps = await Application.find({ userId: req.user.id })
      .populate("jobId");

    res.json(apps);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};