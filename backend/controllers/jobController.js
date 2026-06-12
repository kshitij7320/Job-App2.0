const Job = require("../models/Job");

// CREATE JOB (recruiter)
exports.createJob = async (req, res, next) => {
  try {
    const { title, company, location, description } = req.body;

    if (!title || !company || !location || !description) {
      res.status(400);
      throw new Error("Title, company, location and description are required");
    }

    const job = await Job.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      job,
    });
  } catch (error) {
    next(error);
  }
};

// GET ALL JOBS
exports.getJobs = async (req, res, next) => {
  try {
    const { search, category, type } = req.query;
    const filter = {};

    if (category && category !== "All") {
      filter.category = category;
    }

    if (type && type !== "All") {
      filter.type = type;
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
      ];
    }

    const jobs = await Job.find(filter)
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: jobs.length,
      jobs,
    });
  } catch (error) {
    next(error);
  }
};

// GET SINGLE JOB
exports.getJobById = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id).populate(
      "createdBy",
      "name email",
    );

    if (!job) {
      res.status(404);
      throw new Error("Job not found");
    }

    res.json({
      success: true,
      job,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE JOB
exports.updateJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      res.status(404);
      throw new Error("Job not found");
    }

    if (
      req.user.role !== "admin" &&
      job.createdBy.toString() !== req.user.id.toString()
    ) {
      res.status(403);
      throw new Error("You can update only your own jobs");
    }

    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      success: true,
      job: updatedJob,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE JOB
exports.deleteJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      res.status(404);
      throw new Error("Job not found");
    }

    if (
      req.user.role !== "admin" &&
      job.createdBy.toString() !== req.user.id.toString()
    ) {
      res.status(403);
      throw new Error("You can delete only your own jobs");
    }

    await job.deleteOne();

    res.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
