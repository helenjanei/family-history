import React from 'react';
import '../../App.css'
import IntroSection from '../../Components/IntroSection'
import BirthSection from '../../Components/BirthSection'
import CensusSection from '../../Components/CensusSection'
import MarriageSection from '../../Components/MarriageSection'
import InfoSection from '../../Components/InfoSection'
import DeathSection from '../../Components/DeathSection'
import Button from '../../Components/Button'
import birthRecord from '../../Assets/SDudman/birthRecord.png'
import birthPic from '../../Assets/SDudman/birthPic.jpg'

import familyTree from '../../Assets/HSolomon/familyTree.png'
import marriageRecord from '../../Assets/HSolomon/marriageRecord.png'
import birthPic3 from '../../Assets/SSolomon/birthPic.jpg'
import birthPic4 from '../../Assets/SSolomon/birthPic2.jpg'

import census1841 from '../../Assets/HSolomon/1841census.png'
import censusMap1841 from '../../Assets/HSolomon/1841censusMap.png'
import takingTheCensus from '../../Assets/SDudman/taking-the-census-mary-evans-picture-library.jpg'
import deathImage from '../../Assets/SDudman/the-london-bridge-coach-at-cheapside-william-de-long-turner.jpg'

function SDPersonMaster() {

  
const relatives1841 = ['Myself, 70, Tailor', 'My daughter Susannah Marten(?), 25', "My daughter Anne, 18", "Elizabeth Solomon, 86", "Henry Moore, 25, Clerk", "J George 25, clerk", "Sophia George, 20", "Sophie George, 4", "Edmund George, 3", "George ?, 24", "Robert July(?), 48"]



  return (
  <div className="cards"> 
    <h1> Susannah Maria Solomon  </h1>
  <h2>nee Dudman</h2>
    <h4> 1767 - 1865 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Susannah and I am your great-great-great-great-great-grandmother' src={familyTree} url={familyTree}/>


            <BirthSection url="" text="I was born on the 25th October, 1767 in Piccadilly, London" text2="I was christened on the 17th November 1767 at St James' Church, Piccadilly." 
         
         src={birthRecord}
            label='Birth'
            url={birthRecord}
            
            src2={birthPic}
           url2="https://www.sjp.org.uk/historybuilding.html"
            text4="My father was William Dudman, 24, and my mother was Elizabeth nee Brown, 19."
          text5="I was my parent's second child of 4, all girls. "
         
            label2='Birth'
            />
          </li>
    

          <li className='cards__item'>
            <MarriageSection  url={marriageRecord} label='Marriage' src={marriageRecord} 
             text="I married Henry Solomon, 24, on the 17th September 1795, at St George, Hanover Square, London."
             text2="I was aged 27."
        />

           <BirthSection url="" text="Between 1796 and 1811 we had 6 children, three girls and two boys." 
            src={birthPic4}
            label='Children'
            
            url2='https://en.wikipedia.org/wiki/St_Clement_Danes'
            text4="The majority of the children were christened at St Clement Danes, the Strand, London."
            
            label2='Children'
            src2={birthPic3}
            />  
            </li>

<li className='cards__item'> 
<CensusSection 
           label='1841 Census'
            text="In 1841 I was aged 70 and I am living at number 5 Stanhope Street, Kings Cross, London (possibly! - and this is possibly the correct Stanhope street)" 
           url="https://www.google.com/maps/place/5+Stanhope+St,+Kings+Cross,+London+NW1+3RD/@51.5303819,-0.1407573,17z/data=!4m13!1m7!3m6!1s0x48761ad8aa675907:0x3f69adfb49aa707c!2s5+Stanhope+St,+Kings+Cross,+London+NW1+3RD!3b1!8m2!3d51.5304446!4d-0.1411814!3m4!1s0x48761ad8aa675907:0x3f69adfb49aa707c!8m2!3d51.5304446!4d-0.1411814"
           src={censusMap1841}

           label2='Who did I live with?'
           src2={census1841}
           url2={census1841}
          
           relatives={relatives1841}
           />
 <InfoSection label="1851/61 Census'" text='Although I am still alive, I have not yet been found on the 1851 or 1861 census.' src={takingTheCensus} url='https://fineartamerica.com/featured/taking-the-census-mary-evans-picture-library.html'/>
 <DeathSection  url={deathImage} label='Death' src={deathImage} text='There are the deaths of two different Susannah Solomon registered in London after 1841. One is for 1867 and the other 1865, which would have made me 98 or 100 respectively.' text2="More likely I have died prior to the 1851 census and a record cannot be found."
 />
</li>



  <Button classname='btns'/>
    </div>
    </div>
    
    </div>

  );
}


export default SDPersonMaster;