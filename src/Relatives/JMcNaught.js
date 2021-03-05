	import React from 'react';
import '../App.css'
import IntroSection from '../Components/IntroSection'
import BirthSection from '../Components/BirthSection'
import CensusSection from '../Components/CensusSection'
import MarriageSection from '../Components/MarriageSection'
import DeathSection from '../Components/DeathSection'
import LinkSection from '../Components/LinkSection'
import InfoSection from '../Components/InfoSection'
import Button from '../Components/Button'
import birthPic2 from '../Assets/JMcNaught/birthPic2.png'
import familyTree from '../Assets/JMcNaught/birthMap.png'
import birthMap2 from '../Assets/JMcNaught/birthMap2.png'
import marriageRecord from '../Assets/JMcNaught/marriageRecord.png'
import censusMap1851 from '../Assets/JMcNaught/1851censusMap.png'
import census1851 from '../Assets/JMcNaught/1851census.png'
import censusMap1861 from '../Assets/SMcNaught/1861censusMap.png'
import directory1853 from '../Assets/JMcNaught/1853directory.png'
import census1861 from '../Assets/SMcNaught/1861census.png'
import census1871 from '../Assets/SMcNaught/1871census.png'
import pubGirl from '../Assets/SMcNaught/1871Pub.jpeg'
import deathRecord from '../Assets/JMcNaught/deathRecord.png'
import deathRecord2 from '../Assets/JMcNaught/deathRecord2.png'
import deathPic from '../Assets/JMcNaughtSr/deathPic.jpg'
import childrenMap from '../Assets/JMcNaughtSr/childrenMap.png'


function JMcNPersonMaster() {
const relatives1851 = ["My father-in-law Andrew Buchanan, 65, 'baker master'", "My wife Elizabeth, 26", "Myself, 28, 'joiner", "Helen Maxwell, 25, servant", "Thomas Oneal, 14, servant", "Samuel Mar, indentured(?) or servant(?), 19, Baker" ]

const relatives1861 = ["Myself John, 38, 'joiner/master'", "My wife Elizabeth, 37, 'joiner's wife'", "Daughter Agnes, 4, 'joiner's daughter'.", "Selina, 3 months, and also a 'joiner's daughter'.", "Mary Mitchner, boarder, 36, 'possession of a lively-hood'", "Mary Murphy, 17, servant" ]

const relatives1871 = ["I am 39, 'publican', (perhaps we lived in a pub?)", "My wife Elizabeth, 45.", "Agnes, 15", "Selina 10, a 'scholar'", "Maggie, 6", "Alfred Stanley, 3", "Sarah Williamson, 18, servant."]


  return (
  <div className="cards"> 
    <h1> John McNaught </h1>
   
    <h4> 1823-1871 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is John and I am your great-great-great-great-grandfather' src={familyTree} url={familyTree}/>


            <BirthSection url="http://www.kirkyards.co.uk/rerrick-parish/" text="I was born on the 14th February 1823 near Rerrick, Kirkcudbright, Scotland." text2="I was christened at Rerrick Church (since demolished)." 
            src={birthMap2}
            label='Birth'
          
            src2={birthPic2}
            text4="I was the second child of my parents, John McNaught 27, and Marion McJanet 23."
          text5="My parents had ten children, and seem to have lost some of them as babies."
          text6="My family seem to move slightly north when I am a child to Balmaghie, Kirkcudbright, Scotland, as this is where some of my siblings are christened."
          url2="https://www.google.com/maps/place/Balmaghie,+Castle+Douglas+DG7+2PB/@54.8279989,-4.3226011,9z/data=!4m5!3m4!1s0x4862e9b0ee2f68fb:0xb0f83ec215089f8a!8m2!3d54.948599!4d-4.00438?hl=en-GB"
            label2='Birth'
           
            />
          </li>
    
          <li className='cards__item'> 
            <MarriageSection  url={marriageRecord} label='Marriage' src={marriageRecord} text="I married my wife, Elizabeth Buchanan on the 26th September 1850."
            text2="We married at St John's Church, Liverpool."
            text3="My occupation is listed as 'Joiner' and my address is Upper Stanhope Street, Toxteth Park."
            text4="My father's occupation is recorded as 'land steward'."
             />
            
            
             <CensusSection 
            label='1851 Census'
            text='I was age 28 and Elizabeth and I are living with her parents at 49 Shaws Alley, Toxteth, Liverpool (the street remains, however the building does not).'
            url="https://maps.nls.uk/geo/explore/side-by-side/#zoom=17&lat=53.39996&lon=-2.98588&layers=6&right=BingHyb"
           src={censusMap1851}
            src2={census1851}
            label2='Who did I live with?'
            url2={census1851}
          
             relatives={relatives1851}       
            />


            </li>

<li className='cards__item'> 
<InfoSection label="1853 Gore's Directory of Liverpool and it's Environs" text="I am listed as a Joiner, at 48 Clarance Grove, Everton (no longer in existence)." src={directory1853} url='https://www.victorianlondon.org/mayhew/mayhew60.htm'/>
            <CensusSection 
            label='1861 Census'
            text='I was age 38 and we are now living at 50 Carter Street, Toxteth, Liverpool.'
            url="https://www.google.com/maps/place/50+Carter+St,+Liverpool/@53.3932977,-2.9681285,17z/data=!3m1!4b1!4m5!3m4!1s0x487b20e11b65375f:0x38341baaf3a5625b!8m2!3d53.3932977!4d-2.9659398"
            src={censusMap1861}

            src2={census1861}
            label2='Who did I live with?'
            url2={census1861}
         
             relatives={relatives1861}       
            />
          </li>

          <li className='cards__item'> 
           <CensusSection 
           label='1871 Census'
            text="In 1871 I was aged 10, and we had moved to 67 Walton Lane, Kirkdale, Liverpool." text2="Sadly the property is no longer there, probably as a result of bombing in the second world war."
            
          
            url='https://www.google.com/maps/place/67+Walton+Ln,+Liverpool+L4+4HU/@53.4335337,-2.9688786,17z/data=!4m5!3m4!1s0x487b21669525c4fb:0x54e1ac73ab103b03!8m2!3d53.4334251!4d-2.9690288'
            src={census1871}
            
            label2='1871 Census'
            url2={census1871}
            src2={pubGirl}
         
           relatives={relatives1871}
           />
      

  <DeathSection  url={deathRecord2} label='Death' src={deathRecord} text='I lived to age 48, and died in May 1st 1871.' 
  text2="My abode on the cemetery register is recorded as 67 Walton Lane, and my profession as a 'Joiner'." 
  text3="However, in probate my address is given as Tetlow street, Kirkdale, and I am recorded as a 'victualler'." 
  text4="My effects came to under £300 probate was given to my widow Elizabeth." />
            
            </li>
           <li className='cards__item'>     

 <LinkSection label="John McNaught 1796-1850" to='/JohnMcNaughtSr' src={deathPic}/>
  <LinkSection label="Marion Mcjanet 1799-1851" to='/MarionMcjanet' src={childrenMap}/>

</li>


  <Button classname='btns'/>
    </div>
    </div>
    
    </div>

  );
}


export default JMcNPersonMaster;