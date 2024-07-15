const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const accountRouter = require("./routes/accountRoutes");
const taskRouter = require("./routes/taskRoutes");
const cronRouter = require("./routes/cronRouter");

const app = express();

// MIDDLEWARES
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.use((req, res, next) => {
    const allowedOrigins = [
        "http://localhost:3000",
        "https://account-manager-991a8.web.app",
    ];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.header("Access-Control-Allow-Credentials", true);
    return next();
});

app.use(compression());

app.use("/api/v1/accounts", accountRouter);
app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/cron", cronRouter);

module.exports = app;
