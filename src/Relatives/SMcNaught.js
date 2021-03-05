import React from 'react';
import '../App.css'
import IntroSection from '../Components/IntroSection'
import BirthSection from '../Components/BirthSection'
import CensusSection from '../Components/CensusSection'
import MarriageSection from '../Components/MarriageSection'
import DeathSection from '../Components/DeathSection'
import LifeSummarySection from '../Components/LifeSummarySection'
import LinkSection from '../Components/LinkSection'
import InfoSection from '../Components/InfoSection'
import Button from '../Components/Button'
import birthPic from '../Assets/SMcNaught/walton.png'
import birthPic2 from '../Assets/SMcNaught/PAY-Victorian-Ghosts.jpg'
import familyTree from '../Assets/SMcNaught/familyTree.png'
import census1861 from '../Assets/SMcNaught/1861census.png'
import censusMap1861 from '../Assets/SMcNaught/1861censusMap.png'
import census1871 from '../Assets/SMcNaught/1871census.png'
import pubGirl from '../Assets/SMcNaught/1871Pub.jpeg'
import marriage1880 from '../Assets/TJMarten/1880Marriage.png'
import marriageChurch1880 from '../Assets/TJMarten/1880marriageChurch.jpg'
import marriageHome1880 from '../Assets/TJMarten/1880MarriageHome.png'
import census1881 from '../Assets/TJMarten/1881Census.png'
import censusMap1881 from '../Assets/BAMarten/BAM-Birth-Map1862.png'
import census1891 from '../Assets/BAMarten/1891Census.png'
import censusMap1891 from '../Assets/BAMarten/1891CensusMap.png'
import censusMap1911 from '../Assets/SMcNaught/1911censusMap.png'
import census1911 from '../Assets/SMcNaught/1911census.png'
import house1939 from '../Assets/SMcNaught/1939house.png'
import census1939 from '../Assets/SMcNaught/1939register.png'
import deathRecord from '../Assets/SMcNaught/deathRecord.png'
import agnes1901 from '../Assets/SMcNaught/1901agnes.png'
import dukeStreet from '../Assets/SMcNaught/dukeStreet.jpg'
import electoralRegister1889 from '../Assets/TJMarten/1889ElectoralRegister.png'
import house1901 from '../Assets/BAMarten/house1901.jpeg'
import census1901 from '../Assets/BAMarten/1901Census.png'
import birthMap from '../Assets/JMcNaughtSr/birthMap.png'
import birthPic3 from '../Assets/EBuchanan/St_Peter_Liverpool.jpg'
import agnesDeath from '../Assets/SMcNaught/agnesRichardDeath.png'

