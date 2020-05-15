const mongoose = require("mongoose");
const schema = mongoose.Schema;

const categorySchema = new schema({
    _id: mongoose.Schema.Types.ObjectId,
    category: {
        type: String,
        require: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Category", categorySchema);