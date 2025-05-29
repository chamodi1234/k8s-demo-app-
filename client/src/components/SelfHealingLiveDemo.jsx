import { useState } from 'react';

const SelfHealingLiveDemo = () => {
  const [isFailure, setIsFailure] = useState(false);
  const [isRecoveryInProgress, setIsRecoveryInProgress] = useState(false);
  const [isRecovered, setIsRecovered] = useState(false);
  const [clickTime, setClickTime] = useState(null);

  const triggerFailure = () => {
    const currentTimestamp = new Date().toLocaleString();
    setClickTime(currentTimestamp);

    setIsFailure(true);
    setIsRecoveryInProgress(true);
    setIsRecovered(false);

    // Simulate recovery after 5 seconds
    setTimeout(() => {
      setIsFailure(false);
      setIsRecoveryInProgress(false);
      setIsRecovered(true);
    }, 5000); // 5 seconds for recovery
  };

  return (
    <div className="gradient-card">
      <h3 className="text-lg font-semibold mb-4">🛠️ Live Demo - Self-Healing</h3>
      <p className="text-gray-300 mb-4">
        Click the button to simulate a failure and watch Kubernetes automatically recover.
      </p>
      
      <div className="flex justify-center mb-4">
        <button
          onClick={triggerFailure}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          disabled={isRecoveryInProgress}
        >
          {isRecoveryInProgress ? 'Recovering...' : 'Simulate Failure'}
        </button>
      </div>

      {/* Display Failure Message */}
      {isFailure && (
        <div className="mt-4 bg-red-600 p-4 rounded-md">
          <p className="text-white">❌ Failure Detected! The pod is down.</p>
        </div>
      )}

      {/* Display Recovery Process */}
      {isRecoveryInProgress && (
        <div className="mt-4 bg-yellow-600 p-4 rounded-md">
          <p className="text-white">🔄 Recovery in Progress... Kubernetes is fixing the issue.</p>
        </div>
      )}

      {/* Display Success/Recovered Message */}
      {isRecovered && (
        <div className="mt-4 bg-green-600 p-4 rounded-md">
          <p className="text-white">✅ Pod has been successfully recovered!</p>
        </div>
      )}

      {/* Display the time when the failure was triggered */}
      {clickTime && (
        <div className="mt-4 bg-gray-700 p-4 rounded-md">
          <p className="text-gray-300">
            Failure was triggered at: <strong>{clickTime}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default SelfHealingLiveDemo;
