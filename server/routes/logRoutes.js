const express = require('express');
const { getLogs } = require('../controllers/logController');
const router = express.Router();

router.get('/', getLogs); // Ensure this route is being set up correctly

module.exports = router;
