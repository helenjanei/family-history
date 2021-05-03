import React from 'react';
import '../../App.css'
import IntroSection from '../../Components/IntroSection'
import BirthSection from '../../Components/BirthSection'
import CensusSection from '../../Components/CensusSection'
import MarriageSection from '../../Components/MarriageSection'
import DeathSection from '../../Components/DeathSection'

import LinkSection from '../../Components/LinkSection' 
import tree from '../../Assets/BKnowles/BKnowlesTree.png'
import birthRecord from '../../Assets/BKnowles/birthRecord.png'
import birthMap from '../../Assets/BKnowles/birthMap.png'
import weddingPic from '../../Assets/BKnowles/weddingPic.jpeg'
import weddingRecord from '../../Assets/BKnowles/weddingRecord.png'
import census1841 from '../../Assets/BKnowles/1841census.png'
import censusMap1841 from '../../Assets/BKnowles/1841censusMap.png'

import census1851 from '../../Assets/MKnowles/1851census.png'
import censusMap1851 from '../../Assets/TPollardSr/1851censusMap.png'
import census1861 from '../../Assets/MKnowles/1861census.png'
import censusMap1861 from '../../Assets/TPollardSr/1861censusMap.png'
import censusPic1871 from '../../Assets/TPollardSr/1871censusPic.jpg'
import census1871 from '../../Assets/TPollardSr/1871census.png'
import oldClitheroe from '../../Assets/BKnowles/oldClitheroe.jpg'
import deathCirt from '../../Assets/AHallworth/deathCirt.jpg'
import censusHouse1881 from '../../Assets/BKnowles/1881censusHouse.png'
import census1881 from '../../Assets/BKnowles/1881census.png'
import deathPic from '../../Assets/BKnowles/deathPic.jpg'


function BKsPersonMaster() {
  const relatives1841 = ['Myself 25, block printer', "Ann, 25" , 'Dorothy, 1']

  const relatives1851 = ['Myself, 36, a block printer', "Ann, 25" , 'Dorothy, 11, teaser at a print works', 'Alice, 9, scholar', 'Ester, 7, scholar', "Mary, 5, scholar"]

 const relatives1861 = ['Myself 46, a block printer', " Anne, 46", 'Dorothy, 21, cotton weaver', "Alice, 19, cotton weaver", "Esther Ann, cotton weaver", "Mary, 15, cotton weaver", "Jane, 6, scholar"]

 const relatives1871 = ["Myself 56, a block printer", "Anne, 56, housekeeper", "Dorothy, 30, weaver cotton", "Jane, 16, weaver cotton", "Mary, 25, weaver cotton", "My husband Thomas, 23, joiner"]

 const relatives1881 = ["Myself 66, a block printer", "John Thornber, son-in-law, 43, weaver cotton", "Alice, 39", "Jane, 26, weaver cotton"]

  return (
  <div className="cards"> 
    <h1> Bury Knowles </h1>
    <h4> 1815-1889 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Bury and I am your great-great-great-great-grandfather' src={tree} url={tree}/>


            <BirthSection 
            text='I was born in 1815 in Darwen (called Over Darwen at the time of my birth), a town just south of Blackburn, Lancashire.'
            url="https://maps.nls.uk/view/102343973" 
            src={birthMap}
            label='Birth'
          
            url2={birthRecord}
            text4="My father was Hugh Knowles, a dyer, and my mother was Mary nee Bury."
            text5="I was the first of my parents' six children."
          
            label2='Birth'
            src2={birthRecord}
            />
          </li>
    
          <li className='cards__item'> 
            <MarriageSection label='Marriage' text='I married my wife, Ann Hallworth, on the 10th December 1838 at Whalley Church, in Whalley, Lancashire. We were both aged 23.' text3="Ann is listed as being a weaver, and her father John as a calico printer." text4="I am listed as being a calico printer and my father Hugh a dyer."  src={weddingPic} url={weddingRecord}/>
<CensusSection 
            label='1841 Census'
            text='In 1841 I was aged 25 and am living in Low Moor, near Clitheroe, Lancashire with my wife and our first child Dorothy.'
        
            
            url='https://maps.nls.uk/view/102343904'
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
            text='In 1851 I was aged 35 and my family are living at 10 Barrow Row, which may have been in Wiswell, or Barrow, or somewhere in between, Lancashire.'
           
            
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
            text='In 1861 I was aged 45 and my family are living at 92 Shaw Bridge, Clitheroe, Lancashire.'
           
            url='https://maps.nls.uk/view/102343928'
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
            text="In 1871 I was aged 56 and am living with my family 62 Wilkin street, Clitheroe."

            url='https://en.wikipedia.org/wiki/List_of_mills_in_Clitheroe'
            src={censusPic1871}

            src2={census1871}
            label2='Who did I live with?'
            url2={census1871}
          
             relatives={relatives1871}       
            />
 <DeathSection label='Death' text='My wife Ann died in 1879 at the age of 65.' text2="Her residence at time of her death is given as Hall Street, Clitheroe." src={oldClitheroe} url={deathCirt} />   
          </li>
 <li className='cards__item'> 

            <CensusSection 
            label='1881 Census'
            text='In 1881 I was aged 66 and my family are living at 28 Hall Street, Clitheroe.'
            url='https://www.google.com/maps/place/28+Hall+St,+Clitheroe+BB7+1HJ/@53.8655973,-2.3954333,17z/data=!3m1!4b1!4m5!3m4!1s0x487b9b5d790c967f:0x2e002b0e81a4aee8!8m2!3d53.8655973!4d-2.3932446'
            src={censusHouse1881}

            src2={census1881}
            label2='Who did I live with?'
            url2={census1881}
          
             relatives={relatives1881}       
            />
            <DeathSection label='Death' text='I died in 1889 at the age of 74. My residence at the time is given as Hall street, Clitheroe.' src={deathPic} url="http://victoriancalendar.blogspot.com/2011/03/march-19-1891.html"/>    
          </li>

   <li className='cards__item'> 
<LinkSection label="Hugh Knowles 1791-1869" to='/HughKnowles' />
  <LinkSection label="Mary Burry 1790-1870" to="/MaryBury"/>
</li>

 
    </div>
    </div>
    
    </div>

  );
}


export default BKsPersonMaster; 