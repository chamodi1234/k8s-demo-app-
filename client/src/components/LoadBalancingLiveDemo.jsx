
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const LoadBalancingLiveDemo = () => {
  const [trafficData, setTrafficData] = useState([]);
  const [isDistributing, setIsDistributing] = useState(false);

  // Fetch initial server data
  useEffect(() => {
    axios.post('http://localhost:5000/api/loadbalance/reset')
      .then(response => setTrafficData(response.data.servers))
      .catch(error => console.error(error));
  }, []);

  const assignServer = () => {
    setIsDistributing(true);
    axios.post('http://localhost:5000/api/loadbalance/assign')
      .then(response => setTrafficData(response.data.servers))
      .catch(error => console.error(error))
      .finally(() => setIsDistributing(false));
  };

  return (
    <div className="gradient-card p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-white">🚦 Live Demo - Load Balancing</h3>
      <p className="text-gray-300 mb-4">
        Click the button to simulate traffic distribution across backend services.
      </p>

      <div className="flex justify-center mb-4">
        <button
          onClick={assignServer}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          disabled={isDistributing}
        >
          {isDistributing ? 'Assigning Request...' : 'Request Server'}
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {trafficData.map((server, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-4 rounded-md flex justify-between items-center"
            animate={{ scale: isDistributing ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-semibold text-white">Server {index + 1}</h4>
            <motion.p
              className="text-gray-300"
              animate={{ opacity: isDistributing ? 0.5 : 1 }}
              transition={{ duration: 0.3 }}
            >
              Requests: {server}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LoadBalancingLiveDemo;