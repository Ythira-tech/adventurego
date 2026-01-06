import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Safaris from './pages/Safaris';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Register from './pages/Register';
import WhyChooseUs from './components/WhyChooseUs';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import PopularActivities from './components/PopularActivities';
import TopDestinations from './components/TopDestinations';
import AlphaWolves from './components/AlphaWolves';
import UpcomingEvents from './components/UpcomingEvents';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

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

      <UpcomingEvents />
      <TopDestinations />
      <PopularActivities />
      <WhyChooseUs />
      <AlphaWolves />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;