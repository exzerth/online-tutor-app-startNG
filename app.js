const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const categoryRoutes = require("./api/routes/category");
const lessonRoutes = require("./api/routes/lesson");
const userRoutes = require("./api/routes/user");
const subjectRoutes = require("./api/routes/subject");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


app.use("/user", userRoutes);
app.use("/category", categoryRoutes);
app.use("/subject", subjectRoutes);
app.use("/lesson", lessonRoutes);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

mongoose.connect("mongodb+srv://Gandhi:RGandhi@cluster0-hnuxn.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(_result => {
console.log("Database connected");
let port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number);
}).catch(err => console.log(err));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
