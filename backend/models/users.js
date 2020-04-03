const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    image: String,
    about: String,
    title: String,
    location: String,
    github: String,
    twitter: String,
    linkedin: String,
    linkToPortfolio: String,
    linkToResume: String,
    skills: Array
})

const User = mongoose.model('User', userSchema);

module.exports = User;
