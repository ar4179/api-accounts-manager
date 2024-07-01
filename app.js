const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const accountRouter = require("./routes/accountRoutes");
const taskRouter = require("./routes/taskRoutes");

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

// ROUTE MIDDLEWARES
/*
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

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
*/

app.use(compression());

app.use("/api/v1/accounts", accountRouter);
app.use("/api/v1/tasks", taskRouter);

module.exports = app;
