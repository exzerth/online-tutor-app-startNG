const mongoose = require("mongoose");
const Subject = require("../models/subject");
const Category = require("../models/category");

exports.createSubject = (req, res, next) => {
    Category.findById(req.body.categoryId)
    .then(category => {
        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }
        const subject = new Subject({
            _id: mongoose.Types.ObjectId(),
            category: req.body.categoryId,
            subject: req.body.subject
        });
        return subject.save()
    })
    .then(result => {
        console.log(result);
        res.status(201).json({result});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

exports.getAllSubject = (req, res, next) => {
    Subject.find()
    .populate("category", "category")
    .exec()
    .then(subject => {
        console.log(subject);
        res.status(200).json({subject});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

exports.getASubject = (req, res, next) => {
    Subject.findById(req.params.subjectId)
    .populate("category")
    .exec()
    .then(subject => {
        if (!subject) {
            return res.status(404).json({
                message: "Subject not found"
            });
        }
        console.log(subject);
        res.status(200).json({
            subject: subject,
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

exports.deleteASubject = (req, res, next) => {
    const id = req.params.subjectId;
    Subject.deleteOne({ _id: id })
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: "Subject deleted"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}