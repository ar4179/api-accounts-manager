const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "An account must have a title"],
    },
    description: {
        type: String,
        required: [true, "An account must have a description field"],
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

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
