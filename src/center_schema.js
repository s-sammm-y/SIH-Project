const mongoose = require('mongoose');


const centerSchema = new mongoose.Schema({
  name: String,
  address: String,
  govt_id: String,
  review: String,
  pricing: {
    laptop: {
        old: Number,
        new: Number,
    },
    phone:{
        old: Number,
        new: Number,
    },
    desktop: {
        old: Number,
        new: Number,
    },
    small_appliance: {
        old: Number,
        new: Number,
    },
    large_appliance: {
        old: Number,
        new: Number,
    },
    electronics: {
        old: Number,
        new: Number,
    }
  },
});

module.exports = mongoose.model('center', centerSchema);