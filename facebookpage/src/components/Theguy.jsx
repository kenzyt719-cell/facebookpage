import React, { Component } from 'react';
import "./Theguy.css";
import photo from '../assets/theguy.png';



const Theguy = () => {
    return ( 
        
<div className='theguydiv'>
    <div className='firstdiv'>
        <img className='recimg' src={photo} alt="photo" />
         <h1 className='giytext'>Guy Hawkins</h1>
         <h1 className='fourh'>4h</h1>

    </div>
    <div className='diplayy'>
        <div className='divcofirm'>
            <h1 className='Confirm'>Confirm</h1>
        </div>
          <div className='divDelete'>
            <h1 className='Delete'>Delete</h1>
        </div> 

    </div>
       
</div>
     );
}
 
export default Theguy;