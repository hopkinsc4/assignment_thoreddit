const mongoose = require('mongoose');
const { Schema } = mongoose;

var UserSchema = new Schema({
    username: String,
    email: String
}, {
    timestamps: true
});


// UserSchema.methods.name = function() {
//     return `${ this.name } ${ this.lname }`;
// };

UserSchema.statics.findByUsername = function(fname) {
    return User.find({ username });
};



const User = mongoose.model('User', UserSchema);

module.exports = User;