import React from 'react';
import "./Home.css";
import Nav from '../components/Nav'; 
import Button from '../components/Button'; 
import Imgone from '../assets/watcch.png';
import Imgtwo from '../assets/recuxui.png';





const Home = () => {
  return (
    <div>
      <Nav />
      <div className='leftboxhome' >

     <Button/>
     <div className='imgwqatch'>

  <img className='watchiomgsize' src={Imgone} alt="Watch" />
        <h1 className="watchtext">Watch</h1>
     </div>


       <div className='imgwqatch topmarg'>

  <img className='watchiomgsize' src={Imgone} alt="Watch" />
        <h1 className="watchtext">Watch</h1>
     </div>

       <div className='imgwqatch'>

  <img className='watchiomgsize' src={Imgone} alt="Watch" />
        <h1 className="watchtext">Watch</h1>
     </div>

       <div className='imgwqatch'>

  <img className='watchiomgsize' src={Imgone} alt="Watch" />
        <h1 className="watchtext">Watch</h1>
     </div>

       <div className='imgwqatch'>

  <img className='watchiomgsize' src={Imgone} alt="Watch" />
        <h1 className="watchtext">Watch</h1>
     </div>
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

     

      
















    </div>
   
   
  );
};

export default Home;