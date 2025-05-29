import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { SidebarProvider } from './components/SidebarContext'; // Import the provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarProvider>  {/* Provide context to the app */}
      <App />
    </SidebarProvider>
  </StrictMode>
);

