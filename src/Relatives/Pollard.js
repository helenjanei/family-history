
import '../App.css';

import LinkSection from '../Components/LinkSection'
import mapServe from '../Assets/BAMarten/mapserv.png'

import picture1871 from '../Assets/TJMarten/1871Picture.jpg'
import pubGirl from '../Assets/SMcNaught/1871Pub.jpeg'
import birthPic from '../Assets/RMarten/birthPic.jpg'
import birthPic2 from '../Assets/SSolomon/birthPic2.jpg'
import birthMap from '../Assets/JMcNaughtSr/birthMap.png'
import birthPic3 from '../Assets/EBuchanan/St_Peter_Liverpool.jpg'

function Pollard() {
  return (
 <> <div className="cards"> 
    <h1> Pollard  </h1>
  
    
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
     <li className='cards__item'> 

        <LinkSection label='Thomas Pollard' text="" src={mapServe} to='/ThomasPollard' />
  
            
      </li>
<li className='cards__item'> 

        <LinkSection label="Thomas John Marten 1844-1907" src={picture1871} to="/ThomasJohnMarten"/>
  <LinkSection label="Selina McNaught 1861-1947" to='/SelinaMcNaught' src={pubGirl}/>
            
      </li>

<li className='cards__item'> 

        <LinkSection label="Richard Marten 1816-1884" to='/RichardMarten' src={birthPic}/>
  <LinkSection label="Susannah Solomon 1811-1892" to="/SusannahSolomon"src={birthPic2}/>
             <LinkSection label="John McNaught 1823-1971" to='/JohnMcNaught' src={birthMap}/>
  <LinkSection label="Elizabeth Buchanan 1824-1896" to='/ElizabethBuchanan' src={birthPic3}/>

      </li>
      <li className='cards__item'> 

        <LinkSection label="Marten" to='/JohnMarten'/>
  <LinkSection label=""/>
             <LinkSection label="Henry Solomon 1771-1845-" to='/HenrySolomon' />
  <LinkSection label="Susannah Dudman 1767-1865" to='/SusannahDudman' />
             <LinkSection label="John McNaught 1796-1850" to='/JohnMcNaughtSr'/>
  <LinkSection label="Marion Mcjanet 1799-1851" to='/MarionMcjanet' />
        <LinkSection label="Andrew Buchanan 1785-1859" to='/AndrewBuchanan' />
  <LinkSection label="Selina Phillips 1792-1839" to='/SelinaPhilLips'/>
      </li>
 </div>
    </div>
    
    </div>
</>


  );
}

export default Pollard;