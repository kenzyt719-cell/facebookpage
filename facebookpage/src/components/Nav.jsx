import React, { Component } from 'react';
import "./Nav.css"
import Imgface from '../assets/logoface.png';
import Imghome from '../assets/homenav.png';


const Nav = () => {
    return ( 
      <div className='nav'>
        

        
        <div className='allhomes'>
        <img className='face' src={Imgface} alt="face" />

        <img className='home' src={Imghome} alt="home" />
        <img className='home' src={Imghome} alt="home" />
        <img className='home' src={Imghome} alt="home" />
        <img className='home' src={Imghome} alt="home" />

        </div>
      
        


      </div>




        
     );
}
 
export default Nav;