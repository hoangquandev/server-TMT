import * as authService from "../services/auth";

const authController = {
  // REGISTER
  register: async (req, res) => {
    const { userName, password, email } = req.body;
    try {
      if (!userName || !email || !password)
        return res.status(400).json({
          err: 1,
          message: "Missing inputs!",
        });
      const response = await authService.registerService(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        err: -1,
        message: "Fail at auth controller" + error,
      });
    }
  },
  login: async (req, res) => {
    const { password, email } = req.body;
    try {
      if (!email || !password)
        return res.status(400).json({
          err: 1,
          message: "Missing inputs!",
        });
      const response = await authService.loginService(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        err: -1,
        message: "Fail at auth controller" + error,
      });
    }
  },
};

module.exports = authController;
