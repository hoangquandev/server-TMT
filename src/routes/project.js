import express from "express";
import projectController from "../controllers/project";

const router = express.Router();

// Create new project
router.post("/create", projectController.createNewProject);

// Get all projects
router.get("/", projectController.getAllProjects);

// detail project
router.get("/:id", projectController.getDetailProject);
// update project
router.put("/:id", projectController.updateProject);

// router.param("projectId", projectById);

// delete project
router.delete("/:id", projectController.deleteProject);

// update project

module.exports = router;
