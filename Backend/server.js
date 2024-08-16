const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const expRoutes = require("./routes/exp");
const authRoutes = require("./routes/auth");


const app = express();
mongoose.connect("mongodb://localhost:27017/Expense-tracker");



app.use(express.json());
const allowedOrigins = [
    'http://localhost:3000',
   
];



app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static('uploads'));



app.use("/exp", expRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(7000, () => {
    console.log("Server is running on port 7000");
});