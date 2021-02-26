import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import BAMPersonMaster from './Relatives/BAMarten';

import BAMFamilyTree from './Relatives/FamilyTrees/BAMartenFamilyTree'
import TJMPersonMaster from './Relatives/TJMPersonMaster'
import SMPersonMaster from './Relatives/SMcNaught'
import SSPersonMaster from './Relatives/SSolomon'


function App() {
  return (
  <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/BAMFamilyTree' exact component={BAMFamilyTree} />
          <Route path='/BeatriceAnnieMarten' component={BAMPersonMaster} />
          <Route path='/ThomasJohnMarten' component={TJMPersonMaster} />
           <Route path='/SelinaMcNaught' component={SMPersonMaster} />
          <Route path='/SusannahSolomon' component={SSPersonMaster} />
        </Switch>
       
      </Router>
    </>
  );
}

export default App;
