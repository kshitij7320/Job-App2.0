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

// protected
router.get("/me", auth, allowedRoles("recruiter", "admin"), getMyJobs);
router.get("/:id", getJobById);
router.post("/", auth, allowedRoles("recruiter", "admin"), createJob);
router.put("/:id", auth, allowedRoles("recruiter", "admin"), updateJob);
router.delete("/:id", auth, allowedRoles("recruiter", "admin"), deleteJob);

module.exports = router;
