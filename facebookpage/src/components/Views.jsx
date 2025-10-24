import React from 'react';
import "./Views.css";
import View from '../assets/view.png';
import person2 from '../assets/person2.png';

const Views = () => {
  return (
    <div className='mian'>
      <div className='divdisplay'>
       
        <img className='' src={person2} alt="person2" />
        <div>
        <h1 className='teextname' >Albert Flores</h1>
        <h1 className='teextname' > 2. d</h1>


        </div>
        <h1 className='teextname2' >. . . </h1>

          </div>
        <img className='photo'  src={View } alt="wow" />


     
    
    </div>
  );
};

export default Views;