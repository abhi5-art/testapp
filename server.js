const express = require("express");
const app = express();
const path = require("path");
// const MongoClient = require("mongodb").MongoClient; // Comment out

const PORT = 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Simple in-memory storage for demo
let demoUsers = [];

app.get("/getUsers", async (req, res) => {
    res.send(demoUsers.length ? demoUsers : [{name: "Admin", email: "admin@demo.com"}]);
});

app.post("/addUser", async (req, res) => {
    const userObj = req.body;
    console.log("Form submitted:", userObj);
    demoUsers.push(userObj);
    res.send({success: true, message: "User added successfully (Demo Mode)"});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});