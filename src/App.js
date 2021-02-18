import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import BAMPersonMaster from './Relatives/BAMarten';
import Footer from './Components/Footer';
import BAMFamilyTree from './Relatives/FamilyTrees/BAMartenFamilyTree'
import TJMPersonMaster from './Relatives/TJMPersonMaster'


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

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
