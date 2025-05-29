// routes/loadBalancerRoutes.js
const express = require('express');
const router = express.Router();
const {
  assignServer,
  resetTraffic,
} = require('../controllers/loadBalancerController');

router.post('/assign', assignServer);
router.post('/reset', resetTraffic);

module.exports = router;
