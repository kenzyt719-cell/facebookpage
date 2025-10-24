import React from 'react';
import "./Home.css";
import Nav from '../components/Nav'; 
import Whatsonyourmind from '../components/Whatsonyourmind'; 
import Views from '../components/Views'; 
import Viewsagain from '../components/Viewsagain'; 
import Theguy from '../components/Theguy'; 
import Last from '../components/Last'; 



import Watch from '../components/Watch'; 
import Imgone from '../assets/watcch.png';
import Button from '../components/Button'; 
import Imgtwo from '../assets/recuxui.png';
import Middlephotodiv from '../components/Middlephotodiv';
import Uxui from '../components/Uxui'; 



const Home = () => {
  return (
   
        
    <div>

  <Nav/>
      

      <div className='threedivs'>

   
         <div className='leftboxhome'>

      <div  >

     <Button/>
    
     <Watch/>
     <Watch/>
     <Watch/>
     <Watch/>
     <Watch/>

     

      

       
       
      <div>
        <div className='texttt'>
            <h1 className='titetext'> title</h1>
            <h1 className='sealltext'> see all</h1>
        </div>
        <Uxui/>
        <Uxui/>
         <Uxui/>
         <Uxui/>
         <Uxui/>
         <Uxui/>
        
        
          
        
         
        
   
      

      </div>
      </div> 



    
      </div>





      <div >
        <div className='middlesdipaly'>

     <Middlephotodiv/>
     <Middlephotodiv/>

     <Middlephotodiv/>
     <Middlephotodiv/>


        </div>
        <div>
          <Whatsonyourmind/>
        </div>


       <Views/>
        
      </div>
  <div >
   <Viewsagain   />
   <div>
    <Theguy/>
    <Theguy/>
    <div className='toppp' >
   <Viewsagain/>

    </div>
    <Last/>
    <Last/>
    <Last/>
    
    <Last/>
    <Last/>
    <Last/>
  

   </div>
  </div>
      











   </div>




    </div>
   
   
  );
};

export default Home;