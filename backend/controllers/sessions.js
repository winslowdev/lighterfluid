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
    if (err) {
      console.log(err);
    }
    else if (foundUser === null) {
      res.status(401).json({
          status: 401,
          message: 'Username or password is incorrect.'
       })
    } else if(bcrypt.compareSync(req.body.password, foundUser.password)){
        req.session.currentUser = foundUser;
        res.status(201).json({
           status: 201,
           message: 'Session created.',
           user: req.session.currentUser
         })
    } else {
      res.status(401).json({
         status: 401,
         message: 'Username or password is incorrect.'
      })
    }
  })
})

module.exports = router;