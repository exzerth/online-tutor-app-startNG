const express = require("express");
const router = express.Router();
const userController = require("../controllers/user")
const checkAuth = require("../middleware/checkAuth");



router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.get("/", checkAuth, userController.getAllUser);

router.delete("/:userId", userController.deleteUser);
    




module.exports = router;