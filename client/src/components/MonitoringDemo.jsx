import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MonitoringDemo = () => {
  const [logs, setLogs] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [error, setError] = useState('');

  // Fetch logs
  const fetchLogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/logs');
      setLogs(response.data);
    } catch (err) {
      setError('Error fetching logs: ' + err.message);
    }
  };

  // Fetch metrics
  const fetchMetrics = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/metrics');
      setMetrics(response.data);
    } catch (err) {
      setError('Error fetching metrics: ' + err.message);
    }
  };

  useEffect(() => {
    fetchLogs();
    fetchMetrics();
  }, []);

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg space-y-6">
      {error && (
        <div className="text-red-500 font-semibold text-lg mb-4">
          {error}
        </div>
      )}
      
      <div className="space-y-6">
        {/* Logs Section */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-4">🔑 Logs</h3>
          <ul className="space-y-3">
            {logs.map((log, index) => (
              <li
                key={index}
                className="p-4 bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex justify-between">
                  <span className="text-gray-300">{log.timestamp}</span>
                  <span className="text-gray-400">{log.message}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics Section */}
        <div className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-4">📊 Metrics</h3>
          <ul className="space-y-3">
            {metrics.map((metric, index) => (
              <li
                key={index}
                className="p-4 bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex justify-between">
                  <span className="text-gray-300">{metric.timestamp}</span>
                  <span className="text-gray-400">
                    Pod: {metric.pod}, Node: {metric.node}
                  </span>
                  <span className="text-gray-400">
                    CPU: {metric.cpu}, Memory: {metric.memory}
                  </span>
                  <span className="text-gray-400">Status: {metric.status}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MonitoringDemo;
