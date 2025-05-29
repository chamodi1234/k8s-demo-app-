import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/login';
import RegisterPage from './components/register';
import Dashboard from './pages/Dashboard';
import Autoscaling from './pages/Autoscaling';
import LogsMonitoring from './pages/LogsMonitoring';
import CICD from './pages/CICD';
import SelfHealing from './pages/SelfHealing';
import LoadBalancing from './pages/LoadBalancing';


import './App.css';



function App() {

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/autoscaling" element={<Autoscaling />} />
        <Route path="/logs-monitoring" element={<LogsMonitoring />} />
        <Route path="/cicd" element={<CICD />} />
        <Route path="/load-balancing" element={<LoadBalancing />} />
        <Route path="/self-healing" element={<SelfHealing />} />
        
       
      </Routes>
    </Router>
  );
}



export default App;
