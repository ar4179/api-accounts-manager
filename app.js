const express = require("express");
const morgan = require("morgan");

const accountRouter = require("./routes/accountRoutes");
const taskRouter = require("./routes/taskRoutes");

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));

// ROUTE MIDDLEWARES
app.use("/api/v1/accounts", accountRouter);
app.use("/api/v1/tasks", taskRouter);

module.exports = app;
