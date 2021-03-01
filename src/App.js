import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import BAMPersonMaster from './Relatives/BAMarten';
import TJMPersonMaster from './Relatives/TJMPersonMaster'
import SMPersonMaster from './Relatives/SMcNaught'
import SSPersonMaster from './Relatives/SSolomon'
import RMPersonMaster from './Relatives/RMarten'
import JMPersonMaster from './Relatives/JMarten'
import HSPersonMaster from './Relatives/HSolomon'
import BAMFamilyTree from './Relatives/FamilyTrees/BAMartenFamilyTree'


function App() {
  return (
  <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Marten' exact component={BAMFamilyTree} />
          <Route path='/BeatriceAnnieMarten' component={BAMPersonMaster} />
          <Route path='/ThomasJohnMarten' component={TJMPersonMaster} />
           <Route path='/SelinaMcNaught' component={SMPersonMaster} />
          <Route path='/SusannahSolomon' component={SSPersonMaster} />
          <Route path='/RichardMarten' component={RMPersonMaster} />
 <Route path='/JohnMarten' component={JMPersonMaster} />
 <Route path='/HenrySolomon' component={HSPersonMaster} />
        </Switch>
       
      </Router>
    </>
  );
}

export default App;
