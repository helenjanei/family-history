import React from 'react';
import '../App.css'
import IntroSection from '../Components/IntroSection'
import BirthSection from '../Components/BirthSection'
import CensusSection from '../Components/CensusSection'
import MarriageSection from '../Components/MarriageSection'
import DeathSection from '../Components/DeathSection'
import LinkSection from '../Components/LinkSection'
import Button from '../Components/Button'
import familyTree from '../Assets/SSolomon/familyTree.png'
import baptism from '../Assets/SSolomon/baptism.png'
import birthPic from '../Assets/SSolomon/birthPic.jpg'
import birthPic2 from '../Assets/SSolomon/birthPic2.jpg'
import weddingMap from '../Assets/SSolomon/weddingMap.png'
import birthCert from '../Assets/TJMarten/birthCirt.png'
import census1851 from '../Assets/TJMarten/1851Census.png'
import censusMap1851 from '../Assets/TJMarten/1851censusMap.png'
import censusHouse1861 from '../Assets/TJMarten/1861CensusHouse.png'
import census1861 from '../Assets/TJMarten/1861Census1.png'
import census1871 from '../Assets/SSolomon/1871Census.png'
import censusPic1871 from '../Assets/SSolomon/1871pic.jpg'
import milliner from '../Assets/TJMarten/milliner.jpg'
import census1881 from '../Assets/SSolomon/1881census.png'
import censusHouse1881 from '../Assets/SSolomon/1881censusHouse.png'
import deathRichard from '../Assets/SSolomon/deathRichard.jpeg'
import deathWalter from '../Assets/SSolomon/deathWalter.jpg'
import censusHouse1891 from '../Assets/SSolomon/1891CensusHouse.png'
import census1891 from '../Assets/SSolomon/1891Census.png'
import deathPic from '../Assets/SSolomon/deathPic.jpg'
import marriage1873 from '../Assets/TJMarten/1873MarriageChurch.jpg'
import birthPic5 from '../Assets/HSolomon/birthPic.jpg'
import birthPic4 from '../Assets/SDudman/birthPic.jpg'
function SSPersonMaster() {

  
const relatives1851 = ['My husband Richard, 35, a shoe maker', 'I am 35, a dressmaker', 'My oldest son Alfred, 8, scholar', 'Thomas John, 6, Scholar', 'My youngest son Walter, 4', 'My youngest child Mary, 2.']
const relatives1861 = ["My husband Richard, 45, 'trunk-maker'", "Myself, 45, 'dress maker'", "My son Walter, 14", "Mary, my daughter, 12, scholar", "My youngest child, Bernard, 8 months", "My husband's sister, Elizabeth Easton, 53, dressmaker", "My nephews - Charles Easton, 16, hair dresser", " George Easton, 14", "Ann Mytton, widower, 63", "Mary Mytton, 25, 'milliner dress maker(?)'" ]
const relatives1871 = ["My husband, Richard, 55, 'trunk maker'.", "Myself, 55(!), 'dress maker'", "My daughter Mary Maria, 22, 'miliner'", "My son Bernard, 10, 'scholar'."]
const relatives1881 = ["Emily Atkinson, 43, boarding house keeper", "Emily Elizabeth Atkinson, 10, scholar", "Mary Aimie Atkinson, 6, scholar", "Benjamin Rout, 22, Jewelers assistant", "James Padly, 20, draper's assistant", "My husband Richard Marten, 65, 'portmanteau maker'", "Myself, 65, 'portmanteau maker's wife'"]
const relatives1891 = ['Sammuel Juniper, Head, 50, Ironmonger', "Jane, his wife, 49, Ironmonger's assistant", "Agnes, daughter, 24, Ironmongers assistant", "Jessie, daughter, 21, Milliner dressmaker", "Samuel, son, 17", "James Grover, son-in-law, 29, solicitor", "Ada Grover, daughter, 22", "Constance Grover, granddaughter", "Myself, 75, visitor, living on my own means."]


  return (
  <>   <div className="title">
  
    <h1> Susannah Marten </h1>
    <h2> nee Solomon </h2>
    <h4> 1816-1892 </h4> 
    </div>
  <div className="cards"> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Susannah and I am your great-great-great-great-grandmother.' src={familyTree} url={familyTree}/>


            <BirthSection  text="I was born in 1811 in London." text2="I was baptised on the 26th January 1812 at St Clement Danes Church, on the Strand in central London." 
         
         src={birthPic}
            label='Birth'
            url="https://en.wikipedia.org/wiki/St_Clement_Danes"
            
            src2={birthPic2}
            url2={baptism}
            text4="My father was Henry Solomon, 40, a taylor, and my mother was Susannah nee Dudman, 43."
          text5="I was my parent's 6th and final child."
            label2='Birth'
            />
          </li>
    

          <li className='cards__item'>
            <MarriageSection  url='https://maps.nls.uk/view/102347737' label='Marriage' src={marriage1873} //change when wedding cirt for SS comes in
             text="On the 5th November 1841, at the age of 30 I got married to Richard Marten, 25, in Brighton, Sussex."
        />

           <BirthSection text="Between 1843 and 1850 my husband and I had our first four children, Alfred Richard, Thomas John (your great great great grandfather), Walter Solomon and Mary Maria." 
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
            text='In 1851 I was aged 40 and we had moved house, to 122 London Road, Brighton.'
            url='https://www.google.com/maps/place/122+London+Rd,+Brighton/@50.8287478,-0.1399042,15z/data=!4m5!3m4!1s0x4875859ddd6cc525:0x2ff1198bd3d532e0!8m2!3d50.830489!4d-0.13602'
            src={censusMap1851}

            src2={census1851}
            label2='Who did I live with?'
            url2={census1851}
            
             relatives={relatives1851}       
            />
          </li>

 <li className='cards__item'> 
           <CensusSection 
           label='1861 Census'
            text="In 1861 I was aged 50 and we had moved house again. We are now living at 41 Sidney Street,  Brighton."
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
            text="In 1871 I was aged 60 and we had moved house again." text2="We are now living at 21 St Georges Street,  Brighton (not on modern maps)."
           url={census1871}
           src={census1871}

           label2='Who did I live with?'
           src2={censusPic1871}
           url2="https://regencysociety.org/our-heritage/victorian-brighton-and-hove/"
          
           relatives={relatives1871}
           />
          </li>
<li className='cards__item'> 
 <DeathSection  url='https://en.wikipedia.org/wiki/Hatmaking' label='Death' src={milliner} text='My daughter Mary Maria died in October 1872, at the age of 22.' text2="She had been married for 6 months."/>
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
</li>
<li className='cards__item'> 

 <DeathSection  url='https://en.wikipedia.org/wiki/Portmanteau_(luggage)' label='Death' src={deathRichard} text='My husband Richard died in April 1884, at the age of 68.' />
  <DeathSection  url='https://www.oldphotosjapan.com/en/photos/155/nogemachi-dori' label='Death' src={deathWalter} text='My son Walter Solomon died in 1890 in Yokohama, Japan.' />
  </li>
<li className='cards__item'> 
<CensusSection 
           label='1891 Census'
            text="In 1891 I was aged 80 and on the census I am listed as a visitor at 140/141 London Road, Brighton" 
            text2="The family I am staying with have the last name Juniper, which was my husband's grandmother's maiden name. Perhaps they are distant family?"
           url="https://www.google.com/maps/place/36+Rose+Hill+Terrace,+Brighton+BN1+4JL/@50.8327125,-0.1359647,17z/data=!4m13!1m7!3m6!1s0x4875859d74db12bd:0xdf24bd53f66e495f!2s36+Rose+Hill+Terrace,+Brighton+BN1+4JL!3b1!8m2!3d50.832726!4d-0.135979!3m4!1s0x4875859d74db12bd:0xdf24bd53f66e495f!8m2!3d50.832726!4d-0.135979"
           src={censusHouse1891}

           label2='Who did I live with?'
           src2={census1891}
           url2={census1891}
          
           relatives={relatives1891}
           />
 <DeathSection  url='http://www.victorianweb.org/places/cities/brighton/2.html' label='Death' src={deathPic} text='I died in Brighton January 1892, at the age of 81.' />
</li>

<li className='cards__item'> 
  <LinkSection label="Henry Solomon 1771-1845" to='/HenrySolomon' src={birthPic5} />
  <LinkSection label="Susannah Dudman 1767-1865" to='/SusannahDudman' src={birthPic4} />
  </li>


    </div>
    </div>
    
    </div>
</>
  );
}


export default SSPersonMaster;