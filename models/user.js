const mongoose = require('mongoose');
const { isEmail } = require('validator');

// const { module } = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email address']
    },

    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Minimum Length of Paswword is 6 characters"],
        maxlength: [50,"Password Longer than 50"], 

    },

});

const User = mongoose.model("User", UserSchema);

module.exports = User;