import React, { Component } from 'react';
import "./Last.css"
import lastpic from '../assets/lastpic.png';

const Last = () => {
    return (
        <div  className='displayyy'>
           <img className='' src={lastpic} alt="lastpic" />
           <div className='lastdiv'>
            <h1 className='hhh1'>Twitch apologises as streamers</h1>
            <h1  className='hhh2'>Twitch has apologised, after a backlash over new,<br />
advertising rules.</h1>
            <h1  className='hhh3'>See more</h1>
           </div>

        </div>
      );
}
 
export default Last;