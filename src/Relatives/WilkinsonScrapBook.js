import React from 'react';
import '../App.css';
import InfoSection from '../Components/InfoSection'



function WilkinsonScrapBook() {
  return (
    <>
    <div className="cards"> 
    
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
    <li className='cards__item'> 
  <InfoSection label='Recipies' />
  </li>  
  </div>
    </div>
    
    </div>
    </>
  );
}

export default WilkinsonScrapBook;