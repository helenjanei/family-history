import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import PersonMaster from './Components/PersonMaster';
import Footer from './Components/Footer';


function App() {
  return (
  <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/BeatriceAnnieMarten' component={PersonMaster} />
       

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
