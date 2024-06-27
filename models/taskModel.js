const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "An account must have a title"],
    },
    description: {
        type: String,
        required: isThisString,
    },
    priority: {
        type: String,
        required: [true, "An account must have a priority field"],
    },
    percentComplete: {
        type: Number,
        required: [true, "An account must have a percentComplete field"],
    },
});

function isThisString() {
    return typeof this.description === "string" ? false : true;
}

taskSchema.pre("remove", async function (next) {
    try {
        await mongoose
            .model("Account")
            .updateMany({ tasks: this._id }, { $pull: { tasks: this._id } });
        next();
    } catch (err) {
        next(err);
    }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
