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
import ShortInfoSection from '../Components/shortInfoSection'
import weddingPic from '../Assets/JMarten/800px-All_Saints_Church,_Lindfield_(NHLE_Code_1025462).jpeg'
import census1841 from '../Assets/JMarten/1841census.png'
import deathPic from '../Assets/JMarten/grounds.jpg'
import eastG from '../Assets/JMarten/removals-west-sussex-east-grinstead-300x200.jpg'
import hurst from '../Assets/JMarten/Hurstpierpoint_Church.jpg'
import hurst2 from '../Assets/JMarten/Church_from_west.jpg'
import ditch from '../Assets/JMarten/Ditchling-2764-s.jpg' 
import cuck from '../Assets/JMarten/cuck.jpg'
import cuck2 from '../Assets/JMarten/cuckfield.jpg'
import LinkSection from '../Components/LinkSection'


function JMPersonMaster() {

const relatives1841 = ['Myself, head, 62, Gardener', 'My wife Sarah 62', 'My daughters Eliza, 30, dress maker', 'Ann, 27']



  return (
<>   <div className="title">

    <h1> John Marten </h1>
    <h4> 1779-1846 </h4> 
</div>
  <div className="cards"> 
  
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>

            <IntroSection label='Who am I?' text='My name is John and I am your great-great-great-great-great-grandfather' src={familyTree} url={familyTree}/>


            <BirthSection url="" text="I was born 1779 in, Lindfield, Sussex." 
            src={birthPic}
            label='Birth'
          
     
            text4="My father was Thomas Marten, and my mother was Ann, nee Harland."
            text5="I was the second of my parents two children. I have a sister who is three years older than me."
          url2="https://en.wikipedia.org/wiki/Lindfield,_West_Sussex"
            label2='Birth'
            src2={birthPic2}
            />
          </li>
    
          <li className='cards__item'> 
  
   <MarriageSection   label='Marriage' src={weddingPic} //change when wedding cirt for SS comes in
             text="On the 28th June 1800, at the age of 21 I married Sarah Cox, 21, in Lindfield, Sussex." text2='My wife and I had 10 children over the course of 17 years, all of whom survived into old age.'
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


            
         

 <DeathSection  label='Death'  src={deathPic} text='I died in 1846, in Brighton, at the age of 67.' />
</li>

<li className='cards__item'> 

<InfoSection label='Thomas Marten 1740-1815 ' src={eastG} text="Born in East Grinstead, Sussex." text2="Married on 28 May 1769 in Horsted-Keynes, Sussex."text3="Had 2 children with his wife." text4="Lived to age 75." />


<InfoSection label="Ann Harland 1744-1805" src={hurst} text="Born in Hurstpierpoint, Sussex." text3="Had 2 children."  text4="Died aged 61." />

 </li>
 <li className='cards__item'> 

<InfoSection label="Henry Marten 1703-764" text="Born in Ditchling, Sussex." src={ditch} text2="Married in 1724 at the age of 21, in Pycombe, Sussex" text3="Had between 5 and 7 children with his wife" text4="Died at age 61." />

<InfoSection label="Mary Payne birth? - 1728?" text3="Gave birth to between 5 and 7 children." src={cuck2} />



<InfoSection label="Richard Harland 1711-1766" text="Born and died in Hurstpierpoint, Sussex." src={hurst2} text2="Married his first wife, Elizabeth Haslegrove in 1735, at the age of 24. They had one daughter before Elizabeth died in 1738, perhaps from childbirth." text3="Married Ann Juniper in 1738, they had 5 children together."  text4="Died aged 55."/>
<InfoSection label="Ann Juniper 1711-?" text2="Born in Cuckfield, Sussex." text3="Gave birth to 5 children over." src={cuck} />
 </li>

 

 <li className='cards__item'> 

<InfoSection label="Thomas Marten 1670-1720" text="Born in Frogbarrow in Ditchling, Sussex." text2="Married in 1691 age 21, in Maresfield, Sussex." text3="Had aprox four children and he died age 50." />
<InfoSection label="Jane Frisbee 1670-?" />



<InfoSection label="Francis Juniper 1686-1755" text="Born and died in Cuckfield, Sussex." text2="Had nine children with his wife." text3="Died aged 69"/>
<InfoSection label="Ann 1691-1760" text="Born and died in Cuckfield, Sussex." text2="Married at age 19 and gave birth to nine children over 18 years." text3="Died aged 69"/>
 </li>
 
 
 
 
 
 <li className='cards__item'> 

<InfoSection label="Micheal Marten 1637-1706" text="Born in Ardingly, Sussex and died in Ditchling, Sussex." text2="Married in Lewes, Sussex, in 1659 at age 22." text3="Had 7 children with his wife" text4="Died at age 69." />

<InfoSection label="Elizabeth Marchant 1639-1727" text="Born in Keymer Sussex, died in Warham, Sussex." text2="Gave birth to 7 children over 16 years." />



<InfoSection label="Francis Juniper 1665-1706." text="Born and died in Cuckfield, Sussex." text2="Had four children and died aged 41." />
<InfoSection label="Mary Collins 1668-1727." text="Born and died in Cuckfield, Sussex." text2="Married age 15 and had four children." text3="Died at age 59."/>
 </li>
 
 
 <li className='cards__item'> 

<InfoSection label="Micheal Marten 1605-1662" text="Born and died in Ardingly, Sussex." text2="Had six children and lived to age 57."  />

<InfoSection label="Katherine Jenner 1605-1662" text="Born in Cuckfield and died in Ardingly, Sussex." text2="Gave birth to 6 children and lived to age 57." />
<InfoSection label="Francis Juniper 1625-1679" text="Born and died in Cuckfield, Sussex." text2="Had four children and died aged 54." />
<InfoSection  label="Mary Harland 1627-1688" text="Born and died in Cuckfield, Sussex." text2="Had four children and died aged 61." />
 </li>




    </div>
    </div>
    
    </div>
</>
  );
}


export default JMPersonMaster;