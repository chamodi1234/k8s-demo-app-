// controllers/loadBalancerController.js
const LoadBalancer = require('../models/LoadBalancer');

// Assign the incoming request to a server
const assignServer = (req, res) => {
  const servers = LoadBalancer.assignRequest();
  res.status(200).json({
    message: 'Request assigned successfully',
    servers,
  });
};

// Reset the traffic
const resetTraffic = (req, res) => {
  const servers = LoadBalancer.resetTraffic();
  res.status(200).json({
    message: 'Traffic reset successfully',
    servers,
  });
};

module.exports = { assignServer, resetTraffic };
