import axios from "axios";
import { API_BASE_URL } from "../constants/config";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

export const authService = {
  register: (data) => api.post("/auth/register", data),
  login: (data) => api.post("/auth/login", data),
  getMe: () => api.get("/auth/me"),
  updateMe: (data) => api.put("/auth/me", data),
};

export const jobService = {
  getJobs: (params) => api.get("/jobs", { params }),
  getJobById: (id) => api.get(`/jobs/${id}`),
  getMyJobs: () => api.get("/jobs/me"),
  createJob: (data) => api.post("/jobs", data),
  updateJob: (id, data) => api.put(`/jobs/${id}`, data),
  deleteJob: (id) => api.delete(`/jobs/${id}`),
};

export const applicationService = {
  applyJob: (jobId) => api.post("/applications", { jobId }),
  getMyApplications: () => api.get("/applications/me"),
  getApplicationsByJob: (jobId) => api.get(`/applications/job/${jobId}`),
  getAllApplications: () => api.get("/applications"),
  updateApplicationStatus: (id, status) => api.put(`/applications/${id}`, { status }),
};

export default api;
