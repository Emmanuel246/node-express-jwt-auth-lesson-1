const mongoose = require('mongoose');
// const (isEmail) = require('validate');

// const { module } = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: [true, "Please enter an email"],
        required: true,
        lowercase: true,
        // validate: [isEmail, 'Please enter a valid email address']
    },

    password: {
        type: String,
        Minlenght: 6,
        required: [true, "Minimum Length of Paswword is 6"],
    },

});

const User = mongoose.model("User", UserSchema);

module.exports = User;