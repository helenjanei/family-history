	import React from 'react';
import '../../App.css'
import IntroSection from '../../Components/IntroSection'
import BirthSection from '../../Components/BirthSection'
import CensusSection from '../../Components/CensusSection'
import DeathSection from '../../Components/DeathSection'
import InfoSection from '../../Components/InfoSection'
import Button from '../../Components/Button'
import birthMap from '../../Assets/JMcNaughtSr/birthMap.png'
import familyTree from '../../Assets/JMcNaughtSr/familyTree.png'
import marriagePic from '../../Assets/JMcNaughtSr/marriagePic.jpg'
import marriageRecord from '../../Assets/JMcNaught/marriageRecord.png'
import censusMap1851 from '../../Assets/JMcNaughtSr/1851censusMap.png'
import censusPic1851 from '../../Assets/JMcNaughtSr/censusPic1851.jpg'
import deathPic from '../../Assets/JMcNaughtSr/deathPic.jpg'
import childrenMap from '../../Assets/JMcNaughtSr/childrenMap.png'


function JMcSrPersonMaster() {
const relatives1851 = ["Myself, 55, Blacksmith", "My daughter Margaret, 25", "Marion, 21", "Mary, 18", "Robert, 12", "Elizabeth Williams 2", "John Wilson 3 months" ]




  return (
<>   <div className="title">
    <h1> John McNaught </h1>
   
    <h4> 1823-1871 </h4> 
    </div>
  <div className="cards"> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is John and I am your great-great-great-great-great-grandfather' src={familyTree} url={familyTree}/>


            <BirthSection url="" text="I was born in the villiage of Girthon, Kirkcudbright, Scotland in 1796." 
            src={birthMap}
            label='Birth'       
       text2="My parents are not yet traced."
           
          src2={marriagePic}
            label2="Marriage"
          text4="I married Marion Mcjannet at some point, possibly, or perhaps we never married."
          text5="Marion's maiden name appears on our children's baptism records."  />
</li>
    
          <li className='cards__item'> 
<InfoSection label="Birth" text="Our eight children were born between 1822 and 1838." text2="They are recorded as being baptised/born in a number of different place names in and around Kirkcudbrightshire, for example: Rerrick, Kelton, Balmaghie and Kirkmabreck." src={childrenMap} url="https://maps.nls.uk/geo/explore/side-by-side/#zoom=10&lat=54.98747&lon=-3.98118&layers=125140579&right=BingHyb"/>
          
            
            
             <CensusSection 
            label='1851 Census'
            text='I was age 55 and we are living at 4 High Street, Creetown, Kirkcudbrightshire.' text2="The street address is no longer on modern maps."
text3="My wife had died earlier in 1851"
            url="https://www.google.com/maps/place/Creetown,+Newton+Stewart+DG8+7JQ/@54.7508181,-4.0166431,8.75z/data=!4m5!3m4!1s0x4862f70175c65955:0xac75e715302b0827!8m2!3d54.901504!4d-4.379552"
           src={censusMap1851}
            src2={censusPic1851}
            label2='Who did I live with?'
            url2="https://www.dailyrecord.co.uk/news/local-news/creetown-memories-robert-ross-latest-22441611"
          
             relatives={relatives1851}       
            />


            </li>

<li className='cards__item'> 
<InfoSection label="1850" text="On the banns for my son John's wedding in 1850, he lists my profession as 'land steward'" src={marriageRecord} url={marriageRecord}/>
            
          

  <DeathSection  url="https://www.visitscotland.com/info/towns-villages/kirkcudbright-p239251" label='Death' src={deathPic} text='I lived to age 64, and died on the 12th April 1860.' 
  text2="My place of death is listed as Kirkcudbright, Kirkcudbrightshire Scotland." 
   />
            
            </li>
           



    </div>
    </div>
    
    </div>
</>
  );
}


export default JMcSrPersonMaster;