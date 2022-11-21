import authRouter from "./auth";
import projectRouter from "./project";

const initRoutes = (app) => {
  app.use("/auth", authRouter);
  app.use("/projects", projectRouter);
};

export default initRoutes;
