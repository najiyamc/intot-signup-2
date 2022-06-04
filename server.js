const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin_najiya:najiya@cluster0.an4uk.mongodb.net/intotDB")

app.use("/",require("./routes/intotRoute"));

app.listen(3001, function() {
    console.log("express server is running on port 3001");
})

