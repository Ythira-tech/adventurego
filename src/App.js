import React, { useEffect }  from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
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
      <Home />
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