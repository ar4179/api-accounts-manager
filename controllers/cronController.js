exports.getCron = async (req, res) => {
    try {
        res.status(201).json({
            status: "success",
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};
