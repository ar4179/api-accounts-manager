const express = require("express");
const morgan = require("morgan");

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));

// ROUTE HANDLERS
const getAllAccounts = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined",
    });
};

const createAccount = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined",
    });
};

const updateAccount = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined",
    });
};

const deleteAccount = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined",
    });
};

const createTask = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined",
    });
};

const updateTask = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined",
    });
};

const deleteTask = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined",
    });
};

const getTasksByAccount = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined",
    });
};

// ROUTES
const accountRouter = express.Router();
const taskRouter = express.Router();

accountRouter.route("/").get(getAllAccounts).post(createAccount);

accountRouter.route("/:id").patch(updateAccount).delete(deleteAccount); // delete tasks associated with the account as well

accountRouter.route("/:id/tasks").get(getTasksByAccount);

taskRouter.route("/").post(createTask);

taskRouter.route("/:id").patch(updateTask).delete(deleteTask);

app.use("/api/v1/accounts", accountRouter);
app.use("/api/v1/tasks", taskRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
