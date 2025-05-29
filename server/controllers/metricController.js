const getMetrics = async (req, res) => {
  const metrics = [
    { pod: 'pod1', node: 'node1', cpu: '50%', memory: '256Mi', status: 'Running', timestamp: '2025-05-10 10:30:00' },
    { pod: 'pod2', node: 'node2', cpu: '30%', memory: '128Mi', status: 'Running', timestamp: '2025-05-10 10:31:00' },
  ];
  res.json(metrics); // Ensure you're sending the metrics as JSON
};

module.exports = { getMetrics };
