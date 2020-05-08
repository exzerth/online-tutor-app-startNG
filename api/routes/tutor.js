const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /tutor"
    })
});

router.get("/:tutorId", (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /tutor/tutorId",
        tutorId: req.params.tutorId
    })
});

router.delete("/:tutorId", (req, res, next) => {
    res.status(200).json({
        message: "Handling DELETE requests to /tutor/tutorId",
        tutorId: req.params.tutorId
    })
});


module.exports = router;