import React from 'react';
import '../App.css';
import InfoSection from '../Components/InfoSection'
import wilkinsonPic from '../Assets/wilkinson.jpg'



function Home() {
  return (
    <>
    <li className='cards__item'> 
  <InfoSection label="Ingham" text2=""/>
  <InfoSection label="Wilkinson" src={wilkinsonPic}/>
  </li>
    </>
  );
}

export default Home;