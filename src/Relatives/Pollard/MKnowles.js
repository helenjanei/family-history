import React from 'react';
import '../../App.css'
import IntroSection from '../../Components/IntroSection'
import BirthSection from '../../Components/BirthSection'
import CensusSection from '../../Components/CensusSection'
import MarriageSection from '../../Components/MarriageSection'
import DeathSection from '../../Components/DeathSection'

import LinkSection from '../../Components/LinkSection' 


import familyTree from '../../Assets/MKnowles/familyTree.png'
import birthMap from '../../Assets/TPollardSr/birthMap.png'
import birthPic from '../../Assets/TPollardSr/birthPic.jpg'
import census1851 from '../../Assets/MKnowles/1851census.png'
import censusMap1851 from '../../Assets/TPollardSr/1851censusMap.png'
import census1861 from '../../Assets/MKnowles/1861census.png'
import censusMap1861 from '../../Assets/TPollardSr/1861censusMap.png'
import censusPic1871 from '../../Assets/TPollardSr/1871censusPic.jpg'
import census1871 from '../../Assets/TPollardSr/1871census.png'
import weddingPic from '../../Assets/MKnowles/clitheroe.jpg'
import censusMap1881 from '../../Assets/TPollard/1881censusMap.png'
import census1881 from '../../Assets/TPollard/1881census.png'
import censusHouse1891 from '../../Assets/TPollard/1891censusHouse.png'
import census1891 from '../../Assets/TPollard/1891census.png'

import census1901 from '../../Assets/TPollardSr/1901census.png'
import census1911 from '../../Assets/TPollardSr/1911census.png'
import townHall from '../../Assets/TPollardSr/Westhoughton_Town_Hall_front.jpg'
import westhoughton from '../../Assets/MKnowles/westHoughton.jpg'


