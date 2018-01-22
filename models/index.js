var mongoose = require('mongoose');
var bluebird = require('bluebird');

// Set bluebird as the promise
// llibrary for mongoose
mongoose.Promise = bluebird;

var models = {};

// Load models and attach to models here
models.User = require('./user');

// ^^^ more models go here ^^^


module.exports = models;