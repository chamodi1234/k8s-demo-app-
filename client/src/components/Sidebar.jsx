import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "./SidebarContext"; // Import the context
import { useEffect, useRef } from "react";

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar(); // Get sidebar state from context
  const location = useLocation(); // Get the current location
  const sidebarRef = useRef(null);

  // Function to check if the current link is active
  const isActive = (path) => location.pathname === path;

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        toggleSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, toggleSidebar]);

  return (
    <div
      ref={sidebarRef}
      className={`bg-gray-800 text-white w-64 p-4 transition-all duration-300 ${
        isSidebarOpen ? "block" : "hidden"
      } relative`}
    >
      {/* Close button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-2 right-2 text-white text-2xl"
      >
        &times;
      </button>

      <div className="flex items-center space-x-2 mb-6">
        <h2 className="text-xl font-bold">Features</h2>
      </div>

      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className={`block py-2 ${
                isActive("/") ? "text-blue-400" : "hover:text-blue-400"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/autoscaling"
              className={`block py-2 ${
                isActive("/autoscaling")
                  ? "text-blue-400"
                  : "hover:text-blue-400"
              }`}
            >
              Auto Scaling
            </Link>
          </li>
          <li>
            <Link
              to="/logs-monitoring"
              className={`block py-2 ${
                isActive("/logs-monitoring")
                  ? "text-blue-400"
                  : "hover:text-blue-400"
              }`}
            >
              Resource Monitoring and Logging
            </Link>
          </li>
          <li>
            <Link
              to="/self-healing"
              className={`block py-2 ${
                isActive("/self-healing")
                  ? "text-blue-400"
                  : "hover:text-blue-400"
              }`}
            >
              Self-Healing
            </Link>
          </li>
          <li>
            <Link
              to="/load-balancing"
              className={`block py-2 ${
                isActive("/load-balancing")
                  ? "text-blue-400"
                  : "hover:text-blue-400"
              }`}
            >
              Load Balancing
            </Link>
          </li>
          <li>
            <Link
              to="/cicd"
              className={`block py-2 ${
                isActive("/cicd") ? "text-blue-400" : "hover:text-blue-400"
              }`}
            >
              CI/CD
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
