const express = require("express");
const router = express.Router();

const {
  applyJob,
  getMyApplications,
  getAllApplications,
  getApplicationsByJob,
  updateApplicationStatus,
} = require("../controllers/applicationController");

const auth = require("../middleware/authMiddleware");
const allowedRoles = require("../middleware/roleMiddleware");

// apply
router.post("/", auth, applyJob);

// get my applications
router.get("/me", auth, getMyApplications);

// recruiter/admin: view applications for a specific job
router.get(
  "/job/:jobId",
  auth,
  allowedRoles("recruiter", "admin"),
  getApplicationsByJob,
);

// admin: view all applications
router.get("/", auth, allowedRoles("admin"), getAllApplications);

// recruiter/admin: update application status
router.put(
  "/:id",
  auth,
  allowedRoles("recruiter", "admin"),
  updateApplicationStatus,
);

module.exports = router;
