import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Main from './components/Main'

/*------------------------- */
/* Main Driver of the app   */
/*------------------------- */

class App extends Component{ 
  constructor(){
    super(); 
  } 

  render(){
    return(
      <BrowserRouter>
        <div className="Site">
            <Header/>
            <Main/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
