const mongoose = require("mongoose");
const schema = mongoose.Schema;

const categorySchema = new schema({
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ["admin", "tutor", "student"], default: "student",
        require: true
    },
}, {timestamps: true});

module.exports = mongoose.model("User", categorySchema);