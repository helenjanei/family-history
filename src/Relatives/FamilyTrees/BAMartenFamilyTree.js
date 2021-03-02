
import '../../App.css';
import InfoSection from '../../Components/InfoSection'
import mapServe from '../../Assets/BAMarten/mapserv.png'




function BAMFamilyTree() {
  return (
 <>
     <li className='cards__item'> 

        <InfoSection label='Beatrice Annie Marten 1881-1938' text="" src={mapServe} url='http://localhost:3000/BeatriceAnnieMarten' />
  
            
      </li>
<li className='cards__item'> 

        <InfoSection label="Thomas John Marten 1844-1907" text2=""/>
  <InfoSection label="Selina McNaught 1861-1947"/>
            
      </li>

<li className='cards__item'> 

        <InfoSection label="Richard Marten 1816-1884"/>
  <InfoSection label="Susannah Solomon 1811-1892"/>
             <InfoSection label="John McNaught 1823-1971"/>
  <InfoSection label="Elizabeth Buchanan 1824-1896"/>

      </li>
      <li className='cards__item'> 

        <InfoSection />
  <InfoSection />
             <InfoSection label="Henry Solomon 1771-1845"/>
  <InfoSection label="Susannah Dudman 1767-1865"/>
             <InfoSection label="John McNaught 1796-1850"/>
  <InfoSection label="Marion Mcjanet 1799-1851" />
        <InfoSection label="Andrew Buchanan 1785-1859" />
  <InfoSection label="Sena Phillips 1792-1839"/>
      </li>

</>


  );
}

export default BAMFamilyTree;