import React, { Component } from 'react';
import AboutLinux from './AboutLinux';
import AboutEssay from './AboutEssay';
import '../../App.css';

class About extends Component{
  render(){
    return(
      <div>
        <AboutLinux/>
        <AboutEssay/>
      </div>
    )
  }
}

export default About;