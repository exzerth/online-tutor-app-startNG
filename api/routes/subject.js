const express = require("express");
const router = express.Router();
const subjectController = require("../controllers/subject");


router.post("/", subjectController.createSubject);

router.get("/", subjectController.getAllSubject);

router.get("/:subjectId", subjectController.getASubject);

router.delete("/:subjectId", subjectController.deleteASubject);


module.exports = router;