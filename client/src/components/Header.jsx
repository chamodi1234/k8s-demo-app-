import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSidebar } from "../components/SidebarContext"; // Import the context

export default function Header({ isAuthenticated, logout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isSidebarOpen, toggleSidebar } = useSidebar(); // Get sidebar state from context

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout(); // Assume you have a logout function that handles authentication state change
  };

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Menu Icon for toggling the sidebar */}
        {!isSidebarOpen && (
          <div
            onClick={toggleSidebar}
            className="text-white p-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
        )}

        <h1 className="text-2xl font-bold">🚀 Kubernetes</h1>

        {/* Conditional rendering for Login button or User icon */}
        {location.pathname === "/" && !isAuthenticated ? (
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </Link>
        ) : (
          <div className="relative">
            <FontAwesomeIcon
              icon={faUserCircle}
              size="2x"
              className="cursor-pointer"
              onClick={handleToggleMenu}
            />
            {isMenuOpen && (
              <div className="absolute right-0 bg-gray-800 text-white p-2 rounded-md shadow-lg mt-2">
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-700"
                >
                  Logout
                </button>
                <Link
                  to="/settings"
                  className="block px-4 py-2 w-full text-left hover:bg-gray-700"
                >
                  Settings
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
