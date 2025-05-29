import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import SelfHealingLiveDemo from '../components/SelfHealingLiveDemo';

const GradientCard = ({ title, children }) => (
  <div className="p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl shadow-lg mb-6">
    <div className="bg-gray-800 p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  </div>
);

export function SelfHealingPage() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-grow px-4 py-6 space-y-6">
          <GradientCard title="🛡️ Self-Healing">
            <p className="text-gray-300">
              <strong>Self-Healing</strong> in Kubernetes allows applications to automatically recover from failures and maintain desired state.
            </p>
          </GradientCard>
          <GradientCard title="🌟 Key Concepts:">
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li><strong>Restart Policies:</strong> Automatically restarts failed containers.</li>
              <li><strong>Health Checks:</strong> Liveness and readiness probes to detect issues.</li>
              <li><strong>ReplicaSets:</strong> Ensures the desired number of pod replicas are running.</li>
              <li><strong>Auto-Recovery:</strong> Failed nodes are rescheduled to healthy nodes.</li>
            </ul>
          </GradientCard>

          {/* Live Demo Section */}
          <SelfHealingLiveDemo />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default SelfHealingPage;
