import React from 'react';
import "./Home.css";
import Nav from '../components/Nav'; 
import Watch from '../components/Watch'; 

import Button from '../components/Button'; 
import Imgone from '../assets/watcch.png';
import Imgtwo from '../assets/recuxui.png';
import Middlephotodiv from '../components/Middlephotodiv';





const Home = () => {
  return (
    <div>
      <Nav />
      <div className='leftboxhome' >

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
        <div className='texttt2'>
  <img className='recimg' src={Imgtwo} alt="uxui" />
<h1 className='uxuitext'>UI / UX Designers & Developers</h1>

        </div>
          <div className='texttt2'>
  <img className='recimg' src={Imgtwo} alt="uxui" />
<h1 className='uxuitext'>UI / UX Designers & Developers</h1>

        </div>
          <div className='texttt2'>
  <img className='recimg' src={Imgtwo} alt="uxui" />
<h1 className='uxuitext'>UI / UX Designers & Developers</h1>

        </div>
          <div className='texttt2'>
  <img className='recimg' src={Imgtwo} alt="uxui" />
<h1 className='uxuitext'>UI / UX Designers & Developers</h1>

        </div>
          <div className='texttt2'>
  <img className='recimg' src={Imgtwo} alt="uxui" />
<h1 className='uxuitext'>UI / UX Designers & Developers</h1>

        </div>
          <div className='texttt2'>
  <img className='recimg' src={Imgtwo} alt="uxui" />
<h1 className='uxuitext'>UI / UX Designers & Developers</h1>

        </div>
          <div className='texttt2'>
  <img className='recimg' src={Imgtwo} alt="uxui" />
<h1 className='uxuitext'>UI / UX Designers & Developers</h1>

        </div>
        
   
      

      </div>
      </div> 
      <div className='middle'>
     <Middlephotodiv/>
     <Middlephotodiv/>

     <Middlephotodiv/>
     <Middlephotodiv/>


      </div>


      
















    </div>
   
   
  );
};

export default Home;