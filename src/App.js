import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import PhantomPage from './components/PhantomPage'
import Footer from './components/Footer'

/*------------------------- */
/* Main Driver of the app   */
/*------------------------- */

class App extends Component{ 
  constructor(){
    super(); 
  } 

  render(){
    return(
      <div class="Site">
          <div className="Site-content"> 
            <Header/>
            <Main/>
          </div> 
          {/* <PhantomPage/> */}
          <Footer/>
        </div>
    )
  }
}

export default App;
