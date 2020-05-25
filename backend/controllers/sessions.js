const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

router.delete('/', (req, res) => {
   req.session.destroy(() => {
      res.status(200).json({
           status: 200,
           message: 'logout complete'
        })
   })
});

router.post('/', (req, res) => {
  User.findOne({email: req.body.email}, (err, foundUser) => {
    if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      req.session.currentUser = foundUser;
      res.status(201).json({
        status: 201,
        message: 'Session created.'
      })
    } else {
      res.status(401).json({
        status: 401,
        message: 'Login failed.'
      })
    }
  })
})

module.exports = router;