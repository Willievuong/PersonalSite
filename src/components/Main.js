import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Project from './Project'
import NotFound from './404'

/* Handling the routing of the website */
/* i.e. localhost:3000/about */

class Main extends Component{
  constructor(){
    super(); 
  }
  
  render(){
    return(
      <main id="page-wrap">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/project' component={Project}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </main>
    );
  }
}

export default Main