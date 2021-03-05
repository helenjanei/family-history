import '../App.css';
import { Link } from 'react-router-dom'

function ShortLinkSection(props) {
  return (
  <>


     
        <Link className='cards__item__link' to={props.to} >
          <figure className='short_cards__item__pic-wrap ' data-category={props.label}>
            
          </figure>
          
        </Link>
      
              
     </>


  );
}

export default ShortLinkSection;