function SMPersonMaster() {

const relatives1861 = ["My father John, 38, 'joiner/master'", "My mother Elizabeth, 37, 'joiner's wife'", "My sister Agnes, 4, 'joiner's daughter'.", "I am 3 months, and also a 'joiner's daughter'.", "Mary Mitchner, boarder, 36, 'possession of a lively-hood'", "Mary Murphy, 17, servant" ]

const relatives1871 = ["My father John, 39, 'publican', (perhaps we lived in a pub?)", "My mother Elizabeth, 45.", "Agnes, 15", "I'm 10, a 'scholar'", "My sister Maggie, 6", "My brother Alfred Stanley, 3", "Sarah Williamson, 18, servant."]

const relatives1881 = ["My husband Thomas is 35 and listed as an 'insurance agent'", "I am now 20", "My husband's first daughter, Kate, 6", "My husband's second daughter Gertrude would be aged 5 but isn't listed as living with us.", "A servant named Margaret Howe, 18"]

const relatives1891 = ['My husband Thomas 45, an insurance agent', 'Myself, 28', "My husband's two older daughters - Gertrude 16, and Mary 15', 'My daughter Beatrice, (your great-great-grandmother),9 and a Scholar", 'My son Frederick, 5, and also listed as a scholar', 'We no longer have a live in maid']

const relatives1901 = ["Thomas 56, 'agent for the Gresham assurance society' as his occupation", 'Myself, 39', "My husband's older daughter Kate, 24", "Beatrice (your great-great-grandmother), 19, 'shorthand and type writer'", "My son Frederick, 16, and an 'assistant to ghast collector'", 'My youngest son Charles, 9' ]

const relatives1911 = ['Myself, 39', "My husband's older daughter Kate, 34", "My son Frederick, 26, and an 'engineer (mechanic)'", "My youngest son Charles, 19, 'clerk-shipping'", "Henry Lowe, lodger, 23, 'bank clerk'", "George Cooper, lodger, 19, 'clerk- provisions merchant" ]

const relatives1939 = ["Charles Marten, 47, 'Clerk soap manufacture'", "Annie, his wife, aged 47, 'unpaid domestic duties.'", "My two granddaughters, Rita - 10, and a younger sibling", "My occupation is also listed as, 'unpaid domestic duties'"]

  return (
  <div className="cards"> 
    <h1> Selina Phillips Marten </h1>
    <h2>nee McNaught</h2>
    <h4> 1861-1947 </h4> 
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
        
          <li className='cards__item'>
            <IntroSection label='Who am I?' text='My name is Selina and I am your great-great-great-grandmother' src={familyTree} url={familyTree}/>


            <BirthSection url="https://westderbysociety.wixsite.com/westderbysociety/west-derby-village" text="I was born in the autumn of 1860, in an area of central Liverpool called Walton." 
            src={birthPic}
            label='Birth'
          
            
            text4="I was the second child of my parents, John McNaught 38, and Elizabeth Buchanan 37."
          
            label2='Birth'
           src2={birthPic2}
           url='https://www.mirror.co.uk/news/uk-news/spooky-images-combine-victorian-modern-9326728'
            />
          </li>
    
          <li className='cards__item'> 

            <CensusSection 
            label='1861 Census'
            text='I was three months old when the census took place. We were living at 50 Carter Street, Toxteth, Liverpool.'
            url="https://www.google.com/maps/place/50+Carter+St,+Liverpool/@53.3932977,-2.9681285,17z/data=!3m1!4b1!4m5!3m4!1s0x487b20e11b65375f:0x38341baaf3a5625b!8m2!3d53.3932977!4d-2.9659398"
            src={censusMap1861}

            src2={census1861}
            label2='Who did I live with?'
            url2={census1861}
            text4='I lived with'
             relatives={relatives1861}       
            />
          </li>

          <li className='cards__item'> 
           <CensusSection 
           label='1871 Census'
            text="In 1871 I was aged 10, and we had moved to 67 Walton Lane, Kirkdale, Liverpool." text2="Sadly the property is no longer there, probably as a result of bombing in the second world war."
            
          
            url='https://www.google.com/maps/place/67+Walton+Ln,+Liverpool+L4+4HU/@53.4335337,-2.9688786,17z/data=!4m5!3m4!1s0x487b21669525c4fb:0x54e1ac73ab103b03!8m2!3d53.4334251!4d-2.9690288'
            src={census1871}
            
            label2='1871 Census'
            url2={census1871}
            src2={pubGirl}
           text4='I was living with:'
           relatives={relatives1871}
           />
          </li>

          <li className='cards__item'>
           
          </li>

       
          <li className='cards__item'> 
            <MarriageSection  url={marriage1880} label='Marriage' src={marriageChurch1880} text="I married my husband, Thomas John Marten on the 17th July 1880."
            text2="We married at Saint Brides Church, Liverpool."
            text3="I was aged 19 so I had to have my mother's consent to marry."
            text4="(My father had died shortly after the census in 1871.)"
             />

             <MarriageSection  url='https://www.google.com/maps/place/129+Duke+St,+Liverpool+L1+4JR/@53.4012155,-2.9818034,17z/data=!3m1!4b1!4m5!3m4!1s0x487b2126942507b5:0x36b0c8ee67c09261!8m2!3d53.4012155!4d-2.9796147?hl=en-GB' label='Marriage' src={marriageHome1880} 
             text="We are both listed as living at 129 Duke street, Liverpool." 
             text2="129 Duke Street was where my sister Agnes, and her Husband Richard Dobell, a butcher, are living on the 1881 census."
             text3="My Mother Elizabeth, sister Aggie and brother Alfred are also all living there in 1881, along with two boarders."
             text4="Agnes and Richard had married in 1878" />
          </li>

          <li className='cards__item'> 
          
             <CensusSection 
             label='1881 Census'
             text="In 1881 we lived at 6 Wellington Terrace, Tranmere, Birkenhead."  
             text2=""
             url="https://www.google.com/maps/place/6+Wellington+Terrace,+Birkenhead+CH41+2TB/@53.3847234,-3.0252681,15z/data=!4m5!3m4!1s0x487b2717627d99d3:0x461cfc3b97836b10!8m2!3d53.384748!4d-3.0262961://www.google.com/maps/place/6+Wellington+Terrace,+Birkenhead+CH41+2TB/@53.3847234,-3.0252681,15z/data=!4m5!3m4!1s0x487b2717627d99d3:0x461cfc3b97836b10!8m2!3d53.384748!4d-3.0262961"
             src={censusMap1881}

             label2='Who did I live with?'
              url2={census1881}
             src2={census1881}
             text4='I lived with'
             relatives={relatives1881}
                            />
          </li>

          <li className='cards__item'> 

              <InfoSection url={electoralRegister1889} label='Electoral Register' src={electoralRegister1889} text='In 1889 my husband is on the electoral register which shows we had moved house, over the River Mersey to 6 Ponsonby Street, Toxteth' text2='(since demolished, between Cawdor and Eversley Street on modern maps). '/>
  
              <CensusSection 
              label='1891 Census'
              text='In 1891 were still living at 6 Ponsonby Street, Toxteth.'
              url='https://maps.nls.uk/view/101104295'
              src2={census1891}
              label2='Who did I live with?'
              url2='https://www.google.com/maps/place/Ponsonby+Street/@53.3938342,-2.955199,18z/data=!4m13!1m7!3m6!1s0x487b20fcceadfac9:0x6869ee89af0503d1!2sCawdor+St,+Liverpool!3b1!8m2!3d53.3935828!4d-2.9564909!3m4!1s0x0:0x443ca74ffdcde922!8m2!3d53.394255!4d-2.9549816'
              src={censusMap1891}
              text4='I lived with'
              relatives={relatives1891}
                />
            </li>

          <li className='cards__item'> 
                
                <CensusSection 
               label='1901 Census'
               text="In 1901 we had moved house again. This time to 79 Crosby Road South, in Seaforth, Liverpool. Doesn't our house look smart!"
               url='https://www.google.com/maps/place/Riverslie+Rest+Home,+79+Crosby+Rd+S,+Seaforth,+Liverpool+L21+1EW/@53.4672705,-3.0180227,17z/data=!4m5!3m4!1s0x487b246e2be151bd:0xd9b77a3afd87f0b0!8m2!3d53.4675867!4d-3.0174863'
              src={house1901}
               label2='Who did I live with?'
               url2='https://www.google.com/maps/place/Ponsonby+Street/@53.3938342,-2.955199,18z/data=!4m13!1m7!3m6!1s0x487b20fcceadfac9:0x6869ee89af0503d1!2sCawdor+St,+Liverpool!3b1!8m2!3d53.3935828!4d-2.9564909!3m4!1s0x0:0x443ca74ffdcde922!8m2!3d53.394255!4d-2.9549816'
               src2={census1901}
               text4='I lived with'
               relatives={relatives1901}          
                 />

            </li>

          <li className='cards__item'> 
            
             <DeathSection  url={deathRecord} label='Death' src={deathRecord} text='My husband Thomas lived to age 62, and died on the 19th October 1907.'/>
              <CensusSection 
               label='1911 Census'
               text="In 1911 we were still living at 79 Crosby Road South."
               url='https://maps.nls.uk/view/126522086'
              src={censusMap1911}
               label2='Who did I live with?'
               url2='https://www.google.com/maps/place/Ponsonby+Street/@53.3938342,-2.955199,18z/data=!4m13!1m7!3m6!1s0x487b20fcceadfac9:0x6869ee89af0503d1!2sCawdor+St,+Liverpool!3b1!8m2!3d53.3935828!4d-2.9564909!3m4!1s0x0:0x443ca74ffdcde922!8m2!3d53.394255!4d-2.9549816'
               src2={census1911}
               text4='I lived with'
               relatives={relatives1911}          
          
                 />

                 </li>
    <li className='cards__item'> 
                
                <CensusSection 
               label='1939 Register'
               text="On the 1939 register I am aged 78 and living in Horseforth, Leeds, with my youngest son Charles and his family."
               url="https://www.google.com/maps/place/15+Victoria+Mount,+Horsforth,+Leeds+LS18+4PU/@53.8309819,-1.6420623,15.71z/data=!4m5!3m4!1s0x487958a36c5242ed:0xca542db99d93e237!8m2!3d53.829886!4d-1.6475838?hl=en-GB"
              src={house1939}
               label2='Who did I live with?'
               url2={census1939}
               src2={census1939}
               text4='I lived with'
               relatives={relatives1939}          
                 />

          

  <DeathSection  url={deathRecord} label='Death' src={deathRecord} text='I lived to age 86, and died on the 3rd July 1947.' text2="In probate my address is given as 8 Wesley Street, Waterloo." text3="However my place of death is recorded as 'Holm Hill, Village Road, West Kirby, Cheshire.'" text4="My effects came to £1810 1s and probate was given to 'George Wilkinson, retired local government officer'." text5="George Wilkinson was my son-in-law and your great-great-grandfather."/>
            
            </li>
            <li className='cards__item'> 
            
             <LifeSummarySection  url={dukeStreet} label='What happened next?' src={dukeStreet} 
             text="My sister Agnes was born four years before me. At age 21, in 1878, she married Richard Dobell, who came from a Liverpool family of millwrights. They had a daughter Amy a year later, and their son Richard, two years later again in 1881." 
             text2="On the 1881 census, Agnes is living at 129 Duke street with her husband and 4 month old son, our mother, two of our siblings and two boarders who were 'seamen'." 
             text3="Their daughter Amy, who is one, is living in Birkenhead with her paternal aunt Lillias, (whom Amy gets her middle name from), and Lillias' husband." 
             text4="Ten years later, on the 1891 census, Agnes' family has split apart. Her husband Richard is living as a lodger in a house in Birkenhead. Her daughter Amy is still living with her paternal aunt Lillias, who is now a widower. Amy's paternal grandmother and another paternal aunt are also living with them." 
             text5="So far I've been unable to find a census for 1891 with Agnes or her Son Richard on."      
                
             /> 
             <LifeSummarySection  url={agnes1901} label='What happened next?' src={agnes1901} 
             
             text="On the 1st March 1892 Agnes was admitted into the Rainhill Asylum, Prescot."
             text2="In 1899, Agnes' son Richard died at the age of 18. His death certificate records the cause of death being 'meningitis epilepsy'." 
          
            text3="On the 1901 census Agnes is listed as being a patient at Rainhill."
            text4="She is recorded as being a 43 year old housewife."
            text5="In the final column she is listed as being 'lunatic' - Lunatic was a general term used at the time to cover all people with mental health problems. " 
            text5="I've been unable to find an 1901 census with Agnes' husband Richard or daughter Amy on. Amy is not listed as living with her aunt Lillias anymore." />

            <LifeSummarySection  url={agnesDeath} label='What happened next?' src={agnesDeath}  // change to death cirt when it arrives 
            text="Agnes' husband Richard died in 1906, at the age of 53." 
            text2="Agnes died at Rainhill asylum in 1910. Her death certificate records 'chronic renal disease' as her cause of death." 
            text3="The last surviving member of the family, Amy, is absent from the 1911 census as well." 
            text4="However Amy appears, at age 60 and still under her maiden name on the 1939 register - living at 65 Sheil Road, Liverpool. She is living with a lady called Alice Bleak, and Amy is listed as her 'companion'." 
            text5="Amy died on the 9th November 1945 at age 66. She left behind an estate of £60 10s. 11d. which she willed to 'Lillias Evans - widow', her aunt Lillias, who died in 1950 at the age of 92." />

              </li>
            <li className='cards__item'> 
 <LinkSection label="John McNaught 1823-1971" to='/JohnMcNaught' src={birthMap}/>
  <LinkSection label="Elizabeth Buchanan 1824-1896" to='/ElizabethBuchanan' src={birthPic3}/>
</li>

  <Button classname='btns'/>
    </div>
    </div>
    
    </div>

  );
}


export default SMPersonMaster;