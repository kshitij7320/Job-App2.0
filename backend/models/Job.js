const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    salary: {
      type: String,
      default: "Not disclosed",
      trim: true,
    },
    type: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Freelance"],
      default: "Full-time",
    },
    category: {
      type: String,
      enum: [
        "Technology",
        "Finance",
        "Healthcare",
        "Marketing",
        "Sales",
        "Operations",
      ],
      default: "Technology",
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
      type: String,
      default: "📋",
    },
    link: {
      type: String,
      default: "",
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Job", jobSchema);
