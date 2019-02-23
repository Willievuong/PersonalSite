import React, { Component } from 'react';
import '../../App.css';
import Typing from '../Typing'

/* Home Page */
class Home extends Component{
  render(){
    return(
      <div className="IntroPage"> 
        <div className="Intro-Type">
          <Typing strings={["Hi", "Hey", "Hello!",
                           "I'm William,", 
                           "nice to meet you ;)"
                          ]}
          />
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