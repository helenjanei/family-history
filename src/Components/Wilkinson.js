import React from 'react';
import '../App.css';
import InfoSection from '../Components/InfoSection'



function Wilkinson() {
  return (
    <>
    <li className='cards__item'> 
  <InfoSection label="Wilkinson"/>
  <InfoSection label="Marten" text2=""/>
  <InfoSection label="Hollins" text2=""/>
  <InfoSection label="Dakin"/>
  </li>
    </>
  );
}

export default Wilkinson;