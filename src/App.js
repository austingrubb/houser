import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import Header from './component/Header/Header';
import {Route, Switch, Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Link to="/">Dashboard</Link>
          <Link to="/wizard">Wizard</Link>
        <Switch>
           <Route exact path="/" component={Dashboard}/>
           <Route path="/wizard" component={Wizard}/>
        </Switch>
         
      </div>
    );
  }
}

export default App;
