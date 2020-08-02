import React from 'react';
// import { Route } from 'react-router-dom';
import '../css/reset.css';
import '../css/global.css';
import NavBar from './NavBar';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Footer from './Footer';

// PAGES
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

const App = () => (
  <div className="main-container">
    <NavBar />
    <Hero />
    <AboutUs />
    <Footer />
  </div>
);

export default App;
