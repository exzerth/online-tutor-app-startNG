const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

router.post("/", (req, res, next) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    if (!fullname || !email || !password) {
        res.status(400).json({
            status: false,
            message: "All fields required"
        });
    } else if (role === "admin") {
        res.status(400).json({
            status: false,
            message: "You cannot sign up as admin"
        });
    }

    User.findOne({email})
    .then(user => {
        if (user) {
         return res.status(423).json({
            status: false,
            message: "Email already exists"
         });   
        } else {
            bcrypt.hash(password, 12)
            .then(password => {
                let user = new User({
                    fullname,
                    email,
                    password,
                    role: role || "student",
                });
                const accessToken = jwt.sign({userId: user._id},
                    "startng", {expiresIn: "2d"});
                user.accessToken = accessToken;
                user.save();
                return user
            })
            .then((user) => res.status(200).send({
                status: true,
                message: "User registered successfully"
            }))
        }
    }).catch(err => console.log(err));
});

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /category"
    })
});





module.exports = router;