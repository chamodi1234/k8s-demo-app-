const getLogs = async (req, res) => {
  const logs = [
    { timestamp: '2025-05-10 10:32:00', message: 'Pod started successfully.' },
    { timestamp: '2025-05-10 10:33:00', message: 'Pod terminated unexpectedly.' },
  ];
  res.json(logs); // Ensure you're sending the logs as JSON
};

module.exports = { getLogs };
