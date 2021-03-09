
import { Link } from 'react-router-dom'
import '../Components/ShortInfoSection.css'
function ShortLinkSection(props) {
  return (
  <>


     
        <Link className='short__cards__item__link' to={props.to} >
          <figure className='short__cards__item__pic-wrap ' data-category={props.label}/>
            
         
          
        </Link>
      
              
     </>


  );
}

export default ShortLinkSection;
