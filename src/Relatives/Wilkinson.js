import React from 'react';
import '../App.css';
import InfoSection from '../Components/InfoSection'
import LinkSection from '../Components/LinkSection'


function Wilkinson() {
  return (
    <>
    
    <div className="cards"> 
    <h2> Jane Stella, Donald Marten, and Roger Hollins </h2>
  
    <h1> Wilkinson </h1>
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
 <li className='cards__item'> 

<InfoSection label='Donald '   />
<InfoSection label='Elsie Iris'/>

</li>
    <li className='cards__item'> 
  <LinkSection label="Wilkinson" to='/WilkinsonLine'/>
  <LinkSection label="Marten" to='/Marten'/>
  <LinkSection label="Hollins" to='/Hollins'/>
  <LinkSection label="Dakin" to='/Dakin'/>
  </li> 
    <li className='cards__item'> 

  <LinkSection label="Family Memories" to='/WilkinsonMemories'/>
  <LinkSection label="Family Cook book" to='/WilkinsonRecipes'/>
</li>
    </div>
    </div>
    
    </div>
    </>
  );
}

export default Wilkinson;