const express = require("express");
const morgan = require("morgan");
const compression = require("compression");

const accountRouter = require("./routes/accountRoutes");
const taskRouter = require("./routes/taskRoutes");

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));

// ROUTE MIDDLEWARES
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8000");

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});

app.use(compression());

app.use("/api/v1/accounts", accountRouter);
app.use("/api/v1/tasks", taskRouter);

module.exports = app;
