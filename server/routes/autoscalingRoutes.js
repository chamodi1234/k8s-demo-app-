// routes/autoscalingRoutes.js

const express = require('express');
const router = express.Router();
const controller = require('../controllers/autoscalingController');

// Routes
router.get('/', controller.getAutoscalingState);          // ✅ Fetch autoscaling state
router.post('/add-load', controller.addLoad);             // ✅ Add load to autoscaler
router.post('/reduce-load', controller.reduceLoad);       // ✅ Reduce load from autoscaler

module.exports = router;
