import React from 'react';
import plantImage from '../images/planting.svg';
import barrow from '../images/barrow.svg';
import infoImage from '../images/question.svg';

const AboutUs = () => (
  <div className="about-container">
    <div className="about-header">
      <h2 className='about-header-text'>About Us</h2>
      <p className='about-header-paragraph'>Loreum ipsum fjk,hfbhj  fbgbfhf hfdvsh ghdfgbvfdh 
        hfdnb djhgbfd hjngbdhj ndfbjdh hdfb jdn
      </p>
    </div>
    <div className="about-card-section">
      <div className="about-cards">
        <div className="card">
          <img src={plantImage} alt='planting-icon'/>
          <h2 className="card-header-text"> My Good Friend</h2>
          <p>Some little details you dont know about me. </p>
        </div>
        <div className="card">
          <img src={barrow} alt='watering-can-icon'/>
          <h2 className="card-header-text"> My Good Friend</h2>
          <p>Some little details you dont know about me. </p>
        </div>
        <div className="card">
          <img src={infoImage} alt='information-icon' />
          <h2 className="card-header-text"> My Good Friend</h2>
          <p>Some little details you dont know about me. </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
