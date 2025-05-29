import { useState } from 'react';

// Gradient Card Component
const GradientCard = ({ title, children }) => (
  <div className="p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl shadow-lg mb-6">
    <div className="bg-gray-800 p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  </div>
);

export default function CICDLiveDemo() {
  const [pageColor, setPageColor] = useState('bg-gray-950');
  const [deployStatus, setDeployStatus] = useState('Pending');
  const [isDeploying, setIsDeploying] = useState(false);
  const [selectedColor, setSelectedColor] = useState('bg-gray-950');
  const [history, setHistory] = useState([]);
  const [revertedColor, setRevertedColor] = useState(null);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const gitCommit = () => {
    setDeployStatus('Committing changes...');
    setIsDeploying(true);
    setTimeout(() => {
      setDeployStatus('Changes committed successfully.');
      setHistory((prev) => [...prev, selectedColor]);
      setIsDeploying(false);
    }, 1500);
  };

  const gitPush = () => {
    setDeployStatus('Pushing to GitHub...');
    setIsDeploying(true);
    setTimeout(() => {
      setDeployStatus('Push successful!');
      setPageColor(selectedColor);
      setHistory((prev) => [...prev, selectedColor]);
      setIsDeploying(false);
    }, 2000);
  };

  const gitRevert = () => {
    if (history.length > 1) {
      const previousColor = history[history.length - 2];
      setDeployStatus('Reverting to previous commit...');
      setIsDeploying(true);
      setTimeout(() => {
        setDeployStatus('Reverted to previous commit.');
        setPageColor(previousColor);
        setRevertedColor(previousColor);
        setHistory((prev) => prev.slice(0, -1));
        setIsDeploying(false);
      }, 1500);
    }
  };

  return (
    <div className={`${pageColor} min-h-screen text-white`}>
      <main className="flex-grow px-4 py-6 space-y-6">
        <GradientCard title="🚀 Live CI/CD Demo - GitHub Operations">
          <div className="flex justify-center mb-4">
            <select
              value={selectedColor}
              onChange={handleColorChange}
              className="bg-gray-800 text-white p-2 rounded-md"
            >
              <option value="bg-gray-950">Gray</option>
              <option value="bg-blue-500">Blue</option>
              <option value="bg-green-500">Green</option>
              <option value="bg-red-500">Red</option>
              <option value="bg-yellow-500">Yellow</option>
              <option value="bg-purple-500">Purple</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button onClick={gitCommit} className="bg-blue-600 p-3 rounded-md hover:bg-blue-700" disabled={isDeploying}>
              Commit
            </button>
            <button onClick={gitPush} className="bg-green-600 p-3 rounded-md hover:bg-green-700" disabled={isDeploying}>
              Push
            </button>
            <button onClick={gitRevert} className="bg-red-600 p-3 rounded-md hover:bg-red-700" disabled={isDeploying}>
              Revert
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-300">Status: {deployStatus}</p>
            {revertedColor && <p className="text-sm mt-2 text-gray-400">Color after revert: {revertedColor}</p>}
            <p className="text-sm mt-2 text-gray-400">History: {history.join(' → ')}</p>
          </div>
        </GradientCard>
      </main>
    </div>
  );
}
