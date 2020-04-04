const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

router.post('/', (req, res) => {
  User.findOne({email:req.body.email}, (err, foundUser) => {
    if (foundUser === null) {
      req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
      User.create(req.body, (err, createdUser) => {
        res.status(201).json({
          status: 201,
          message: 'User created.'
        })
      })
    } else {
      res.status(401).json({
        status: 401,
        message: 'Email already registered.'
      })
    }
  })
})

module.exports = router;
