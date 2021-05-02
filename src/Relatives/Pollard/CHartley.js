import React from 'react';
import '../../App.css'
import IntroSection from '../../Components/IntroSection'
import BirthSection from '../../Components/BirthSection'
import CensusSection from '../../Components/CensusSection'
import MarriageSection from '../../Components/MarriageSection'
import DeathSection from '../../Components/DeathSection'
import InfoSection from '../../Components/InfoSection'
import LinkSection from '../../Components/LinkSection' 
import CatherineHartleyCut from '../../Assets/CHartley/picOfCatherine (cut).jpg'
import CatherineHartley from '../../Assets/CHartley/picOfCatherine.jpg'
import birthMap from '../../Assets/CHartley/birthMap.png'
import birthRecord from '../../Assets/CHartley/birthRecord.png'
import graveStone from '../../Assets/JPollard/familyGrave.jpg'
import weddingRecord from '../../Assets/JPollard/marriageRecord.png'
import wiswellPub from '../../Assets/JPollard/WiswellPub.jpg'
import census1841 from '../../Assets/JPollard/1841census.png'
import censusMap1841 from '../../Assets/JPollard/1841censusMap.png'
import census1851 from '../../Assets/TPollardSr/1851census.png'
import censusMap1851 from '../../Assets/JPollard/1851censusMap.png'

import census1861 from '../../Assets/TPollardSr/1861census.png'
import censusMap1861 from '../../Assets/TPollardSr/1861censusMap.png'
import censusHouse1871 from '../../Assets/CHartley/1871censusHouse.png'
import census1871 from '../../Assets/CHartley/1871census.png'
import JohnJr from '../../Assets/JPollard/JohnJrCensusMap1871.png'
import JohnJrProbate from '../../Assets/JPollard/JpollardJrProbate.png'
import stockport from '../../Assets/JPollard/stockport.jpg'
import greatHucklow from '../../Assets/JPollard/greatHucklow.png'
import coffinRoute from '../../Assets/JPollard/coffinRoute.png'

