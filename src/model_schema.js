const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type : String,
    required:true
  },
  email: {
    type : String,
    required:true
  },
  contactNumber: {
    type : String,
    required:true
  },
  password: {
    type : String,
    required:true
  },
  verified: Boolean,
  points: Number,
  withdrawableAmount : Number,
});

module.exports = mongoose.model('User', userSchema);