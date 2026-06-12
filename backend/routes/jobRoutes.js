const express = require("express");
const router = express.Router();

const {
  createJob,
  getJobs,
  getMyJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

const auth = require("../middleware/authMiddleware");
const allowedRoles = require("../middleware/roleMiddleware");

// public
router.get("/", getJobs);
router.get("/:id", getJobById);

// protected
router.get("/me", auth, getMyJobs);
router.post("/", auth, allowedRoles("recruiter", "admin"), createJob);
router.put("/:id", auth, allowedRoles("recruiter", "admin"), updateJob);
router.delete("/:id", auth, allowedRoles("recruiter", "admin"), deleteJob);

module.exports = router;
