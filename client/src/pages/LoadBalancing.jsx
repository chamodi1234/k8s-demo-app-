import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import LoadBalancingLiveDemo from '../components/LoadBalancingLiveDemo'; // Import the live demo component

// Reusable Gradient Card Component
const GradientCard = ({ title, children }) => (
  <div className="p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl shadow-lg mb-6">
    <div className="bg-gray-800 p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  </div>
);

export default function LoadBalancing() {
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
          <GradientCard title="⚖️ Load Balancing">
            <p className="text-gray-300">
              <strong>Load Balancing</strong> efficiently distributes incoming network traffic across multiple backend services.
            </p>
          </GradientCard>
          <GradientCard title="🌟 Key Concepts:">
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li><strong>Service:</strong> Abstracts networking and balances traffic.</li>
              <li><strong>Ingress:</strong> Manages external access to services.</li>
              <li><strong>NodePort:</strong> Exposes service on a static port on each node.</li>
              <li><strong>ClusterIP:</strong> Default service type, accessible only within the cluster.</li>
            </ul>
          </GradientCard>

          {/* Live Demo Section */}
          <LoadBalancingLiveDemo />
        </main>
        <Footer />
      </div>
    </div>
  );
}
