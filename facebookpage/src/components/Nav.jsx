import React from 'react';
import './Nav.css';
import Imgface from '../assets/logoface.png';
import Imghome from '../assets/homenav.png';

const Nav = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <img className="logo" src={Imgface} alt="Facebook logo" />
        </div>

        <div className="header-center">
          <img className="nav-icon" src={Imghome} alt="Home" />
          <img className="nav-icon" src={Imghome} alt="Home" />
          <img className="nav-icon" src={Imghome} alt="Home" />
          <img className="nav-icon" src={Imghome} alt="Home" />
        </div>

        <div className="header-right"></div>
      </div>
    </header>
  );
};

export default Nav;