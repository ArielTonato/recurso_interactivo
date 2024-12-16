import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Introduction from './pages/Introduction';
import ContinuousIntegration from './pages/ContinuousIntegration';
import ContinuousDelivery from './pages/ContinuousDelivery';
import ContinuousDeployment from './pages/ContinuousDeployment';
import Security from './pages/Security';
import Tools from './pages/Tools';
import Questionary from './pages/Questionary';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/ci" element={<ContinuousIntegration />} />
          <Route path="/cd" element={<ContinuousDelivery />} />
          <Route path="/deployment" element={<ContinuousDeployment />} />
          <Route path="/security" element={<Security />} />
          <Route path="/tools" element={<Tools />} />
          <Route path='/questionary' element={<Questionary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;