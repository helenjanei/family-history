	import React from 'react';
import '../App.css'
import ResourcesSection from '../Components/ResourcesSection'
import Birkenhead from '../Assets/BAMarten/birkenhead.png'
import Brighton from '../Assets/JMarten/brighton.png'

function MartenResources() {





  return (
  <div className="cards"> 
    <h1> Marten Resources </h1>
   
  
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <ResourcesSection label='Liverpool'   text="'Birkenhead' by Birkenhead Borough Council, 1969" link='https://archive.org/details/Birkenhead/Birkenhead%20small'
            
            text2="'Report on the Sanitary Condition of the borough of Birkenhead for the year 1881'" link2='https://archive.org/details/b24915233/mode/2up'
            
            src={Birkenhead}
            text3="'History of the commerce and town of Liverpool, and of the rise of manufacturing industry in the adjoining counties' by Thomas Baines, 1852" link3='https://archive.org/details/b24915233/mode/2up'
            
            />


            <ResourcesSection  label='Brighton'   text="'A short History of Brighthelmston, with remarks on it's air, and an analysis of its waters, particularly of an uncommon mineral one long discovered, though but lately used.' by Anthony Relhan, MD, 1829 edition of the 1761 original." link='https://archive.org/details/b29319717/page/n11/mode/2up' src={Brighton}/>
</li>
    
         
    </div>
    </div>
    
    </div>

  );
}


export default MartenResources;