import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import AutoscalingDemoAdvanced from '../components/AutoscalingDemoAdvanced';

export default function Autoscaling() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  // Gradient Card Component
  const GradientCard = ({ title, children }) => (
    <div className="p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl shadow-lg mb-6">
      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-grow px-4 py-6 space-y-6">
          <GradientCard title="⚖️ Kubernetes Autoscaling">
            <p className="text-gray-300">
              <strong>Kubernetes Autoscaling</strong> helps dynamically adjust the number of Pods and nodes based on demand. It improves resource utilization and maintains optimal application performance.
            </p>
          </GradientCard>
          <GradientCard title="🌟 Key Concepts:">
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li><strong>Horizontal Pod Autoscaler (HPA):</strong> Automatically scales the number of pod replicas based on CPU/memory usage.</li>
              <li><strong>Vertical Pod Autoscaler (VPA):</strong> Adjusts resource limits and requests for individual pods.</li>
              <li><strong>Cluster Autoscaler:</strong> Adjusts the number of worker nodes in a cluster based on pending pods.</li>
              <li><strong>Resource Metrics:</strong> HPA relies on metrics like CPU and memory to trigger scaling.</li>
            </ul>
          </GradientCard>
          <GradientCard title="💻 Basic Commands:">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[{ title: "🔍 View HPA", command: "kubectl get hpa" },
                { title: "⚙️ Create HPA", command: "kubectl autoscale deployment <name> --min=2 --max=10 --cpu-percent=50" },
                { title: "📊 Describe HPA", command: "kubectl describe hpa <name>" },
                { title: "🗑️ Delete HPA", command: "kubectl delete hpa <name>" }
              ].map((cmd, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-md">
                  <h4 className="font-semibold text-white mb-2">{cmd.title}</h4>
                  <code className="bg-gray-900 p-2 rounded-md block">
                    {cmd.command}
                  </code>
                </div>
              ))}
            </div>
          </GradientCard>
          <GradientCard title="📌 Current Autoscaling Settings">
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li><strong>Horizontal Pod Autoscaler (HPA):</strong> 5 replicas</li>
              <li><strong>Cluster Autoscaler:</strong> Enabled</li>
              <li><strong>Resource Utilization Threshold:</strong> 70%</li>
            </ul>
          </GradientCard>
          <GradientCard title="🔄 Autoscaling Live Demo">
            <AutoscalingDemoAdvanced />
          </GradientCard>
        </main>
        <Footer />
      </div>
    </div>
  );
}
