import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Index from './components/index';
import Contato from './components/Contato';
import SobreNos from './components/SobreNos';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobrenos" element={<SobreNos />} />
      </Routes>
    </Router>
  );
}

export default App;