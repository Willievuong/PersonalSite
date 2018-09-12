import React, { Component } from 'react';
import '../App.css';
import construction from './UnderCons.png'

/* Body of the front page */
class IntroPage extends Component{
  render(){
    
    return(
      <div class="IntroPage"> 
        {/*TODO: What is this parent business */}
        <img src={construction} className="Construction"/>
        <p className="App-intro">
          The site is under construction, check back in a few days for updates, meanwhile, here's my resume!
        </p>
        <a className="Resume-Button" href="https://1drv.ms/f/s!AhgK9ZtBhYlypqJaL95HYc1zRQcBOQ"> 
          Resume
        </a>
      </div>
    );
  }
}

export default IntroPage;