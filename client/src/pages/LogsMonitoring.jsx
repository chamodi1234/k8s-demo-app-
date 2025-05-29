import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import MonitoringDemo from '../components/MonitoringDemo'; // Assuming you want a demo component for logs and monitoring

export default function LogsMonitoring() {
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
          <GradientCard title="📊 Logs & Monitoring">
            <p className="text-gray-300">
              <strong>Logs and monitoring</strong> provide insights into the behavior and performance of applications running in Kubernetes.
            </p>
          </GradientCard>
          <GradientCard title="🌟 Key Concepts:">
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li><strong>Pod Logs:</strong> Real-time logs of application behavior inside pods.</li>
              <li><strong>Node Monitoring:</strong> Tracks CPU, memory, and disk usage on nodes.</li>
              <li><strong>Event Alerts:</strong> Reports errors like CrashLoopBackOff, Pending, OOMKilled.</li>
              <li><strong>Centralized Log Management:</strong> Tools like ELK Stack (Elasticsearch, Logstash, Kibana) and Prometheus + Grafana.</li>
            </ul>
          </GradientCard>
          <GradientCard title="💻 Basic Commands:">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[ 
                { title: "🔍 View Logs of a Pod", command: "kubectl logs <pod-name>" },
                { title: "📡 Stream Logs Continuously", command: "kubectl logs -f <pod-name>" },
                { title: "⚙️ View Logs of All Pods in a Namespace", command: "kubectl logs --all-containers --namespace=<namespace>" },
                { title: "🚀 Describe Events", command: "kubectl describe pod <pod-name>" },
                { title: "🔍 View Node Monitoring", command: "kubectl top node" },
                { title: "📡 View Pod Monitoring", command: "kubectl top pod" }
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
          <GradientCard title="📌 Monitoring Tools">
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li><strong>Prometheus:</strong> Metrics collection and monitoring.</li>
              <li><strong>Grafana:</strong> Visualization of Prometheus metrics.</li>
              <li><strong>ELK Stack:</strong> Centralized log management.</li>
              <li><strong>Fluentd:</strong> Log collector for distributed systems.</li>
            </ul>
          </GradientCard>
          <GradientCard title="🔄 Logs & Monitoring Live Demo">
            <MonitoringDemo />
          </GradientCard>
        </main>
        <Footer />
      </div>
    </div>
  );
}
