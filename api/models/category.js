const mongoose = require("mongoose");
const schema = mongoose.Schema;

const categorySchema = new schema({
    class: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Category", categorySchema);