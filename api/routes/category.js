const router = require("express").Router();
const categoryController = require("../controllers/category");


router.post("/", categoryController.createCategory);

router.get("/", categoryController.allowIfLoggedin, categoryController.getAllCategory);

router.get("/:categoryId", categoryController.getACategory);

router.patch("/:categoryId", categoryController.updateACategory);

router.delete("/:categoryId", categoryController.deleteACategory);



module.exports = router;