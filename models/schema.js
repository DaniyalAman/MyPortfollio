const mongoose = require("mongoose");


const userModel = new mongoose.Schema(
    {
        Name:     String,
        email_id: String,
        subject:  String,
        message:  String,      
    });

module.exports = mongoose.model("database", userModel);