import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Safaris from './pages/Safaris';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Register from './pages/Register';

import UgandaDestinations from './pages/UgandaDestinations';
import KenyaDestinations from './pages/KenyaDestinations';
import TanzaniaDestinations from './pages/TanzaniaDestinations';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import WhyChooseUs from './pages/WhyChooseUs';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

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
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/register" element={<Register />} />

  <Route path="/destinations/uganda" element={<UgandaDestinations />} />
  <Route path="/destinations/kenya" element={<KenyaDestinations />} />
  <Route path="/destinations/tanzania" element={<TanzaniaDestinations />} />

  <Route path="/about" element={<AboutUs />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/why-choose-us" element={<WhyChooseUs />} />
  <Route path="/privacy" element={<Privacy />} />
  <Route path="/terms" element={<Terms />} />
      </Routes>
      
    </div>
  );
}

export default App;