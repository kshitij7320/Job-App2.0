const express = require("express");
const router = express.Router();

const {
  applyJob,
  getMyApplications,
} = require("../controllers/applicationController");

const auth = require("../middleware/authMiddleware");

// apply
router.post("/", auth, applyJob);

// get my applications
router.get("/me", auth, getMyApplications);

module.exports = router;
