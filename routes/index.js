import express from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getSingleProject,
} from "../controllers/project.js";
import { sendAutoMatedEmail } from "../controllers/email.js";
import { createSkill, getSkills } from "../controllers/skill.js";

const router = express.Router();

//Projects
router.post("/projects", createProject);
router.get("/projects", getAllProjects);
router.get("/projects/:id", getSingleProject);
router.delete("/projects/:id", deleteProject);

//Email
router.post("/send-email", sendAutoMatedEmail);

//Skills
router.post("/skills", createSkill);
router.get("/skills", getSkills);

export default router;