function MKsPersonMaster() {

  const relatives1851 = ['My father Bury, 36, a block printer', "My mother Ann, 36, block printer's wife" , 'Dorothy, 11, teaser at a print works', 'Alice, 9, scholar', 'Ester, 7, scholar', "Myself, 5, scholar"]

 const relatives1861 = ['My father Bury, 46, a block printer', "My mother Anne, 46", 'Dorothy, 21, cotton weaver', "Alice, 19, cotton weaver", "Esther Ann, cotton weaver", "Myself, 15, cotton weaver", "Jane, 6, scholar"]

 const relatives1871 = ["My father Burry Knowles, 56, a block printer", "Anne, 56, housekeeper", "Dorothy, 30, weaver cotton", "Jane, 16, weaver cotton", "Myself Mary, 25, weaver cotton", "My husband Thomas, 23, joiner"]

  const relatives1881 = ['Thomas, 33, a joiner', 'Myself, 35', 'John, 9, scholar', 'Thomas, 6, Scholar', 'Catherine, 3', 'Esther Ann, 1.']

const relatives1891 = ["Thomas 43, a 'calico printer engineer'", 'Myself, 45', "John, 19, 'calico machine printer'", "Thomas, 16, 'Calico machine fuller'", "Catherine, 13, 'cotton weaver'", "Esther Ann, 11, scholar", "James, 7, scholar"]

const relatives1901 = ["Thomas, 53, mechanical engineer", 'Myself, 55', "John, 29, calico printer", "Esther Ann, 21, ?", "Alice, 19, ?", "James, 14, spinster?"]

const relatives1911 = ["Thomas, 63, mechanic engineering fitter for a calico printer'", 'Myself, 65', "Alice, 27, works at home", "James, 24, mechanic engineering fitter for a calico printer"]

  return (
  <div className="cards"> 
    <h1> Mary Knowles </h1>
    <h4> 1846-1912 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Mary and I am your great-great-great-grandmother' src={familyTree} url={familyTree}/>


            <BirthSection 
            text='I was born in 1846 in Whalley, a village in the Ribble Valley, Lancashire.'
            url="https://maps.nls.uk/view/102343928" 
            src={birthMap}
            label='Birth'
          
            url2='https://www.visitlancashire.com/explore/Whalley'
            text4="My father was Bury Knowles, a block printer, and my mother was Ann nee Hallworth."
            text5="I was the 4th of my parents' five children, all daughters."
          
            label2='Birth record'
            src2={birthPic}
            />
          </li>
    
          <li className='cards__item'> 

            <CensusSection 
            label='1851 Census'
            text='In 1851 I was aged 5 and my family are living at 10 Barrow Row, which may have been in Wiswell, or Barrow, or somewhere in between, Lancashire.'
            text2="In 1851 my future husband is living at 30 Barrow Row, he is aged 3."
            
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
            text='In 1861 I was aged 15 and my family are living at 92 Shaw Bridge, Clitheroe, Lancashire.'
           
            url='https://maps.nls.uk/view/102343928'
            src={censusMap1861}

            src2={census1861}
            label2='Who did I live with?'
            url2={census1861}
          
             relatives={relatives1861}       
            />
          </li>
<li className='cards__item'> 
<MarriageSection label='Marriage' text='I married my husband, Thomas Pollard, in the second quarter of 1869, in Clitheroe.'  text2="He was aged 21 and I was aged 22."src={weddingPic} url="https://www.theguardian.com/money/2019/feb/08/lets-move-to-clitheroe-ribble-valley-lancashire"/>

            <CensusSection 
            label='1871 Census'
            text="In 1871 I was aged 22 and my husband and I are living with my family."
            text2="We were living at 62 Wilkin street, Clitheroe."

            url='https://en.wikipedia.org/wiki/List_of_mills_in_Clitheroe'
            src={censusPic1871}

            src2={census1871}
            label2='Who did I live with?'
            url2={census1871}
          
             relatives={relatives1871}       
            />
          </li>
 <li className='cards__item'> 

            <CensusSection 
            label='1881 Census'
            text='In 1881 I was aged 32 and my family are living at 87, Leigh Road, Westhoughton.'
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
            text='In 1891 I was aged 42 and my family have moved along Leigh Road to number 384, Westhoughton.'
            text2="Ours is the white house in the middle, it doesn't look very roomy for seven people!"
            text3="It's likely my children were attending the school closest to us on Leigh road, now called St James' C of E Primary school, and still in the original building."
            url='https://www.google.com/maps/place/384+Leigh+Rd,+Westhoughton,+Bolton/@53.5383407,-2.5184981,17z/data=!3m1!4b1!4m5!3m4!1s0x487b08763796b285:0x9a6bed6b422b2298!8m2!3d53.5383375!4d-2.5163094'
            src={censusHouse1891}
          src2={census1891}
            label2='Who did I live with?'
            url2={census1891}
                       relatives={relatives1891} />  
                     
          </li>
      <li className='cards__item'> 

            <CensusSection 
            label='1901 Census'
            text="In 1901 I was aged 52 and I am living with my husband and children. We have moved down Leigh Road to number 446." text2="Our house is "
            url=''
            src={censusMap1881}

            src2={census1901}
            label2='Who did I live with?'
            url2={census1901}
          
             relatives={relatives1901}       
            />
          </li>    
      <li className='cards__item'> 
                      
            <CensusSection 
            label='1911 Census'
            text="In 1911 I was aged 65 and live with my wife and two adult children." text2="On the Census return we state that we have had 9 children, and 6 of them are still living."
src={townHall}
          
url='https://en.wikipedia.org/wiki/Westhoughton'
            src2={census1911}
            label2='Who did I live with?'
            url2={census1911}
          
             relatives={relatives1911}       
            />
            
            <DeathSection label='Death' text='I died in 1912 at the age of 65.' src={westhoughton} url="https://www.theboltonnews.co.uk/news/13808270.then-and-now-a-westhoughton-scene/#gallery0"/>    
          
           
          </li>
   <li className='cards__item'> 
<LinkSection label="Bury Knowles 1815-1889" to='/BuryKnowles' />
  <LinkSection label="Ann Hallworth 1814-1879" to="/AnnHallworth"/>
</li>

 
    </div>
    </div>
    
    </div>

  );
}


export default MKsPersonMaster; 