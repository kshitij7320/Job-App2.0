const Application = require("../models/Application");
const Job = require("../models/Job");

// APPLY TO JOB
exports.applyJob = async (req, res, next) => {
  try {
    const { jobId } = req.body;

    if (\!jobId) {
      res.status(400);
      throw new Error("Job ID is required");
    }

    const job = await Job.findById(jobId);
    if (\!job) {
      res.status(404);
      throw new Error("Job not found");
    }

    const existing = await Application.findOne({
      userId: req.user.id,
      jobId,
    });

    if (existing) {
      res.status(400);
      throw new Error("Already applied");
    }

    const application = await Application.create({
      userId: req.user.id,
      jobId,
    });

    res.status(201).json({
      success: true,
      application,
    });
  } catch (error) {
    next(error);
  }
};

// GET USER APPLICATIONS
exports.getMyApplications = async (req, res, next) => {
  try {
    const apps = await Application.find({ userId: req.user.id })
      .populate("jobId")
      .populate("userId", "name email role resume");

    res.json({
      success: true,
      count: apps.length,
      applications: apps,
    });
  } catch (error) {
    next(error);
  }
};

// GET ALL APPLICATIONS (admin only)
exports.getAllApplications = async (req, res, next) => {
  try {
    const apps = await Application.find()
      .populate("jobId")
      .populate("userId", "name email role resume");

    res.json({
      success: true,
      count: apps.length,
      applications: apps,
    });
  } catch (error) {
    next(error);
  }
};

// GET APPLICATIONS FOR A JOB
exports.getApplicationsByJob = async (req, res, next) => {
  try {
    const { jobId } = req.params;
    const job = await Job.findById(jobId);

    if (\!job) {
      res.status(404);
      throw new Error("Job not found");
    }

    if (
      req.user.role \!== "admin" &&
      job.createdBy.toString() \!== req.user.id.toString()
    ) {
      res.status(403);
      throw new Error("You can only view applications for your own jobs");
    }

    const apps = await Application.find({ jobId })
      .populate("jobId")
      .populate("userId", "name email role resume");

    res.json({
      success: true,
      count: apps.length,
      applications: apps,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE APPLICATION STATUS
exports.updateApplicationStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const validStatuses = ["applied", "interview", "rejected"];

    if (\!status || \!validStatuses.includes(status)) {
      res.status(400);
      throw new Error("Invalid status");
    }

    const app = await Application.findById(req.params.id).populate({
      path: "jobId",
      select: "createdBy",
    });

    if (\!app) {
      res.status(404);
      throw new Error("Application not found");
    }

    if (
      req.user.role \!== "admin" &&
      app.jobId.createdBy.toString() \!== req.user.id.toString()
    ) {
      res.status(403);
      throw new Error("You can update only applications for your own jobs");
    }

    app.status = status;
    await app.save();

    res.json({
      success: true,
      application: app,
    });
  } catch (error) {
    next(error);
  }
};