function CHPersonMaster() {

  const relatives1841 = ['John, 40, mechanic', "Myself, 35", "George 13, Apprentice", "Richard, 10, apprentice", "William, 10", "James, 5", "John, 4", "Thomas, 7 months", "Isabella, 5", "Mary Hartley, 40, servant(?)", "Roger Hartley, 10"]

  const relatives1851 = ['John, 51, a millwright', "Myself, 48, millwright's wife" , 'William, 20, millwright', 'James, 18, engineer', 'Isabella, 16, scholar', 'John, 13, scholar', "Mary Jane, 8, scholar", "Thomas, 3"]

 const relatives1861 = ['John, 61, a millwright at a cotton factory', "Myself, 58", 'Isabella, 26, milliner and dress maker', "Thomas, 13, scholar", "Mary, 37, daughter-in-law, cotton factory worker"]

 const relatives1871 = ["Myself, 68, house wife", "Newton Aspden, my son-in-law, 30, cotton cloth ??", "Mary Jane Aspden, my daughter, 28, Draper in cotton factory?"]



  return (
  <div className="cards"> 
    <h1> Catherine Hartley </h1>
    <h4> 1803-1877  </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Catherine and I am your great-great-great-great-grandmother.' src={CatherineHartleyCut} url={CatherineHartley}/>


            <BirthSection 
            text='I was born in 1803 in Whalley in the Ribble Valley, Lancashire.'
            url="https://maps.nls.uk/view/102343928" 
            src={birthMap}
            label='Birth'
          
            url2={birthRecord}
            text4="My father was Richard Hartley, a weaver, and my mother was Millicent nee Yates."
            text5="I was the seventh born of my parents' eight children."
          
            label2='Birth record'
            src2={birthRecord}
            />
          </li>
    
          <li className='cards__item'> 
 
            <MarriageSection label='Marriage' text='I married my Husband, John Pollard, on the 19th May 1823, at St Mary and All Saints church, Whalley.'  text2="He was aged 23 and from Wiswell, I was aged 20."src={weddingRecord} url={weddingRecord}/>
           
            <InfoSection label="Children" text="Between 1825 and 1848 my husband and I had 11 children. Many of the names come from both my wife's and my family." text2="We lost our first daughter Millicent (named after my wife's mother), before she was a year old." text3="She, along with the other children we lost in childhood, (John 4, Catherine 9mo and Thomas 1), are buried with my husband and I in Whalley church yard." src={graveStone} url={graveStone}/>
 </li>

  <li className='cards__item'> 
          
          <CensusSection 
            label='1841 Census'
            text='In 1841 I was aged 37 and my family are living at Barrow Bridge, Wiswell, Lancashire.'
            text2="Along with my family, we also have Mary Hartley living with us, who is likely my sister."
            text3="There is also a Roger Hartley, age 10, living with us. Perhaps one of my nephews. Strangely it seems to state 'Inmate' next to his entry."
            url='https://maps.nls.uk/geo/explore/side-by-side/#zoom=15&lat=53.83957&lon=-2.40165&layers=1&right=BingHyb'
            src={censusMap1841}

            src2={census1841}
            label2='Who did I live with?'
            url2={census1841}
          
             relatives={relatives1841}       
            />
          
          
           </li>

  <li className='cards__item'> 
          
          
            <CensusSection 
            label='1851 Census'
            text='In 1851 I was aged 48 and my family are living at 30, Barrow Row, Wiswell, Lancashire.'
            text2="My husband's occupation is still given as Millwright, as is my son William's."
            text3="Given our address, it's likely he and our sons worked at the Barrow Bridge Print Works. "
            url='https://maps.nls.uk/view/102343928'
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
            text="My family and I are now living at 372 Spring Gardens, Clitheroe, Lancashire."
            text2="In the censuses [for Wiswell] from 1801 to 1841, the population rose sharply and stabilised between 1841 and 1851 at about 750 people. Following this the population declined sharply to about 420 in 1871." text3="The change in population in the 1850s was dramatic. It seems likely that the Barrow Print Works closed for a time after 1851 or at least significantly reduced its workforce." text4="Notes in the 1861 census highlight 'a decrease in the population of the Townships of Wiswell and Whalley which is attributed to the discontinuance of employment in the Printworks.'"
           
            url='https://en.wikipedia.org/wiki/Wiswell'
            src={censusMap1861}

            src2={census1861}
            label2='Who did I live with?'
            url2={census1861}
          
             relatives={relatives1861}       
            />
          </li>
<li className='cards__item'> 

            <CensusSection 
            label='1871 Census'
            text="In 1871 I was aged 68 and I am living as head of the house with my son-in-law and daughter."
            text2="My Husband is on a different census in Stockport, it is likely he has had to travel for work." 

            url='https://maps.nls.uk/view/102344842'
            src={censusHouse1871}

            src2={census1871}
            label2='Who did I live with?'
            url2={census1871}
          
             relatives={relatives1871}       
            />
                   <InfoSection label='Stockport' src={stockport} text='In 1871 my son John is living at 1 Eliza Street, Stockport, with his wife and family. He is listed as a millwright like myself.' text2="Perhaps it is through him I came to take a job in Stockport, away from my wife." text3="Similarly, many of my other children have moved away from Clitheroe, perhaps indicating that there weren't many employment opportunities in Clitheroe at the time." url='https://en.wikipedia.org/wiki/Stockport'/> 
                   
  </li>
<li className='cards__item'> 

<InfoSection label='Where are our children?'  text="George has 9 children and is living at 12 Trumble? Road, Great (Hucklow?), Derbyshire and is a Millwright at a print works." text2="William has 6 children and is living at 32 Trumble Road, Great, Derbyshire, and is also listed as a Millwright at a printworks."text3="James has five children and is living at 52 Ann Street in Burnley, as a Pallisade maker." text4="Isabella is living at 131 York Road, in Rochdale. She is listed as a milliner and dress maker and is married to a draper ten years younger than herself." src={greatHucklow} url='https://maps.nls.uk/view/101600343'/> 

<InfoSection label='Where are our children?'text="Only our youngest two children, Thomas and Mary Jane are still living in Clitheroe in 1871. Thomas lives with his wife's parents and Mary Jane lives with her husband and myself, her mother." text2="However, by the 1881 census Thomas has moved to Westhoughton. Mary Jane is the only one of our seven children to remain in Clitheroe, her husband Newton Aspen is listed in 1881 was being a coal wharehouse(?) employing three men." text3="It would seem our children remained in close contact as in 1886 John died in Stockport, and his two brothers George and WIlliam, both of Hayford Derbyshire as his executors." src={JohnJrProbate}/> 
 </li>
<li className='cards__item'> 
                   <InfoSection label='Portraits' text="The portrait photographs of my Husband and I seem to have been taken in our later age. It is unusual for people of our background to have our photographs taken at this time." text2="Perhaps the portraits were taken before I departed for Stockport in order that we could have a photograph of each other whilst apart." src={JohnJr} url='https://maps.nls.uk/view/102340981'/>
          
            <DeathSection label='Death' text='My husband died in 1874, at the age of 74.' text2="He died in Romiley, Cheshire, however I was buried in the church at Whalley on the 2nd September 1874." url={coffinRoute} src={coffinRoute} /> 

            <DeathSection label='Death' text='I died in 1877, at the age of 74.' text2="I was buried with my husband and four of my children in Whalley Church." url='https://stmaryandallsaints.wixsite.com/whalleypc2'src={graveStone}/>
          </li>
   <li className='cards__item'> 
<LinkSection label="Richard Hartley 1762" to='/RichardHartley' />
  <LinkSection label="Millicent Yates 1768-1828" to="/MillicentYates"/>
</li>

 
    </div>
    </div>
    
    </div>

  );
}


export default CHPersonMaster; 