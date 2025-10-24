import React, { Component } from 'react';

import "./Middlephotodiv.css"
import Imgthree from '../assets/imgmiddle.png';
import Imggprofilesmall from '../assets/islampic.png';





const Middlephotodiv = () => {
    return ( 
        <div>
                <div className='bgmiddle'> 
              <img className='middleimg' src={Imgthree} alt="middleimg" />
                  <div className='islamdiv'>
              <img  src={Imggprofilesmall} alt="imgprof" />
              <h1 className='islamtext'>Islam Ali</h1>

         </div>
            
            
        </div> 

     
   

        </div>
    


     



        
     );
}
 
export default Middlephotodiv;