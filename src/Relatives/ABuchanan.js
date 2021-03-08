	import React from 'react';
import '../App.css'
import IntroSection from '../Components/IntroSection'

import CensusSection from '../Components/CensusSection'
import MarriageSection from '../Components/MarriageSection'
import DeathSection from '../Components/DeathSection'

import InfoSection from '../Components/InfoSection'
import Button from '../Components/Button'
import birthPic from '../Assets/ABuchanan/birthPic.jpg'
import familyTree from '../Assets/ABuchanan/familyTree.png'
import marriageRecord from '../Assets/ABuchanan/marriageRecord.png'
import children from '../Assets/ABuchanan/children.jpg'
import directory from '../Assets/ABuchanan/directory1821.png'
import pollBook from '../Assets/ABuchanan/pollBook1837.png'
import directory1853 from '../Assets/ABuchanan/directory1853.png'
import deathRecordSelina from '../Assets/ABuchanan/deathRecordSelina.png'
import census1841 from '../Assets/EBuchanan/1841census.png'
import censusMap1841 from '../Assets/EBuchanan/1841censusMap.png'

import censusMap1851 from '../Assets/JMcNaught/1851censusMap.png'
import census1851 from '../Assets/JMcNaught/1851census.png'
import deathRecord from '../Assets/ABuchanan/deathRecord.png'

function ABPersonMaster() {

const relatives1841 = ["Myself, 55, 'baker'", "Son David, 20, 'baker something'", "Benjamin, 15, something apprentice", "Charles,10", "Elizabeth, 15"]

const relatives1851 = ["I am  65, 'baker master'", "My daughter Elizabeth, 26", "Son-in-law John McNaught, 28, 'joiner", "Helen Maxwell, 25, servant", "Thomas Oneal, 14, servant", "Samuel Mar, indentured(?) or servant(?), 19, Baker" ]

  return (
  <div className="cards"> 
    <h1>Andrew Buchanan </h1>
     <h4> 1786-1859 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Andrew and I am your great-great-great-great-great-grandfather.' src={familyTree} url={familyTree}/>
<InfoSection label="Birth"
url="https://en.wikipedia.org/wiki/Clan_Buchanan#:~:text=Clan%20Buchanan%20(Scottish%20Gaelic%3A%20Na,by%20the%20Earl%20of%20Lennox." src={birthPic} text="I was born in 1786 in Scotland." text2="Unfortunately, there are a number of Andrew Buchanan's born around this period in Scotland, so currently my parents can't be exactly identified." text3="The most likely match is with the Andrew Buchanan born in April 1784, to James Buchanan and Isobel Thomson, Stirling, Scotland. " text4="This is based on the fact my wife and I named our first two children James and Isobella." text5="Clan Buchanan originates from the Highlands, however Buchanans were largely split on the two sides during the Jacobite uprisings of the early and mid 1700s."
/>

           
          </li>
    
          <li className='cards__item'> 

          <MarriageSection  url={marriageRecord} label='Marriage' src={marriageRecord} text="I married my wife, Selina Phillips on the 27th June 1813."
          text2="We married at St John's Church, Old Heymarket, Liverpool." 
       
           />
<InfoSection label="Children" url="" src={children} text="My wife and I had seven children between the years of 1815 and 1831, five boys and two girls."/>
 </li>
    
          <li className='cards__item'> 
<InfoSection label="Gore's Directory of Liverpool" url={directory} src={directory} text="My name appears often in the yearly directory." text2="Throughout I am listed as a baker" text3="From 1821 to 1829 my address is given as 18 Ausdell street, Liverpool, which no longer exists."/>

<InfoSection label="Poll Book" url={pollBook} src={pollBook} text="My name appears in the copy of the polls for the general elections of 1837, 1841 ." text2="I am listed as paying rates on a warehouse on Shaws Alley, Toxteth, Liverpool." />


<DeathSection label="Death" src={deathRecordSelina} text="My wife Selina died in the last quarter of 1839. She was aged 47." text2="Our youngest child Charles was aged 8, and we had four children under age 14 when she died."/>
 </li>
    
          <li className='cards__item'> 
           <CensusSection 
            label='1841 Census'
            text='I was age 55 and I am living with my adult children at 49 Shaws Alley, Toxteth, Liverpool (the street remains, however the building does not).'
            url="https://historic-liverpool.co.uk/old-maps-of-liverpool/"
           src={censusMap1841}
            src2={census1841}
            label2='Who did I live with?'
            url2={census1841}
          
             relatives={relatives1841}       
            />
            
            
            </li>

<li className='cards__item'> 
             <CensusSection 
            label='1851 Census'
            text='I was age 65 and I am still with my family at 49 Shaws Alley, Toxteth, Liverpool.'
            url="https://maps.nls.uk/geo/explore/side-by-side/#zoom=17&lat=53.39996&lon=-2.98588&layers=6&right=BingHyb"
           src={censusMap1851}
            src2={census1851}
            label2='Who did I live with?'
            url2={census1851}
          
             relatives={relatives1851}       
            />


            </li>

<li className='cards__item'> 
<InfoSection label="1853 Gore's Directory of Liverpool and it's Environs" text="I am listed as a 'gentleman' and living at 48 Clarance Grove, Everton (no longer in existence)." text2="This is the same address that is given in the director for my son-in-law John McNaught, Joiner." src={directory1853} url={directory1853}/>
            
       <DeathSection label="Death" src={deathRecord} text="I died on the 6th April 1859, at age 73." text2="I left and estate valued under £2000, and the executors of my estate were an estate agent/collector and a brewer." text3="I am buried in Toxteth Park Cemetery" url={deathRecord} />     
            
           
            </li>

        

        
 


  <Button className='btns'/>
    </div>
    </div>
    
    </div>

  );
}


export default ABPersonMaster;