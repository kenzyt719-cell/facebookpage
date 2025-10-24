import React from 'react';
import './Nav.css';
import Imgface from '../assets/logoface.png';
import Imghome from '../assets/homenav.png';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <img className="logo" src={Imgface} alt="logo" />

        <div className="nav-links">
          <img className="nav-icon" src={Imghome} alt="Home" />
          <img className="nav-icon" src={Imghome} alt="Home" />
          <img className="nav-icon" src={Imghome} alt="Home" />
          <img className="nav-icon" src={Imghome} alt="Home" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;