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
import birthMap from '../../Assets/TPollardSr/birthMap.png'
import birthPic from '../../Assets/TPollardSr/birthPic.jpg'
import census1851 from '../../Assets/TPollardSr/1851census.png'
import censusMap1851 from '../../Assets/TPollardSr/1851censusMap.png'
import census1861 from '../../Assets/TPollardSr/1861census.png'
import censusMap1861 from '../../Assets/TPollardSr/1861censusMap.png'
import censusPic1871 from '../../Assets/TPollardSr/1871censusPic.jpg'
import census1871 from '../../Assets/TPollardSr/1871census.png'
import weddingPic from '../../Assets/TPollardSr/weddingPic.png'
import censusMap1881 from '../../Assets/TPollard/1881censusMap.png'
import census1881 from '../../Assets/TPollard/1881census.png'
import censusHouse1891 from '../../Assets/TPollard/1891censusHouse.png'
import census1891 from '../../Assets/TPollard/1891census.png'
import printHouse from '../../Assets/TPollard/printHouses.jpg'
import census1901 from '../../Assets/TPollardSr/1901census.png'
import census1911 from '../../Assets/TPollardSr/1911census.png'
import townHall from '../../Assets/TPollardSr/Westhoughton_Town_Hall_front.jpg'
import JohnPollardCut from '../../Assets/JPollard/JPollard (cut).jpg'
import CatherineHartleyCut from '../../Assets/CHartley/picOfCatherine (cut).jpg'


