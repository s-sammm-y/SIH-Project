const mongoose = require('mongoose');

const userverificationSchema = new mongoose.Schema({
  userId: String,
  uniqueString: String,
  createdAt: Date,
  expiresAt: String,
});

module.exports = mongoose.model('Userverification', userverificationSchema);