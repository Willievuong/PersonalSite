import React, { Component } from 'react';
import '../App.css';
import construction from './UnderCons.png'
import Typing from './Typing'

/* Home Page */
class Home extends Component{
  render(){
    return(
      <div className="IntroPage"> 
        <div className="Intro-Type">
          <Typing/>
        </div>
        <div className="Outer-Button"> 
          <a className="Resume-Button" href="https://1drv.ms/f/s!AhgK9ZtBhYlypqJaL95HYc1zRQcBOQ"> 
            Resume
          </a>
        </div> 
      </div>
    )
  }
}

export default Home;