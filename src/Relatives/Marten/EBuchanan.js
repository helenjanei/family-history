	import React from 'react';
import '../../App.css'
import IntroSection from '../../Components/IntroSection'
import BirthSection from '../../Components/BirthSection'
import CensusSection from '../../Components/CensusSection'
import MarriageSection from '../../Components/MarriageSection'
import DeathSection from '../../Components/DeathSection'
import InfoSection from '../../Components/InfoSection'
import LinkSection from '../../Components/LinkSection'
import Button from '../../Components/Button'
import birthPic from '../../Assets/EBuchanan/St_Peter_Liverpool.jpg'
import familyTree from '../../Assets/EBuchanan/familyTree.png'
import birthRecord from '../../Assets/EBuchanan/birthRecord.png'
import marriageRecord from '../../Assets/JMcNaught/marriageRecord.png'
import census1841 from '../../Assets/EBuchanan/1841census.png'
import censusMap1841 from '../../Assets/EBuchanan/1841censusMap.png'

import censusMap1851 from '../../Assets/JMcNaught/1851censusMap.png'
import census1851 from '../../Assets/JMcNaught/1851census.png'
import censusMap1861 from '../../Assets/SMcNaught/1861censusMap.png'
import directory1853 from '../../Assets/JMcNaught/1853directory.png'
import census1861 from '../../Assets/SMcNaught/1861census.png'
import census1871 from '../../Assets/SMcNaught/1871census.png'
import pubGirl from '../../Assets/SMcNaught/1871Pub.jpeg'
import census1881 from '../../Assets/EBuchanan/1881Census.png'
import house1881 from '../../Assets/EBuchanan/1881censusHouse.png'
import censusPic1891 from '../../Assets/EBuchanan/victorian_liverpool2old.jpg'
import census1891 from '../../Assets/EBuchanan/1891census.png'
import deathPic from '../../Assets/EBuchanan/toxteth-park-cemetery.jpg'
import birthPic2 from '../../Assets/SPhillips/general-view-of-18th-century-liverpool-mary-evans-picture-library.jpg'
function EBPersonMaster() {

const relatives1841 = ["My father Andrew Buchanan, 55, 'baker'", "My brother David, 20, 'baker something'", "Benjamin, 15, something apprentice", "Charles,10", "Myself, 15"]

const relatives1851 = ["My father Andrew Buchanan, 65, 'baker master'", "Myself, 26", "My husband John, 28, 'joiner", "Helen Maxwell, 25, servant", "Thomas Oneal, 14, servant", "Samuel Mar, indentured(?) or servant(?), 19, Baker" ]

const relatives1861 = ["My husband John, 38, 'joiner/master'", "Myself Elizabeth, 37, 'joiner's wife'", "Daughter Agnes, 4, 'joiner's daughter'.", "Selina, 3 months, and also a 'joiner's daughter'.", "Mary Mitchner, boarder, 36, 'possession of a lively-hood'", "Mary Murphy, 17, servant" ]

const relatives1871 = ["My husband John 39, 'publican', (perhaps we lived in a pub?)", "Myself Elizabeth, 45.", "Agnes, 15", "Selina 10, a 'scholar'", "Maggie, 6", "Alfred Stanley, 3", "Sarah Williamson, 18, servant."]

const relatives1881 = ["Richard Dobell, my son-in-law, 28, Butcher", "My daughter Agnes, 24", "My grandson Richard, 4 months", "Myself, 55", "My son Alfred, 14, apprentice Joiner", "My daughter Maggie, 16", "Charles Simmonds, boarder, 32, seaman", "Gordon Sprant, boarder, 17, seaman."]

const relatives1891 = ["Elizabeth Wells, 70, dressmaker", "Mary Wells, sister, 66, plain sewer", "Myself, boarder, 66", "My son , apprentice Joiner", "My daughter Maggie, 16", "Charles Simmonds, boarder, 32, seaman", "Gordon Sprant, boarder, 17, seaman."]

  return (
<>   <div className="title">
    <h1> Elizabeth McNaught </h1>
   <h2>nee Buchanan</h2>
    <h4> 1824-1896 </h4> 
    </div>
  <div className="cards"> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Elizabeth and I am your great-great-great-great-grandmother.' src={familyTree} url={familyTree}/>


            <BirthSection url={birthRecord} text="I was born in January 1824 in Liverpool." text2="I was christened at St Peter's church in Toxteth (since demolished)." 
            src={birthRecord}
            label='Birth'
          
            src2={birthPic}
            text4="I was the fifth child of my parents, Andrew Buchanan 38, and Selina Philips 32."
          text5="My parents had seven children between 1815 and 1831."
         
          url2="https://www.lan-opc.org.uk/Liverpool/Liverpool-Central/stpeter/index.html"
            label2='Birth'
           
            />
          </li>
    
          <li className='cards__item'> 

           <CensusSection 
            label='1841 Census'
            text='I was age 15 and I am living with my father and siblings at 49 Shaws Alley, Toxteth, Liverpool (the street remains, however the building does not).'
            url="https://historic-liverpool.co.uk/old-maps-of-liverpool/"
           src={censusMap1841}
            src2={census1841}
            label2='Who did I live with?'
            url2={census1841}
          
             relatives={relatives1841}       
            />
            <MarriageSection  url={marriageRecord} label='Marriage' src={marriageRecord} text="I married my husband, John McNaught on the 26th September 1850."
            text2="We married at St John's Church, Liverpool."
            text3="My address is given as Shaw's Alley and my father's occupation is recorded as 'baker'."
             />
            
            
            </li>

<li className='cards__item'> 
             <CensusSection 
            label='1851 Census'
            text='I was age 26 and John and I are living with my family at 49 Shaws Alley, Toxteth, Liverpool.'
            url="https://maps.nls.uk/geo/explore/side-by-side/#zoom=17&lat=53.39996&lon=-2.98588&layers=6&right=BingHyb"
           src={censusMap1851}
            src2={census1851}
            label2='Who did I live with?'
            url2={census1851}
          
             relatives={relatives1851}       
            />


            </li>

<li className='cards__item'> 
<InfoSection label="1853 Gore's Directory of Liverpool and it's Environs" text="My husband is listed as a Joiner, at 48 Clarance Grove, Everton (no longer in existence)." src={directory1853} url='https://www.victorianlondon.org/mayhew/mayhew60.htm'/>
            
            
            
            <CensusSection 
            label='1861 Census'
            text='I was age 37 and we are now living at 50 Carter Street, Toxteth, Liverpool.'
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
            text="We had moved to 67 Walton Lane, Kirkdale, Liverpool." text2="Sadly the property is no longer there, probably as a result of bombing in the second world war."
            
          
            url='https://www.google.com/maps/place/67+Walton+Ln,+Liverpool+L4+4HU/@53.4335337,-2.9688786,17z/data=!4m5!3m4!1s0x487b21669525c4fb:0x54e1ac73ab103b03!8m2!3d53.4334251!4d-2.9690288'
            src={census1871}
            
            label2='1871 Census'
            url2={census1871}
            src2={pubGirl}
         
           relatives={relatives1871}
           />
            </li>

        

        
 <li className='cards__item'> 
<CensusSection 
           label='1881 Census'
            text="I am now living at 129 Duke street with the family of my daughter Agnes." text2="The property still stands and part of it is now used as an AirBnB."
            
          
            url='https://www.google.com/maps/place/129+Duke+St,+Liverpool+L1+4JR/@53.4011358,-2.9796652,17z/data=!4m13!1m7!3m6!1s0x487b2126942507b5:0x36b0c8ee67c09261!2s129+Duke+St,+Liverpool+L1+4JR!3b1!8m2!3d53.4012155!4d-2.9796147!3m4!1s0x487b2126942507b5:0x36b0c8ee67c09261!8m2!3d53.4012155!4d-2.9796147?hl=en-GB'
            src={house1881}
            
            label2='Who did I live with?'
            url2='https://www.historyofliverpool.com/victorian-liverpool-now-and-then-photographs/'
            src2={census1881}
         
           relatives={relatives1881}
           />



          </li>

        <li className='cards__item'> 
<CensusSection 
           label='1891 Census'
            text="I am now living at 67 Ponsonby Street as a boarder." text2="I am living on the same street as my granddaughter Selina and her husband Thomas John Marten."
            
          
            url='https://www.google.com/maps/place/129+Duke+St,+Liverpool+L1+4JR/@53.4011358,-2.9796652,17z/data=!4m13!1m7!3m6!1s0x487b2126942507b5:0x36b0c8ee67c09261!2s129+Duke+St,+Liverpool+L1+4JR!3b1!8m2!3d53.4012155!4d-2.9796147!3m4!1s0x487b2126942507b5:0x36b0c8ee67c09261!8m2!3d53.4012155!4d-2.9796147?hl=en-GB'
            src={censusPic1891}
            
            label2='Who did I live with?'
            url2='https://www.historyofliverpool.com/victorian-liverpool-now-and-then-photographs/'
            src2={census1891}
         
           relatives={relatives1891}
           />



         

  <DeathSection  url='https://en.wikipedia.org/wiki/Toxteth_Park_Cemetery' label='Death' src={deathPic} text='I lived to age 72, and died on the 8th July 1896.' 
  text2="I am buried in Toxteth Park Cemetary." 
   />
            
            </li>

         <li className='cards__item'>     
<LinkSection label="Andrew Buchanan 1785-1859" to='/AndrewBuchanan' src={censusMap1841}
 />

<LinkSection label="Selina Phillips 1792-1839" to='/SelinaPhillips'
src={birthPic2}
 />
</li>

  
    </div>
    </div>
    
    </div>
</>
  );
}


export default EBPersonMaster;