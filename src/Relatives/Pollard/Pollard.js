
import '../../App.css';
import SingleColumnLinkSection from '../../Components/SingleColumnLinkSection'
import LinkSection from '../../Components/LinkSection'
import birthPic2 from '../../Assets/TPollardSr/birthPic.jpg'
 import ShortLinkSection from '../../Components/ShortLinkSection'

import birthPic from '../../Assets/TPollard/birthPic.jpg'

import weddingPic from '../../Assets/MKnowles/clitheroe.jpg'
import JohnPollardCut from '../../Assets/JPollard/JPollard (cut).jpg'
import CatherineHartleyCut from '../../Assets/CHartley/picOfCatherine (cut).jpg'

function Pollard() {
  return (
 <> <div className="cards"> 
    <h1> Pollard  </h1>
  
    
      <div className="cards_container"> 
        <div className="cards_wrapper"> 
     <li className='cards__item'> 

        <SingleColumnLinkSection label='Thomas Pollard 1875-1956' text="" src={birthPic} to='/ThomasPollard' />
  
            
      </li>
<li className='cards__item'> 

        <LinkSection label="Thomas Pollard 1848-1934" src={birthPic2} to="/ThomasPollardSr"/>
  <LinkSection label="Mary Knowles 1846-1912" to='/MaryKnowles' src={weddingPic} />
            
      </li>

<li className='cards__item'> 

        <LinkSection label="John Pollard 1800-1872" to='/JohnPollard' src={JohnPollardCut}/>
  <LinkSection label="Catherine Hartley 1803-1877" to="/CatherineHartley" src={CatherineHartleyCut}/>
             <LinkSection label="Bury Knowles 1815-1889" to='/BuryKnowles' />
  <LinkSection label="Ann Hallworth 1814-1879" to='/AnnHalworth' />

      </li>
      <li className='cards__item'> 

        <ShortLinkSection label="George Pollard 1776-1861" to='/GeorgePollard' src={CatherineHartleyCut}/>
  <ShortLinkSection label="Isabella Whitaker 1780-1857" to='/IsabellaWhitaker'/>
             <ShortLinkSection label="Richard Hartley 1762" to='/RichardHartley' />
  <ShortLinkSection label="Millicent Yates 1769-1828" to='/MillicentYates' />
             <ShortLinkSection label="Hugh Knowles 1791-1869" to='/HughKnowles'/>
  <ShortLinkSection label="Mary Bury 1790-1870" to='/MaryBury' />
        <ShortLinkSection label="John Hallworth 1781-1841" to='/JohnHallworth' />
  <ShortLinkSection label="Hester E Brade 1779-1849" to='/HesterBrade'/>
      </li>
 </div>
    </div>
    
    </div>
</>


  );
}

export default Pollard;