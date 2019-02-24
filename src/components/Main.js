import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import NotFound from './Pages/404'
import '../App.css';

/* Handling the routing of the website */
/* i.e. localhost:3000/about */

class Main extends Component{
  render(){
    return(
      <main className="Site-body">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/project' component={Project}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </main>
    );
  }
}

export default Main