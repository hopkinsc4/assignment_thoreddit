var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var models = require('./../models');
var User = mongoose.model('User');



/**
 * All Users
 * 
*/
router.get('/users', (req, res) => {
    User.find({})
        .then((users) => {
            res.render('users/index', { users });
        })
        .catch((e) => res.status(500).send(e.stack));
});


module.exports = router;

