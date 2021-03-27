	import React from 'react';
import '../App.css'
import IntroSection from '../Components/IntroSection'
import MarriageSection from '../Components/MarriageSection'
import DeathSection from '../Components/DeathSection'
import InfoSection from '../Components/InfoSection'
import Button from '../Components/Button'
import birthPic from '../Assets/SPhillips/general-view-of-18th-century-liverpool-mary-evans-picture-library.jpg'
import familyTree from '../Assets/ABuchanan/familyTree.png'
import marriageRecord from '../Assets/ABuchanan/marriageRecord.png'
import children from '../Assets/ABuchanan/children.jpg'
import directory from '../Assets/ABuchanan/directory1821.png'
import pollBook from '../Assets/ABuchanan/pollBook1837.png'
import deathRecordSelina from '../Assets/ABuchanan/deathRecordSelina.png'


function SPPersonMaster() {
  return (
 <>   

 <div className="title"> 
    <h1> Selina Buchanan </h1>
    <h2> (nee Phillips) </h2>
     <h4> 1792-1839 </h4> 
  </div>
  
  <div className="cards"> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Selina and I am your great-great-great-great-great-grandmother.' src={familyTree} url={familyTree}/>
<InfoSection label="Birth"
url="" src={birthPic} text="I was born in 1792 in Liverpool." text2="Unfortunately, there is no record of my birth, or who my parents are." 
/>

           
          </li>
    
          <li className='cards__item'> 

          <MarriageSection  url={marriageRecord} label='Marriage' src={marriageRecord} text="I married my Husband, Andrew Buchanan on the 27th June 1813."
          text2="We married at St John's Church, Old Heymarket, Liverpool." text3="On the record of our marriage I have signed my name as 'Sena', likely becuase I am illiterate."
       
           />
<InfoSection label="Children" url="" src={children} text="I had seven children between the years of 1815 and 1831, five boys and two girls."/>
 </li>
    
          <li className='cards__item'> 
<InfoSection label="Gore's Directory of Liverpool" url={directory} src={directory} text="My husband's name appears often in the yearly directory." text2="Throughout he is listed as a baker" text3="From 1821 to 1829 my address is given as 18 Ausdell street, Liverpool, which no longer exists."/>

<InfoSection label="Poll Book" url={pollBook} src={pollBook} text="My husband's name appears in the copy of the polls for the general elections of 1837, 1841 ." text2="He is listed as paying rates on a warehouse on Shaws Alley, Toxteth, Liverpool." />


<DeathSection label="Death" src={deathRecordSelina} text="I died in the last quarter of 1839, aged 47." text2="Our youngest child Charles was aged 8, and we had four children under age 14 when she died."/>
 </li>
    
                 

        
    </div>
    </div>
    
    </div>
 </>

  );
}


export default SPPersonMaster;