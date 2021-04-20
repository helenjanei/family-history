import React from 'react';
import '../App.css';
import LinkSection from '../Components/LinkSection'
import wilkinsonPic from '../Assets/wilkinson.jpg'
import inghamPic from '../Assets/55RawsonStreet.png'


function Home() {
  return (
    <>
    <div className="cards"> 
    
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
    <li className='cards__item'> 
  <LinkSection label="Ingham" src={inghamPic} to='/Ingham'/>
  <LinkSection label="Wilkinson" src={wilkinsonPic} to='/Wilkinson'/>
  </li>  
  </div>
    </div>
    
    </div>
    </>
  );
}

export default Home;