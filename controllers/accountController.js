const Account = require("./../models/accountModel");
const Task = require("./../models/taskModel");

exports.getAllAccounts = async (req, res) => {
    try {
        const accounts = await Account.find();

        // Create a copy of accounts to populate tasks manually
        const accountsWithTasks = await Promise.all(
            accounts.map(async (account) => {
                // Fetch tasks for the current account
                const tasks = await Task.find({ _id: { $in: account.tasks } });
                // Return a new object with tasks populated
                return { ...account.toObject(), tasks };
            })
        );

        res.status(201).json({
            status: "success",
            results: accounts.length,
            data: {
                accountsWithTasks,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

exports.createAccount = async (req, res) => {
    try {
        const newAccount = await Account.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                account: newAccount,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

exports.updateAccount = async (req, res) => {
    try {
        const updatedAccount = await Account.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        res.status(201).json({
            status: "success",
            data: {
                account: updatedAccount,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.deleteAccount = async (req, res) => {
    try {
        await Account.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "success",
            data: null,
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.getTasksByAccount = async (req, res) => {
    try {
        const account = await Account.findById(req.params.id);
        const tasks = await Promise.all(
            account.tasks.map((task) => Task.findById(task))
        );

        res.status(201).json({
            status: "success",
            data: {
                tasks,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};
