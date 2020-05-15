const router = require("express").Router();
const lessonController = require("../controllers/lesson");


router.post("/", lessonController.createLesson);

router.get("/", lessonController.getAllLesson);

router.get("/:lessonId", lessonController.getALesson);

router.patch("/:lessonId", lessonController.updateALesson);

router.delete("/:lessonId", lessonController.deleteALesson);




module.exports = router;