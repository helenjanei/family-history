import React from 'react';
import '../App.css';
import InfoSection from '../Components/InfoSection'
import LinkSection from '../Components/LinkSection'
import birthPic from '../Assets/TPollard/birthPic.jpg'

function Ingham() {
  return (
    <>
    
    <div className="cards"> 
    <h1> Stuart and Anthony  </h1>
  
    <h2> Ingham </h2>
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
 <li className='cards__item'> 

<InfoSection label='Edward '   />
<InfoSection label='Dorothy Mary'/>

</li>
    <li className='cards__item'> 
  <LinkSection label="Ingham" to='/InghamLine'/>
  <LinkSection label="Mathews" to='/Mathews'/>
  <LinkSection label="Pollard" to='/Pollard' src={birthPic}/>
  <LinkSection label="Eckersley" to='/Eckersley'/>
  </li>
    </div>
    </div>
    
    </div>
    </>
  );
}

export default Ingham;