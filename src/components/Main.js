import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Project from './Project'
import NotFound from './404'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/project' component={Project}/>
      <Route path='*' component={NotFound}/>
    </Switch>
  </main>
)

export default Main