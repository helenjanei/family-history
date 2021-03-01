
import '../../App.css';
import InfoSection from '../../Components/InfoSection'
import BAMPersonMaster from '../BAMarten'

function BAMFamilyTree() {
  return (
 <>
     <li className='cards__item'> 

        <InfoSection url={BAMPersonMaster} label='Beatrice Annie Marten 1881-1938' />
  
            
      </li>
<li className='cards__item'> 

        <InfoSection />
  <InfoSection/>
            
      </li>

<li className='cards__item'> 

        <InfoSection />
  <InfoSection />
             <InfoSection />
  <InfoSection />

      </li>
      <li className='cards__item'> 

        <InfoSection />
  <InfoSection />
             <InfoSection />
  <InfoSection />
        <InfoSection />
  <InfoSection />
             <InfoSection />
  <InfoSection />
      </li>

</>


  );
}

export default BAMFamilyTree;