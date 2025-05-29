import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import CICDLiveDemo from '../components/CICDLiveDemo';  // Import the CICDLiveDemo component
import { FaGithub, FaJenkins, FaGitlab, FaDocker } from 'react-icons/fa'; // Import icons

const GradientCard = ({ title, children }) => (
  <div className="p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl shadow-lg mb-6">
    <div className="bg-gray-800 p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  </div>
);

export default function CICDPage() {
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
          <GradientCard title="🔄 CI/CD (Continuous Integration & Continuous Deployment)">
            <p className="text-gray-300">
              <strong>CI/CD</strong> automates the process of building, testing, and deploying applications. Integrating <strong>CI/CD</strong> with Kubernetes enables rapid, stable releases.
            </p>
          </GradientCard>
          <GradientCard title="🛠️ CI/CD Tools">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <FaGithub size={40} className="text-gray-300 mb-2" />
                <span className="text-gray-300">GitHub Actions</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJenkins size={40} className="text-gray-300 mb-2" />
                <span className="text-gray-300">Jenkins</span>
              </div>
              <div className="flex flex-col items-center">
                <FaGitlab size={40} className="text-gray-300 mb-2" />
                <span className="text-gray-300">GitLab CI</span>
              </div>
              <div className="flex flex-col items-center">
                <FaDocker size={40} className="text-gray-300 mb-2" />
                <span className="text-gray-300">Docker</span>
              </div>
            </div>
          </GradientCard>
          
          {/* Embed the CICDLiveDemo component here */}
          <CICDLiveDemo />  {/* This will show the live demo below the tools section */}
          
        </main>
        <Footer />
      </div>
    </div>
  );
}
