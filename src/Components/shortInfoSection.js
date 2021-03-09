import './ShortInfoSection.css';


function ShortInfoSection(props) {
  return (
  <>


     
        <a className='short__cards__item__link' target='_blank' href={props.url} >
          <figure className='short__cards__item__pic-wrap' data-category={props.label} />
           
          
          <div className='short__cards__item__info'>
            <h5 className='short__cards__item__text'>{props.text}</h5>
            <h5 className='short__cards__item__text'>{props.text2}</h5> 
            <h5 className='short__cards__item__text'>{props.text3}</h5>
            <h5 className='short__cards__item__text'>{props.text4}</h5>
            <h5 className='short__cards__item__text'>{props.text5}</h5>
          </div>
        </a>
      
              
     </>


  );
}

export default ShortInfoSection;
