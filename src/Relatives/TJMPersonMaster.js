import React from 'react';
import '../App.css'
import IntroSection from '../Components/IntroSection'
import BirthSection from '../Components/BirthSection'
import CensusSection from '../Components/CensusSection'
import MarriageSection from '../Components/MarriageSection'
import DeathSection from '../Components/DeathSection'
import LifeSummarySection from '../Components/LifeSummarySection'
import familyTree from '../Assets/TJMarten/familyTree.png'
import birthMap from '../Assets/TJMarten/birthmap.png'
import birthCertificate from '../Assets/TJMarten/COL688468_2020-1-THOMAS_JOHN_MARTEN.pdf'
import birthCert from '../Assets/TJMarten/birthCirt.png'
import census1851 from '../Assets/TJMarten/1851Census.png'
import censusMap1851 from '../Assets/TJMarten/1851censusMap.png'



import census1891 from '../Assets/BAMarten/1891Census.png'
import censusMap1891 from '../Assets/BAMarten/1891CensusMap.png'
import house1901 from '../Assets/BAMarten/house1901.jpeg'
import census1901 from '../Assets/BAMarten/1901Census.png'
import marriageRecord from '../Assets/BAMarten/marriageRecord.png'
import house1911 from '../Assets/BAMarten/1911house.png'
import census1911 from '../Assets/BAMarten/1911Census.png'
import deathRecord from '../Assets/BAMarten/deathRecord.png'
import fredJob from '../Assets/BAMarten/fredJob.png'
import charlesNavy from '../Assets/BAMarten/GeorgeNavy.png'
import Button from '../Components/Button'

function TJMPersonMaster() {
const relatives1851 = ['My father Richard, 35, a shoe maker', 'My mother Susannah, 35, a dressmaker', 'My older brother Alfred, 8, scholar', 'I am listed as age 6 and a Scholar', 'My younger brother Walter, 4', 'My younger sister Mary, 2.']
const relatives1901 = ["My father Thomas, 56 and now lists 'agent for the Gresham assurance society' as his occupation", 'My mother Selina, 39', 'My older half sister Kate, 24', "I am 19 and my occupation is 'shorthand and type writer'", "My brother Frederick, 16, and an 'assistant to ghast collector'", 'My youngest brother Charles, 9' ]
const relatives1911 = ["My husband George, 34, who was a 'bookkeeper for the district council,", 'I am 29', 'Our son Donald Graham, 2, who is your great-grandfather', 'Our youngest son George, aged 1']

  return (
  <div className="cards"> 
    <h1> Thomas John Marten </h1>
    <h4> 1844-1907 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
       <li className='cards__item'>
          <IntroSection label='who am I?' text='My name is Thomas and I am your great-great-great-grandfather' src={familyTree} url={familyTree}/>


          <BirthSection url="https://www.google.com/maps/place/14+Burlington+St,+Kemptown,+Brighton/@50.8190072,-0.1240274,17z/data=!4m13!1m7!3m6!1s0x487585bb654c6aff:0x34210cc84b274609!2s14+Burlington+St,+Kemptown,+Brighton!3b1!8m2!3d50.8189713!4d-0.1239013!3m4!1s0x487585bb654c6aff:0x34210cc84b274609!8m2!3d50.8189713!4d-0.123901birthMao" text="I was born on the 25th December 1844, at 14 Burlington Street, Brighton. 
         " 
          text2= ""
          text3=' '
          src={birthMap}
          label='Birth'
          
          url2={birthCertificate}
          text4="My father was Richard Marten, cordwainer (shoemaker), and my mother was Susannah nee Solomon."
          text5=""
          src2={birthCert}
          />
          </li>
    
        <li className='cards__item'> 

          <CensusSection 
          label='1851 Census'
          text='In 1851 I was aged 6 and we had moved house, to 122 London Road, Brighton.'
          url='https://www.google.com/maps/place/122+London+Rd,+Brighton/@50.8287478,-0.1399042,15z/data=!4m5!3m4!1s0x4875859ddd6cc525:0x2ff1198bd3d532e0!8m2!3d50.830489!4d-0.13602'
          src={censusMap1851}


          src2={census1851}
          label2='Who did I live with?'
          url2={census1851}
          text2='I lived with'
          relatives={relatives1851}
          
          />
          </li>

    <li className='cards__item'> 
          <CensusSection 
          label='1901 Census'
          text="In 1901 I was aged 19 and we had moved house again. This time to 79 Crosby Road South, in Seaforth, Liverpool. Doesn't our house look smart!"
          url='https://www.google.com/maps/place/Riverslie+Rest+Home,+79+Crosby+Rd+S,+Seaforth,+Liverpool+L21+1EW/@53.4672705,-3.0180227,17z/data=!4m5!3m4!1s0x487b246e2be151bd:0xd9b77a3afd87f0b0!8m2!3d53.4675867!4d-3.0174863'
          src={house1901}
          label2='Who did I live with?'
          url2='https://www.google.com/maps/place/Ponsonby+Street/@53.3938342,-2.955199,18z/data=!4m13!1m7!3m6!1s0x487b20fcceadfac9:0x6869ee89af0503d1!2sCawdor+St,+Liverpool!3b1!8m2!3d53.3935828!4d-2.9564909!3m4!1s0x0:0x443ca74ffdcde922!8m2!3d53.394255!4d-2.9549816'
          src2={census1901}
          text2='I lived with'
          relatives={relatives1911}
          
          />



    <MarriageSection  url='www.google.com' label='Marriage' src={marriageRecord} text='I got married during the summer of 1906, somewhere near my home.' />

          </li>
              <li className='cards__item'>
<CensusSection 
                
                label='1911 Census'
                text="In 1911 I was aged 29, and lived at 11 Ashdale Road Waterloo. This is our house in the middle, with the brown front door."
                url='https://www.google.com/maps/place/11+Ashdale+Rd,+Waterloo,+Liverpool+L22+9QX/@53.4785408,-3.0299741,17z/data=!3m1!4b1!4m5!3m4!1s0x487b2461119482bd:0x3272ca0641f5412c!8m2!3d53.4785408!4d-3.0277854'
                src={house1911}
                label2='Who did I live with?'
                url2=''
                src2={census1911}
                text2='I lived with'
                relatives={relatives1911}
                
                />

  
    <DeathSection  url='' label='Death' src={deathRecord} text='I lived to age 58, and died in 1938.'/>
    </li>

<li className='cards__item'> 
    <LifeSummarySection  url='' label='What happened next?' src={deathRecord} text="My oldest sister Kate remained living with my mother until Kate's death in 1928. "
    text2="My sister Gertrude married in 1898."

/>

<LifeSummarySection 
label='What happened next?'
url=''
src={fredJob}
text='My brother Fred became an engineer, and his name appears on crew lists in the ports of Sydney and New York. '
text2="He died in 1928 at home in West Derby."

/>

           <LifeSummarySection 
label='What happened next?'
url={charlesNavy}
src={charlesNavy}
text="
My brother Charles began as a shipping clerk, and at one point enroled in the merchant navy, but doesn't seem to have lasted long. He married and moved to Horseforth, Leeds, where he is living on the 1939 register."
text2="In 1939 he is listed as a clerk for a soap manufacturer. He had two children, and our mother Selina was living with him and his family." 
text3="He died in 1962 at the Wharfdale hospital in Otley."
/>

</li>


  <Button classname='btns'/>
    </div>
    </div>
    
    </div>

  );
}

export default TJMPersonMaster;