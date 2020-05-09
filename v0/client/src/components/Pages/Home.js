import React, { Component } from 'react';
import '../../App.css';
import Typing from '../Typing'
import { Link } from "react-router-dom";

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
          <Link to="/resume" className="Resume-Button">
            Resume
          </Link>
        </div> 
      </div>
    )
  }
}

export default Home;