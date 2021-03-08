import React from 'react';
import '../App.css';
import InfoSection from '../Components/InfoSection'



function WilkinsonMemories() {
  return (
    <>
    <div className="cards"> 
     <h2> Wilkinson Memories </h2>
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
    <li className='cards__item'> 
  <InfoSection label='Memories' />  <InfoSection label='Memories' />  <InfoSection label='Memories' />
  </li>  
  </div>
    </div>
    
    </div>
    </>
  );
}

export default WilkinsonMemories;