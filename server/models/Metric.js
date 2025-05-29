// models/Metric.js
const mongoose = require('mongoose');

const MetricSchema = new mongoose.Schema({
  pod: {
    type: String,
    required: true,
  },
  node: {
    type: String,
    required: true,
  },
  cpu: {
    type: String,
    required: true,
  },
  memory: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Metric', MetricSchema);
