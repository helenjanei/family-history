import React from 'react';
import '../App.css'
import IntroSection from '../Components/IntroSection'
import BirthSection from '../Components/BirthSection'
import CensusSection from '../Components/CensusSection'
import MarriageSection from '../Components/MarriageSection'
import InfoSection from '../Components/InfoSection'
import DeathSection from '../Components/DeathSection'
import Button from '../Components/Button'
import birthPic from '../Assets/HSolomon/birthPic.jpg'
import birthPic2 from '../Assets/HSolomon/birthPic2.jpg'
import familyTree from '../Assets/HSolomon/familyTree.png'
import marriageRecord from '../Assets/HSolomon/marriageRecord.png'
import birthPic3 from '../Assets/SSolomon/birthPic.jpg'
import birthPic4 from '../Assets/SSolomon/birthPic2.jpg'
import taxRecord1814 from '../Assets/HSolomon/1814taxRecord.png'
import census1841 from '../Assets/HSolomon/1841census.png'
import censusMap1841 from '../Assets/HSolomon/1841censusMap.png'
import deathRecord from '../Assets/HSolomon/deathRecord.png'






import baptism from '../Assets/SSolomon/baptism.png'
import weddingMap from '../Assets/SSolomon/weddingMap.png'
import birthCert from '../Assets/TJMarten/birthCirt.png'
import census1851 from '../Assets/TJMarten/1851Census.png'
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

function HSPersonMaster() {

  
const relatives1841 = ['Myself, 70, Tailor', 'My daughter Susannah Marten(?), 25', "My daughter Anne, 18", "Elizabeth Solomon, 86", "Henry Moore, 25, Clerk", "J George 25, clerk", "Sophia George, 20", "Sophie George, 4", "Edmund George, 3", "George ?, 24", "Robert July(?), 48"]



  return (
  <div className="cards"> 
    <h1> Henry Solomon  </h1>
  
    <h4> 1771-1845 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Henry and I am your great-great-great-great-great-grandfather' src={familyTree} url={familyTree}/>


            <BirthSection url="" text="I was born in 1771 in Truro, Cornwall" text2="I was christened on the 7th June 1772 at St Mary's Church Truro, (which was torn down and replaced by Truro cathedral in 1880)." 
         
         src={birthPic}
            label='Birth'
            url="http://www.trurouncovered.co.uk/Religion_6506.aspx"
            
            src2={birthPic2}
           
            text4="My father was James Solomon, 40, and my mother was Mary nee Crossman, 34."
          text5="I was my parent's 14th child of 17. "
          text6="I have a twin brother, William, who shares his name with two of our older brothers who died before they were over a year old."
            label2='Birth'
            />
          </li>
    

          <li className='cards__item'>
            <MarriageSection  url={marriageRecord} label='Marriage' src={marriageRecord} 
             text="I married Susannah Dudman, 27, on the 17th September 1795, at St George, Hanover Square, London."
             text2="I was aged 24."
        />

           <BirthSection url="" text="Between 1796 and 1811 we had 6 children, three girls and two boys." 
            src={birthPic4}
            label='Children'
            
            url2='https://en.wikipedia.org/wiki/St_Clement_Danes'
            text4="The majority of the children were christened at St Clement Danes, the Strand, London."
            
            label2='Children'
            src2={birthPic3}
            />  <InfoSection url={taxRecord1814} label='Tax Record' src={taxRecord1814} text='In 1814 there is a tax record of my being a tenant at a property in Westminster, possibly on Newcastle Street, which no longer seems to exist. '/>
            </li>

<li className='cards__item'> 
<CensusSection 
           label='1841 Census'
            text="In 1841 I was aged 70 and I am living at number 5 Stanhope Street, Kings Cross, London (possibly! - and this is possibly the correct Stanhope street)" 
           url="https://www.google.com/maps/place/5+Stanhope+St,+Kings+Cross,+London+NW1+3RD/@51.5303819,-0.1407573,17z/data=!4m13!1m7!3m6!1s0x48761ad8aa675907:0x3f69adfb49aa707c!2s5+Stanhope+St,+Kings+Cross,+London+NW1+3RD!3b1!8m2!3d51.5304446!4d-0.1411814!3m4!1s0x48761ad8aa675907:0x3f69adfb49aa707c!8m2!3d51.5304446!4d-0.1411814"
           src={censusMap1841}

           label2='Who did I live with?'
           src2={census1841}
           url2={census1841}
          
           relatives={relatives1841}
           />

 <DeathSection  url={deathRecord} label='Death' src={deathRecord} text='I died on the 13th December 1845, at the age of 74.' text2="I am recorded as living at 7 Stanhope Street, Clare Market at the time of my death."
 text3="Clare Market is very close to St Clement Danes, however there is no Stanhope Street in the immediate vicinity on modern maps."/>
</li>



  <Button classname='btns'/>
    </div>
    </div>
    
    </div>

  );
}


export default HSPersonMaster;