import React, { Component } from 'react';
import construction from './UnderCons.png'
import '../App.css';

class Project extends Component{
  constructor(){
    super(); 
  }

  render(){
    return(
      <div className="Page"> 
          <div className="IntroPage"> 
          <img src={construction} className="Construction" alt="Construction"/>
          <p className="App-intro">
            This part of the is under construction, check back in a few days for updates.
          </p>
          </div>
          
          <ul className="Project-List">
            <li className="Project-Item">
                <div className="Project-Img"><img src="https://via.placeholder.com/200x200"/></div>
                <div className="Project-Text"> </div> 
            </li>
            <li className="Project-Item">
                <div className="Project-Img"><img src="https://via.placeholder.com/200x200"/></div>
                <div className="Project-Text"> </div> 
            </li>
            <li className="Project-Item">
                <div className="Project-Img"><img src="https://via.placeholder.com/200x200"/></div>
                <div className="Project-Text"> </div> 
            </li>
          </ul>
          
          <div className="Project-text">
            If you are curious about other project I've done in the past that aren't listed here, 
            check my <strong><a href="https://devpost.com/willievuong">devpost&nbsp;</a></strong>
            and <strong><a href="https://github.com/Willievuong">github</a></strong>!
          </div>
      </div>
    )
  }
}

export default Project;