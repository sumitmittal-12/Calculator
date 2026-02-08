import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './components/Home';
import CarbonEmission from './components/CarbonEmission';
import Fuel from './components/Fuel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carbonEmission" element={<CarbonEmission />} />
        <Route path="/fuel" element={<Fuel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