function TPsPersonMaster() {

  const relatives1851 = ['My father John, 51, a millwright', "My mother Catherine, 48, millwright's wife" , 'My older brother  William, 20, millwright', 'James, 18, engineer', 'Isabella, 16, scholar', 'John, 13, scholar', "Mary Jane, 8, scholar", "Myself, 3"]

 const relatives1861 = ['My father John, 61, a millwright at a cotton factory', "My mother Catherine, 58", 'Isabella, 26, milliner and dress maker', "Myself, 13, scholar", "Mary, 37, daughter-in-law, cotton factory worker"]

 const relatives1871 = ["My wife's father Burry Knowles, 56, a block printer", "His wife Anne, 56, housekeeper", "Dorothy, 30, weaver cotton", "Jane, 16, weaver cotton", "My wife Mary, 25, weaver cotton", "Myself, 23, joiner"]

  const relatives1881 = ['Myself, 33, a joiner', 'My wife Mary, 35', 'John, 9, scholar', 'Thomas, 6, Scholar', 'Catherine, 3', 'Esther Ann, 1.']

const relatives1891 = ["I am 43, a 'calico printer engineer'", 'Mary, 45', "John, 19, 'calico machine printer'", "Thomas, 16, 'Calico machine fuller'", "Catherine, 13, 'cotton weaver'", "Esther Ann, 11, scholar", "James, 7, scholar"]

const relatives1901 = ["Myself, 53, mechanical engineer", 'Mary, 55', "John, 29, calico printer", "Esther Ann, 21, ?", "Alice, 19, ?", "James, 14, spinster?"]

const relatives1911 = ["Myself, 63, mechanic engineering fitter for a calico printer'", 'Mary, 65', "Alice, 27, works at home", "James, 24, mechanic engineering fitter for a calico printer"]

  return (
  <div className="cards"> 
    <h1> Thomas Pollard Sr </h1>
    <h4> 1848-1934 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Thomas and I am your great-great-great-grandfather' src={familyTree} url={familyTree}/>


            <BirthSection 
            text='I was born in 1848 in Whalley, a village in the Ribble Valley, Lancashire.'
            url="https://maps.nls.uk/view/102343928" 
            src={birthMap}
            label='Birth'
          
            url2='https://www.visitlancashire.com/explore/Whalley'
            text4="My father was John Pollard, and my mother was Catherine nee Hartley."
            text5="I was the youngest of my parents' twelve children. They lost 3 children before they were 4, twice they then reused the name for another of my siblings, including my own."
          
            label2='Birth record'
            src2={birthPic}
            />
          </li>
    
          <li className='cards__item'> 

            <CensusSection 
            label='1851 Census'
            text='In 1851 I was aged 3 and my family are living at 30, Barrow Row, Wiswell, Lancashire.'
            text2="Up to about the mid 1800s a millwright was a master craftsman who completely designed and constructed mills."
text3="Millwrights executed every type of engineering operation in the construction of these mills. They designed the patterns of the water wheel systems, carved the gear mechanisms, and finally erected the mill machines. In short, the millwright up until then had performed the work of a civil engineer, designing and carrying out most of the mechanical operations in all industries."

text4="The introduction of the steam engine in the 1800s gave freedom to industry. It created many new trades, as industry was no longer dependent on water as its sole power source, and it thereby modified the millwright's all encompassing role. As the means of generating power became more complex, work became more specialized. Turners, fitters, machine makers, and mechanical engineers evolved out of the master trade of millwright. The millwright became an increasingly obsolete job as millwrights became specialists doing just one part of their former range of work."
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
            text='In 1861 I was aged 13 and my family are living at 372 Spring Gardens, Clitheroe, Lancashire.'
           
            url='https://maps.nls.uk/view/102343928'
            src={censusMap1861}

            src2={census1861}
            label2='Who did I live with?'
            url2={census1861}
          
             relatives={relatives1861}       
            />
          </li>
<li className='cards__item'> 
<MarriageSection label='Marriage' text='I married my wife, Mary Knowles, in the second quarter of 1869, in Clitheroe.'  text2="She was aged 22 and from Clitheroe, I was aged 21."src={weddingPic} url="https://www.lowry.co.uk/lowry-original-streetinclitheroe.html"/>

            <CensusSection 
            label='1871 Census'
            text="In 1871 I was aged 23 and I am living with my wife's family."
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
            text='In 1881 I was aged 33 and my family are living at 87, Leigh Road, Westhoughton.'
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
            text='In 1891 I was aged 43 and my family have moved along Leigh Road to number 384, Westhoughton.'
            text2="Ours is the white house in the middle, it doesn't look very roomy for seven people!"
            text3="It's likely my children were attending the school closest to us on Leigh road, now called St James' C of E Primary school, and still in the original building."
            url='https://www.google.com/maps/place/384+Leigh+Rd,+Westhoughton,+Bolton/@53.5383407,-2.5184981,17z/data=!3m1!4b1!4m5!3m4!1s0x487b08763796b285:0x9a6bed6b422b2298!8m2!3d53.5383375!4d-2.5163094'
            src={censusHouse1891}
          src2={census1891}
            label2='Who did I live with?'
            url2={census1891}
                       relatives={relatives1891} />  
                       <InfoSection label='Green Vale Calico Print works' text='My family likely worked at Green Vale Print Works, (since replaced by a housing development on Hydrangea close).' text2="The works seem to play a big part in the local community."text3='"In that same year, (1869), the company arranged a tea party for their entire workforce. This was repeated in 1871 for all the workforce and their wives and sweethearts. There was food, drink, musical entertainment and dancing. Presiding over the festivities was W. Seddon, the oldest employee of the works, who was 82 at the time!"' src={printHouse} url='https://ifthosewallscouldtalk.wordpress.com/2019/01/25/hidden-histories-green-vale-house-leigh-road-westhoughton/'/>
          </li>
      <li className='cards__item'> 

            <CensusSection 
            label='1901 Census'
            text="In 1901 I was aged 53 and I am living with my wife and children. We have moved down Leigh Road to number 446." text2="Our house is "
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
            </li>
    
          <li className='cards__item'> 
            <DeathSection label='Death' text='My wife Mary died in 1912 at the age of 65.' />    
          
            <DeathSection label='Death' text='I died on the 17th March 1934, at the age of 86.' />
          </li>
   <li className='cards__item'> 
<LinkSection label="John Pollard 1800-1872" to='/JohnPollard' src={JohnPollardCut} />
  <LinkSection label="Catherine Hartley 1803-1877" to="/CatherineHartley" src={CatherineHartleyCut}/>
</li>

 
    </div>
    </div>
    
    </div>

  );
}


export default TPsPersonMaster; 