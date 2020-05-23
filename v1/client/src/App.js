import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';  

import './App.css';
import Main from './Main'
import ErrorPage from './pages/404'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Main/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
