
import '../App.css';


function BirthSection(props) {
  return (
  <>


     
        <a className='cards__item__link' target='_blank' href={props.url}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              
              src={props.src}
              />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h5 className='cards__item__text'>{props.text2}</h5> 
            <h5 className='cards__item__text'>{props.text3}</h5>
          </div>
        </a>
      
        <a className='cards__item__link' href={props.url2} target='_blank'>
          <figure className='cards__item__pic-wrap' data-category={props.label2}>
            <img
              className='cards__item__img'
              
              src={props.src2}
              />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text4}</h5>
            <h5 className='cards__item__text'>{props.text5}</h5>
            <h5 className='cards__item__text'>{props.text6}</h5>
          </div>
        </a>
      
              
     </>


  );
}

export default BirthSection;
