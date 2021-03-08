import React from 'react';
import '../App.css'
import IntroSection from '../Components/IntroSection'
import BirthSection from '../Components/BirthSection'
import CensusSection from '../Components/CensusSection'
import MarriageSection from '../Components/MarriageSection'
import DeathSection from '../Components/DeathSection'
import LifeSummarySection from '../Components/LifeSummarySection'
import InfoSection from '../Components/InfoSection'
import LinkSection from '../Components/LinkSection' 
import Button from '../Components/Button'

import familyTree from '../Assets/TPollard/familyTree.png'
import birthMap from '../Assets/TPollard/birthMap.png'
import birthPic from '../Assets/TPollard/birthPic.jpg'
import censusMap1881 from '../Assets/TPollard/1881censusMap.png'
import census1881 from '../Assets/TPollard/1881census.png'
import censusHouse1891 from '../Assets/TPollard/1891censusHouse.png'
import census1891 from '../Assets/TPollard/1891census.png'


function TPPersonMaster() {
const relatives1881 = ['My father Thomas, 33, a joiner', 'My mother Mary, 35', 'My older brother John, 9, scholar', 'I am listed as age 6 and a Scholar', 'Catherine, 3', 'Esther Ann, 1.']

const relatives1891 = ["My father Thomas, 43, a 'calico printer engineer'", 'My mother Mary, 45', "My older brother John, 19, 'calico machine printer'", "I am listed 16 'Calico machine fuller'", "Catherine, 13, 'cotton weaver'", "Esther Ann, 11, scholar", "James, 7, scholar"]

  return (
  <div className="cards"> 
    <h1> Thomas Pollard </h1>
    <h4> 1875-1956 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Thomas and I am your great-great-grandfather' src={familyTree} url={familyTree}/>


            <BirthSection 
            text='I was born in 1875 in Westhoughton, a village to the west of Bolton.'
            url="https://maps.nls.uk/geo/explore/side-by-side/#zoom=14&lat=53.55176&lon=-2.51251&layers=1&right=BingHyb" 
            src={birthMap}
            label='Birth'
          
            url2='https://en.wikipedia.org/wiki/Westhoughton'
            text4="My father was Thomas Pollard, joiner (?), and my mother was Mary nee Knowles."
            text5="I was the second of my parents' five children."
          
            label2='Birth record'
            src2={birthPic}
            />
          </li>
    
          <li className='cards__item'> 

            <CensusSection 
            label='1881 Census'
            text='In 1881 I was aged 6 and my family are living at 87, Leigh Road, Westhoughton.'
            url='https://gm1914.wordpress.com/2014/11/13/westhoughton-celebrations-ox-roasts-and-keaw-yeds/'
            src={censusMap1881}

            src2={census1881}
            label2='Who did I live with?'
            url2={census1881}
          
             relatives={relatives1881}       
            />
          </li>
 <li className='cards__item'> 

            <CensusSection 
            label='1891 Census'
            text='In 1891 I was aged 16 and my family have moved along Leigh Road to number 384, Westhoughton.'
            text2="Ours is the white house in the middle, it doesn't look very roomy for seven people!"
            text3="It's likely my siblings were attending the school closest to us on Leigh road, now called St James' C of E Primary school, and still in the original building."
            url='https://www.google.com/maps/place/384+Leigh+Rd,+Westhoughton,+Bolton/@53.5383407,-2.5184981,17z/data=!3m1!4b1!4m5!3m4!1s0x487b08763796b285:0x9a6bed6b422b2298!8m2!3d53.5383375!4d-2.5163094'
            src={censusHouse1891}
          src2={census1891}
            label2='Who did I live with?'
            url2={census1891}
          
           
          
             relatives={relatives1891}       
            />
          </li>
     
   <li className='cards__item'> 
<LinkSection label="Richard Marten 1816-1884" to='/RichardMarten' />
  <LinkSection label="Susannah Solomon 1811-1892" to="/SusannahSolomon"/>
</li>

  <Button className='btns'/>
    </div>
    </div>
    
    </div>

  );
}


export default TPPersonMaster;