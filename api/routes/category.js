const router = require("express").Router();
const mongoose = require("mongoose");
const Category = require("../models/category");

router.post("/", (req, res, next) => {
    const category = {
        class: req.body.class,
        subject: req.body.subject
    };
    res.status(201).json({
        message: "Handling POST requests to /category",
        createdCategory: category
    })
});

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /category"
    })
});

router.patch("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling PATCH requests to /category"
    })
});

router.delete("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling DELETE requests to /category"
    })
});

router.post("/subjects", (req, res, next) => {
    res.status(201).json({
        message: "Handling POST requests to /category/subjects"
    })
});

router.get("/subjects", (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /category/subjects"
    })
});

router.patch("/subjects", (req, res, next) => {
    res.status(200).json({
        message: "Handling PATCH requests to /category/subjects"
    })
});

router.delete("/subjects", (req, res, next) => {
    res.status(200).json({
        message: "Handling DELETE requests to /category/subjects"
    })
});

router.get("/subjects/:subjectsId", (req, res, next) => {
    const id = req.params.subjectsId;
    if (id === "special"){
        res.status(200).json({
            message: "Handling GET requests to /category/subjects/subjectsId",
            id: id
        });
    } else {
        res.status(200).json({
            message: "You got an id"
        });
    }
});

router.patch("/subjects/:subjectsId", (req, res, next) => {
    res.status(200).json({
        message: "Handling PATCH requests to /category/subjects/subjectsId",
        orderId: req.params.orderId
    });
});

router.delete("/subjects/:subjectsId", (req, res, next) => {
    const id = req.params.subjectsId;
    if (id === "special"){
        res.status(200).json({
            message: "Handling DELETE requests to /category/subjects/subjectsId",
            id: id
        });
    } else {
        res.status(200).json({
            message: "You deleted an id"
        });
    }
});



module.exports = router;