import { Project } from "../models";
import { v4 } from "uuid";
const { Op } = require("sequelize");

const projectController = {
  createNewProject: async (req, res) => {
    const {
      name,
      imageId,
      description,
      client,
      design,
      location,
      lotArea,
      constructionArea,
      publicArea,
      stories,
      style,
    } = req.body;
    try {
      if (!name || !description || !client)
        return res.status(400).json({
          err: 1,
          message: "Missing inputs!",
        });
      const newProject = await Project.create({
        name,
        imageId,
        description,
        client,
        design,
        location,
        lotArea,
        constructionArea,
        publicArea,
        stories,
        style,
        status: false,
        id: v4(),
      });
      return res.status(200).json({
        err: 0,
        message: "new project has been created!",
        data: newProject,
      });
    } catch (error) {
      return res.status(500).json({
        err: -1,
        message: "Fail at auth controller" + error,
      });
    }
  },

  getAllProjects: async (req, res) => {
    const { name } = req.query;
    console.log(req.query);
    try {
      if (name) {
        const projectList = await Project.findAll({
          where: {
            name: {
              [Op.like]: `%${name}%`,
            },
          },
        });
        return res.status(200).json(projectList);
      } else {
        const projectList = await Project.findAll();
        return res.status(200).json(projectList);
      }
    } catch (error) {
      return res.status(500).json({
        err: -1,
        message: "Fail at auth controller" + error,
      });
    }
  },

  getDetailProject: async (req, res) => {
    const { id } = req.params;
    try {
      const detailProject = await Project.findOne({
        where: {
          id,
        },
      });
      return res.status(200).json({
        data: detailProject,
      });
    } catch (error) {
      return res.status(500).json({
        err: -1,
        message: "Fail at auth controller" + error,
      });
    }
  },

  updateProject: async (req, res) => {
    const { id } = req.params;
    const {
      name,
      imageId,
      description,
      client,
      design,
      location,
      lotArea,
      constructionArea,
      publicArea,
      stories,
      style,
    } = req.body;
    try {
      const detailProject = await Project.findOne({
        where: {
          id,
        },
      });
      detailProject.name = name;
      detailProject.imageId = imageId;
      detailProject.description = description;
      detailProject.client = client;
      detailProject.design = design;
      detailProject.location = location;
      detailProject.lotArea = lotArea;
      detailProject.constructionArea = constructionArea;
      detailProject.publicArea = publicArea;
      detailProject.stories = stories;
      detailProject.style = style;
      await detailProject.save();
      return res.status(200).json({
        data: detailProject,
      });
    } catch (error) {
      return res.status(500).json({
        err: -1,
        message: "Fail at auth controller" + error,
      });
    }
  },
  deleteProject: async (req, res) => {
    const { id } = req.params;
    try {
      await Project.destroy({
        where: {
          id,
        },
      });
      return res.status(200).json({
        err: 0,
        message: "delete successed!",
      });
    } catch (error) {
      return res.status(500).json({
        err: -1,
        message: "Fail at auth controller" + error,
      });
    }
  },
};

module.exports = projectController;
