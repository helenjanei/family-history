import React from 'react';
import '../../App.css'
import IntroSection from '../../Components/IntroSection'
import BirthSection from '../../Components/BirthSection'
import CensusSection from '../../Components/CensusSection'
import MarriageSection from '../../Components/MarriageSection'
import DeathSection from '../../Components/DeathSection'

import InfoSection from '../../Components/InfoSection'
import LinkSection from '../../Components/LinkSection' 


import familyTree from '../../Assets/TPollard/familyTree.png'
import birthMap from '../../Assets/TPollard/birthMap.png'
import birthPic from '../../Assets/TPollard/birthPic.jpg'
import censusMap1881 from '../../Assets/TPollard/1881censusMap.png'
import census1881 from '../../Assets/TPollard/1881census.png'
import censusHouse1891 from '../../Assets/TPollard/1891censusHouse.png'
import census1891 from '../../Assets/TPollard/1891census.png'
import weddingMethodist from '../../Assets/TPollard/weddingPic.jpg'
import printHouse from '../../Assets/TPollard/printHouses.jpg'
import census1901 from '../../Assets/TPollard/1901cencus.png'
import census1911 from '../../Assets/TPollard/1911census.png'
import censusHouse1911 from '../../Assets/TPollard/1911house.png'
import house1939 from '../../Assets/TPollard/1939house.png'
import register1939 from '../../Assets/TPollard/1939register.png'
import alice from '../../Assets/TPollard/alice.png'
import james from '../../Assets/TPollard/james.jpg'
import westhoughtonPreWar from '../../Assets/TPollard/westhoughtonPreWar.jpg'
import rochford from '../../Assets/TPollard/rochford.jpg'
import birthPic2 from '../../Assets/TPollardSr/birthPic.jpg'
import weddingPic from '../../Assets/MKnowles/clitheroe.jpg'
import probate from '../../Assets/TPollard/probate.png'
import TPollardJrGrave from '../../Assets/TPollard/TPJrGrave.jpeg'
import radcliffe from '../../Assets/TPollard/radcliffe.jpg'

