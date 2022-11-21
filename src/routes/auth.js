import express from "express";
import authController from "../controllers/auth";

const router = express.Router();

// REGISTER
router.post("/register", authController.register);

// LOGIN
router.post("/login", authController.login);

// REFRESH TOKEN
// router.post("/refresh", authController.requestRefreshToken);

// LOGOUT
// router.post(
//   "/logout",
//   middlewareController.verifyToken,
//   authController.userLogout
// );

module.exports = router;
