import React, { Component } from 'react';
import '../App.css';
import construction from './UnderCons.png'
import Typing from './Typing'

/* Home Page */
class Home extends Component{
  render(){
    return(
      <div class="IntroPage"> 
        {/* <img src={construction} className="Construction" alt="Construction"/>
        <p className="App-intro">
          The site is under construction, check back in a few days for updates, meanwhile, here's my resume!
        </p>
         */}
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

/*TODO: Add Typing in Functionality */
// var options = {
//   strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//   typeSpeed: 40
// }

// var type = new Typed(".element", options);

export default Home;