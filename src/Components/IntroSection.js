
import React from 'react'
import '../App.css';
import './introSection.css'



function IntroSection(props) {
  return (
      <>
      
        <a className='cards__item__link' href={props.url}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
    

     </>
     
     
    
  );
}

export default IntroSection;
