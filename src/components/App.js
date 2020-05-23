import React from 'react';
import { Route } from 'react-router-dom';
import '../css/reset.css';
import NavBar from './NavBar';

// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => (
  <div className="container">
    <div>
      <NavBar />
      <div className="container">
        <Route exact={true} path="/" component={Home} />
        <Route exaxt path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </div>
    );
  </div>
);

export default App;
