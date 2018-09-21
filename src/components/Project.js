import React, { Component } from 'react';
import construction from './UnderCons.png'
import '../App.css';

class Project extends Component{
  constructor(){
    super(); 
  }

  render(){
    return(
      <div className="Project"> 
          <div class="IntroPage"> 
          <img src={construction} className="Construction" alt="Construction"/>
          <p className="App-intro">
            This part of the is under construction, check back in a few days for updates.
          </p>
          </div>
          
          <ul className="Project-List">
            <li className="Project-Item">
                <div className="Project-Img"></div>
                <div className="Project-Text"></div> 
            </li>
          </ul>
      </div>
    )
  }
}

export default Project;