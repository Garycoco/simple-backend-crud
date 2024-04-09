const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express()

// middleware
app.use(express.json()); // This is used so that we can send a request with json
app.use(express.urlencoded({extended: false}))

// roures
app.use("/api/products", productRoute)

// Connecting to Mongo
mongoose.connect("<Connection string>")
.then(() => {
    console.log("Database connected successfully")
    app.listen(3000, () => {
        console.log("Server running at port: 3000")
    })
})
.catch(() => {
    console.log("Failed to connect")
})
