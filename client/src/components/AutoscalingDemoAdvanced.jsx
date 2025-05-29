import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const AutoscalingDemoApp = () => {
  const [pods, setPods] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [cpuLoad, setCpuLoad] = useState(0);
  const [memoryLoad, setMemoryLoad] = useState(0);
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/autoscaling');
      const { pods = [], nodes = [], cpuLoad = 0, memoryLoad = 0, metrics = [] } = res.data;

      setPods(pods);
      setNodes(nodes);
      setCpuLoad(cpuLoad);
      setMemoryLoad(memoryLoad);
      setMetrics(metrics); // Update metrics state to re-render graph
      setLoading(false); // Data fetched successfully, set loading to false
    } catch (err) {
      setError('Failed to fetch data.'); // Set error if API call fails
      setLoading(false); // Set loading to false even if an error occurs
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 1000); // Fetch data every second

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  const addLoad = async () => {
    try {
      await axios.post('http://localhost:5000/api/autoscaling/add-load');
      fetchData(); // Re-fetch the data after adding load
    } catch (err) {
      setError('Failed to add load.');
    }
  };

  const reduceLoad = async () => {
    try {
      await axios.post('http://localhost:5000/api/autoscaling/reduce-load');
      fetchData(); // Re-fetch the data after reducing load
    } catch (err) {
      setError('Failed to reduce load.');
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there was an issue fetching the data
  }

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg space-y-6">
      <h2 className="text-2xl font-bold">Kubernetes Autoscaling Advanced Demo</h2>
      <div className="flex space-x-4">
        <button onClick={addLoad} className="bg-green-600 px-4 py-2 rounded">Add Load</button>
        <button onClick={reduceLoad} className="bg-red-600 px-4 py-2 rounded">Reduce Load</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {pods.map((pod) => (
          <div key={pod.id} className="bg-gray-800 p-4 rounded-md text-center">
            <h3 className="font-semibold">Pod #{pod.id}</h3>
            <p>CPU: {pod.cpu}%</p>
            <p>Memory: {pod.memory}%</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {nodes.map((node) => (
          <div key={node.id} className="bg-gray-700 p-4 rounded-md text-center">
            <h3 className="font-semibold">Node #{node.id}</h3>
            <p>Pods: {node.pods}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 p-4 rounded-md">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={metrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cpu" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="memory" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AutoscalingDemoApp;
