import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Facilities from './pages/Facilities';
import Admissions from './pages/Admissions';
import Events from './pages/Events';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full">
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Page Content Area */}
        <main className="flex-1 flex flex-col justify-start w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        
        {/* Footer Design containing location map */}
        <Footer />
      </div>
    </Router>
  );
}
