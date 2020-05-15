const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/user");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decoded = jwt.verify(token, "moregandhi");
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Auth Failed"
        });
    }
}
