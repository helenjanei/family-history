import '../App.css';
import { Link } from 'react-router-dom'

function LinkSection(props) {
  return (
  <>


     
        <Link className='cards__item__link' to={props.to} >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              
              src={props.src}
              />
          </figure>
          
        </Link>
      
              
     </>


  );
}

export default LinkSection;
