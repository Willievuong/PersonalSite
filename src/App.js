import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    /* return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          
        </p>
      </div>
    );
    */
   /* Old CSS From Former Site */ 
   return(
    <div class="site-wrapper">
    <div class="site-wrapper-inner">
      <div class="cover-container">
        <div class="masthead clearfix">
          <div class="inner">
              <h4 class="masthead-brand">Willievuong</h4>
          </div>
        </div>
          <div class="inner cover">
            <h1 class="cover-heading">Hey there!</h1>
              <p class="lead">The site is under construction, check back in a few days for updates, meanwhile, here's my resume!</p>
              <button href="https://1drv.ms/f/s!AhgK9ZtBhYlypqJaL95HYc1zRQcBOQ">Resume</button>
          </div>
          </div>
      </div>
    </div>
   ); 
  }
}

export default App;
