const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  headPic: String 
}, {
  toJSON: { // Changes the RETurn json
    transform: function (doc, ret) {
      delete ret.password;
      delete ret.__v;
    }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;