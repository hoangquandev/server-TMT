import express from "express";
import cors from "cors";
const logger = require("morgan");
const bodyParser = require("body-parser");
import initRoutes from "./src/routes";
import dbConnect from "./src/config/dbConnect";

const app = express();

// config
require("dotenv").config();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// dbConnect.checkConnect();

// Routes
initRoutes(app);
dbConnect();
// middlewares
app.use(logger("dev"));

// catch error handle
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// function error handle
app.use(() => {
  const error = qpp.get("env") === "development" ? err : {};
  const status = err.status || 500;

  // respone to client
  return res.status(status).json({
    error: {
      message: error.message,
    },
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running : http://localhost:${port}`);
});
