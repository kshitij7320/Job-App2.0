const express = require("express");
const router = express.Router();

const {
  createJob,
  getJobs,
  getJobById,
} = require("../controllers/jobController");

const auth = require("../middleware/authMiddleware");

// public
router.get("/", getJobs);
router.get("/:id", getJobById);

// protected
router.post("/", auth, createJob);

module.exports = router;