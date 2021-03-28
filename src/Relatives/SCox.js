import React from 'react';
import '../App.css'
import IntroSection from '../Components/IntroSection'
import BirthSection from '../Components/BirthSection'
import MarriageSection from '../Components/MarriageSection'
import DeathSection from '../Components/DeathSection'
import InfoSection from '../Components/InfoSection'
import CensusSection from '../Components/CensusSection'
import censusMap1851 from '../Assets/TJMarten/1851censusMap.png'
import familyTree from '../Assets/JMarten/familyTree.png'
import birthPic from '../Assets/JMarten/birthPic.jpg'
import birthPic2 from '../Assets/JMarten/birthPic2.jpg'
import weddingPic from '../Assets/JMarten/800px-All_Saints_Church,_Lindfield_(NHLE_Code_1025462).jpeg'
import census1841 from '../Assets/JMarten/1841census.png'
import census1851 from '../Assets/SCox/1851census.png'
import census1861 from '../Assets/SCox/1861census.png'

function SCPersonMaster() {

const relatives1841 = ['My husband John, head, 62, Gardener', 'Myself, 62', 'My daughters Eliza, 30, dress maker', 'Ann, 27']

const relatives1851 = [ 'Myself, 72, Head', 'My daughters Eliza, 40, dress maker', 'Ann, 37, dressmaker ']
const relatives1861 = [ "My daughter, Sarah Ann Greenin, Head, widower, 'proprietor of houses'", "Myself, 82, 'supported by daughter'", "My daughter Mary Marten, 48, 'supported by sister' ", "Rebeccah Marten, my granddaughter, 14, 'general servant'"]
  return (
  <>
  
  <div className="title">
    
    <h1> Sarah Cox </h1>
    <h4> 1779-1846 </h4> 
    </div>
    <div className="cards"> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>

            <IntroSection label='Who am I?' text='My name is Sarah and I am your great-great-great-great-great-grandmother' src={familyTree} url={familyTree}/>


            <BirthSection url="" text="I was born 1779 in, Lindfield, Sussex." 
            src={birthPic}
            label='Birth'
          
     
            text4="My father was Henry Cox, and my mother was Sarah, nee Short."
          
          url2="https://en.wikipedia.org/wiki/Lindfield,_West_Sussex"
            label2='Birth'
            src2={birthPic2}
            />
          </li>
    
          <li className='cards__item'> 
  
   <MarriageSection  url='' label='Marriage' src={weddingPic} //change when wedding cirt for SS comes in
             text="On the 28th June 1800, at the age of 21 I married John Marten, 21, in Lindfield, Sussex." text2='My husband and I had 10 children over the course of 17 years, all of whom survived into old age.'
        /> 
       


        <CensusSection 
            label='1841 Census'
            text='In 1841 I was aged 62 and lived at ? street in Brighton.'
            
            src={censusMap1851}

            src2={census1841}
            label2='Who did I live with?'
            url2={census1841}
        
             relatives={relatives1841}       
            />
   </li>
    
          <li className='cards__item'> 

          <DeathSection  label='Death'  text='My husband died in 1846, in Brighton, at the age of 67.' />

  <CensusSection 
            label='1851 Census'
            text='In 1851 I was aged 72 and lived at 56 ? street, in Brighton.'
            
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
            text='In 1861 I was aged 82 and lived with my daughter at 56 ? street, in Brighton.'
            
            src={censusMap1851}

            src2={census1861}
            label2='Who did I live with?'
            url2={census1861}
        
             relatives={relatives1861}       
            />
<DeathSection  label='Death'  text='I died in 1865, in Brighton, at the age of 86.' />
</li>

<li className='cards__item'> 

<InfoSection label='Henry Cox 1753-?'  text="Born in Lindfield, Sussex." text2="Married Sarah Short in Lindfiled, Sussex in 1778." ext3="Seem to have only had one child."/>
<InfoSection label="Sarah Short 1756-?" text="Married Henry Cox in Lindfiled, Sussex in 1778." text2="Seem to have only had one child." />

 </li>


    </div>
    </div>
    
    </div>
</>
  );
}


export default SCPersonMaster;