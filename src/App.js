import React, { useEffect }  from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WhyChooseUs from './components/WhyChooseUs';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import PopularActivities from './components/PopularActivities';
import TopDestinations from './components/TopDestinations';

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
      <WhyChooseUs />
      <PopularActivities />
      <TopDestinations />
      {/* Other pages/components will be added here */}
    </div>
  );
}

export default App;