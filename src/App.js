import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './Components/scrollToTop'
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Form from './Components/signUp/Form'


import BAMPersonMaster from './Relatives/BAMarten';
import TJMPersonMaster from './Relatives/TJMPersonMaster'
import SMPersonMaster from './Relatives/SMcNaught'
import SSPersonMaster from './Relatives/SSolomon'
import RMPersonMaster from './Relatives/RMarten'
import JMPersonMaster from './Relatives/JMarten'
import HSPersonMaster from './Relatives/HSolomon'
import SDPersonMaster from './Relatives/SDudman'
import JMcPersonMaster from './Relatives/JMcNaught'
import JMcSrPersonMaster from './Relatives/JMcNaughtSr'
import MMcJPersonMaster from './Relatives/MMcJannet'
import EBPersonMaster from './Relatives/EBuchanan'
import ABPersonMaster from './Relatives/ABuchanan'
import SPPersonMaster from './Relatives/SPhillips'
import Marten from './Relatives/Marten'
import Wilkinson from './Relatives/Wilkinson'
import Ingham from './Relatives/Ingham'
import TPPersonMaster from './Relatives/TPollard'
import Pollard from './Relatives/Pollard'
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
<Route path='/Pollard' exact component={Pollard} />
          <Route path='/ThomasPollard' component={TPPersonMaster} />

        </Switch>
       
      </Router>
    </>
  );
}

export default App;
