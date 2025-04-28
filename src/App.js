import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeartHealthPage from './pages/HeartHealthPage';
import Questionnaire from './pages/Questionnaire';
import './styles/HomePage.css';
import './styles/Questionnaire.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeartHealthPage />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </Router>
  );
}

export default App;
