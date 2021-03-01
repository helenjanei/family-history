import React from 'react';
import '../App.css'
import IntroSection from '../Components/IntroSection'
import BirthSection from '../Components/BirthSection'
import CensusSection from '../Components/CensusSection'
import MarriageSection from '../Components/MarriageSection'
import DeathSection from '../Components/DeathSection'
import LifeSummarySection from '../Components/LifeSummarySection'
import InfoSection from '../Components/InfoSection'
import Button from '../Components/Button'
import familyTree from '../Assets/JMarten/familyTree.png'
import birthPic from '../Assets/JMarten/birthPic.jpg'
import birthPic2 from '../Assets/JMarten/birthPic2.jpg'





import birthMap from '../Assets/RMarten/birthMap.png'
import cityDirectory1839 from '../Assets/RMarten/1839directory.png'
import birthCert from '../Assets/TJMarten/birthCirt.png'
import census1851 from '../Assets/TJMarten/1851Census.png'
import censusMap1851 from '../Assets/TJMarten/1851censusMap.png'
import weddingMap from '../Assets/SSolomon/weddingMap.png'
import censusPic1871 from '../Assets/SSolomon/1871pic.jpg'
import censusHouse1861 from '../Assets/TJMarten/1861CensusHouse.png'
import census1861 from '../Assets/TJMarten/1861Census1.png'
import census1871 from '../Assets/TJMarten/1871Census.png'
import marriage1873 from '../Assets/TJMarten/1873MarriageChurch.jpg'
import census1881 from '../Assets/TJMarten/1881Census.png'
import censusHouse1881 from '../Assets/SSolomon/1881censusHouse.png'
import deathRichard from '../Assets/SSolomon/deathRichard.jpeg'


// Need to find proof as to who is Richard Marten's parents!



function JMPersonMaster() {

const relatives1851 = ['Myself, head, 35, a shoe maker', 'My wife Susannah 35, a dressmaker', 'My oldest son Alfred, 8, scholar', 'Thomas John, 6, Scholar', 'My youngest son Walter, 4', 'My youngest child Mary, 2.']



  return (
  <div className="cards"> 
    <h1> John Marten </h1>
    <h4> 1780-1849 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is John and I am your great-great-great-great-great-grandfather' src={familyTree} url={familyTree}/>


            <BirthSection url="https://www.google.com/maps/place/All+Saints+Centre/@50.8466553,-0.044286,11.92z/data=!4m5!3m4!1s0x47df6290c8e79b21:0x255f47bcc3a90b9d!8m2!3d50.8724212!4d0.0135704" text="I was born 1780, and baptised on the 13th August 1780 at All Saints church, Lewes, Sussex." 
            src={birthPic}
            label='Birth'
          
     
            text4="My father was Thomas Marten, and my mother was Ann, nee Harland."
            text5="I was the 6th of my parents 8 children. They had 5 boys and 3 girls between the years 1770 and 1783."
          url2="https://en.wikipedia.org/wiki/Lewes"
            label2='Birth'
            src2={birthPic2}
            />
          </li>
    
          <li className='cards__item'> 
  
   <MarriageSection  url='' label='Marriage' src={marriage1873} //change when wedding cirt for SS comes in
             text="On the 28th June 1800, at the age of 21 I married Sarah Cox, , in Brighton, Sussex."
        /> 
       

</li>

            <li className='cards__item'> 
            
          </li>
 
<li className='cards__item'> 

 <DeathSection  url='https://en.wikipedia.org/wiki/Portmanteau_(luggage)' label='Death' src={deathRichard} text='I died in April 1884, at the age of 68.' />
</li>



  <Button classname='btns'/>
    </div>
    </div>
    
    </div>

  );
}


export default JMPersonMaster;