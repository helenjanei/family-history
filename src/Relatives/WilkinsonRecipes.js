import React from 'react';
import '../App.css';
import InfoSection from '../Components/InfoSection'



function WilkinsonRecipes() {
  return (
    <>
    <div className="cards"> 
    <h2> Wilkinson Cookbook </h2>
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
    <li className='cards__item'> 
  <InfoSection label='Recipies' /> <InfoSection label='Memories' />  <InfoSection label='Memories' /> 
  </li>  
  </div>
    </div>
    
    </div>
    </>
  );
}

export default WilkinsonRecipes;