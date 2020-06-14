import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';  

import './App.css';
import Main from './Main'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/:page" children={<Main/>} />          
      </Switch>
    </Router>
  );
}

export default App;
