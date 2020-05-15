const mongoose = require("mongoose");
const Category = require("../models/category");


const { roles } = require('../roles')
 
exports.grantAccess = function(action, resource) {
 return async (req, res, next) => {
  try {
   const permission = roles.can(req.user.role)[action](resource);
   if (!permission.granted) {
    return res.status(401).json({
     error: "You don't have enough permission to perform this action"
    });
   }
   next()
  } catch (error) {
   next(error)
  }
 }
}

exports.allowIfLoggedin = async (req, res, next) => {
    try {
     const user = res.locals.loggedInUser;
     if (!user)
      return res.status(401).json({
       error: "You need to be logged in to access this route"
      });
      req.user = user;
      next();
     } catch (error) {
      next(error);
     }
}



exports.createCategory = (req, res, next) => {
    const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        category: req.body.category
    });
    category.save().then(result => {
        console.log(result);
        res.status(201).json({
        message: "Category created",
        createdCategory: result
    });
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
}

exports.getAllCategory = (req, res, next) => {
    Category.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json({docs});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

exports.getACategory = (req, res, next) => {
    const id = req.params.categoryId;
    Category.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({
                message: "No Category with such ID"
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
}
    
   exports.updateACategory = async (req, res, next) => {
    try {
     const update = req.body
     const categoryId = req.params.categoryId;
     await Category.findByIdAndUpdate(categoryId, update);
     const category = await Category.findById(userId)
     res.status(200).json({
      data: category,
      message: 'Category has been updated'
     });
    } catch (error) {
     next(error)
    }
   }

exports.deleteACategory = (req, res, next) => {
    const id = req.params.categoryId;
    Category.deleteOne({ _id: id })
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: "Category deleted"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}