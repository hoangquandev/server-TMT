const express = require("express");
const userController = require("../controllers/user.controller");
const middlewareController = require("../controllers/middlewares.controller");

const router = express.Router();

// GET ALL USER
router.get("/", middlewareController.verifyToken, userController.getAllUsers);

// Update user profile
router.put(
  "/:userId",
  middlewareController.verifyToken,
  userController.editUser
);

// DELETE USER
router.delete(
  "/:userId",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);

module.exports = router;
