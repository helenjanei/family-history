import React from 'react';
import '../App.css';
import LinkSection from '../Components/LinkSection'
import wilkinsonPic from '../Assets/wilkinson.jpg'



function Home() {
  return (
    <>
    <li className='cards__item'> 
  <LinkSection label="Ingham" text2="" to='/Ingham'/>
  <LinkSection label="Wilkinson" src={wilkinsonPic} to='/Wilkinson'/>
  </li>
    </>
  );
}

export default Home;