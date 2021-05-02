import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './Components/scrollToTop'
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Form from './Components/signUp/Form'


import BAMPersonMaster from './Relatives/Marten/BAMarten';
import TJMPersonMaster from './Relatives/Marten/TJMPersonMaster'
import SMPersonMaster from './Relatives/Marten/SMcNaught'
import SSPersonMaster from './Relatives/Marten/SSolomon'
import RMPersonMaster from './Relatives/Marten/RMarten'
import JMPersonMaster from './Relatives/Marten/JMarten'
import HSPersonMaster from './Relatives/Marten/HSolomon'
import SDPersonMaster from './Relatives/Marten/SDudman'
import JMcPersonMaster from './Relatives/Marten/JMcNaught'
import JMcSrPersonMaster from './Relatives/Marten/JMcNaughtSr'
import MMcJPersonMaster from './Relatives/Marten/MMcJannet'
import EBPersonMaster from './Relatives/Marten/EBuchanan'
import ABPersonMaster from './Relatives/Marten/ABuchanan'
import SPPersonMaster from './Relatives/Marten/SPhillips'
import SCPersonMaster from './Relatives/Marten/SCox'

import Marten from './Relatives/Marten/Marten'
import MartenResources from './Relatives/Marten/martenResources'
import Wilkinson from './Relatives/Wilkinson'
import Ingham from './Relatives/Ingham'


import Pollard from './Relatives/Pollard/Pollard'
import TPPersonMaster from './Relatives/Pollard/TPollard'
import MKPersonMaster from './Relatives/Pollard/MKnowles'
import TPsPersonMaster from './Relatives/Pollard/TPollardSr'
import JPPersonMaster from './Relatives/Pollard/JPollard'
import CHPersonMaster from './Relatives/Pollard/CHartley'
import GPPersonMaster from './Relatives/Pollard/GPollard'
import IWPersonMaster from './Relatives/Pollard/IWhitaker'

import WilkinsonMemories from './Relatives/WilkinsonMemories'
import WilkinsonRecipes from './Relatives/WilkinsonRecipes'

function App() {
  return (
  <>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
           <Route path='/Form' exact component={Form} />
           <Route path='/Wilkinson' exact component={Wilkinson} />
         <Route path='/Ingham' exact component={Ingham} />
         <Route path='/WilkinsonMemories' exact component={WilkinsonMemories} />
         <Route path='/WilkinsonRecipes' exact component={WilkinsonRecipes} />
         
         
         <Route path='/Marten' exact component={Marten} />


         <Route path='/Martenresources' exact component={MartenResources} />
          <Route path='/BeatriceAnnieMarten' component={BAMPersonMaster} />
          <Route path='/ThomasJohnMarten' component={TJMPersonMaster} />
           <Route path='/SelinaMcNaught' component={SMPersonMaster} />
            <Route path='/JohnMcNaught' component={JMcPersonMaster} />
          <Route path='/JohnMcNaughtSr' component={JMcSrPersonMaster} />
          <Route path='/MarionMcJanet' component={MMcJPersonMaster} />
            <Route path='/ElizabethBuchanan' component={EBPersonMaster} />
          <Route path='/AndrewBuchanan' component={ABPersonMaster} />
          <Route path='/SelinaPhillips' component={SPPersonMaster} />
          <Route path='/SusannahSolomon' component={SSPersonMaster} />
          <Route path='/RichardMarten' component={RMPersonMaster} />
         <Route path='/JohnMarten' component={JMPersonMaster} />
          <Route path='/HenrySolomon' component={HSPersonMaster} /> 
        <Route path='/SusannahDudman' component={SDPersonMaster} />

<Route path='/SarahCox' component={SCPersonMaster} />


<Route path='/Pollard' exact component={Pollard} />
          <Route path='/ThomasPollard' component={TPPersonMaster} />
 <Route path='/ThomasPollardSr' component={TPsPersonMaster} />
  <Route path='/MaryKnowles' component={MKPersonMaster} />
  <Route path='/JohnPollard' component={JPPersonMaster} />
  <Route path='/CatherineHartley' component={CHPersonMaster} />
  <Route path='/GeorgePollard' component={GPPersonMaster} /> 
   <Route path='/IsabellaWhitaker' component={IWPersonMaster} />
        </Switch>
       
      </Router>
    </>
  );
}

export default App;
