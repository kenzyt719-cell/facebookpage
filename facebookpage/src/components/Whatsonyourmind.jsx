import React, { Component } from 'react';
import "./Whatsonyourmind.css"
import Imggprofilesmall from '../assets/islampic.png';
import cam from '../assets/cam.png';
import happy from '../assets/happy.png';

import photo from '../assets/photo.png';




const Whatsonyourmind = () => {
    return ( 
        
     <div className='maindiv'>

        <div className='displayjenny'>

    
               <img className='imgjenny' src={Imggprofilesmall} alt="imgprof" />
              <div className='textwhats'>
                <h1 className='jennytext'>What’s on your mind, Jenny</h1>

              </div>

         


    </div>
         <hr />
         <div className='displayjenny3'>
            

             <div className='displayjenny2'>
         <img  src={cam} alt="cam" />
         <h1 className='livetext'>Live Video</h1>

         </div>


 <div className='displayjenny2'>
         <img  src={photo} alt="photo" />
         <h1 className='livetext'>Live Video</h1>

         </div>


 <div className='displayjenny2'>
         <img  src={happy} alt="happy" />
         <h1 className='livetext'>Live Video</h1>

         </div>


         </div>
        



     </div>


    );
}
 
export default Whatsonyourmind;