import '../App.css';


function ResourcesSection(props) {
  return (
  <>


     
        <a className='cards__item__link' target='_blank' href={props.url} >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              
              src={props.src}
              />
          </figure>
          <div className='cards__item__info'>
            <a className='cards__item__text' target='_blank' href={props.link}>
              <h5>{props.text}</h5>
            </a>
   <a className='cards__item__text' target='_blank' href={props.link2}>
              <h5>{props.text2}</h5>
            </a>
            <a className='cards__item__text' target='_blank' href={props.link3}>
              <h5>{props.text3}</h5>
            </a>
            <a className='cards__item__text' target='_blank' href={props.link4}>
              <h5>{props.text4}</h5>
            </a>
<a className='cards__item__text' target='_blank' href={props.link5}>
              <h5>{props.text5}</h5>
            </a>
          </div>
        </a>
      
              
     </>


  );
}

export default ResourcesSection;