function TPPersonMaster() {
const relatives1881 = ['My father Thomas, 33, a joiner', 'My mother Mary, 35', 'My older brother John, 9, scholar', 'I am listed as age 6 and a Scholar', 'Catherine, 3', 'Esther Ann, 1.']

const relatives1891 = ["My father Thomas, 43, a 'calico printer engineer'", 'My mother Mary, 45', "My older brother John, 19, 'calico machine printer'", "I am listed 16 'Calico machine fuller'", "Catherine, 13, 'cotton weaver'", "Esther Ann, 11, scholar", "James, 7, scholar"]

const relatives1901 = ["Myself, 26, a 'mechanic - calico print works'", 'Amelia, 27', "Thomas, 7", "Ivy, 4"]

const relatives1911 = ["Myself, 36, a 'mechanical engineer - calico printers'", 'Amelia, 37', "Thomas, 17, 'piecer - cotton spinning'", "Ivy, 15, school", "Dorothy, 8 months"]

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
                       relatives={relatives1891} />  
                       <InfoSection label='Green Vale Calico Print works' text='My family likely worked at Green Vale Print Works, (since replaced by a housing development on Hydrangea close).' text2="The works seem to play a big part in the local community."text3='"In that same year, (1869), the company arranged a tea party for their entire workforce. This was repeated in 1871 for all the workforce and their wives and sweethearts. There was food, drink, musical entertainment and dancing. Presiding over the festivities was W. Seddon, the oldest employee of the works, who was 82 at the time!"' src={printHouse} url='https://ifthosewallscouldtalk.wordpress.com/2019/01/25/hidden-histories-green-vale-house-leigh-road-westhoughton/'/>
          </li>
      <li className='cards__item'> 
                       <MarriageSection label='Marriage' text='I married my wife, Amelia Eckersley, in the third quarter of 1893, somewhere in Bolton.' text2="Its likely we married at the United Reform Church, (Bethel) on Park Road, Westhoughton." src={weddingMethodist} url="http://www.westhoughtonhistorygroup.org.uk/Westhoughton_History_Group/Home.html"/>

            <CensusSection 
            label='1901 Census'
            text='In 1901 I was aged 26 and I am living with my wife and children in the same house I lived in with my parents on the last census.' text2="My parents and siblings have moved down Leigh Road to number 446."
            url='https://gm1914.wordpress.com/2014/11/13/westhoughton-celebrations-ox-roasts-and-keaw-yeds/'
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
            text="In 1911 I was aged 36 and we have moved down Leigh Road to number 426." text2="My parents and siblings are still living at 446 Leigh Rd, opposite the Calico Print Works."

            src={censusHouse1911}

            src2={census1911}
            label2='Who did I live with?'
            url2={census1911}
          
             relatives={relatives1911}       
            />
            </li>
    
          <li className='cards__item'> 
            <DeathSection label='Death' text='My wife Amelia died in 1937 at the age of 61.' url="https://www.theboltonnews.co.uk/news/17253715.looking-back-calm-storm-westhoughton/" src={westhoughtonPreWar} />    
            <MarriageSection label='Marriage' text='I married my second wife, Alice Robinson, in October 1938 in Rochford, Essex.' text2='Alice comes from London, and it is not clear how we met.' src={rochford}/>
            <InfoSection lable='1939 Register' text='On the 1939 register we are living at 111 Bury and Bolton Road, Radcliffe.' text2="I was aged 74 and 'Maintenance Mechanic calico print work unemployed'" text3="Alice is aged 73." src={house1939} url={register1939}/> 
            </li>
    
          <li className='cards__item'> 
            <DeathSection label='Death' text='My second wife, Alice Robinson, died on the 16th February 1941, at the age of 65.' text2='We had been married for 16 months.' src={radcliffe} />
             <DeathSection label='Death' text='My son, Thomas Pollard, died on the 11th May 1952, age 57, in Garden City, Wayne County, Michigan, United States of America.' text2='He had emigrated to America in and had settled in Michigan with his family.' text3="His grave is in the Cadillac Memorial Gardens West, in Westland, Michigan." url="https://www.cadillacmemorialgardenswest.com/" src={TPollardJrGrave} />
        <DeathSection label='Death' text='I died on the 13th January 1956, at the age of 65.' text2='Probate was granted to my Sons-in-law Edward Ingham and James Henry (Jenry) Speakman.' src={probate} url={probate} />
        
          </li>  
    
          <li className='cards__item'> 
          <InfoSection label='What happened next?'src={james} url={james} text="My older brother John became a life assurance agent for the Weslyan and General Assurance Society, and in 1911 lived at 282 Leigh Road with his wife and two children. He died in 1916 in Barnoldswick, Lancashire." text2="My sister Catherine married John Henry Berry, a cotton Spinner. They had three children, including one christened Fredrick Pollard Berry, and in 1911 they lived at 271 Deane Church Lane, Bolton. There is a chance they moved to Michigan, US, however Catherine died in 1941 in Deane, Greater Manchester."/>
          <InfoSection label='What happened next?' url={alice} src={alice}text="My sister Ester Ann married Richard Hodkinson, a woodworking teacher. They had one child, Thomas Pollard Hodkinson, and Ester died in 1954, when her address is given as 315 Manchester Road, Westhoughton."text2="My sister Alice married Robert Selfe, a grocers assistant who saw active service in WWI. They had one child in 1915 and Alice died in 1919 at age 35." text3="My brother James became a mechanic at a calico print works. He married and had three children, and in 1939 his address is given as 438 Leigh Road, Westhoughton. He died in 1953."/>
          </li>
   <li className='cards__item'> 
<LinkSection label="Thomas Pollard 1848-1934" src={birthPic2} to='/ThomasPollardSr' />
  <LinkSection label="Mary Knowles 1846-1912" src={weddingPic} to="/MaryKnowles"/>
</li>

 
    </div>
    </div>
    
    </div>

  );
}


export default TPPersonMaster;