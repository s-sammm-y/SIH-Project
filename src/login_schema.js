const mongoose = require('mongoose');
const loginschema = new mongoose.Schema({
    userId: String,
    username: String,
    ipAddress: String,
    loggedInAt: Date,
    expiresAt : String,
})
module.exports = mongoose.model('userlogin', loginschema);