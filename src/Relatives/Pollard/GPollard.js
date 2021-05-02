import React from 'react';
import '../../App.css'
import IntroSection from '../../Components/IntroSection'
import BirthSection from '../../Components/BirthSection'
import CensusSection from '../../Components/CensusSection'
import MarriageSection from '../../Components/MarriageSection'
import DeathSection from '../../Components/DeathSection'
import LinkSection from '../../Components/LinkSection' 
import tree from '../../Assets/GPollard/GPollardTree.png'
import postcard from '../../Assets/GPollard/wiswellPostcard.png'
import pendle from '../../Assets/GPollard/1-pendle_sunset.jpeg'

import weddingRecord from '../../Assets/GPollard/marriageRecord.png'
import census1841 from '../../Assets/GPollard/1841census.png'
import censusHouse1841 from '../../Assets/GPollard/1841censusHouse.png'
import census1851 from '../../Assets/GPollard/1851census.png'
import censusHouse1851 from '../../Assets/GPollard/1851censusHouse.png'
import deathRecord from '../../Assets/GPollard/deathRecord.png'
import whalleyChurch from '../../Assets/GPollard/Whalley_church Choir Stalls.gif'


function GPPersonMaster() {

  const relatives1841 = ['Myself, 64, builder', "wife Isabella, 60", "Maria, 20", "Roger, 15", "Mary Watson, my married daughter, 30 (her husband is on a census in Blackburn as a labourer)", "Jemima Watson, granddaughter, 1" ]

  const relatives1851 = ['Myself, 74, joiner master employing 3 men', "Isabella, 72, domestic duties" , 'Roger, 28, joiner', 'Mary, granddaughter, 6, scholar']

 const relatives1861 = ['Myself, 61, a millwright at a cotton factory', "Catherine, 58", 'Isabella, 26, milliner and dress maker', "Thomas, 13, scholar", "Mary, 37, daughter-in-law, cotton factory worker"]

 const relatives1871 = ["Reuben Pursglowe, 62, farmer 6 acres and blacksmith", "Mary, 55", "Ann, 15, hat trimmer", "John Pollard, 71, millwright."]



  return (
  <div className="cards"> 
    <h1> George Pollard </h1>
    <h4> 1776-1861 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is George and I am your great-great-great-great-great-grandfather.' src={tree} url={tree}/>


            <BirthSection 
            text='I was born in 1776 in Wiswell, a village near Whalley in the Ribble Valley, Lancashire.'
           
            label='Birth'
          label2='Birth'
            src={postcard} url={postcard}
            
            text2="My father was John Pollard, a carpenter, and my mother was Elizabeth nee Speak. Both my parents come from ."
            text4="I was the sixth born of my parents' eight children." text5="They lost one daughter aged 3, and another daughter aged 11, but all the others survived into adulthood."
            src2={pendle} 
            />
          </li>
    
          <li className='cards__item'> 

            <MarriageSection label='Marriage' text='I married my wife, Isabella Whitaker, on the 6th August 1796, at St Mary and All Saints church, Whalley (Wiswell did not yet have its own church).'  text2="She was aged 15 and from Slaidburn, Yorkshire I was aged 19."src={weddingRecord} url={weddingRecord}/>
          
          
          <CensusSection 
            label='1841 Census'
            text='In 1841 I was aged 64 and my family are living in the village of Billington, near Whalley, Lancashire.'
            text2="Our address is given as Painter wood Row, but without a house number."

            url='https://maps.nls.uk/geo/explore/side-by-side/#zoom=15&lat=53.83957&lon=-2.40165&layers=1&right=BingHyb'
            src={censusHouse1841}

            src2={census1841}
            label2='Who did I live with?'
            url2={census1841}
          
             relatives={relatives1841}       
            />
          
 </li>

  <li className='cards__item'>           
          
          
            <CensusSection 
            label='1851 Census'
            text='In 1851 I was aged 74 and my family are living at 43 Old Road End, Billington, Lancashire.'
            text2="This could very well be the same house as on the previous census, as Old Road End could refer to the end of Whalley Old Road."
           text3="Being an employer of three men shows I was a successful man by the time of my old age."
            url='https://www.google.com/maps/place/43+Whalley+Old+Rd,+Billington,+Clitheroe/@53.8166114,-2.4142096,3a,90y,316.33h,88.4t/data=!3m6!1e1!3m4!1sreEdeBOusGQOjdMnlPilmQ!2e0!7i13312!8i6656!4m5!3m4!1s0x487b9c1274c24095:0x806fc6c132141b77!8m2!3d53.816694!4d-2.41431'
            src={censusHouse1851}

            src2={census1851}
            label2='Who did I live with?'
            url2={census1851}
          
             relatives={relatives1851}       
            />
                 
          
            <DeathSection label='Death' text='I died in 1861, at the age of 84.' text2="I was buried in the church yard at Whalley on the 30th March 1861." src={whalleyChurch} url={deathRecord}  />
          </li>
   <li className='cards__item'> 
<LinkSection label="John Pollard 1742-1816" to='/JohnPollard' />
  <LinkSection label="Elizabeth Speak 1741-1823" to="/ElizabethSpeak"/>
</li>

 
    </div>
    </div>
    
    </div>

  );
}


export default GPPersonMaster; 