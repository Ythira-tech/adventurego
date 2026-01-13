import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Safaris from './pages/Safaris';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Register from './pages/Register';
import Footer from './components/Footer';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/safaris" element={<Safaris />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;