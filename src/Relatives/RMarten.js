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
import familyTree from '../Assets/RMarten/FamilyTree.png'
import birthMap from '../Assets/RMarten/birthMap.png'
import birthPic from '../Assets/RMarten/birthPic.jpg'
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






function RMPersonMaster() {

const relatives1851 = ['Myself, head, 35, a shoe maker', 'My wife Susannah 35, a dressmaker', 'My oldest son Alfred, 8, scholar', 'Thomas John, 6, Scholar', 'My youngest son Walter, 4', 'My youngest child Mary, 2.']
const relatives1861 = ["Myself, 45, 'trunk-maker'", "My wife Susannah, 45, 'dress maker'", "My son Walter, 14", "Mary, my daughter, 12, scholar", "My youngest child, Bernard, 8 months", "My  sister, Elizabeth Easton, 53, dressmaker", "My nephews - Charles Easton, 16, hair dresser", " George Easton, 14", "Ann Mytton, widower, 63", "Mary E Mytton, 25, 'milliner dress maker(?)'" ]
const relatives1871 = ["Myself, head, 55, 'trunk maker'.", "Susannah, my wife, 'dress maker'", "My daughter Mary Maria, 22, 'miliner'", "My son Bernard, 10, 'scholar'."]
const relatives1881 = ["Emily Atkinson, 43, boarding house keeper", "Emily Elizabeth Atkinson, 10, scholar", "Mary Aimie Atkinson, 6, scholar", "Benjamin Rout, 22, Jewelers assistant", "James Padly, 20, draper's assistant", "Myself, 65, 'portmanteau maker'", "Susannah, 65, 'portmanteau maker's wife'"]



  return (
  <div className="cards"> 
    <h1> Richard Marten </h1>
    <h4> 1816-1884 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Richard and I am your great-great-great-great-grandfather' src={familyTree} url={familyTree}/>


            <BirthSection url="https://www.google.com/maps/place/Storrington/@50.8857045,-0.427102,11.75z/data=!4m5!3m4!1s0x4875bbf093f9ee77:0x80499a4363664bd6!8m2!3d50.918329!4d-0.454313" text="I was born 1816, in Storrington, Sussex." 
            src={birthMap}
            label='Birth'
          
     
            text4="My father was John Marten, gardener, and my mother was Sarah, nee Cox."
            text5="I was the 8th of my parents 9 children. They had 5 girls and 4 boys between the years 1801 and 1818."
          url2="https://en.wikipedia.org/wiki/Storrington"
            label2='Birth'
            src2={birthPic}
            />
          </li>
    
          <li className='cards__item'> 
  <InfoSection url={cityDirectory1839} label="Pigot's Directory of Sussex" src={cityDirectory1839} text="In 1839 and 1840 I appear in Pigot's Directory of Sussex." text2="I am listed under 'Boot and Shoe makers' with the address 4 Somerset Place, Brighton (no longer on modern maps)"/>
   <MarriageSection  url='https://maps.nls.uk/view/102347737' label='Marriage' src={marriage1873} //change when wedding cirt for SS comes in
             text="On the 5th November 1841, at the age of 25 I married Susannah Solomon, 30, in Brighton, Sussex."
        /> 
          <BirthSection url="https://www.google.com/maps/place/14+Burlington+St,+Kemptown,+Brighton/@50.8190072,-0.1240274,17z/data=!4m13!1m7!3m6!1s0x487585bb654c6aff:0x34210cc84b274609!2s14+Burlington+St,+Kemptown,+Brighton!3b1!8m2!3d50.8189713!4d-0.1239013!3m4!1s0x487585bb654c6aff:0x34210cc84b274609!8m2!3d50.8189713!4d-0.123901birthMao" text="Between 1843 and 1850 my husband and I had our first four children, Alfred Richard, Thomas John (your great great great grandfather), Walter Solomon and Mary Maria." 
            src={weddingMap}
            label='Children'
            
            url2='https://www.google.com/maps/place/14+Burlington+St,+Kemptown,+Brighton/@50.8190072,-0.1240274,17z/data=!4m13!1m7!3m6!1s0x487585bb654c6aff:0x34210cc84b274609!2s14+Burlington+St,+Kemptown,+Brighton!3b1!8m2!3d50.8189713!4d-0.1239013!3m4!1s0x487585bb654c6aff:0x34210cc84b274609!8m2!3d50.8189713!4d-0.123901birthMao'
            text4="For at least some of this time we were living at 14 Burlington Street, Brighton."
            
            label2='Birth record'
            src2={birthCert}
            />

</li>

            <li className='cards__item'> 
            <CensusSection 
            label='1851 Census'
            text='In 1851 I was aged 35 and we had moved house, to 122 London Road, Brighton.'
            url='https://www.google.com/maps/place/122+London+Rd,+Brighton/@50.8287478,-0.1399042,15z/data=!4m5!3m4!1s0x4875859ddd6cc525:0x2ff1198bd3d532e0!8m2!3d50.830489!4d-0.13602'
            src={censusMap1851}

            src2={census1851}
            label2='Who did I live with?'
            url2={census1851}
            text4='I lived with'
             relatives={relatives1851}       
            />
          </li>
 <li className='cards__item'> 
           <CensusSection 
           label='1861 Census'
            text="In 1861 I was aged 45 and we had moved house again. We are now living at 41 Sidney Street,  Brighton."
           text2="My oldest son Alfred is living in Lambeth, London, and he is a shorthand writer. He is living with Albert Box, who is a 'merchant'. Alfred is listed as Albert's cousin."
           text3="My son Thomas John isn't living with us, but cannot yet be found on another census return. "
            url='https://www.google.co.uk/maps/place/41+Sydney+St,+Brighton+BN1+4EP/@50.8271728,-0.1399909,17z/data=!3m1!4b1!4m5!3m4!1s0x487585757ee0b967:0xbab742b44bd37610!8m2!3d50.8271728!4d-0.1378022?hl=en-GB&authuser=0'
           src={censusHouse1861}

           label2='Who did I live with?'
           url2={census1861}
           src2={census1861}
          
           relatives={relatives1861}
           />
          </li>
          <li className='cards__item'> 
           <CensusSection 
           label='1871 Census'
            text="In 1871 I was aged 55 and we had moved house again." text2="We are now living at 21 St Georges Street,  Brighton (not on modern maps)."
           url={census1871}
           src={census1871}

           label2='Who did I live with?'
           src2={censusPic1871}
           url2="https://regencysociety.org/our-heritage/victorian-brighton-and-hove/"
          
           relatives={relatives1871}
           />
          </li>
          <li className='cards__item'> 
<CensusSection 
           label='1881 Census'
            text="In 1881 I was aged 70 and we had moved house again." text2="We are now living in a boarding house at 36 Rose Hill Terrace, Brighton."
           url="https://www.google.com/maps/place/36+Rose+Hill+Terrace,+Brighton+BN1+4JL/@50.8327125,-0.1359647,17z/data=!4m13!1m7!3m6!1s0x4875859d74db12bd:0xdf24bd53f66e495f!2s36+Rose+Hill+Terrace,+Brighton+BN1+4JL!3b1!8m2!3d50.832726!4d-0.135979!3m4!1s0x4875859d74db12bd:0xdf24bd53f66e495f!8m2!3d50.832726!4d-0.135979"
           src={censusHouse1881}

           label2='Who did I live with?'
           src2={census1881}
           url2={census1881}
          
           relatives={relatives1881}
           />

 <DeathSection  url='https://en.wikipedia.org/wiki/Portmanteau_(luggage)' label='Death' src={deathRichard} text='I died in April 1884, at the age of 68.' />
</li>




  <Button classname='btns'/>
    </div>
    </div>
    
    </div>

  );
}


export default RMPersonMaster;