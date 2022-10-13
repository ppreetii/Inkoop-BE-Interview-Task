const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config()

const visitiorRoutes = require("./routes/visitor");

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use("/count", visitiorRoutes);

mongoose
.connect(process.env.MONGODB_URL)
.then(result => {
    console.log("Connected to MongoDb via mongoose");
    app.listen(process.env.PORT);
    console.log(`Server started at port ${process.env.PORT}`);
})
.catch(err => console.log(err))
