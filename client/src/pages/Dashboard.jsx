import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const features = [
    {
      title: 'Resource Monitoring and Logging',
      description: 'Monitor Kubernetes clusters, track performance, and analyze logs.',
      image: '/src/pages/images/monitoring.webp',
      path: '/logs-monitoring',
    },
    {
      title: 'Self-Healing',
      description: 'Automatically restarts failed containers and replaces them.',
      image: '/src/pages/images/self healing.png',
      path: '/self-healing',
    },
    {
      title: 'Load Balancing',
      description: 'Distributes network traffic efficiently across containers.',
      image: '/src/pages/images/load.png',
      path: '/load-balancing',
    },
    {
      title: 'Auto Scaling',
      description: 'Scale applications automatically based on demand.',
      image: '/src/pages/images/auto-scaling.webp',
      path: '/autoscaling',
    },
    {
      title: 'CI/CD',
      description: 'Streamline deployments with continuous integration and delivery.',
      image: '/src/pages/images/cicd.png',
      path: '/cicd',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-grow px-4 py-6 space-y-6">
          <h2 className="text-2xl font-bold">What is Kubernetes?</h2>

          <div className="p-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-xl">
            <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg mb-6">
              <p className="text-gray-300">
                Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.
              </p>
              <p className="text-gray-300 mt-4">
                It enables developers and operators to manage containerized applications with high availability, scaling, and load balancing.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Key Features of Kubernetes</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 hover:shadow-2xl transition-transform"
              >
                <div className="w-full rounded-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="object-contain w-full max-h-64"
                  />
                </div>

                <h4 className="text-2xl font-semibold mt-2 hover:text-blue-400 transition">
                  {feature.title}
                </h4>

                <p className="text-gray-300 text-center">{feature.description}</p>

                <button
                  onClick={() => navigate(feature.path)}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                >
                  View More
                </button>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}