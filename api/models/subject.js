const mongoose = require("mongoose");
const schema = mongoose.Schema;

const subjectSchema = new schema({
    _id: mongoose.Schema.Types.ObjectId,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    subject: {
        type: String,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model("Subject", subjectSchema);