
import '../App.css';


function CensusSection(props) {
  const relatives = props.relatives
  const listRelatives = relatives.map((relative, i) => 
  <li key={i} >{relative}</li>)

  return (

 <>
       <li className='cards__item'>
        <a className='cards__item__link' target='_blank' href={props.url}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              
              src={props.src}
              />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'> {props.text}</h5>
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
            <div className='cards__item__text'>
              <h5>
              {props.text2}
              </h5>
                <ul>{listRelatives}
                </ul>              
              </div>
              
          </div>
        </a>
      </li>
              
     </>

  );
}

export default CensusSection;
