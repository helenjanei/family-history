	import React from 'react';
import '../App.css'
import IntroSection from '../Components/IntroSection'
import BirthSection from '../Components/BirthSection'

import DeathSection from '../Components/DeathSection'
import InfoSection from '../Components/InfoSection'
import Button from '../Components/Button'
import birthMap from '../Assets/JMcNaughtSr/rerrickVillage.png'
import familyTree from '../Assets/JMcNaughtSr/familyTree.png'
import marriagePic from '../Assets/JMcNaughtSr/marriagePic.jpg'

import deathPic from '../Assets/JMcNaughtSr/deathPic.jpg'
import childrenMap from '../Assets/JMcNaughtSr/childrenMap.png'


function MMcJPersonMaster() {
const relatives1851 = ["Myself, 55, Blacksmith", "My daughter Margaret, 25", "Marion, 21", "Mary, 18", "Robert, 12", "Elizabeth Williams 2", "John Wilson 3 months" ]




  return (
 <>   <div className="title">
 
    <h1> Marion McJannet </h1>
   
    <h4> 1799-1851 </h4> 
    </div>
  <div className="cards"> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Marion and I am your great-great-great-great-great-grandmother' src={familyTree} url={familyTree}/>


            <BirthSection url="" text="I was born in the villiage of Rerrick, Kirkcudbright, Scotland in 1799." 
            src={birthMap}
            label='Birth'       
       text2="My parents were John Mcjannet and Jannet nee Cavet."
           
          src2={marriagePic}
            label2="Marriage"
          text4="I married John McNaught at some point, possibly, or perhaps we never married."
          text5="My maiden name appears on our children's baptism records."  />
</li>
    
          <li className='cards__item'> 
<InfoSection label="Birth" text="Our eight children were born between 1822 and 1838." text2="They are recorded as being baptised/born in a number of different place names in and around Kirkcudbrightshire, for example: Rerrick, Kelton, Balmaghie and Kirkmabreck." src={childrenMap} url="https://maps.nls.uk/geo/explore/side-by-side/#zoom=10&lat=54.98747&lon=-3.98118&layers=125140579&right=BingHyb"/>
          
            
            
            
            
          

  <DeathSection  url="https://www.visitscotland.com/info/towns-villages/kirkcudbright-p239251" label='Death' src={deathPic} text='I lived to age 52, and died some time before the census in 1851.' 

   />
            
            </li>
           


    </div>
    </div>
    
    </div>
</>
  );
}


export default MMcJPersonMaster;