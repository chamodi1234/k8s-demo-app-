// models/Log.js
const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  timestamp: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Log', LogSchema);
