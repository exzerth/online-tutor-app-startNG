const mongoose = require("mongoose");

const lessonSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    class: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }, 
}, {timestamps: true});

module.exports = mongoose.model("Lesson", lessonSchema);