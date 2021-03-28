import React from 'react';
import '../App.css'
import IntroSection from '../Components/IntroSection'
import BirthSection from '../Components/BirthSection'
import CensusSection from '../Components/CensusSection'
import MarriageSection from '../Components/MarriageSection'
import DeathSection from '../Components/DeathSection'
import LifeSummarySection from '../Components/LifeSummarySection'
import LinkSection from '../Components/LinkSection'

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
import charlesNavy from '../Assets/BAMarten/GeorgeNavy.png'


import picture1871 from '../Assets/TJMarten/1871Picture.jpg'
import pubGirl from '../Assets/SMcNaught/1871Pub.jpeg'
function BAMPersonMaster() {
const relatives1891 = ['my father Thomas, 45, an insurance agent', 'my mother Selina, listed as 28', 'my two older half sisters - Gertrude 16, and Mary 15', 'I am listed as age 9 and a Scholar', 'my younger brother Frederick, 5, and also listed as a scholar']
const relatives1901 = ["my father Thomas, 56 an, 'agent for the Gresham assurance society'", 'my mother Selina, 39', 'my older half sister Kate, 24', "I am 19 and a 'shorthand and type writer'", "my brother Frederick, 16, 'assistant to ghast collector'", 'my youngest brother Charles, 9' ]
const relatives1911 = ["my husband George, 34, who was a 'bookkeeper for the district council'", 'I am 29', 'our son Donald Graham, 2, who is your great-grandfather', 'our youngest son George, aged 1']

  return (
 <>   <div className="title"> 
    <h1> Beatrice Annie Wilkinson </h1>
    <h2> (nee Marten) </h2>
    <h4> 1882-1938 </h4> 
 </div>
  
    <div className="cards"> 
  
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
       <li className='cards__item'>
          <IntroSection label='who am I?' text='My name is Beatrice and I am your great-great-grandmother.' src={familyTree} url={familyTree}/>


          <BirthSection 
          url='https://maps.nls.uk/view/102340990'
          text="I was born at 6 Wellington Terrace, Tranmere, Birkenhead on 10 May 1881. 
          " 
          text2='I was the first child from the marriage of my father Thomas, (who was 35 and an Insurance Agent), and my mother Selina, (who was 20).'
          text3= "My father had been married before; he was a widower with two young daughters when he married my mother." 
          src={birthMap1862}
          label='Birth'
          label2='Birth'
          url2="https://www.google.com/maps/place/6+Wellington+Terrace,+Birkenhead+CH41+2TB/@53.3847234,-3.0252681,15z/data=!4m5!3m4!1s0x487b2717627d99d3:0x461cfc3b97836b10!8m2!3d53.384748!4d-3.0262961://www.google.com/maps/place/6+Wellington+Terrace,+Birkenhead+CH41+2TB/@53.3847234,-3.0252681,15z/data=!4m5!3m4!1s0x487b2717627d99d3:0x461cfc3b97836b10!8m2!3d53.384748!4d-3.0262961" 
          text4="My middle name Annie is the name of my father's late first wife, my half sisters' mother, Annie Maria Marten."
          text5="My half sister Kate was age 6 when I was born, and Gertrude was 5."
        
          src2={birthMap}
          />
          </li>
    
        <li className='cards__item'> 
          <CensusSection 
          label='1891 Census'
          text='In 1891 I was aged 9 and we had moved house, over the River Mersey to 6 Ponsonby Street, Toxteth (since demolished, between Cawdor and Eversley Street on modern maps).'
          url='https://maps.nls.uk/view/101104295'
          src={censusMap1891}
          
          src2={census1891}
          label2='Who did I live with?'
          url2={census1891}
         
          relatives={relatives1891}
          
          />
          </li>

    <li className='cards__item'> 
          <CensusSection 
          label='1901 Census'
          text="In 1901 I was aged 19 and we had moved house again. This time to 79 Crosby Road South, in Seaforth, Liverpool."
          url='https://www.google.com/maps/place/Riverslie+Rest+Home,+79+Crosby+Rd+S,+Seaforth,+Liverpool+L21+1EW/@53.4672705,-3.0180227,17z/data=!4m5!3m4!1s0x487b246e2be151bd:0xd9b77a3afd87f0b0!8m2!3d53.4675867!4d-3.0174863'
          src={house1901}
          label2='Who did I live with?'
          url2={census1901}
          src2={census1901}
        
          relatives={relatives1901}
          
          />



    <MarriageSection  url={marriageRecord} label='Marriage' src={marriageRecord} text='I got married during the summer of 1906, somewhere near my home.' text2='I was aged 25, and my husband George Wilkinson was 29 and book-keeper for the district council.' />

          </li>
              <li className='cards__item'>
<CensusSection 
                
                label='1911 Census'
                text="In 1911 I was aged 29, and lived at 11 Ashdale Road Waterloo." 
                text2="This is our house in the middle, with the brown front door."
                url='https://www.google.com/maps/place/11+Ashdale+Rd,+Waterloo,+Liverpool+L22+9QX/@53.4785408,-3.0299741,17z/data=!3m1!4b1!4m5!3m4!1s0x487b2461119482bd:0x3272ca0641f5412c!8m2!3d53.4785408!4d-3.0277854'
                src={house1911}
                label2='Who did I live with?'
                url2={census1911}
                src2={census1911}
              
                relatives={relatives1911}
                
                />

  
    <DeathSection  url={deathRecord} label='Death' src={deathRecord} text='I lived to age 58, and died in 1938.'/>
    </li>

<li className='cards__item'> 
    <LifeSummarySection  label='What happened next?' src={deathRecord} text="My oldest half-sister Kate remained living with my mother Selina until Kate's death in 1928."
    text2="My sister Gertrude married George Eastwood, a bicycle salesman, in 1898. They had two children and remained living in Cheshire."

/>

<LifeSummarySection 
label='What happened next?'

src={fredJob}
text='My brother Fred became an engineer, and his name appears on crew lists in the ports of Sydney and New York.'
text2="He died in 1928 at home in West Derby."

/>

           <LifeSummarySection 
label='What happened next?'
url={charlesNavy}
src={charlesNavy}
text="
My brother Charles began his career as a shipping clerk." text2="Aged 16 he he enrolled in the merchant navy, but he only lasted 8 months before his indenture was cancelled." text3="He married and moved to Horseforth, Leeds, where he is living on the 1939 register."
text4="He is listed as a clerk for a soap manufacturer. He and his wife Annie had two children, and our mother Selina was living with them in 1939." 
text5="He died in 1962 at the Wharfdale hospital in Otley."
/>

</li>
<li className='cards__item'> 

<LinkSection 
to='/ThomasJohnMarten'
src={picture1871}
label="Thomas John Marten 1844-1907" />

<LinkSection 
src={pubGirl}
to='/SelinaMcNaught'
label="Selina McNaught 1861-1947" />
</li>

 
    </div>
    </div>
    
    </div>
</>
  );
}

export default BAMPersonMaster;
