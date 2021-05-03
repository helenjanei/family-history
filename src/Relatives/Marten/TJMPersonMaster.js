import React from 'react';
import '../../App.css'
import IntroSection from '../../Components/IntroSection'
import BirthSection from '../../Components/BirthSection'
import CensusSection from '../../Components/CensusSection'
import MarriageSection from '../../Components/MarriageSection'
import DeathSection from '../../Components/DeathSection'
import LifeSummarySection from '../../Components/LifeSummarySection'
import InfoSection from '../../Components/InfoSection'
import LinkSection from '../../Components/LinkSection' 
import Button from '../../Components/Button'

import familyTree from '../../Assets/TJMarten/familyTree.png'

import birthHouse from '../../Assets/TJMarten/birthHouse.png'
import birthCertificate from '../../Assets/TJMarten/COL688468_2020-1-THOMAS_JOHN_MARTEN.pdf'
import birthCert from '../../Assets/TJMarten/birthCirt.png'
import census1851 from '../../Assets/TJMarten/1851Census.png'
import censusMap1851 from '../../Assets/TJMarten/1851censusMap.png'
import censusHouse1861 from '../../Assets/TJMarten/1861CensusHouse.png'
import census1861 from '../../Assets/TJMarten/1861Census1.png'
import census18612 from '../../Assets/TJMarten/1861Census2.png'
import census1871 from '../../Assets/TJMarten/1871Census.png'
import picture1871 from '../../Assets/TJMarten/1871Picture.jpg'
import marriage1873 from '../../Assets/TJMarten/1873MarriageChurch.jpg'
import victorianPoplar from '../../Assets/TJMarten/victorianPoplar.jpg'
import marriage1880 from '../../Assets/TJMarten/1880Marriage.png'
import marriageChurch1880 from '../../Assets/TJMarten/1880marriageChurch.jpg'
import marriageHome1880 from '../../Assets/TJMarten/1880MarriageHome.png'
import census1881 from '../../Assets/TJMarten/1881Census.png'
import censusMap1881 from '../../Assets/BAMarten/BAM-Birth-Map1862.png'
import census1891 from '../../Assets/BAMarten/1891Census.png'
import censusMap1891 from '../../Assets/BAMarten/1891CensusMap.png'
import electoralRegister1889 from '../../Assets/TJMarten/1889ElectoralRegister.png'
import house1901 from '../../Assets/BAMarten/house1901.jpeg'
import census1901 from '../../Assets/BAMarten/1901Census.png'
import deathRecord from '../../Assets/TJMarten/1907deathRecord.png'
import freedomOfLondon from '../../Assets/TJMarten/freedomOfLondon.png'
import walterCensus1871 from '../../Assets/TJMarten/walterCensus1871.png'
import milliner from '../../Assets/TJMarten/milliner.jpg'
import bernardCensus from '../../Assets/TJMarten/bernardCensus.png'
import birthPic from '../../Assets/RMarten/birthPic.jpg'

import birthPic2 from '../../Assets/SSolomon/birthPic2.jpg'

