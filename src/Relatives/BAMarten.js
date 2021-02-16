import React from 'react';
import '../App.css'
import IntroSection from '../Components/IntroSection'
import BirthSection from '../Components/BirthSection'
import CensusSection from '../Components/CensusSection'
import MarriageSection from '../Components/MarriageSection'
import WorkSection from '../Components/WorkSection'
import DeathSection from '../Components/DeathSection'
import LifeSummarySection from '../Components/LifeSummarySection'
import familyTree from '../Assets/BAMarten/BAM-family-tree.jpg'
import birthMap from '../Assets/BAMarten/BAM-Birth-map.jpg'
import birthMap1862 from '../Assets/BAMarten/BAM-Birth-Map1862.png'
import census1891 from '../Assets/BAMarten/1891Census.png'
import censusMap1891 from '../Assets/BAMarten/1891CensusMap.png'
import house1901 from '../Assets/BAMarten/house1901.jpeg'
import census1901 from '../Assets/BAMarten/1901Census.png'
import marriageRecord from '../Assets/BAMarten/marriageRecord.png'
import house1911 from '../Assets/BAMarten/1911house.png'
import census1911 from '../Assets/BAMarten/1911Census.png'
import deathRecord from '../Assets/BAMarten/deathRecord.png'
import fredJob from '../Assets/BAMarten/fredJob.png'
import Button from '../Components/Button'

function BAMPersonMaster() {
const relatives1891 = ['My father Thomas, 45, an insurance agent', 'My mother Selina, listed as 28', 'My two older half sisters - Gertrude 16, and Mary 15', 'I am listed as age 9 and a Scholar', 'My younger brother Frederick, 5, and also listed as a scholar', 'We no longer have a live in maid']
const relatives1901 = ["My father Thomas, 56 and now lists 'agent for the Gresham assurance society' as his occupation", 'My mother Selina, 39', 'My older half sister Kate, 24', "I am 19 and my occupation is 'shorthand and type writer'", "My brother Frederick, 16, and an 'assistant to ghast collector'", 'My youngest brother Charles, 9' ]
const relatives1911 = ["My husband George, 34, who was a 'bookkeeper for the district council,", 'I am 29', 'Our son Donald Graham, 2, who is your great-grandfather', 'Our youngest son George, aged 1']

  return (
  <div className="cards"> 
    <h1> Beatrice Annie Wilkinson </h1>
    <h2> (nee Marten) </h2>
    <h4> 1882-1938 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
       <li className='cards__item'>
          <IntroSection label='who am I?' text='My name is Beatrice and I am your great-great-grandmother' src={familyTree}/>


          <BirthSection url="https://www.google.com/maps/place/6+Wellington+Terrace,+Birkenhead+CH41+2TB/@53.3847234,-3.0252681,15z/data=!4m5!3m4!1s0x487b2717627d99d3:0x461cfc3b97836b10!8m2!3d53.384748!4d-3.0262961://www.google.com/maps/place/6+Wellington+Terrace,+Birkenhead+CH41+2TB/@53.3847234,-3.0252681,15z/data=!4m5!3m4!1s0x487b2717627d99d3:0x461cfc3b97836b10!8m2!3d53.384748!4d-3.0262961" text="I was born at 6 Wellington Terrace, Tranmere, Birkenhead on 10 May 1881. 
         " 
          text2= "My middle name Annie is the name of my father's late first wife, my half sister's mother."
          text3='I lived with my father Thomas, who was 35 and an Insurance Agent and my mother Selina who was 20. '
          src={birthMap1862}
          label='Birth'
          
          url2='https://maps.nls.uk/view/102340990'
          text4="My half-sister Kate, was age 6 also lived with us, but not my sister Gertrude who would be aged 5, but she is back with us in the next census"
          text5="Lastly, we had a servant named Margaret Howe living with us, who was aged 18."
          src2={birthMap}
          />
          </li>
    
        <li className='cards__item'> 
          <CensusSection 
          label='1891 Census'
          text='In 1891 I was aged 9 and we had moved house, over the River Mersey to 6 Ponsonby Street, Toxteth (since demolished, between Cawdor and Eversley Street on modern maps).'
          url='https://maps.nls.uk/view/101104295'
          src2={census1891}
          label2='Who did I live with?'
          url2='https://www.google.com/maps/place/Ponsonby+Street/@53.3938342,-2.955199,18z/data=!4m13!1m7!3m6!1s0x487b20fcceadfac9:0x6869ee89af0503d1!2sCawdor+St,+Liverpool!3b1!8m2!3d53.3935828!4d-2.9564909!3m4!1s0x0:0x443ca74ffdcde922!8m2!3d53.394255!4d-2.9549816'
          src={censusMap1891}
          text2='I lived with'
          relatives={relatives1891}
          
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
url=''
src={fredJob}
text='   
My brother Charles began as a shipping clerk. He married and moved to Horseforth, Leeds, where he is living on the 1939 register. '
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

export default BAMPersonMaster;
