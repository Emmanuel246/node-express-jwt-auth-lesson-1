const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
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
        required: [true, 'Please enter a password'],
        minlength: [6, "Minimum Length of Paswword is 6 characters"],
        maxlength: [50,"Password Longer than 50"], 

    },})


// fire a function after doc saved to db
// UserSchema.post('save', function (doc, next){
//     console.log('new user was created & saved', doc);
//     next();
// })
    // fires a function before saving to db
UserSchema.pre('save', async function(next)
{
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();


});

const User = mongoose.model("User", UserSchema);

module.exports = User;