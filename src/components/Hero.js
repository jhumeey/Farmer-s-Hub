import React from 'react';
import heroImage from '../images/gardening.jpg';

const Hero = () => (
  <div className="hero-container">
    <div className="hero-header">
      <h1 className="hero-header-text">A step to sustainable agriculture.</h1>
      <p className="hero-header-paragraph"> Collaborating with farmers to end world `&apos;`,s hunger. </p>
      <button className="hero-header-button primary-btn btn">
        {' '}
        <a href="/">Get Started </a>{' '}
      </button>
    </div>

    <div className="hero-header-image">
      <img src={heroImage} alt="hero" />
    </div>
  </div>
);

export default Hero;
