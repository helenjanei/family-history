import React from 'react';
import '../App.css';
import LinkSection from '../Components/LinkSection'
import wilkinsonPic from '../Assets/wilkinson.jpg'



function Home() {
  return (
    <>
    <div className="cards"> 
    
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
    <li className='cards__item'> 
  <LinkSection label="Ingham" text2="" to='/Ingham'/>
  <LinkSection label="Wilkinson" src={wilkinsonPic} to='/Wilkinson'/>
  </li>  
  </div>
    </div>
    
    </div>
    </>
  );
}

export default Home;