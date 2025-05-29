const express = require('express');
const { getMetrics } = require('../controllers/metricController');
const router = express.Router();

router.get('/', getMetrics); // Ensure this route is being set up correctly

module.exports = router;
