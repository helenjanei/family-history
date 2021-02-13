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


function BAMPersonMaster() {
const relatives = ['my father', 'my mother', 'my dog']
const relatives2 = ['k', 'j']
  return (
  <div className="cards"> 
    <h1> Beatrice Annie Wilkinson </h1>
    <h2> (nee Marten) </h2>
    <h4> 1882-1938 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
   
          <IntroSection label='who am I?' text='My name is Beatrice and I am your great-great-grandmother' src={familyTree}/>


          <BirthSection url="https://www.google.com/maps/place/6+Wellington+Terrace,+Birkenhead+CH41+2TB/@53.3847234,-3.0252681,15z/data=!4m5!3m4!1s0x487b2717627d99d3:0x461cfc3b97836b10!8m2!3d53.384748!4d-3.0262961://www.google.com/maps/place/6+Wellington+Terrace,+Birkenhead+CH41+2TB/@53.3847234,-3.0252681,15z/data=!4m5!3m4!1s0x487b2717627d99d3:0x461cfc3b97836b10!8m2!3d53.384748!4d-3.0262961" text='I was born at 6 Wellington Terrace, Tranmere, Birkenhead on 10 May 1881' src={birthMap1862}
          label='Birth'

          url2='https://maps.nls.uk/view/102340990'
          text2='I lived with my father Thomas, who was 35 and an Insurance Agent; my mother Selina who was 20; my half-sister Kate, who was age 6; and a servant named Margaret Howe who was aged 18.'
          src2={birthMap}
          />
    
    
          <CensusSection 
          label='1891 Census'
          text='In 1891 I was aged 9 and we had moved house, over the River Mersey to 6 Ponsonby Street, Toxteth (since demolished, between Cawdor and Eversley Street on modern maps).'
          url='https://maps.nls.uk/view/101104295'
          src2={census1891}

          url2='https://www.google.com/maps/place/Ponsonby+Street/@53.3938342,-2.955199,18z/data=!4m13!1m7!3m6!1s0x487b20fcceadfac9:0x6869ee89af0503d1!2sCawdor+St,+Liverpool!3b1!8m2!3d53.3935828!4d-2.9564909!3m4!1s0x0:0x443ca74ffdcde922!8m2!3d53.394255!4d-2.9549816'
          src={censusMap1891}
          text2='I lived with'
         relatives={relatives}
         
          />


          <CensusSection 
          label='1901 Census'
          text='In 1901 I was aged 19 and we had moved house again. This time to 79 Crosby Road SOuth, in Seaforth, Liverpool. Doesnt our house look smart!'
          url='https://www.google.com/maps/place/Riverslie+Rest+Home,+79+Crosby+Rd+S,+Seaforth,+Liverpool+L21+1EW/@53.4672705,-3.0180227,17z/data=!4m5!3m4!1s0x487b246e2be151bd:0xd9b77a3afd87f0b0!8m2!3d53.4675867!4d-3.0174863'
          src2={house1901}

          url2='https://www.google.com/maps/place/Ponsonby+Street/@53.3938342,-2.955199,18z/data=!4m13!1m7!3m6!1s0x487b20fcceadfac9:0x6869ee89af0503d1!2sCawdor+St,+Liverpool!3b1!8m2!3d53.3935828!4d-2.9564909!3m4!1s0x0:0x443ca74ffdcde922!8m2!3d53.394255!4d-2.9549816'
          src={censusMap1891}
          text2='I lived with'
         relatives={relatives2}
         
          />



    <MarriageSection  url='www.google.com' label='marriage' src={birthMap1862} text='I got married on the 6h og june at the church in. The witnesses were...' />
    <WorkSection />
    <DeathSection />
    <LifeSummarySection /> 
    </div>
    </div>
    
    </div>

  );
}

export default BAMPersonMaster;
