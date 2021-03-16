import './singleColumnLinkSection.css';
import { Link } from 'react-router-dom'

function SingleColumnLinkSection(props) {
  return (
  <>


     
        <Link className='single__cards__item__link' to={props.to} >
          <figure className='single__cards__item__pic-wrap' data-category={props.label}>
            <img
              className='single__cards__item__img'
              
              src={props.src}
              />
          </figure>
          
        </Link>
      
              
     </>


  );
}

export default SingleColumnLinkSection;
