const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "An account must have a name"],
        unique: true,
    },
    tasks: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
        required: [true, "An account must have a task array"],
    },
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
