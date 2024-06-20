const Account = require("./../models/accountModel");

exports.getAllAccounts = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined",
    });
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

exports.updateAccount = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined",
    });
};

exports.deleteAccount = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined",
    });
};

exports.getTasksByAccount = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined",
    });
};