function TJMPersonMaster() {
const relatives1851 = ['my father Richard, 35, a shoe maker', 'my mother Susannah, 35, a dressmaker', 'my older brother Alfred, 8, scholar', 'I am listed as age 6 and a Scholar', 'my younger brother Walter, 4', 'my younger sister Mary, 2']
const relatives1861 = ["my father Richard, 45, 'trunk-maker'", "my mother Susannah, 45, 'dress maker'", "my brother Walter, 14", "Mary, my sister, 12, scholar", "my brother Bernard, 8 months", "my father's sister, Elizabeth Easton, 53, dressmaker", "my cousin Charles Easton, 16, hair dresser", "my cousin George Easton, 14", "my grandma, Ann Marten, widower, 63", "my aunt Mary Marten, 25, 'milliner dress maker(?)'" ]
const relatives1871 = ["Rachel Rouse, 46, 'householder'", "Emma Peacock, 25, Rachel's daughter", "myself", "James Valentine, lodger, 21, 'professional artist', born in Edinburgh", "William Waskett, 31, lodger, 'lithograph maker?'"]
const relatives1881 = ["I am 35 and listed as an 'insurance agent'", "my wife Selina is now 20", "my first daughter, Kate, 6 - (my second daughter Gertrude - 5 isn't listed as living with us and is so far un-found on a census)", "a servant named Margaret Howe, 18 (possibly to help my heavily pregnant young wife with her new family)"]
const relatives1891 = ['I am 45, an insurance agent', 'my wife Selina, listed as 28', 'my two older daughters by my first marriage - Gertrude 16', 'Kate 15', 'my daughter Beatrice, (your great-great-grandmother), 9 and a Scholar', 'my son Frederick, 5, and also listed as a scholar', ]
const relatives1901 = ["I am now 56 and my job is, 'agent for the Gresham assurance society'", 'my wife Selina, 39', 'my older daughter Kate, 24', "Beatrice (your great-great-grandmother), 19, 'shorthand and type writer'", "my son Frederick, 16, and an 'assistant to ghast collector'", 'my youngest son Charles, 9' ]

  return (
  <>
  <div className="title"> 
    <h1> Thomas John Marten </h1>
    <h4> 1844-1907 </h4> 
  </div>
  <div className="cards"> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Thomas and I am your great-great-great-grandfather.2' src={familyTree} url={familyTree}/>


            <BirthSection url="https://www.google.com/maps/place/14+Burlington+St,+Kemptown,+Brighton/@50.8190072,-0.1240274,17z/data=!4m13!1m7!3m6!1s0x487585bb654c6aff:0x34210cc84b274609!2s14+Burlington+St,+Kemptown,+Brighton!3b1!8m2!3d50.8189713!4d-0.1239013!3m4!1s0x487585bb654c6aff:0x34210cc84b274609!8m2!3d50.8189713!4d-0.123901birthMao" text="I was born on the 25th December 1844, at 14 Burlington Street, Brighton." 
            src={birthHouse}
            label='Birth'
          
            url2={birthCertificate}
            text4="My father was Richard Marten 28, cordwainer (shoemaker), and my mother was Susannah (nee Solomon), who was 33 and a dressmaker."
            text5="I was the second born of my parents' five children."
          
            label2='Birth record'
            src2={birthCert}
            />
          </li>
    
          <li className='cards__item'> 

            <CensusSection 
            label='1851 Census'
            text='In 1851 I was aged 6 and we had moved house, to 122 London Road, Brighton.'
            text2='The address is located close to the station, perhaps my parents wanted a more central location to sell their goods from?'text3='Sadly the house no longer exists.'
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
            text="In 1861 I was aged 16, but I am not on the same census as my parents and siblings, and I haven't been found on a census yet."
            text2="My family are living at 41 Sidney Street,  Brighton."
           text3="My older brother Alfred is living in Lambeth, London, with our cousin Albert Box, who is a 'merchant'. Alfred is listed as a short hand writer."
            url='https://www.google.co.uk/maps/place/41+Sydney+St,+Brighton+BN1+4EP/@50.8271728,-0.1399909,17z/data=!3m1!4b1!4m5!3m4!1s0x487585757ee0b967:0xbab742b44bd37610!8m2!3d50.8271728!4d-0.1378022?hl=en-GB&authuser=0'
           src={censusHouse1861}

           label2='41 Sidney Street'
           url2={census18612}
           src2={census1861}
          
           relatives={relatives1861}
           />
          </li>

          <li className='cards__item'>
            <CensusSection 
                label='1871 Census'
                text="In 1871 I was aged 26, and lived at 5 Henson (or Hewson) Street, Newington, London."  
                text2="The street seems to be gone, but it was near St Georges Road, Newington, Lambeth."
                text3="I am a lodger in a boarding house, and am listed as a 'warehouseman.'"
                url="https://maps.nls.uk/view/103313045"
                src={picture1871}
                label2='Who did I live with?'
                url2={census1871}
                src2={census1871}
             
                relatives={relatives1871}
                                />
          </li>

          <li className='cards__item'>
            <MarriageSection  url='https://www.google.co.uk/maps/place/Steyning/@50.8878973,-0.3456301,14z/data=!3m1!4b1!4m5!3m4!1s0x487591457ce92619:0xa63c863476cdf7e5!8m2!3d50.887403!4d-0.326676?hl=en-GB&authuser=0' label='Marriage' src={marriage1873} text="I got married to my first wife, Annie Maria Richmond in the autumn of 1873, in Steyning, Sussex, probably at St Andrew and St Cuthman's Church."
            text2="In 1871 Annie is listed as a parlour maid living in at 51 Burt(?) Gate, Knightsbridge home of a merchant, his family, and ten servants." />

            <MarriageSection  text="Annie and I had two daughters together."
            text2="Kate Mary Susannah Marten in July 1875, registered in Kennington."
            text3="Gertrude Medwin Marten in January 1877, registered in Poplar." 
            src={victorianPoplar}
            label='Children'
            />
            
            <DeathSection  url={deathRecord} label='Death of first wife' src={deathRecord} text='Annie died in the summer of 1878, in Poplar.'/>
          </li>

          <li className='cards__item'> 
            <MarriageSection  url={marriage1880} label='Marriage' src={marriageChurch1880} text="I married to my second wife, Selina McNaught on the 17th July 1880 at Saint Brides Church, Liverpool."
            text2="Why I had moved to Liverpool remains a mystery."
            text3="My new wife Selina was aged 19 so had to have her mother's consent to marry."
             />

             <MarriageSection  url='https://www.google.com/maps/place/129+Duke+St,+Liverpool+L1+4JR/@53.4012155,-2.9818034,17z/data=!3m1!4b1!4m5!3m4!1s0x487b2126942507b5:0x36b0c8ee67c09261!8m2!3d53.4012155!4d-2.9796147?hl=en-GB' label='Marriage' src={marriageHome1880} 
             text="On the marriage record we are both listed as living at 129 Duke street, Liverpool." text2="This was a boarding house run by Selina's brother-in-law, so likely we met at the boarding house when I moved to Liverpool. " 
             text3="Interestingly, I list my father's rank or profession as 'Gentleman'." />
          </li>

          <li className='cards__item'> 
          
             <CensusSection 
             label='1881 Census'
             text="In 1881 we lived at 6 Wellington Terrace, Tranmere, Birkenhead."  
             text2=""
             url="https://www.google.com/maps/place/6+Wellington+Terrace,+Birkenhead+CH41+2TB/@53.3847234,-3.0252681,15z/data=!4m5!3m4!1s0x487b2717627d99d3:0x461cfc3b97836b10!8m2!3d53.384748!4d-3.0262961://www.google.com/maps/place/6+Wellington+Terrace,+Birkenhead+CH41+2TB/@53.3847234,-3.0252681,15z/data=!4m5!3m4!1s0x487b2717627d99d3:0x461cfc3b97836b10!8m2!3d53.384748!4d-3.0262961"
             src={censusMap1881}

             label2='Who did I live with?'
              url2={census1881}
             src2={census1881}
          
             relatives={relatives1881}
                            />
          </li>

          <li className='cards__item'> 

              <InfoSection url={electoralRegister1889} label='Electoral Register' src={electoralRegister1889} text='In 1889 I am on the electoral register which shows we had moved house, over the River Mersey to 6 Ponsonby Street, Toxteth' text2='(since demolished, between Cawdor and Eversley Street on modern maps). '/>
  
              <CensusSection 
              label='1891 Census'
              text='In 1891 were still living at 6 Ponsonby Street, Toxteth.'
              url='https://maps.nls.uk/view/101104295'
              src2={census1891}
              label2='Who did I live with?'
              url2='https://www.google.com/maps/place/Ponsonby+Street/@53.3938342,-2.955199,18z/data=!4m13!1m7!3m6!1s0x487b20fcceadfac9:0x6869ee89af0503d1!2sCawdor+St,+Liverpool!3b1!8m2!3d53.3935828!4d-2.9564909!3m4!1s0x0:0x443ca74ffdcde922!8m2!3d53.394255!4d-2.9549816'
              src={censusMap1891}
         
              relatives={relatives1891}
                />
            </li>

          <li className='cards__item'> 
                
                <CensusSection 
               label='1901 Census'
               text="In 1901 we had moved house again. This time to 79 Crosby Road South, in Seaforth, Liverpool."
               url='https://www.google.com/maps/place/Riverslie+Rest+Home,+79+Crosby+Rd+S,+Seaforth,+Liverpool+L21+1EW/@53.4672705,-3.0180227,17z/data=!4m5!3m4!1s0x487b246e2be151bd:0xd9b77a3afd87f0b0!8m2!3d53.4675867!4d-3.0174863'
              src={house1901}
               label2='Who did I live with?'
               url2={census1901}
               src2={census1901}
           
               relatives={relatives1901}          
                 />

             <DeathSection  url={deathRecord} label='Death' src={deathRecord} text='I lived to age 62, and died on the 19th October 1907.'/>
            </li>

          <li className='cards__item'> 
            
    
             <LifeSummarySection  url={freedomOfLondon} label='What happened next?' src={freedomOfLondon} text="My oldest brother Alfred lived in Hamstead and became a shorthand writer."
            text2="He had a number of children who remained living with him well into adulthood, - including Afred E, who became a dental surgeon, and Frank R, a solicitor in the India Office." text3="Another of his sons, Herbert Walter a chartered accountant, was granted the Freedom Of the City of London in 1912."/>

            <LifeSummarySection  url={walterCensus1871} label='What happened next?' src={walterCensus1871} text="My brother Walter Solomon married in Surrey, and then moved abroad."
            text2="One of his children's birth's is registered in Ontario, Canada, and another in Dresden, Germany." text3="His son Frank Walter was a surveyor and estate agent and was also granted the Freedom Of the City of London in 1919."
            text4="Walter seems to have died in 1890 in Yokohamma, Japan."/>
            </li>

          <li className='cards__item'> 
<LifeSummarySection  label='What happened next?'
url='https://en.wikipedia.org/wiki/Hatmaking'
src={milliner}
text='My sister Mary Maria was a milliner.'
text2="She married in July 1872 at age 23."
text3="She died in October 1872."

/>
           <LifeSummarySection 
label='What happened next?'
url={bernardCensus}
src={bernardCensus}
text="
My youngest brother Bernard H became a commercial clerk, and seems to be living in at the textile factory he was working for in 1881, 3 Paternoster Buildings, City of London, owned by Hitchcock and Williams."
text2="It's likely he emigrated and there is possibly an obituary for him in America." 

/>
</li>
   <li className='cards__item'> 
<LinkSection label="Richard Marten 1816-1884" to='/RichardMarten' src={birthPic}/>
  <LinkSection label="Susannah Solomon 1811-1892" to="/SusannahSolomon"src={birthPic2}/>
</li>

  <Button classname='btns'/>    </div>
    </div>
    
    </div>
</>
  );
}


export default TJMPersonMaster;