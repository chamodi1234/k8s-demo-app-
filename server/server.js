require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
try {
  app.use(cors());
  app.use(express.json());
} catch (err) {
  console.error('❌ Middleware error:', err);
}

// Import Routes
const loadBalancerRoutes = require('./routes/loadBalancerRoutes');
const logRoutes = require('./routes/logRoutes');
const metricRoutes = require('./routes/metricRoutes');
const autoscalingRoutes = require('./routes/autoscalingRoutes');

// Routes
app.use('/api/loadbalance', loadBalancerRoutes);
app.use('/api/logs', logRoutes); // Ensure this is the correct route
app.use('/api/metrics', metricRoutes); // Ensure this is the correct route
app.use('/api/autoscaling', autoscalingRoutes);

// Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is healthy!' });
});

// 404 Error Handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found!' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
     
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
